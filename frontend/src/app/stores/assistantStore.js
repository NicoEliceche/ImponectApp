import { create } from 'zustand';

const initialMessage = {
  id: 'assistant-welcome',
  role: 'assistant',
  content: 'Soy el Asistente Imponect. Puedo explicarte la plataforma, navegar por la App y operar Documentos.',
  suggestions: [
    '¿Cómo uso Documentos?',
    'Llevame a Email',
    'Creá una carpeta llamada Pruebas'
  ]
};

export const useAssistantStore = create((set) => ({
  isPanelOpen: false,
  isLoading: false,
  error: '',
  messages: [initialMessage],
  openPanel: () => set({ isPanelOpen: true }),
  closePanel: () => set({ isPanelOpen: false }),
  togglePanel: () => set(state => ({ isPanelOpen: !state.isPanelOpen })),
  setLoading: isLoading => set({ isLoading }),
  setError: error => set({ error }),
  addMessage: message => set(state => ({ messages: [...state.messages, message] })),
  clearConversation: () => set({ messages: [initialMessage], error: '' })
}));
