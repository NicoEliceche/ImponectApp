import { apiUrl } from '../../../shared/utils/urls';

const parseResponse = async (response) => {
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload?.error || 'No se pudo consultar IA Assist.');
  }

  return payload;
};

export const sendAiAssistMessage = async (messages) => {
  const response = await fetch(apiUrl('/api/ai/chat'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages })
  });

  return parseResponse(response);
};
