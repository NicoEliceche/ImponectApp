import { useQuery } from '@tanstack/react-query';
import { apiUrl } from '../../shared/utils/urls';

export function useOneDriveFiles() {
  return useQuery({
    queryKey: ['oneDriveFiles'],
    queryFn: async () => {
      const res = await fetch(apiUrl('/api/onedrive/files'));
      if (!res.ok) {
        const error = new Error('Failed to fetch OneDrive files');
        error.status = res.status;
        throw error;
      }
      return res.json();
    },
    enabled: true,
  });
}
