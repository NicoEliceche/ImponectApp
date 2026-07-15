const crypto = require('crypto');
const express = require('express');
const db = require('../db');

const router = express.Router();

const USER_ID = 1;
const WHATSAPP_CHANNEL = 'whatsapp';
const GRAPH_API_VERSION = process.env.META_GRAPH_API_VERSION || 'v23.0';
const CREDENTIAL_PLACEHOLDER_RE = /^[•*\s]+(?:[a-z0-9_-]{0,8})?$/i;

const getEncryptionKey = () => crypto
  .createHash('sha256')
  .update(
    process.env.INTEGRATION_ENCRYPTION_KEY
    || process.env.JWT_SECRET
    || process.env.SESSION_SECRET
    || 'imponect-local-dev-integration-key',
  )
  .digest();

const encryptSecret = (value) => {
  const cleanValue = String(value || '').trim();
  if (!cleanValue) return null;

  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv('aes-256-gcm', getEncryptionKey(), iv);
  const encrypted = Buffer.concat([cipher.update(cleanValue, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return [
    'gcm',
    iv.toString('base64'),
    authTag.toString('base64'),
    encrypted.toString('base64'),
  ].join(':');
};

const decryptSecret = (value) => {
  if (!value) return '';

  try {
    const [scheme, iv, authTag, encrypted] = String(value).split(':');
    if (scheme !== 'gcm' || !iv || !authTag || !encrypted) return '';

    const decipher = crypto.createDecipheriv('aes-256-gcm', getEncryptionKey(), Buffer.from(iv, 'base64'));
    decipher.setAuthTag(Buffer.from(authTag, 'base64'));

    return Buffer.concat([
      decipher.update(Buffer.from(encrypted, 'base64')),
      decipher.final(),
    ]).toString('utf8');
  } catch (error) {
    console.error('CRM integration decrypt error:', error.message);
    return '';
  }
};

const maskSecret = (value) => {
  const cleanValue = String(value || '').trim();
  if (!cleanValue) return '';
  return `••••••••••••${cleanValue.slice(-4)}`;
};

const shouldUpdateSecret = (value) => {
  const cleanValue = String(value || '').trim();
  return cleanValue && !CREDENTIAL_PLACEHOLDER_RE.test(cleanValue);
};

const buildWebhookUrl = (req) => {
  const baseUrl = String(process.env.PUBLIC_API_URL || process.env.API_PUBLIC_URL || '').replace(/\/+$/, '');
  if (baseUrl) return `${baseUrl}/api/webhooks/whatsapp`;
  return `${req.protocol}://${req.get('host')}/api/webhooks/whatsapp`;
};

const getWhatsAppIntegration = async () => {
  const result = await db.query(
    'SELECT * FROM channel_integrations WHERE user_id = $1 AND channel = $2 LIMIT 1',
    [USER_ID, WHATSAPP_CHANNEL],
  );

  return result.rows[0] || null;
};

const serializeWhatsAppIntegration = (integration, req) => {
  if (!integration) {
    return {
      channel: WHATSAPP_CHANNEL,
      status: 'needs_setup',
      phone_number: '',
      phone_number_id: '',
      business_account_id: '',
      verify_token: '',
      webhook_url: buildWebhookUrl(req),
      has_access_token: false,
      has_app_secret: false,
      access_token_masked: '',
      app_secret_masked: '',
      last_verified_at: null,
      metadata: {},
    };
  }

  const accessToken = decryptSecret(integration.access_token_encrypted);
  const appSecret = decryptSecret(integration.app_secret_encrypted);

  return {
    id: integration.id,
    channel: integration.channel,
    status: integration.status || 'needs_setup',
    phone_number: integration.phone_number || '',
    phone_number_id: integration.phone_number_id || '',
    business_account_id: integration.business_account_id || '',
    verify_token: integration.verify_token || '',
    webhook_url: buildWebhookUrl(req),
    has_access_token: Boolean(accessToken),
    has_app_secret: Boolean(appSecret),
    access_token_masked: maskSecret(accessToken),
    app_secret_masked: maskSecret(appSecret),
    last_verified_at: integration.last_verified_at || null,
    metadata: integration.metadata || {},
    created_at: integration.created_at,
    updated_at: integration.updated_at,
  };
};

const normalizeManualPayload = (body, currentIntegration) => {
  const phoneNumberId = String(body?.phone_number_id || '').trim();
  const businessAccountId = String(body?.business_account_id || '').trim();
  const phoneNumber = String(body?.phone_number || '').trim();
  const verifyToken = String(body?.verify_token || '').trim();
  const accessToken = String(body?.access_token || '').trim();
  const appSecret = String(body?.app_secret || '').trim();

  if (!phoneNumberId) throw new Error('El Phone Number ID es obligatorio.');
  if (!businessAccountId) throw new Error('El WhatsApp Business Account ID es obligatorio.');
  if (!verifyToken) throw new Error('El Verify Token es obligatorio.');
  if (!currentIntegration?.access_token_encrypted && !shouldUpdateSecret(accessToken)) {
    throw new Error('El Access Token es obligatorio para conectar WhatsApp.');
  }

  return {
    phoneNumberId,
    businessAccountId,
    phoneNumber,
    verifyToken,
    accessTokenEncrypted: shouldUpdateSecret(accessToken)
      ? encryptSecret(accessToken)
      : currentIntegration?.access_token_encrypted || null,
    appSecretEncrypted: shouldUpdateSecret(appSecret)
      ? encryptSecret(appSecret)
      : currentIntegration?.app_secret_encrypted || null,
  };
};

router.get('/integrations/whatsapp/status', async (req, res) => {
  try {
    const integration = await getWhatsAppIntegration();
    res.json(serializeWhatsAppIntegration(integration, req));
  } catch (error) {
    console.error('WhatsApp integration status error:', error);
    res.status(500).json({ error: 'No se pudo consultar la integración de WhatsApp.' });
  }
});

router.post('/integrations/whatsapp/manual', async (req, res) => {
  try {
    const currentIntegration = await getWhatsAppIntegration();
    const payload = normalizeManualPayload(req.body, currentIntegration);
    const metadata = {
      ...(currentIntegration?.metadata || {}),
      manual_setup_at: new Date().toISOString(),
    };

    const result = await db.query(
      `INSERT INTO channel_integrations (
        user_id,
        channel,
        status,
        phone_number,
        phone_number_id,
        business_account_id,
        access_token_encrypted,
        app_secret_encrypted,
        verify_token,
        metadata,
        updated_at
      )
      VALUES ($1, $2, 'connected', $3, $4, $5, $6, $7, $8, $9, CURRENT_TIMESTAMP)
      ON CONFLICT (user_id, channel)
      DO UPDATE SET
        status = 'connected',
        phone_number = EXCLUDED.phone_number,
        phone_number_id = EXCLUDED.phone_number_id,
        business_account_id = EXCLUDED.business_account_id,
        access_token_encrypted = EXCLUDED.access_token_encrypted,
        app_secret_encrypted = EXCLUDED.app_secret_encrypted,
        verify_token = EXCLUDED.verify_token,
        metadata = EXCLUDED.metadata,
        updated_at = CURRENT_TIMESTAMP
      RETURNING *`,
      [
        USER_ID,
        WHATSAPP_CHANNEL,
        payload.phoneNumber,
        payload.phoneNumberId,
        payload.businessAccountId,
        payload.accessTokenEncrypted,
        payload.appSecretEncrypted,
        payload.verifyToken,
        metadata,
      ],
    );

    res.json(serializeWhatsAppIntegration(result.rows[0], req));
  } catch (error) {
    const isValidationError = !String(error.message || '').includes('Database');
    console.error('WhatsApp manual config error:', error);
    res.status(isValidationError ? 400 : 500).json({ error: error.message || 'No se pudo guardar la configuración.' });
  }
});

router.post('/integrations/whatsapp/test', async (req, res) => {
  try {
    const integration = await getWhatsAppIntegration();
    if (!integration) {
      res.status(404).json({ error: 'WhatsApp no está configurado.' });
      return;
    }

    const accessToken = decryptSecret(integration.access_token_encrypted);
    if (!integration.phone_number_id || !accessToken) {
      res.status(400).json({ error: 'Falta Phone Number ID o Access Token para probar la conexión.' });
      return;
    }

    const graphUrl = `https://graph.facebook.com/${GRAPH_API_VERSION}/${encodeURIComponent(integration.phone_number_id)}?fields=display_phone_number,verified_name,quality_rating`;
    const response = await fetch(graphUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = payload?.error?.message || 'Meta rechazó la prueba de conexión.';
      await db.query(
        `UPDATE channel_integrations
        SET status = 'requires_attention',
            metadata = COALESCE(metadata, '{}'::jsonb) || $1::jsonb,
            updated_at = CURRENT_TIMESTAMP
        WHERE user_id = $2 AND channel = $3`,
        [JSON.stringify({ last_test_error: message, last_test_at: new Date().toISOString() }), USER_ID, WHATSAPP_CHANNEL],
      );

      res.status(400).json({ error: message });
      return;
    }

    const result = await db.query(
      `UPDATE channel_integrations
      SET status = 'connected',
          phone_number = COALESCE($1, phone_number),
          metadata = COALESCE(metadata, '{}'::jsonb) || $2::jsonb,
          last_verified_at = CURRENT_TIMESTAMP,
          updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $3 AND channel = $4
      RETURNING *`,
      [
        payload.display_phone_number || integration.phone_number || null,
        JSON.stringify({
          verified_name: payload.verified_name || null,
          quality_rating: payload.quality_rating || null,
          last_test_at: new Date().toISOString(),
          last_test_error: null,
        }),
        USER_ID,
        WHATSAPP_CHANNEL,
      ],
    );

    res.json({
      integration: serializeWhatsAppIntegration(result.rows[0], req),
      meta: payload,
    });
  } catch (error) {
    console.error('WhatsApp test connection error:', error);
    res.status(500).json({ error: 'No se pudo probar la conexión con WhatsApp.' });
  }
});

router.post('/integrations/whatsapp/disconnect', async (req, res) => {
  try {
    const result = await db.query(
      `UPDATE channel_integrations
      SET status = 'disconnected',
          access_token_encrypted = NULL,
          app_secret_encrypted = NULL,
          metadata = COALESCE(metadata, '{}'::jsonb) || $1::jsonb,
          updated_at = CURRENT_TIMESTAMP
      WHERE user_id = $2 AND channel = $3
      RETURNING *`,
      [JSON.stringify({ disconnected_at: new Date().toISOString() }), USER_ID, WHATSAPP_CHANNEL],
    );

    res.json(serializeWhatsAppIntegration(result.rows[0] || null, req));
  } catch (error) {
    console.error('WhatsApp disconnect error:', error);
    res.status(500).json({ error: 'No se pudo desconectar WhatsApp.' });
  }
});

module.exports = router;
