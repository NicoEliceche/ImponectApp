import { apiUrl } from '../../../shared/utils/urls';

const parseResponse = async (response, fallbackMessage) => {
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload?.error || fallbackMessage);
  }
  return payload;
};

export const fetchAiAgents = async () => {
  const response = await fetch(apiUrl('/api/ai/agents'));
  if (!response.ok) return [];
  const payload = await response.json();
  return Array.isArray(payload) ? payload : [];
};

export const sendAgentChatMessage = async ({ messages, options }) => {
  const response = await fetch(apiUrl('/api/ai/chat'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, options })
  });

  return parseResponse(response, 'No se pudo consultar el agente.');
};
