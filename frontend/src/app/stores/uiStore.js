import { create } from 'zustand';

export const useUIStore = create((set) => ({
  isAgentModalOpen: false,
  editingAgent: null,
  openAgentModal: (agent = null) => set({ isAgentModalOpen: true, editingAgent: agent }),
  closeAgentModal: () => set({ isAgentModalOpen: false, editingAgent: null }),
}));
