import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useAssistantStore } from '../../../app/stores/assistantStore';
import { createOneDriveFile, createOneDriveFolder } from '../../documents/api/oneDriveApi';
import { sendAppAssistantMessage } from '../api/appAssistantApi';

const createMessageId = (prefix) => `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const useAppAssistant = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    messages,
    isLoading,
    error,
    addMessage,
    setLoading,
    setError,
    clearConversation
  } = useAssistantStore();

  const executeAction = async (action) => {
    switch (action.type) {
      case 'navigate':
        navigate(action.payload.path);
        return `Navegación completada: ${action.label}.`;
      case 'open_external':
        window.open(action.payload.url, '_blank', 'noopener,noreferrer');
        return `Enlace abierto: ${action.label}.`;
      case 'create_folder': {
        const folder = await createOneDriveFolder({ name: action.payload.name });
        await queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] });
        navigate(`/documents/${encodeURIComponent(folder.id)}`);
        return `Carpeta creada: ${folder.name}.`;
      }
      case 'create_document': {
        const file = await createOneDriveFile({
          name: action.payload.name,
          type: action.payload.fileType
        });
        await queryClient.invalidateQueries({ queryKey: ['oneDriveExplorer'] });
        const parentId = file.parentReference?.id;
        navigate(`${parentId ? `/documents/${encodeURIComponent(parentId)}` : '/documents'}?focus=${encodeURIComponent(file.id)}`);
        return `Archivo creado: ${file.name}.`;
      }
      default:
        throw new Error(`La herramienta ${action.type} todavía no está disponible.`);
    }
  };

  const sendMessage = async (rawQuestion) => {
    const question = String(rawQuestion || '').trim();
    if (!question || isLoading) return;

    const userMessage = { id: createMessageId('user'), role: 'user', content: question };
    const conversation = [...messages, userMessage];
    addMessage(userMessage);
    setError('');
    setLoading(true);

    try {
      const response = await sendAppAssistantMessage(
        conversation.map(({ role, content }) => ({ role, content }))
      );
      const toolResults = [];

      for (const action of response.actions || []) {
        try {
          toolResults.push({ status: 'success', label: await executeAction(action) });
        } catch (actionError) {
          toolResults.push({
            status: 'error',
            label: `${action.label}: ${actionError.message || 'No se pudo completar la acción.'}`
          });
        }
      }

      addMessage({
        id: createMessageId('assistant'),
        role: 'assistant',
        content: response.answer,
        sources: response.sources || [],
        matches: response.matches || [],
        toolResults
      });
    } catch (requestError) {
      setError(requestError.message || 'No se pudo consultar el Asistente Imponect.');
    } finally {
      setLoading(false);
    }
  };

  return { messages, isLoading, error, sendMessage, clearConversation };
};
