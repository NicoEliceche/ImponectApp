import { apiFetch, apiUrl } from '../../../shared/utils/urls';

const parseResponse = async (response) => {
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload?.error || 'No se pudo consultar el Asistente Imponect.');
  }
  return payload;
};

export const sendAppAssistantMessage = async (messages) => {
  const response = await apiFetch(apiUrl('/api/ai/assistant/chat'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages })
  });

  return parseResponse(response);
};
