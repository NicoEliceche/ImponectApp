const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const db = require('../../db');
const {
  clearSessionCookie,
  getSessionTokenFromRequest,
  isAllowedEmail,
  normalizeEmail,
  setSessionCookie,
  signAppSession,
  verifyAppSession,
} = require('../../middleware/authMiddleware');

const router = express.Router();
const googleClient = new OAuth2Client();
let authColumnsReady = false;

const getGoogleClientId = () => process.env.GOOGLE_CLIENT_ID || '';

const ensureUserAuthColumns = async () => {
  if (authColumnsReady) return;

  await db.query(`
    ALTER TABLE users ADD COLUMN IF NOT EXISTS google_sub TEXT;
    ALTER TABLE users ADD COLUMN IF NOT EXISTS picture TEXT;
    ALTER TABLE users ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMP;
  `);

  authColumnsReady = true;
};

const toPublicUser = (user) => ({
  id: user.id,
  email: normalizeEmail(user.email),
  name: user.name || normalizeEmail(user.email),
  picture: user.picture || '',
});

const upsertGoogleUser = async (payload) => {
  await ensureUserAuthColumns();

  const email = normalizeEmail(payload.email);
  const name = payload.name || email;
  const picture = payload.picture || '';
  const googleSub = payload.sub || null;

  const result = await db.query(
    `INSERT INTO users (email, name, google_sub, picture, last_login_at)
     VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP)
     ON CONFLICT (email)
     DO UPDATE SET
       name = EXCLUDED.name,
       google_sub = EXCLUDED.google_sub,
       picture = EXCLUDED.picture,
       last_login_at = CURRENT_TIMESTAMP
     RETURNING id, email, name, picture`,
    [email, name, googleSub, picture]
  );

  return result.rows[0];
};

router.get('/config', (req, res) => {
  const clientId = getGoogleClientId();

  if (!clientId) {
    return res.status(503).json({
      error: 'Google OAuth no está configurado en el servidor.',
      missing: ['GOOGLE_CLIENT_ID'],
    });
  }

  res.json({ clientId });
});

router.post('/login', async (req, res) => {
  try {
    const clientId = getGoogleClientId();
    const { credential } = req.body || {};

    if (!clientId) {
      return res.status(503).json({ error: 'Google OAuth no está configurado en el servidor.' });
    }

    if (!credential) {
      return res.status(400).json({ error: 'No se recibió la credencial de Google.' });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: clientId,
    });
    const payload = ticket.getPayload();
    const email = normalizeEmail(payload?.email);

    if (!payload || !email || payload.email_verified !== true) {
      clearSessionCookie(res);
      return res.status(403).json({
        code: 'EMAIL_NOT_VERIFIED',
        error: 'La cuenta de Google no tiene email verificado.',
      });
    }

    if (!isAllowedEmail(email)) {
      clearSessionCookie(res);
      return res.status(403).json({
        code: 'ACCOUNT_NOT_ALLOWED',
        email,
        error: 'Esta cuenta no tiene acceso a Imponect.',
      });
    }

    const user = await upsertGoogleUser(payload);
    const token = signAppSession(user);
    setSessionCookie(res, token);

    res.json({ user: toPublicUser(user) });
  } catch (error) {
    console.error('Google auth error:', error);
    clearSessionCookie(res);
    res.status(401).json({ error: 'No se pudo validar la sesión de Google.' });
  }
});

router.get('/session', async (req, res) => {
  try {
    const token = getSessionTokenFromRequest(req);

    if (!token) {
      return res.status(401).json({ error: 'Sesión requerida.' });
    }

    const sessionUser = verifyAppSession(token);
    const email = normalizeEmail(sessionUser.email);

    if (!isAllowedEmail(email)) {
      clearSessionCookie(res);
      return res.status(403).json({
        code: 'ACCOUNT_NOT_ALLOWED',
        email,
        error: 'Esta cuenta no tiene acceso a Imponect.',
      });
    }

    res.json({ user: toPublicUser(sessionUser) });
  } catch {
    clearSessionCookie(res);
    res.status(401).json({ error: 'Sesión inválida o expirada.' });
  }
});

router.post('/logout', (req, res) => {
  clearSessionCookie(res);
  res.json({ ok: true });
});

module.exports = router;
