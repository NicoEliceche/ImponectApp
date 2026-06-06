const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../db');

router.get('/tasks', async (req, res) => {
  try {
    // 1. Get token from DB
    const result = await db.query(
      'SELECT access_token FROM user_integrations WHERE user_id = $1 AND service_name = $2',
      [1, 'clickup']
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'No ClickUp token found. Please authenticate.' });
    }

    const { access_token } = result.rows[0];

    // 2. Call ClickUp API
    const teamsResponse = await axios.get('https://api.clickup.com/api/v2/team', {
      headers: { Authorization: access_token }
    });

    const teams = teamsResponse.data.teams;
    if (!teams || teams.length === 0) {
      return res.json([]);
    }

    const teamId = teams[0].id;
    const tasksResponse = await axios.get(`https://api.clickup.com/api/v2/team/${teamId}/task`, {
      headers: { Authorization: access_token }
    });

    res.json(tasksResponse.data.tasks);
  } catch (error) {
    console.error('Error fetching ClickUp tasks:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch ClickUp tasks' });
  }
});

module.exports = router;
