const express = require('express');
const router = express.Router();
const emailService = require('../services/emailService');

const parseAccountId = (value) => {
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : null;
};

const getRequestAccountId = (req) => parseAccountId(req.query.accountId || req.body?.accountId);

// 1. Get emails from folder
router.get('/inbox/:folder?', async (req, res) => {
  try {
    const folder = req.params.folder || 'INBOX';
    const emails = await emailService.getInbox(1, folder, 25, getRequestAccountId(req));
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Get real folders from IMAP
router.get('/folders', async (req, res) => {
  try {
    const folders = await emailService.getFolders(1, getRequestAccountId(req));
    res.json(folders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Create folder on IMAP
router.post('/folders', async (req, res) => {
  try {
    const result = await emailService.createFolder(1, req.body.name, getRequestAccountId(req));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Delete folder from IMAP
router.delete('/folders', async (req, res) => {
  try {
    const result = await emailService.deleteFolder(1, req.body.path, getRequestAccountId(req));
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Send email
router.post('/send', async (req, res) => {
  try {
    const result = await emailService.sendEmail(1, { ...req.body, accountId: getRequestAccountId(req) });
    res.json({ success: true, messageId: result.messageId, sentCopyQueued: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/draft', async (req, res) => {
  try {
    const result = await emailService.saveDraft(1, { ...req.body, accountId: getRequestAccountId(req) });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. Email Actions
router.post('/action', async (req, res) => {
  try {
    const result = await emailService.performAction(1, { ...req.body, accountId: getRequestAccountId(req) });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7. Config and accounts
router.get('/accounts', async (req, res) => {
  try {
    const accounts = await emailService.getUserEmailAccounts(1);
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/config', async (req, res) => {
  try {
    const result = await emailService.saveConfig(1, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/config', async (req, res) => {
  try {
    const config = await emailService.getUserEmailConfig(1, getRequestAccountId(req));
    res.json(config ? { ...emailService.stripSensitiveAccount(config), password: '', has_password: !!config.password } : null);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
