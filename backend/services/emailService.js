const Imap = require('node-imap');
const { simpleParser } = require('mailparser');
const nodemailer = require('nodemailer');
const { randomUUID } = require('crypto');
const db = require('../db');

class EmailService {
  getImapConfig(config) {
    return {
      user: config.email,
      password: config.password,
      host: config.imap_host,
      port: config.imap_port,
      tls: true,
      authTimeout: 15000,
      connTimeout: 20000
    };
  }

  normalizeAttachments(attachments = []) {
    const maxTotalBytes = 15 * 1024 * 1024;
    let totalBytes = 0;

    return attachments.map((attachment) => {
      const content = String(attachment?.content || '');
      const contentBytes = Buffer.from(content, 'base64').length;
      totalBytes += contentBytes;

      if (!attachment?.filename || !content) {
        throw new Error('Each attachment must include a filename and content.');
      }

      if (totalBytes > maxTotalBytes) {
        throw new Error('Attachments cannot exceed 15 MB in total.');
      }

      return {
        filename: String(attachment.filename),
        content,
        encoding: 'base64',
        contentType: attachment.contentType || undefined
      };
    });
  }

  normalizeAddressList(value) {
    const input = String(value || '').trim();
    const addresses = input.match(/[^\s,;<>]+@[^\s,;<>]+/g);
    return addresses?.length ? addresses.join(', ') : input;
  }

  buildMailOptions(config, { to, cc, subject, text, html, attachments = [] }) {
    const normalizedTo = this.normalizeAddressList(to);
    const normalizedCc = this.normalizeAddressList(cc);
    const normalizedHtml = String(html || '');
    const normalizedText = String(text || '').trim();
    const signature = String(config.signature || '');
    const senderDomain = config.email.split('@')[1];
    const envelopeRecipients = [normalizedTo, normalizedCc]
      .filter(Boolean)
      .flatMap(addresses => addresses.split(',').map(address => address.trim()).filter(Boolean));

    return {
      from: `"${config.email.split('@')[0]}" <${config.email}>`,
      replyTo: config.email,
      to: normalizedTo || undefined,
      cc: normalizedCc || undefined,
      envelope: {
        from: config.email,
        to: envelopeRecipients
      },
      messageId: `<${randomUUID()}@${senderDomain}>`,
      date: new Date(),
      subject: String(subject || ''),
      text: `${normalizedText}${signature ? `\n\n${signature.replace(/<[^>]*>/g, '')}` : ''}`,
      html: `${normalizedHtml}${signature ? `<br/>${signature}` : ''}`,
      attachments: this.normalizeAttachments(attachments)
    };
  }

  async createRawMessage(mailOptions) {
    const transport = nodemailer.createTransport({
      streamTransport: true,
      buffer: true,
      newline: 'unix'
    });
    const result = await transport.sendMail(mailOptions);
    return result.message;
  }

  async appendMessage(config, message, mailboxes, flags = []) {
    const candidates = [...new Set(mailboxes.filter(Boolean))];

    return new Promise((resolve, reject) => {
      const imap = new Imap(this.getImapConfig(config));
      let settled = false;

      const finish = (error, result) => {
        if (settled) return;
        settled = true;
        imap.end();
        if (error) reject(error);
        else resolve(result);
      };

      imap.once('ready', () => {
        const tryAppend = (index, lastError = null) => {
          if (index >= candidates.length) {
            finish(lastError || new Error('No compatible IMAP folder was found.'));
            return;
          }

          const mailbox = candidates[index];
          imap.append(message, { mailbox, flags, date: new Date() }, (error) => {
            if (error) {
              tryAppend(index + 1, error);
              return;
            }

            finish(null, { success: true, mailbox });
          });
        };

        tryAppend(0);
      });
      imap.once('error', (error) => finish(error));
      imap.connect();
    });
  }

  stripSensitiveAccount(account) {
    if (!account) return null;
    const { password, ...safeAccount } = account;
    return safeAccount;
  }

  async getUserEmailAccounts(userId) {
    const res = await db.query(
      `SELECT id, user_id, email, imap_host, imap_port, smtp_host, smtp_port, signature, is_active, created_at
       FROM user_emails
       WHERE user_id = $1 AND is_active = true
       ORDER BY created_at ASC, id ASC`,
      [userId]
    );
    return res.rows;
  }

  async getUserEmailConfig(userId, accountId = null) {
    if (accountId) {
      const res = await db.query(
        'SELECT * FROM user_emails WHERE user_id = $1 AND id = $2 AND is_active = true LIMIT 1',
        [userId, accountId]
      );
      if (res.rows.length === 0) return null;
      return res.rows[0];
    }

    const res = await db.query(
      `SELECT * FROM user_emails
       WHERE user_id = $1 AND is_active = true
       ORDER BY created_at ASC, id ASC
       LIMIT 1`,
      [userId]
    );
    if (res.rows.length === 0) return null;
    return res.rows[0];
  }

  async getFolders(userId, accountId = null) {
    const config = await this.getUserEmailConfig(userId, accountId);
    if (!config) throw new Error('No email configuration found.');

    const imapConfig = { user: config.email, password: config.password, host: config.imap_host, port: config.imap_port, tls: true };

    return new Promise((resolve, reject) => {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
        imap.getBoxes((err, boxes) => {
          imap.end();
          if (err) return reject(err);
          
          const folderList = [];
          const processBoxes = (obj, prefix = '') => {
            for (const key in obj) {
              const fullPath = prefix + key;
              folderList.push({ 
                name: key, 
                path: fullPath, 
                attribs: obj[key].attribs || [] 
              });
              if (obj[key].children) processBoxes(obj[key].children, fullPath + obj[key].delimiter);
            }
          };
          processBoxes(boxes);
          resolve(folderList);
        });
      });
      imap.once('error', (err) => reject(err));
      imap.connect();
    });
  }

  async createFolder(userId, folderName, accountId = null) {
    const config = await this.getUserEmailConfig(userId, accountId);
    const imap = new Imap({ user: config.email, password: config.password, host: config.imap_host, port: config.imap_port, tls: true });
    return new Promise((resolve, reject) => {
      imap.once('ready', () => {
        imap.addBox(folderName, (err) => {
          imap.end();
          if (err) return reject(err);
          resolve({ success: true });
        });
      });
      imap.connect();
    });
  }

  async deleteFolder(userId, folderPath, accountId = null) {
    const config = await this.getUserEmailConfig(userId, accountId);
    const imap = new Imap({ user: config.email, password: config.password, host: config.imap_host, port: config.imap_port, tls: true });
    return new Promise((resolve, reject) => {
      imap.once('ready', () => {
        imap.delBox(folderPath, (err) => {
          imap.end();
          if (err) return reject(err);
          resolve({ success: true });
        });
      });
      imap.connect();
    });
  }

  async getInbox(userId, folder = 'INBOX', limit = 25, accountId = null) {
    const config = await this.getUserEmailConfig(userId, accountId);
    if (!config) throw new Error('No email configuration found.');

    const imapConfig = {
      user: config.email, password: config.password, host: config.imap_host, port: config.imap_port, tls: true,
      authTimeout: 15000, connTimeout: 20000
    };

    return new Promise((resolve, reject) => {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
        // Mapping folder names to common IMAP paths if they fail
        const tryOpen = (folderName) => {
          imap.openBox(folderName, true, (err, box) => {
            if (err) {
              // If standard name fails, try common variations for Hostinger/Outlook
              const variations = {
                'Sent': ['INBOX.Sent', 'Sent Messages', 'Enviados'],
                'Drafts': ['INBOX.Drafts', 'Borradores'],
                'Junk': ['INBOX.Spam', 'Spam', 'Junk E-mail', 'Correo no deseado'],
                'Trash': ['INBOX.Trash', 'Deleted Messages', 'Papelera', 'Trash']
              };

              if (variations[folderName] && variations[folderName].length > 0) {
                const next = variations[folderName].shift();
                console.log(`Folder ${folderName} not found, trying ${next}...`);
                return tryOpen(next);
              }

              imap.end();
              return reject(err);
            }

            if (box.messages.total === 0) { imap.end(); return resolve([]); }

            const f = imap.seq.fetch(`${Math.max(1, box.messages.total - limit + 1)}:*`, { bodies: '', struct: true });
            const emails = [];

            f.on('message', (msg, seqno) => {
              let rawMsg = '';
              let email = { id: seqno, flags: [] };
              msg.on('body', (stream) => { stream.on('data', (chunk) => rawMsg += chunk.toString()); });
              msg.once('attributes', (attrs) => { email.flags = attrs.flags || []; email.uid = attrs.uid; });
              msg.once('end', async () => {
                try {
                  const parsed = await simpleParser(rawMsg);
                  email.subject = parsed.subject || '(Sin Asunto)';
                  email.from = parsed.from ? parsed.from.text : 'Desconocido';
                  email.date = parsed.date || new Date();
                  email.bodyPreview = parsed.html || parsed.text || '';
                  emails.push(email);
                } catch (e) { console.error("Parser Error:", e); }
              });
            });

            f.once('error', (err) => reject(err));
            f.once('end', () => {
              imap.end();
              setTimeout(() => resolve(emails.reverse()), 500); 
            });
          });
        };

        tryOpen(folder);
      });
      imap.once('error', (err) => reject(err));
      imap.connect();
    });
  }

  async performAction(userId, { uids, action, folder, targetFolder, accountId }) {
    const config = await this.getUserEmailConfig(userId, accountId);
    const imapConfig = { user: config.email, password: config.password, host: config.imap_host, port: config.imap_port, tls: true };

    return new Promise((resolve, reject) => {
      const imap = new Imap(imapConfig);
      imap.once('ready', () => {
        imap.openBox(folder, false, (err) => {
          if (err) { imap.end(); return reject(err); }

          if (action === 'delete') {
            imap.addFlags(uids, '\\Deleted', (err) => {
              if (err) { imap.end(); return reject(err); }
              imap.expunge((err) => { imap.end(); if (err) return reject(err); resolve({ success: true }); });
            });
          } else if (action === 'move') {
            imap.move(uids, targetFolder, (err) => {
              imap.end();
              if (err) return reject(err);
              resolve({ success: true });
            });
          } else if (action === 'copy') {
            imap.copy(uids, targetFolder, (err) => {
              imap.end();
              if (err) return reject(err);
              resolve({ success: true });
            });
          } else if (action === 'markRead') {
            imap.addFlags(uids, '\\Seen', (err) => { imap.end(); if (err) return reject(err); resolve({ success: true }); });
          } else if (action === 'markUnread') {
            imap.delFlags(uids, '\\Seen', (err) => { imap.end(); if (err) return reject(err); resolve({ success: true }); });
          } else {
            imap.end();
            reject(new Error('Unknown action'));
          }
        });
      });
      imap.once('error', (err) => reject(err));
      imap.connect();
    });
  }

  async sendEmail(userId, { to, cc, subject, text, html, attachments, accountId }) {
    const config = await this.getUserEmailConfig(userId, accountId);
    if (!config) throw new Error('No email configuration found.');

    if (!String(to || '').trim()) {
      throw new Error('At least one recipient is required.');
    }

    const transporter = nodemailer.createTransport({
      host: config.smtp_host,
      port: config.smtp_port,
      secure: Number(config.smtp_port) === 465,
      auth: { user: config.email, pass: config.password }
    });
    const mailOptions = this.buildMailOptions(config, { to, cc, subject, text, html, attachments });
    const result = await transporter.sendMail(mailOptions);

    this.saveSentCopy(config, mailOptions, result.messageId).catch((error) => {
      console.warn('Email sent, but the IMAP sent copy could not be saved:', error.message);
    });

    return result;
  }

  async saveSentCopy(config, mailOptions, messageId) {
    try {
      const rawMessage = await this.createRawMessage({ ...mailOptions, messageId });
      return await this.appendMessage(
        config,
        rawMessage,
        ['Sent', 'INBOX.Sent', 'Sent Messages', 'Enviados', '[Gmail]/Sent Mail'],
        ['\\Seen']
      );
    } catch (error) {
      error.message = `Could not save sent copy: ${error.message}`;
      throw error;
    }
  }

  async saveDraft(userId, { to, cc, subject, text, html, attachments, accountId }) {
    const config = await this.getUserEmailConfig(userId, accountId);
    if (!config) throw new Error('No email configuration found.');

    const rawMessage = await this.createRawMessage(
      this.buildMailOptions(config, { to, cc, subject, text, html, attachments })
    );

    return this.appendMessage(
      config,
      rawMessage,
      ['Drafts', 'INBOX.Drafts', 'Borradores', '[Gmail]/Drafts'],
      ['\\Draft', '\\Seen']
    );
  }

  async saveConfig(userId, emailData) {
    const {
      id,
      email,
      password,
      imap_host,
      imap_port,
      smtp_host,
      smtp_port,
      signature
    } = emailData;

    const normalizedEmail = String(email || '').trim();
    const normalizedPassword = password == null ? '' : String(password);
    const normalizedConfig = {
      imap_host: String(imap_host || 'imap.hostinger.com').trim(),
      imap_port: Number.parseInt(imap_port, 10) || 993,
      smtp_host: String(smtp_host || 'smtp.hostinger.com').trim(),
      smtp_port: Number.parseInt(smtp_port, 10) || 465,
      signature: signature || ''
    };

    if (!normalizedEmail) {
      throw new Error('Email address is required.');
    }

    if (id) {
      const existing = await this.getUserEmailConfig(userId, id);
      if (!existing) throw new Error('Email account not found.');
      const nextPassword = normalizedPassword || existing.password;

      if (!nextPassword) {
        throw new Error('Application password is required.');
      }

      const updated = await db.query(
        `UPDATE user_emails
         SET email = $3,
             password = $4,
             imap_host = $5,
             imap_port = $6,
             smtp_host = $7,
             smtp_port = $8,
             signature = $9,
             is_active = true
         WHERE user_id = $1 AND id = $2
         RETURNING *`,
        [
          userId,
          id,
          normalizedEmail,
          nextPassword,
          normalizedConfig.imap_host,
          normalizedConfig.imap_port,
          normalizedConfig.smtp_host,
          normalizedConfig.smtp_port,
          normalizedConfig.signature
        ]
      );

      return { success: true, account: this.stripSensitiveAccount(updated.rows[0]) };
    }

    if (!normalizedPassword) {
      throw new Error('Application password is required.');
    }

    const saved = await db.query(
      `INSERT INTO user_emails (user_id, email, password, imap_host, imap_port, smtp_host, smtp_port, signature)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       ON CONFLICT (user_id, email)
       DO UPDATE SET password = $3, imap_host = $4, imap_port = $5, smtp_host = $6, smtp_port = $7, signature = $8, is_active = true
       RETURNING *`,
      [
        userId,
        normalizedEmail,
        normalizedPassword,
        normalizedConfig.imap_host,
        normalizedConfig.imap_port,
        normalizedConfig.smtp_host,
        normalizedConfig.smtp_port,
        normalizedConfig.signature
      ]
    );

    return { success: true, account: this.stripSensitiveAccount(saved.rows[0]) };
  }
}

module.exports = new EmailService();
