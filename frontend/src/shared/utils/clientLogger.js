import { getRuntimeDiagnostics } from './urls';

const STORAGE_KEY = 'imponect.client.logs';
const MAX_LOGS = 400;
const MAX_TEXT_LENGTH = 2400;
const SECRET_KEY_PATTERN = /(authorization|cookie|password|secret|token|refresh|api[_-]?key)/i;

let initialized = false;

const canUseStorage = () => {
  try {
    return typeof window !== 'undefined' && Boolean(window.localStorage);
  } catch {
    return false;
  }
};

const readStoredLogs = () => {
  if (!canUseStorage()) return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStoredLogs = (logs) => {
  if (!canUseStorage()) return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(logs.slice(-MAX_LOGS)));
  } catch {
    // Logging must never break the app.
  }
};

const sanitizeValue = (value, depth = 0) => {
  if (depth > 4) return '[max-depth]';
  if (value == null) return value;

  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
      stack: value.stack?.split('\n').slice(0, 8).join('\n') || null,
      status: value.status || null,
      details: sanitizeValue(value.details, depth + 1),
    };
  }

  if (typeof value === 'string') {
    return value.length > MAX_TEXT_LENGTH ? `${value.slice(0, MAX_TEXT_LENGTH)}...[truncated]` : value;
  }

  if (typeof value !== 'object') return value;

  if (Array.isArray(value)) {
    return value.slice(0, 40).map(item => sanitizeValue(item, depth + 1));
  }

  return Object.entries(value).reduce((safe, [key, item]) => {
    safe[key] = SECRET_KEY_PATTERN.test(key) ? '[redacted]' : sanitizeValue(item, depth + 1);
    return safe;
  }, {});
};

export const logClientEvent = (level, scope, message, details = {}) => {
  const entry = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    timestamp: new Date().toISOString(),
    level,
    scope,
    message,
    details: sanitizeValue(details),
  };

  const logs = [...readStoredLogs(), entry].slice(-MAX_LOGS);
  writeStoredLogs(logs);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('imponect:client-log', { detail: entry }));
  }

  if (import.meta.env.DEV) {
    const consoleMethod = level === 'error' ? 'error' : level === 'warn' ? 'warn' : 'info';
    console[consoleMethod](`[${scope}] ${message}`, entry.details);
  }

  return entry;
};

export const getClientLogs = () => readStoredLogs();

export const clearClientLogs = () => {
  writeStoredLogs([]);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('imponect:client-log-cleared'));
  }
};

export const subscribeClientLogs = (callback) => {
  if (typeof window === 'undefined') return () => {};

  const handleChange = () => callback(readStoredLogs());
  window.addEventListener('imponect:client-log', handleChange);
  window.addEventListener('imponect:client-log-cleared', handleChange);

  return () => {
    window.removeEventListener('imponect:client-log', handleChange);
    window.removeEventListener('imponect:client-log-cleared', handleChange);
  };
};

export const formatClientLogs = (logs = readStoredLogs()) => (
  logs.map(log => (
    `[${log.timestamp}] ${log.level.toUpperCase()} ${log.scope}: ${log.message}\n${JSON.stringify(log.details, null, 2)}`
  )).join('\n\n')
);

export const downloadClientLogFile = () => {
  if (typeof window === 'undefined') return;

  const blob = new Blob([formatClientLogs()], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `client-${new Date().toISOString().replace(/[:.]/g, '-')}.log`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.URL.revokeObjectURL(url);
};

export const initClientLogging = () => {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;

  logClientEvent('info', 'app.runtime', 'Client logging initialized', getRuntimeDiagnostics());

  window.addEventListener('error', event => {
    logClientEvent('error', 'window.error', event.message || 'Unhandled window error', {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      error: event.error,
    });
  });

  window.addEventListener('unhandledrejection', event => {
    logClientEvent('error', 'window.unhandledrejection', 'Unhandled promise rejection', {
      reason: event.reason,
    });
  });
};
