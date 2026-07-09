import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import {
  fetchOneDriveItems,
  ONE_DRIVE_QUERY_STALE_MS,
  oneDriveExplorerQueryKey,
  oneDriveRetryDelay,
  shouldRetryOneDriveRequest
} from '../../../app/services/oneDriveService';
import { apiUrl, getRuntimeDiagnostics } from '../../../shared/utils/urls';
import { logClientEvent } from '../../../shared/utils/clientLogger';

const API_URL = apiUrl('/api/onedrive');

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
    queryKey: oneDriveExplorerQueryKey(folderId, searchQuery),
    queryFn: () => fetchOneDriveItems({ folderId, searchQuery }),
    retry: shouldRetryOneDriveRequest,
    retryDelay: oneDriveRetryDelay,
    staleTime: ONE_DRIVE_QUERY_STALE_MS,
  });
};

export const useOneDriveActions = () => {
  const queryClient = useQueryClient();

  const createFolder = useMutation({
    mutationFn: createOneDriveFolder,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] })
  });

  const deleteItem = useMutation({
    mutationFn: async ({ itemId }) => {
      return requestOneDriveMutation(
        'delete item',
        () => axios.delete(`${API_URL}/item/${itemId}`),
        { itemId }
      );
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] })
  });

  const renameItem = useMutation({
    mutationFn: async ({ itemId, newName }) => {
      return requestOneDriveMutation(
        'rename item',
        () => axios.patch(`${API_URL}/item/${itemId}`, { name: newName }),
        { itemId, newName }
      );
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] })
  });

  const createFile = useMutation({
    mutationFn: createOneDriveFile,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] })
  });

  const moveItem = useMutation({
    mutationFn: async ({ itemId, parentId, name }) => {
      return requestOneDriveMutation(
        'move item',
        () => axios.patch(`${API_URL}/item/${itemId}/move`, { parentId, name }),
        { itemId, parentId, name }
      );
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] })
  });

  const copyItem = useMutation({
    mutationFn: async ({ itemId, parentId, name }) => {
      return requestOneDriveMutation(
        'copy item',
        () => axios.post(`${API_URL}/item/${itemId}/copy`, { parentId, name }),
        { itemId, parentId, name }
      );
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] })
  });

  return { createFolder, deleteItem, renameItem, createFile, moveItem, copyItem };
};
