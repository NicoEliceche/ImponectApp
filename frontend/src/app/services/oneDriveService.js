import { useQuery } from '@tanstack/react-query';
import { apiFetch, apiUrl, getRuntimeDiagnostics } from '../../shared/utils/urls';
import { logClientEvent } from '../../shared/utils/clientLogger';

const API_URL = apiUrl('/api/onedrive');
export const ONE_DRIVE_QUERY_STALE_MS = 30000;

export const oneDriveExplorerQueryKey = (folderId = null, searchQuery = '') => [
  'oneDriveExplorer',
  folderId || null,
  searchQuery || ''
];

const readResponseBody = async (response) => {
  const contentType = response.headers.get('content-type') || '';
  const bodyText = await response.text();

  if (contentType.includes('application/json')) {
    try {
      return JSON.parse(bodyText);
    } catch {
      return bodyText;
    }
  }

  return bodyText;
};

export const shouldRetryOneDriveRequest = (failureCount, error) => {
  if (error?.status === 401 || error?.status === 403) return false;

  return failureCount < 4;
};

export const oneDriveRetryDelay = (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 8000);

export const requestOneDriveJson = async (url, operation, details = {}) => {
  const startedAt = performance.now();

  logClientEvent('info', 'documents.onedrive.request', `${operation} started`, {
    url,
    operation,
    details,
    runtime: getRuntimeDiagnostics(),
  });

  try {
    const response = await apiFetch(url);
    const body = await readResponseBody(response);
    const durationMs = Math.round(performance.now() - startedAt);

    if (!response.ok) {
      const error = new Error(`OneDrive request failed with HTTP ${response.status}`);
      error.status = response.status;
      error.details = {
        url,
        operation,
        status: response.status,
        statusText: response.statusText,
        durationMs,
        body,
      };

      logClientEvent('error', 'documents.onedrive.request', `${operation} failed`, error.details);
      throw error;
    }

    logClientEvent('info', 'documents.onedrive.request', `${operation} completed`, {
      url,
      operation,
      status: response.status,
      durationMs,
      itemCount: Array.isArray(body) ? body.length : null,
    });

    return body;
  } catch (error) {
    if (!error.details) {
      logClientEvent('error', 'documents.onedrive.request', `${operation} failed before response`, {
        url,
        operation,
        message: error.message,
        runtime: getRuntimeDiagnostics(),
      });
    }

    throw error;
  }
};

export const fetchOneDriveItems = ({ folderId = null, searchQuery = '' } = {}) => {
  if (searchQuery) {
    return requestOneDriveJson(
      `${API_URL}/search?q=${encodeURIComponent(searchQuery)}`,
      'search files',
      { folderId, searchQuery }
    );
  }

  const url = folderId ? `${API_URL}/files/${folderId}` : `${API_URL}/files`;

  return requestOneDriveJson(url, 'fetch files', { folderId });
};

export function useOneDriveFiles() {
  return useQuery({
    queryKey: oneDriveExplorerQueryKey(),
    queryFn: () => fetchOneDriveItems(),
    enabled: true,
    retry: shouldRetryOneDriveRequest,
    retryDelay: oneDriveRetryDelay,
    staleTime: ONE_DRIVE_QUERY_STALE_MS,
  });
}
