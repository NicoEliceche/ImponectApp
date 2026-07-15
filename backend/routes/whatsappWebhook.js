const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode !== 'subscribe' || !token || !challenge) {
    res.sendStatus(400);
    return;
  }

  try {
    const result = await db.query(
      `SELECT id
      FROM channel_integrations
      WHERE channel = 'whatsapp'
        AND verify_token = $1
        AND status IN ('connected', 'requires_attention')
      LIMIT 1`,
      [token],
    );

    if (!result.rows.length) {
      res.sendStatus(403);
      return;
    }

    res.status(200).send(challenge);
  } catch (error) {
    console.error('WhatsApp webhook verification error:', error);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('WhatsApp webhook event received:', JSON.stringify(req.body || {}).slice(0, 2000));
    res.sendStatus(200);
  } catch (error) {
    console.error('WhatsApp webhook event error:', error);
    res.sendStatus(500);
  }
});

module.exports = router;
