import { create } from 'zustand';
import { apiUrl } from '../../shared/utils/urls';

export const useAuth = create((set) => ({
  user: null,
  tokens: {
    microsoft: null,
    clickup: null,
  },
  setUser: (user) => set({ user }),
  setTokens: (service, tokens) => 
    set((state) => ({ 
      tokens: { ...state.tokens, [service]: tokens } 
    })),
  logout: () => set({ user: null, tokens: { microsoft: null, clickup: null } }),
  
  checkConnections: async () => {
    try {
      const msRes = await fetch(apiUrl('/api/auth/microsoft/status'));
      const msData = await msRes.json();
      
      set((state) => ({
        tokens: {
          ...state.tokens,
          microsoft: msData.connected ? 'connected' : null,
        }
      }));
    } catch (err) {
      console.error('Error checking connections:', err);
    }
  }
}));
