import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { apiUrl, getRuntimeDiagnostics } from '../../../shared/utils/urls';
import { logClientEvent } from '../../../shared/utils/clientLogger';

const API_URL = apiUrl('/api/onedrive');

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

const requestOneDriveJson = async (url, operation, details = {}) => {
  const startedAt = performance.now();

  logClientEvent('info', 'documents.onedrive.request', `${operation} started`, {
    url,
    operation,
    details,
    runtime: getRuntimeDiagnostics(),
  });

  try {
    const response = await fetch(url);
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

const requestOneDriveMutation = async (operation, request, details = {}) => {
  const startedAt = performance.now();

  logClientEvent('info', 'documents.onedrive.mutation', `${operation} started`, {
    operation,
    details,
    runtime: getRuntimeDiagnostics(),
  });

  try {
    const response = await request();

    logClientEvent('info', 'documents.onedrive.mutation', `${operation} completed`, {
      operation,
      status: response.status,
      durationMs: Math.round(performance.now() - startedAt),
    });

    return response.data;
  } catch (error) {
    error.status = error.response?.status || error.status;
    error.details = {
      operation,
      status: error.response?.status || null,
      statusText: error.response?.statusText || null,
      url: error.config?.url || null,
      method: error.config?.method || null,
      response: error.response?.data || null,
      message: error.message,
      durationMs: Math.round(performance.now() - startedAt),
    };

    logClientEvent('error', 'documents.onedrive.mutation', `${operation} failed`, error.details);
    throw error;
  }
};

export const createOneDriveFolder = async ({ parentId = null, name }) => {
  return requestOneDriveMutation(
    'create folder',
    () => axios.post(`${API_URL}/folder`, { parentId, name }),
    { parentId, name }
  );
};

export const createOneDriveFile = async ({ parentId = null, name, type }) => {
  return requestOneDriveMutation(
    'create file',
    () => axios.post(`${API_URL}/file`, { parentId, name, type }),
    { parentId, name, type }
  );
};

export const useOneDriveExplorer = (folderId = null, searchQuery = '') => {
  return useQuery({
    queryKey: ['oneDriveExplorer', folderId, searchQuery],
    queryFn: async () => {
      if (searchQuery) {
        return requestOneDriveJson(
          `${API_URL}/search?q=${encodeURIComponent(searchQuery)}`,
          'search files',
          { folderId, searchQuery }
        );
      }
      const url = folderId ? `${API_URL}/files/${folderId}` : `${API_URL}/files`;

      return requestOneDriveJson(url, 'fetch files', { folderId });
    }
  });
};

export const useOneDriveActions = () => {
  const queryClient = useQueryClient();

  const createFolder = useMutation({
    mutationFn: createOneDriveFolder,
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const deleteItem = useMutation({
    mutationFn: async ({ itemId }) => {
      return requestOneDriveMutation(
        'delete item',
        () => axios.delete(`${API_URL}/item/${itemId}`),
        { itemId }
      );
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const renameItem = useMutation({
    mutationFn: async ({ itemId, newName }) => {
      return requestOneDriveMutation(
        'rename item',
        () => axios.patch(`${API_URL}/item/${itemId}`, { name: newName }),
        { itemId, newName }
      );
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const createFile = useMutation({
    mutationFn: createOneDriveFile,
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const moveItem = useMutation({
    mutationFn: async ({ itemId, parentId, name }) => {
      return requestOneDriveMutation(
        'move item',
        () => axios.patch(`${API_URL}/item/${itemId}/move`, { parentId, name }),
        { itemId, parentId, name }
      );
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const copyItem = useMutation({
    mutationFn: async ({ itemId, parentId, name }) => {
      return requestOneDriveMutation(
        'copy item',
        () => axios.post(`${API_URL}/item/${itemId}/copy`, { parentId, name }),
        { itemId, parentId, name }
      );
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  return { createFolder, deleteItem, renameItem, createFile, moveItem, copyItem };
};
