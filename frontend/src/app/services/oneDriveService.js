import { useQuery } from '@tanstack/react-query';

export function useOneDriveFiles() {
  return useQuery({
    queryKey: ['oneDriveFiles'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/api/onedrive/files');
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
