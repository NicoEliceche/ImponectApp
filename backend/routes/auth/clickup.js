const express = require('express');
const router = express.Router();
const { getAuthCode, exchangeCodeForToken } = require('../../services/clickupService');

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
    if (!code) throw new Error('No authorization code provided');
    
    await exchangeCodeForToken(code);
    // Redirect to frontend dashboard
    res.redirect('http://localhost:5173');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
