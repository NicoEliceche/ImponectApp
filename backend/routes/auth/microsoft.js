const express = require('express');
const router = express.Router();
const { getAuthCode, exchangeCodeForToken, getValidToken } = require('../../services/microsoftService');

router.get('/auth', async (req, res) => {
  try {
    const authUrl = await getAuthCode();
    res.redirect(authUrl);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/callback', async (req, res) => {
  try {
    const { code } = req.query;
    await exchangeCodeForToken(code);
    res.redirect(process.env.FRONTEND_URL || 'http://localhost:5173');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/status', async (req, res) => {
  try {
    const token = await getValidToken(1, 'onedrive');
    res.json({ connected: !!token });
  } catch (error) {
    res.json({ connected: false });
  }
});

module.exports = router;
