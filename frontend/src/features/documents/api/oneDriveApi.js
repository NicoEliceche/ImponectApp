import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = '/api/onedrive';

export const createOneDriveFolder = async ({ parentId = null, name }) => {
  const response = await axios.post(`${API_URL}/folder`, { parentId, name });
  return response.data;
};

export const createOneDriveFile = async ({ parentId = null, name, type }) => {
  const response = await axios.post(`${API_URL}/file`, { parentId, name, type });
  return response.data;
};

export const useOneDriveExplorer = (folderId = null, searchQuery = '') => {
  return useQuery({
    queryKey: ['oneDriveExplorer', folderId, searchQuery],
    queryFn: async () => {
      if (searchQuery) {
        const res = await fetch(`${API_URL}/search?q=${searchQuery}`);
        if (!res.ok) throw new Error('Search failed');
        return res.json();
      }
      const url = folderId ? `${API_URL}/files/${folderId}` : `${API_URL}/files`;
      const res = await fetch(url);
      if (!res.ok) {
        const error = new Error('Failed to fetch files');
        error.status = res.status;
        throw error;
      }
      return res.json();
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
      return axios.delete(`${API_URL}/item/${itemId}`);
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const renameItem = useMutation({
    mutationFn: async ({ itemId, newName }) => {
      return axios.patch(`${API_URL}/item/${itemId}`, { name: newName });
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const createFile = useMutation({
    mutationFn: createOneDriveFile,
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const moveItem = useMutation({
    mutationFn: async ({ itemId, parentId, name }) => {
      return axios.patch(`${API_URL}/item/${itemId}/move`, { parentId, name });
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  const copyItem = useMutation({
    mutationFn: async ({ itemId, parentId, name }) => {
      return axios.post(`${API_URL}/item/${itemId}/copy`, { parentId, name });
    },
    onSuccess: () => queryClient.invalidateQueries(['oneDriveExplorer'])
  });

  return { createFolder, deleteItem, renameItem, createFile, moveItem, copyItem };
};
