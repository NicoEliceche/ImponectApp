import { apiUrl } from '../../../shared/utils/urls';

const API_BASE = apiUrl('/api/quotes');

const parseResponse = async (response, fallbackMessage) => {
  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json')
    ? await response.json().catch(() => ({}))
    : await response.text();

  if (!response.ok) {
    const message = typeof payload === 'string' ? payload : payload?.error;
    throw new Error(message || fallbackMessage);
  }

  return payload;
};

export const fetchQuotes = async () => {
  const response = await fetch(API_BASE);
  return parseResponse(response, 'No se pudieron cargar los presupuestos.');
};

export const fetchQuote = async (id) => {
  const response = await fetch(`${API_BASE}/${id}`);
  return parseResponse(response, 'No se pudo cargar el presupuesto.');
};

export const createQuote = async (payload) => {
  const response = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return parseResponse(response, 'No se pudo guardar el presupuesto.');
};

export const updateQuote = async (id, payload) => {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return parseResponse(response, 'No se pudo actualizar el presupuesto.');
};

export const markQuoteAsSent = async (id, payload) => {
  const response = await fetch(`${API_BASE}/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'Enviado',
      sent_channel: payload?.sent_channel,
    }),
  });

  return parseResponse(response, 'No se pudo marcar el presupuesto como enviado.');
};

export const returnQuoteToPending = async (id) => {
  const response = await fetch(`${API_BASE}/${id}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'Pendiente de envío',
    }),
  });

  return parseResponse(response, 'No se pudo regresar el presupuesto a pendiente de envío.');
};
