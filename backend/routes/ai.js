const express = require('express');
const router = express.Router();
const db = require('../db');
const geminiService = require('../services/geminiService');

router.get('/chat/status', (req, res) => {
  res.json(geminiService.getStatus());
});

router.post('/chat', async (req, res) => {
  try {
    const result = await geminiService.chat(req.body?.messages);
    res.json(result);
  } catch (error) {
    const isConfigurationError = error.message === 'Gemini no está configurado en el servidor.';
    res.status(isConfigurationError ? 503 : 500).json({ error: error.message });
  }
});

// Get all agents for user 1
router.get('/agents', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM ai_agents WHERE user_id = 1 ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Create new agent
router.post('/agents', async (req, res) => {
  const { name, description, type, external_url, config, icon_url } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO ai_agents (user_id, name, description, type, external_url, config, icon_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [1, name, description, type || 'external', external_url, config || {}, icon_url]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Update agent
router.put('/agents/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, type, external_url, config, icon_url } = req.body;
  try {
    const result = await db.query(
      'UPDATE ai_agents SET name=$1, description=$2, type=$3, external_url=$4, config=$5, icon_url=$6 WHERE id=$7 AND user_id=1 RETURNING *',
      [name, description, type, external_url, config, icon_url, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Delete agent
router.delete('/agents/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM ai_agents WHERE id=$1 AND user_id=1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
