import { publicAsset } from './urls';

const hasProtocol = (value) => /^(https?:|data:image\/|blob:)/i.test(value);
const looksLikeExternalHost = (value) => /^(www\.|[a-z0-9-]+(\.[a-z0-9-]+)+\/)/i.test(value);

export const normalizeAgentIconValue = (value) => {
  const iconValue = String(value || '').trim();
  if (!iconValue) return '';
  if (hasProtocol(iconValue)) return iconValue;
  if (iconValue.startsWith('//')) return `https:${iconValue}`;
  if (looksLikeExternalHost(iconValue)) return `https://${iconValue}`;
  return iconValue;
};

export const normalizeAgentIconSrc = (value) => {
  const iconValue = normalizeAgentIconValue(value);
  if (!iconValue) return '';
  if (hasProtocol(iconValue)) return iconValue;
  return publicAsset(iconValue);
};

export const isUploadedAgentIcon = (value) => String(value || '').trim().startsWith('data:image/');
