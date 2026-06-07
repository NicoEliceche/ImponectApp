const axios = require('axios');
const { getValidToken } = require('./microsoftService');

const search = async (userId, query) => {
  const accessToken = await getValidToken(userId, 'onedrive');
  if (!accessToken) throw new Error('OneDrive no está conectado.');

  const rootResponse = await axios.get(
    "https://graph.microsoft.com/v1.0/me/drive/root/children?$filter=name eq 'IMPONECT'",
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  const rootFolder = rootResponse.data.value[0];
  if (!rootFolder) return [];

  const escapedQuery = String(query || '').replace(/'/g, "''");
  const searchResponse = await axios.get(
    `https://graph.microsoft.com/v1.0/me/drive/items/${rootFolder.id}/search(q='${escapedQuery}')`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  return searchResponse.data.value.slice(0, 8);
};

module.exports = { search };
