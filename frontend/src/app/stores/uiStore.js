import { create } from 'zustand';

export const useUIStore = create((set) => ({
  isAgentModalOpen: false,
  openAgentModal: () => set({ isAgentModalOpen: true }),
  closeAgentModal: () => set({ isAgentModalOpen: false }),
}));
