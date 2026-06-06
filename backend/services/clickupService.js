const axios = require('axios');
const db = require('../db');

const getAuthCode = async () => {
  const clientId = process.env.CLICKUP_CLIENT_ID;
  const redirectUri = process.env.CLICKUP_REDIRECT_URI;
  const authUrl = `https://app.clickup.com/api?client_id=${clientId}&redirect_uri=${redirectUri}`;
  return authUrl;
};

const exchangeCodeForToken = async (code) => {
  const clientId = process.env.CLICKUP_CLIENT_ID;
  const clientSecret = process.env.CLICKUP_CLIENT_SECRET;

  try {
    const response = await axios.post('https://api.clickup.com/api/v2/oauth/token', null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        code
      }
    });

    const { access_token } = response.data;

    if (!access_token) {
      console.error('ClickUp Token Exchange Response:', response.data);
      throw new Error('No access_token returned from ClickUp');
    }

    // Hardcoded user_id=1 for now
    await db.query(
      `INSERT INTO user_integrations (user_id, service_name, access_token)
       VALUES ($1, $2, $3)
       ON CONFLICT (user_id, service_name) 
       DO UPDATE SET access_token = $3, updated_at = CURRENT_TIMESTAMP`,
      [1, 'clickup', access_token]
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('ClickUp Token Exchange Error:', error.response.data);
      throw new Error(`ClickUp Error: ${JSON.stringify(error.response.data)}`);
    }
    throw error;
  }
};

module.exports = { getAuthCode, exchangeCodeForToken };
