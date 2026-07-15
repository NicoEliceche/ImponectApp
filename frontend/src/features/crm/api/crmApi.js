import { apiUrl } from '../../../shared/utils/urls';

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

export const fetchWhatsAppIntegrationStatus = async () => {
  const response = await fetch(apiUrl('/api/crm/integrations/whatsapp/status'));
  return parseResponse(response, 'No se pudo consultar el estado de WhatsApp.');
};

export const saveWhatsAppManualConfig = async (payload) => {
  const response = await fetch(apiUrl('/api/crm/integrations/whatsapp/manual'), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return parseResponse(response, 'No se pudo guardar la configuración de WhatsApp.');
};

export const testWhatsAppIntegration = async () => {
  const response = await fetch(apiUrl('/api/crm/integrations/whatsapp/test'), {
    method: 'POST',
  });

  return parseResponse(response, 'No se pudo probar la conexión de WhatsApp.');
};

export const disconnectWhatsAppIntegration = async () => {
  const response = await fetch(apiUrl('/api/crm/integrations/whatsapp/disconnect'), {
    method: 'POST',
  });

  return parseResponse(response, 'No se pudo desconectar WhatsApp.');
};
