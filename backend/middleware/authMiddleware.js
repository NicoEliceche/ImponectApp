const jwt = require('jsonwebtoken');

const SESSION_COOKIE_NAME = 'imponect_session';
const DEFAULT_ALLOWED_EMAILS = [
  'nico.elicechediz@gmail.com',
  'diegoghione2014@gmail.com',
  'alan2018martinez@gmail.com',
];

const normalizeEmail = (value = '') => String(value).trim().toLowerCase();

const getAllowedEmails = () => {
  const rawValue = process.env.APP_AUTH_ALLOWED_EMAILS || DEFAULT_ALLOWED_EMAILS.join(',');
  return rawValue
    .split(',')
    .map(normalizeEmail)
    .filter(Boolean);
};

const isAllowedEmail = (email) => getAllowedEmails().includes(normalizeEmail(email));

const getSessionSecret = () => process.env.JWT_SECRET || 'your-secret-key';

const parseCookies = (cookieHeader = '') => {
  return String(cookieHeader)
    .split(';')
    .map(part => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const separatorIndex = part.indexOf('=');
      if (separatorIndex === -1) return cookies;

      const key = part.slice(0, separatorIndex);
      const value = part.slice(separatorIndex + 1);
      cookies[key] = decodeURIComponent(value);
      return cookies;
    }, {});
};

const getSessionTokenFromRequest = (req) => {
  const cookies = parseCookies(req.headers.cookie);
  return cookies[SESSION_COOKIE_NAME] || null;
};

const signAppSession = (user) => jwt.sign(
  {
    id: user.id,
    email: normalizeEmail(user.email),
    name: user.name || '',
    picture: user.picture || '',
  },
  getSessionSecret(),
  {
    expiresIn: process.env.APP_AUTH_SESSION_TTL || '7d',
    issuer: 'imponect-api',
    audience: 'imponect-app',
  }
);

const verifyAppSession = (token) => jwt.verify(token, getSessionSecret(), {
  issuer: 'imponect-api',
  audience: 'imponect-app',
});

const getSessionCookieOptions = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
};

const setSessionCookie = (res, token) => {
  res.cookie(SESSION_COOKIE_NAME, token, getSessionCookieOptions());
};

const clearSessionCookie = (res) => {
  res.clearCookie(SESSION_COOKIE_NAME, {
    ...getSessionCookieOptions(),
    maxAge: undefined,
  });
};

const requireAppAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  const token = getSessionTokenFromRequest(req);

  if (!token) {
    return res.status(401).json({ error: 'Sesión requerida.' });
  }

  try {
    const user = verifyAppSession(token);

    if (!isAllowedEmail(user.email)) {
      clearSessionCookie(res);
      return res.status(403).json({ error: 'La cuenta no tiene acceso a Imponect.' });
    }

    req.user = user;
    next();
  } catch {
    clearSessionCookie(res);
    return res.status(401).json({ error: 'Sesión inválida o expirada.' });
  }
};

const validateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = {
  SESSION_COOKIE_NAME,
  clearSessionCookie,
  getAllowedEmails,
  getSessionTokenFromRequest,
  isAllowedEmail,
  normalizeEmail,
  requireAppAuth,
  setSessionCookie,
  signAppSession,
  validateToken,
  verifyAppSession,
};
