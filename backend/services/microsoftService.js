const axios = require('axios');
const db = require('../db');

const getAuthCode = async () => {
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const redirectUri = encodeURIComponent(process.env.MICROSOFT_REDIRECT_URI);
  const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=Files.ReadWrite offline_access`;
  return authUrl;
};

const exchangeCodeForToken = async (code) => {
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;
  const redirectUri = process.env.MICROSOFT_REDIRECT_URI;

  try {
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUri);
    params.append('scope', 'Files.ReadWrite offline_access');

    const response = await axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, refresh_token, expires_in } = response.data;
    const expiresAt = new Date(Date.now() + expires_in * 1000);

    // Hardcoded user_id=1 for now (assuming first user)
    await db.query(
      `INSERT INTO user_integrations (user_id, service_name, access_token, refresh_token, expires_at)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (user_id, service_name) 
       DO UPDATE SET access_token = $3, refresh_token = $4, expires_at = $5, updated_at = CURRENT_TIMESTAMP`,
      [1, 'onedrive', access_token, refresh_token, expiresAt]
    );

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Microsoft Token Exchange Error:', error.response.data);
      throw new Error(`Microsoft Error: ${JSON.stringify(error.response.data)}`);
    }
    throw error;
  }
};

const refreshToken = async (userId, serviceName) => {
  const clientId = process.env.MICROSOFT_CLIENT_ID;
  const clientSecret = process.env.MICROSOFT_CLIENT_SECRET;

  const result = await db.query(
    'SELECT refresh_token FROM user_integrations WHERE user_id = $1 AND service_name = $2',
    [userId, serviceName]
  );

  if (result.rows.length === 0 || !result.rows[0].refresh_token) {
    throw new Error('No refresh token available');
  }

  const storedRefreshToken = result.rows[0].refresh_token;

  try {
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', storedRefreshToken);
    params.append('scope', 'Files.ReadWrite offline_access');

    const response = await axios.post('https://login.microsoftonline.com/common/oauth2/v2.0/token', params, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const { access_token, refresh_token: new_refresh_token, expires_in } = response.data;
    const expiresAt = new Date(Date.now() + expires_in * 1000);

    await db.query(
      `UPDATE user_integrations 
       SET access_token = $3, refresh_token = COALESCE($4, refresh_token), expires_at = $5, updated_at = CURRENT_TIMESTAMP
       WHERE user_id = $1 AND service_name = $2`,
      [userId, serviceName, access_token, new_refresh_token, expiresAt]
    );

    return access_token;
  } catch (error) {
    console.error('Microsoft Token Refresh Error:', error.response?.data || error.message);
    throw new Error('Failed to refresh Microsoft token');
  }
};

const getValidToken = async (userId, serviceName) => {
  const result = await db.query(
    'SELECT access_token, refresh_token, expires_at FROM user_integrations WHERE user_id = $1 AND service_name = $2',
    [userId, serviceName]
  );

  if (result.rows.length === 0) {
    return null;
  }

  const { access_token, expires_at } = result.rows[0];

  // Check if expired (with 5 min buffer)
  if (new Date(expires_at).getTime() - 300000 < Date.now()) {
    console.log(`Token for ${serviceName} expired or expiring soon, refreshing...`);
    return await refreshToken(userId, serviceName);
  }

  return access_token;
};

module.exports = { getAuthCode, exchangeCodeForToken, refreshToken, getValidToken };
