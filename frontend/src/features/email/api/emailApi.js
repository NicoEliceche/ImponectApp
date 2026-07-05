import { apiUrl } from '../../../shared/utils/urls';

const API_BASE = apiUrl('/api/email');

const parseResponse = async (response) => {
  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message = typeof payload === 'string' ? payload : payload?.error;
    throw new Error(message || 'No se pudo completar la operación de Email.');
  }

  return payload;
};

const withAccountId = (url, accountId) => {
  if (!accountId) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}accountId=${encodeURIComponent(accountId)}`;
};

const fileToBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(String(reader.result || '').split(',')[1] || '');
  reader.onerror = () => reject(new Error(`No se pudo leer el adjunto ${file.name}.`));
  reader.readAsDataURL(file);
});

const serializeComposePayload = async (payload) => ({
  ...payload,
  attachments: await Promise.all((payload.attachments || []).map(async attachment => ({
    filename: attachment.name,
    contentType: attachment.file?.type || 'application/octet-stream',
    content: await fileToBase64(attachment.file)
  })))
});

const postComposePayload = async (path, payload) => {
  try {
    const response = await fetch(`${API_BASE}/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(await serializeComposePayload(payload))
    });
    return parseResponse(response);
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('No se pudo conectar con el servidor de Email.');
    }
    throw error;
  }
};

export const getEmailAccounts = async () => {
  const response = await fetch(`${API_BASE}/accounts`);
  return parseResponse(response);
};

export const getEmailConfig = async (accountId) => {
  const response = await fetch(withAccountId(`${API_BASE}/config`, accountId));
  return parseResponse(response);
};

export const saveEmailConfig = async (config) => {
  const response = await fetch(`${API_BASE}/config`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(config)
  });
  return parseResponse(response);
};

export const getEmails = async ({ folder, accountId }) => {
  const response = await fetch(withAccountId(`${API_BASE}/inbox/${folder}`, accountId));
  return parseResponse(response);
};

export const performEmailAction = async (payload) => {
  const response = await fetch(`${API_BASE}/action`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  return parseResponse(response);
};

export const sendEmail = async (payload) => postComposePayload('send', payload);

export const saveEmailDraft = async (payload) => postComposePayload('draft', payload);
