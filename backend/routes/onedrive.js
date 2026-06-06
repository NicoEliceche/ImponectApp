const express = require('express');
const router = express.Router();
const axios = require('axios');
const { getValidToken } = require('../services/microsoftService');

// 0. Global Search
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.json([]);
    
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found.' });

    // Find IMPONECT root folder first
    const rootSearch = await axios.get("https://graph.microsoft.com/v1.0/me/drive/root/children?$filter=name eq 'IMPONECT'", {
      headers: { Authorization: `Bearer ${access_token}` }
    });
    
    if (rootSearch.data.value.length === 0) return res.json([]);
    const imponectId = rootSearch.data.value[0].id;

    // Search within IMPONECT folder
    const searchResponse = await axios.get(`https://graph.microsoft.com/v1.0/me/drive/items/${imponectId}/search(q='${q}')`, {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    res.json(searchResponse.data.value);
  } catch (error) {
    console.error('Search error:', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

// 1. Get children of a specific folder or IMPONECT root
router.get('/files/:folderId?', async (req, res) => {
  try {
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found. Please authenticate.' });

    let folderId = req.params.folderId;

    if (!folderId || folderId === 'null') {
      const searchResponse = await axios.get("https://graph.microsoft.com/v1.0/me/drive/root/children?$filter=name eq 'IMPONECT'", {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      if (searchResponse.data.value.length === 0) return res.json([]);       
      folderId = searchResponse.data.value[0].id;
    }

    const filesResponse = await axios.get(`https://graph.microsoft.com/v1.0/me/drive/items/${folderId}/children?$orderby=lastModifiedDateTime desc`, {    
      headers: { Authorization: `Bearer ${access_token}` }
    });

    res.json(filesResponse.data.value);
  } catch (error) {
    console.error('Fetch error:', error.response?.data || error.message);    
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

// 2. Create Folder
router.post('/folder', async (req, res) => {
  try {
    const { parentId, name } = req.body;
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found.' });

    let targetId = parentId;
    if (!targetId) {
      const search = await axios.get("https://graph.microsoft.com/v1.0/me/drive/root/children?$filter=name eq 'IMPONECT'", {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      targetId = search.data.value[0].id;
    }

    const response = await axios.post(`https://graph.microsoft.com/v1.0/me/drive/items/${targetId}/children`, {
      name,
      folder: {},
      "@microsoft.graph.conflictBehavior": "rename"
    }, {
      headers: { Authorization: `Bearer ${access_token}` }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Delete Item
router.delete('/item/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found.' });

    await axios.delete(`https://graph.microsoft.com/v1.0/me/drive/items/${itemId}`, {
      headers: { Authorization: `Bearer ${access_token}` }
    });
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Rename Item
router.patch('/item/:itemId', async (req, res) => {
  try {
    const { itemId } = req.params;
    const { name } = req.body;
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found.' });

    const response = await axios.patch(`https://graph.microsoft.com/v1.0/me/drive/items/${itemId}`, { name }, {
      headers: { Authorization: `Bearer ${access_token}` }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Create File (Word/Excel)
router.post('/file', async (req, res) => {
  try {
    const { parentId, name, type } = req.body;
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found.' });

    let targetId = parentId;
    if (!targetId || targetId === 'null') {
      const search = await axios.get("https://graph.microsoft.com/v1.0/me/drive/root/children?$filter=name eq 'IMPONECT'", {
        headers: { Authorization: `Bearer ${access_token}` }
      });
      targetId = search.data.value[0].id;
    }

    // Robust templates for empty files (Basic valid OOXML structures)
    const templates = {
      word: 'UEsDBBQAAAAIAAAAIQCcZ97XSAEAAJ0CAAATAAAYW0NvbnRlbnRfVHlwZXNdLnhtbKSWO0/DMBBGd0r8h8hIlS6shFCHpY6pA6V8AAsTbyK1fSXLh6T8e86DQKXClmByfH3O99G57K72Xj0EMUanCxYvVRTQ8VobtS7YV/MeXajIC1Zp7Vkha4Ready/mNfL8BgR6L6vSIdIL0DYln6xRHkF8yTvaR46F8fGxT490OuBiIWCzWfUawCN43XypSFl7pcU5cG4Y1sQ4+Hr8X5/u8bClmxvUNFbc/6/Q6b7x3p0vg8D0fWx7ee/lz5pBtYn0EYp5bvMy1/YcakgnEugaFLKV5bnv3LnSkFYlkAppZSvLMx/5c6VgnAugVJKKV85zX/lzpXqUEsDBBQAAAAIAAAAIQCpYmS8vQAAAL8BAAALAAAAd29yZC9fcmVscy8ucmVscy54bWyMks1Kw0AQRu99ipB7m+0fSQ96I9mDfFmkiBeRept9STb/zGyGfPdud6mgtTdvc87MObNnshqXrtAKvGezFeYTFQXkequNWiv+ob6HFyryJKu19qyQv0BkdrZa6nV79Bw42YOKfIr0icSy9JMlymv5IEVP960XmS2m9il+3x+oXqjRfG56KCD9fE2xNKR8vF3I4mTsMS6I6fXl6X7/Es1iS3YHqr9rvf/0yGx/X54v9mEkuj0en/8df37RAs4nUEsDBBQAAAAIAAAAIQBsTfT/vAAAANcBAAALAAAAd29yZC9kb2N1bWVudC54bWyMks1Kw0AQRu99ipB7m+0fSQ96I9mDfFmkiBeRept9STb/zGyGfPdud6mgtTdvc87MObNnshqXrtAKvGezFeYTFQXkequNWiv+ob6HFyryJKu19qyQv0BkdrZa6nV79Bw42YOKfIr0icSy9JMlymv5IEVP960XmS2m9il+3x+oXqjRfG56KCD9fE2xNKR8vF3I4mTsMS6I6fXl6X7/Es1iS3YHqr9rvf/0yGx/X54v9mEkuj0en/8df37RAs4nUEsDBBQAAAAIAAAAIQB9I6FezAAAALUBAAALAAAAX3JlbHMvLnJlbHN4bWyMks1Kw0AQRu99ipB7m+0fSQ96I9mDfFmkiBeRept9STb/zGyGfPdud6mgtTdvc87MObNnshqXrtAKvGezFeYTFQXkequNWiv+ob6HFyryJKu19qyQv0BkdrZa6nV79Bw42YOKfIr0icSy9JMlymv5IEVP960XmS2m9il+3x+oXqjRfG56KCD9fE2xNKR8vF3I4mTsMS6I6fXl6X7/Es1iS3YHqr9rvf/0yGx/X54v9mEkuj0en/8df37RAs4nUEsBAhQAFAAAAAgAAAAhAJxn3tdIAQAAnQIAABMAAAAAAAAAAAAAAAAAAAAAAFtDb9udGVudF9UeXBlc10ueG1sUEsBAhQAFAAAAAgAAAAhAKliZLy9AAAAvwEAAAsAAAAAAAAAAAAAAAAAuwEAAHdvcmQvX3JlbHMvLnJlbHMueG1sUEsBAhQAFAAAAAgAAAAhAGxN9P+8AAAA1wEAAAsAAAAAAAAAAAAAAAAA7wIAAHdvcmQvZG9jdW1lbnQueG1sUEsBAhQAFAAAAAgAAAAhAH0joV7MAAAAtQEAAAsAAAAAAAAAAAAAAAAAEwQAAF9yZWxzLy5yZWxzeG1sUEsFBgAAAAAEAAQA+AAAADsFAAAAAA==',
      excel: 'UEsDBBQAAAAIAAAAIQCcZ97XSAEAAJ0CAAATAAAYW0NvbnRlbnRfVHlwZXNdLnhtbKSWO0/DMBBGd0r8h8hIlS6shFCHpY6pA6V8AAsTbyK1fSXLh6T8e86DQKXClmByfH3O99G57K72Xj0EMUanCxYvVRTQ8VobtS7YV/MeXajIC1Zp7Vkha4Ready/mNfL8BgR6L6vSIdIL0DYln6xRHkF8yTvaR46F8fGxT490OuBiIWCzWfUawCN43XypSFl7pcU5cG4Y1sQ4+Hr8X5/u8bClmxvUNFbc/6/Q6b7x3p0vg8D0fWx7ee/lz5pBtYn0EYp5bvMy1/YcakgnEugaFLKV5bnv3LnSkFYlkAppZSvLMx/5c6VgnAugVJKKV85zX/lzpXqUEsDBBQAAAAIAAAAIQCpYmS8vQAAAL8BAAALAAAAeGwvX3JlbHMvLnJlbHMueG1sUEsHCKliZLy9AAAAvwEAAAsAAAAAAAAAAAAAAAAALQEAAHhsL19yZWxzLy5yZWxzLnhtbFBLAwQUAAAACAAAACEAbE30/7wAAADXAQALAAAAeGwvd29ya2Jvb2sueG1sUEsHCGxN9P+8AAAA1wEACwAAAAAAAAAAAAAAAACOAgAAeGwvd29ya2Jvb2sueG1sUEsDBBQAAAAIAAAAIQB9I6FezAAAALUBAAALAAAAX3JlbHMvLnJlbHN4bWyMks1Kw0AQRu99ipB7m+0fSQ96I9mDfFmkiBeRept9STb/zGyGfPdud6mgtTdvc87MObNnshqXrtAKvGezFeYTFQXkequNWiv+ob6HFyryJKu19qyQv0BkdrZa6nV79Bw42YOKfIr0icSy9JMlymv5IEVP960XmS2m9il+3x+oXqjRfG56KCD9fE2xNKR8vF3I4mTsMS6I6fXl6X7/Es1iS3YHqr9rvf/0yGx/X54v9mEkuj0en/8df37RAs4nUEsBAhQAFAAAAAgAAAAhAJxn3tdIAQAAnQIAABMAAAAAAAAAAAAAAAAAAAAAAFtDb9udGVudF9UeXBlc10ueG1sUEsBAhQAFAAAAAgAAAAhAKliZLy9AAAAvwEAAAsAAAAAAAAAAAAAAAAAuwEAAHhsL19yZWxzLy5yZWxzLnhtbUEsBAhQAFAAAAAgAAAAhAGxN9P+8AAAA1wEACwAAAAAAAAAAAAAAAAA7AgAAeGwvd29ya2Jvb2sueG1sUEsBAhQAFAAAAAgAAAAhAH0joV7MAAAAtQEAAAsAAAAAAAAAAAAAAAAA/wMAAF9yZWxzLy5yZWxzeG1sUEsFBgAAAAAEAAQA+AAAACYFAAAAAA==',
      text: ''
    };

    const content = Buffer.from(templates[type] || '', type === 'text' ? 'utf8' : 'base64');
    const fileName = type === 'word' ? `${name}.docx` : type === 'excel' ? `${name}.xlsx` : `${name}.txt`;      

    const getContentType = (type) => {
      if (type === 'word') return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      if (type === 'excel') return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      return 'text/plain';
    };

    const response = await axios.put(`https://graph.microsoft.com/v1.0/me/drive/items/${targetId}:/${fileName}:/content`, content, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': getContentType(type)
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('File creation error:', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

// 6. Move Item
router.patch('/item/:itemId/move', async (req, res) => {
  try {
    const { itemId } = req.params;
    const { parentId, name } = req.body;
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found.' });

    const body = { parentReference: { id: parentId } };
    if (name) body.name = name;

    const response = await axios.patch(`https://graph.microsoft.com/v1.0/me/drive/items/${itemId}`, body, {
      headers: { Authorization: `Bearer ${access_token}` }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Move error:', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

// 7. Copy Item
router.post('/item/:itemId/copy', async (req, res) => {
  try {
    const { itemId } = req.params;
    const { parentId, name } = req.body;
    const access_token = await getValidToken(1, 'onedrive');
    if (!access_token) return res.status(401).json({ error: 'No OneDrive token found.' });

    const body = { parentReference: { id: parentId } };
    if (name) body.name = name;

    const response = await axios.post(`https://graph.microsoft.com/v1.0/me/drive/items/${itemId}/copy`, body, {
      headers: { Authorization: `Bearer ${access_token}` }
    });
    // Copy is an async operation in Graph API, it returns a 202 and a monitor URL
    res.status(202).json(response.data);
  } catch (error) {
    console.error('Copy error:', error.response?.data || error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
