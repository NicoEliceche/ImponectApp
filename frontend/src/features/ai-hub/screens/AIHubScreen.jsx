import React, { Suspense, lazy, useEffect, useMemo, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useUIStore } from '../../../app/stores/uiStore';
import { normalizeAgentIconSrc } from '../../../shared/utils/agentIcons';
import { getAgentSectionLabel, inferAgentSection } from '../../../shared/utils/agentSections';
import {
  IconCheck,
  IconClose,
  IconDatabase,
  IconDots,
  IconMaximize,
  IconPencil,
  IconPin,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconSend,
  IconSettings,
  IconShield,
  IconTrash,
  IconUserSilhouette,
  IconWarning,
} from '../../../shared/components/Icons';
import { deleteAiAgent, fetchAiAgents, sendAgentChatMessage } from '../api/aiHubApi';
import * as S from './AIHubScreenStyled';

const MarkdownMessage = lazy(() => import('../components/MarkdownMessage').then(module => ({ default: module.MarkdownMessage })));

const CHAT_STORAGE_KEY = 'imponect.aiHub.chats.v1';
const MAX_STORED_CHATS = 40;
const FOUNDER_DELETE_PASSWORD = 'Founders2025!';

const MODEL_OPTIONS = [
  { value: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash' },
  { value: 'gemini-2.5-pro', label: 'Gemini 2.5 Pro' },
  { value: 'gemini-3.5-flash', label: 'Gemini 3.5 Flash' },
  { value: 'gemini-3.1-pro-preview', label: 'Gemini 3.1 Pro' },
  { value: 'gemini-3-flash-preview', label: 'Gemini 3 Flash' },
];

const EFFORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'minimal', label: 'Minimal' },
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'xhigh', label: 'XHigh' },
];

const QUICK_PROMPTS = [
  'Resumime cómo deberías ayudarme en esta conversación.',
  'Analizá este caso como agente experto y proponé próximos pasos.',
  'Buscá información actual en internet antes de responder.',
];

const createChatId = () => `chat-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const getAgentIconSrc = (agent) => {
  const iconUrl = String(agent?.icon_url || '').trim();
  if (!iconUrl) return '';
  return normalizeAgentIconSrc(iconUrl);
};

const getAgentTypeLabel = (agent) => {
  return getAgentSectionLabel(inferAgentSection(agent));
};

const getAgentChatTargetLabel = (agent) => {
  const section = inferAgentSection(agent);
  if (section === 'rag') return 'este RAG';
  if (section === 'assistant') return 'este asistente';
  return 'este agente';
};

const getAgentSidebarGroup = (agent) => {
  const section = inferAgentSection(agent);
  if (section === 'rag') return 'rags';
  if (section === 'assistant') return 'assistants';
  return 'agents';
};

const getDefaultModel = (agent) => {
  const configuredModel = String(agent?.config?.model || '').trim();
  return configuredModel.startsWith('gemini-') ? configuredModel : MODEL_OPTIONS[0].value;
};

const getDefaultReasoningEffort = (agent) => {
  const modelSettings = agent?.config?.model_settings || {};
  const effort = String(modelSettings.reasoning_effort || modelSettings.reasoning?.effort || '').toLowerCase();
  return EFFORT_OPTIONS.some(option => option.value === effort) ? effort : 'default';
};

const getStoredChats = () => {
  if (typeof window === 'undefined') return [];

  try {
    const parsed = JSON.parse(window.localStorage.getItem(CHAT_STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveStoredChats = (chats) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(chats.slice(0, MAX_STORED_CHATS)));
};

const createChatFromAgent = (agent) => ({
  id: createChatId(),
  agentId: agent.id,
  agentName: agent.name,
  title: agent.name,
  model: getDefaultModel(agent),
  reasoningEffort: getDefaultReasoningEffort(agent),
  enableWebSearch: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  messages: [],
});

const getChatTitle = (chat, firstMessage) => {
  const text = String(firstMessage || '').trim();
  if (!text) return chat.title || chat.agentName || 'Nuevo chat';
  return text.length > 48 ? `${text.slice(0, 48)}...` : text;
};

const buildAgentSystemInstruction = (agent, chat) => {
  const config = agent?.config || {};
  const rag = config.rag || {};
  const guardrails = config.guardrails || {};
  const knowledgeFiles = Array.isArray(rag.knowledge_files) ? rag.knowledge_files : [];
  const knowledgeFileNames = knowledgeFiles
    .map(file => file?.name)
    .filter(Boolean);
  const knowledgeTextPreview = knowledgeFiles
    .filter(file => file?.text_preview)
    .slice(0, 6)
    .map(file => `### ${file.name}\n${String(file.text_preview).slice(0, 1800)}`)
    .join('\n\n');

  return [
    `Sos ${agent?.name || 'un agente de IA'} dentro de Imponect App.`,
    agent?.description ? `Propósito del agente: ${agent.description}` : '',
    config.instructions ? `Instrucciones principales: ${config.instructions}` : '',
    config.handoff_description ? `Contexto de handoff: ${config.handoff_description}` : '',
    config.output_type ? `Tipo de salida esperado: ${config.output_type}` : '',
    guardrails.output ? `Guardrails de salida: ${guardrails.output}` : '',
    rag.enabled ? `El agente tiene RAG configurado con fuentes: ${rag.data_sources || 'documentos de negocio'}. Si no hay contexto recuperado explícito, aclaralo antes de asumir datos internos.` : '',
    rag.enabled && knowledgeFileNames.length ? `Archivos Knowledge cargados (${knowledgeFileNames.length}): ${knowledgeFileNames.slice(0, 20).join(', ')}.` : '',
    rag.enabled && knowledgeTextPreview ? `Preview textual disponible desde Knowledge:\n${knowledgeTextPreview}` : '',
    `Modelo solicitado para esta conversación: ${chat.model}. Esfuerzo de razonamiento: ${chat.reasoningEffort}.`,
    'Respondé en español salvo que el usuario pida otro idioma.',
    'Sé concreto, operativo y profesional. No inventes acceso a documentos, emails o herramientas si no fueron provistos por el runtime.'
  ].filter(Boolean).join('\n');
};

const normalizeMessagesForApi = (messages) => messages
  .filter(message => message.role === 'user' || message.role === 'assistant')
  .map(message => ({
    role: message.role,
    content: message.content
  }));

const AgentAvatar = ({ agent, $compact = false }) => {
  const iconSrc = getAgentIconSrc(agent);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setHasImageError(false);
  }, [iconSrc]);

  return (
    <S.AgentAvatar $compact={$compact}>
      {iconSrc && !hasImageError ? (
        <img
          src={iconSrc}
          alt={agent?.name || 'Agente'}
          onError={() => setHasImageError(true)}
        />
      ) : (
        <IconUserSilhouette />
      )}
    </S.AgentAvatar>
  );
};

export const AIHubScreen = () => {
  const queryClient = useQueryClient();
  const openAgentModal = useUIStore(state => state.openAgentModal);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeChatId, setActiveChatId] = useState(null);
  const [selectedAgentId, setSelectedAgentId] = useState(null);
  const [draft, setDraft] = useState('');
  const [chats, setChats] = useState(() => getStoredChats());
  const [draftChatConfig, setDraftChatConfig] = useState({});
  const [chatMenu, setChatMenu] = useState(null);
  const [deleteAgentModal, setDeleteAgentModal] = useState({ show: false, agent: null, password: '', error: '' });
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [renamingChatId, setRenamingChatId] = useState(null);
  const [renameDraft, setRenameDraft] = useState('');
  const messagesEndRef = useRef(null);
  const chatMenuRef = useRef(null);

  const { data: agents = [], isLoading } = useQuery({
    queryKey: ['aiAgents'],
    queryFn: fetchAiAgents,
  });

  const agentMap = useMemo(
    () => new Map(agents.map(agent => [String(agent.id), agent])),
    [agents],
  );

  const filteredAgents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return agents;

    return agents.filter(agent => [
      agent.name,
      agent.description,
      getAgentTypeLabel(agent),
    ].some(value => String(value || '').toLowerCase().includes(query)));
  }, [agents, searchQuery]);

  const sidebarAgentGroups = useMemo(() => filteredAgents.reduce((groups, agent) => {
    groups[getAgentSidebarGroup(agent)].push(agent);
    return groups;
  }, { agents: [], assistants: [], rags: [] }), [filteredAgents]);

  const orderedChats = useMemo(() => [...chats].sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
    return new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime();
  }), [chats]);

  const filteredChats = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return orderedChats;

    return orderedChats.filter(chat => [
      chat.title,
      chat.agentName,
      chat.model,
    ].some(value => String(value || '').toLowerCase().includes(query)));
  }, [orderedChats, searchQuery]);

  const activeChat = useMemo(
    () => chats.find(chat => chat.id === activeChatId) || null,
    [activeChatId, chats],
  );

  const selectedAgent = useMemo(() => {
    if (!selectedAgentId) return null;
    return agentMap.get(String(selectedAgentId)) || null;
  }, [agentMap, selectedAgentId]);

  const activeAgent = useMemo(() => {
    if (activeChat) {
      return agentMap.get(String(activeChat.agentId)) || {
        id: activeChat.agentId,
        name: activeChat.agentName,
        description: 'Agente guardado en una conversación local.',
        type: 'custom',
        config: {},
      };
    }

    return selectedAgent;
  }, [activeChat, agentMap, selectedAgent]);

  const chatContext = useMemo(() => {
    if (activeChat) return activeChat;
    if (!activeAgent) return null;

    const overrides = draftChatConfig[String(activeAgent.id)] || {};
    return {
      id: null,
      agentId: activeAgent.id,
      agentName: activeAgent.name,
      title: activeAgent.name,
      model: overrides.model || getDefaultModel(activeAgent),
      reasoningEffort: overrides.reasoningEffort || getDefaultReasoningEffort(activeAgent),
      enableWebSearch: overrides.enableWebSearch ?? true,
      messages: [],
    };
  }, [activeAgent, activeChat, draftChatConfig]);

  useEffect(() => {
    saveStoredChats(chats);
  }, [chats]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [activeChat?.messages?.length, activeChatId]);

  useEffect(() => {
    if (!toast.show) return undefined;

    const timer = setTimeout(() => {
      setToast(current => ({ ...current, show: false }));
    }, 4200);

    return () => clearTimeout(timer);
  }, [toast.show, toast.message, toast.type]);

  useEffect(() => {
    if (!chatMenu) return undefined;

    const handlePointerDown = (event) => {
      if (chatMenuRef.current?.contains(event.target)) return;
      setChatMenu(null);
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setChatMenu(null);
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [chatMenu]);

  const chatMutation = useMutation({
    mutationFn: sendAgentChatMessage,
    onSuccess: (result, variables) => {
      const assistantMessage = {
        id: createChatId(),
        role: 'assistant',
        content: result.answer,
        provider: result.provider,
        model: result.model,
        sources: result.sources || [],
        createdAt: new Date().toISOString(),
      };

      setChats(current => current.map(chat => (
        chat.id === variables.chatId
          ? {
              ...chat,
              updatedAt: new Date().toISOString(),
              messages: [...variables.nextMessages, assistantMessage],
            }
          : chat
      )));
    },
    onError: (error, variables) => {
      const assistantMessage = {
        id: createChatId(),
        role: 'assistant',
        content: error.message || 'No se pudo consultar el agente.',
        isError: true,
        createdAt: new Date().toISOString(),
      };

      setChats(current => current.map(chat => (
        chat.id === variables.chatId
          ? {
              ...chat,
              updatedAt: new Date().toISOString(),
              messages: [...variables.nextMessages, assistantMessage],
            }
          : chat
      )));
    },
  });

  const deleteAgentMutation = useMutation({
    mutationFn: deleteAiAgent,
    onSuccess: (_, agentId) => {
      const deletedAgentName = deleteAgentModal.agent?.name || 'IA';
      queryClient.invalidateQueries({ queryKey: ['aiAgents'] });
      setDeleteAgentModal({ show: false, agent: null, password: '', error: '' });
      setToast({ show: true, type: 'success', message: `${deletedAgentName} eliminado correctamente.` });
      setSelectedAgentId(current => (String(current) === String(agentId) ? null : current));
      setActiveChatId(current => {
        const currentChat = chats.find(chat => chat.id === current);
        return String(currentChat?.agentId) === String(agentId) ? null : current;
      });
      setDraftChatConfig(current => {
        const next = { ...current };
        delete next[String(agentId)];
        return next;
      });
    },
    onError: (error) => {
      setDeleteAgentModal(current => ({
        ...current,
        error: error.message || 'No se pudo eliminar el agente.',
      }));
      setToast({ show: true, type: 'error', message: error.message || 'No se pudo eliminar la IA.' });
    },
  });

  const selectAgent = (agent) => {
    const latestChatForAgent = orderedChats.find(chat => String(chat.agentId) === String(agent.id) && chat.messages?.length > 0);
    setActiveChatId(latestChatForAgent?.id || null);
    setSelectedAgentId(agent.id);
    setDraft('');
    setChatMenu(null);
  };

  const startDraftChat = (agent) => {
    setActiveChatId(null);
    setSelectedAgentId(agent.id);
    setDraft('');
    setChatMenu(null);
  };

  const updateChatContext = (changes) => {
    if (activeChatId) {
      setChats(current => current.map(chat => (
        chat.id === activeChatId ? { ...chat, ...changes, updatedAt: new Date().toISOString() } : chat
      )));
      return;
    }

    if (!activeAgent?.id) return;
    setDraftChatConfig(current => ({
      ...current,
      [String(activeAgent.id)]: {
        ...(current[String(activeAgent.id)] || {}),
        ...changes,
      },
    }));
  };

  const deleteChat = (chatId) => {
    setChats(current => current.filter(chat => chat.id !== chatId));
    if (activeChatId === chatId) setActiveChatId(null);
    setChatMenu(null);
  };

  const togglePinChat = (chatId) => {
    setChats(current => current.map(chat => (
      chat.id === chatId ? { ...chat, pinned: !chat.pinned, updatedAt: new Date().toISOString() } : chat
    )));
    setChatMenu(null);
  };

  const beginRenameChat = (chat) => {
    setRenamingChatId(chat.id);
    setRenameDraft(chat.title || '');
    setChatMenu(null);
  };

  const commitRenameChat = () => {
    if (!renamingChatId) return;
    const nextTitle = renameDraft.trim();
    setChats(current => current.map(chat => (
      chat.id === renamingChatId && nextTitle
        ? { ...chat, title: nextTitle, updatedAt: new Date().toISOString() }
        : chat
    )));
    setRenamingChatId(null);
    setRenameDraft('');
  };

  const cancelRenameChat = () => {
    setRenamingChatId(null);
    setRenameDraft('');
  };

  const openChatMenu = (event, chat) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    const menuWidth = 176;
    setChatMenu({
      chatId: chat.id,
      top: rect.bottom + 4,
      left: Math.max(8, Math.min(rect.left - menuWidth + rect.width, window.innerWidth - menuWidth - 8)),
    });
  };

  const requestDeleteAgent = (event, agent) => {
    event.stopPropagation();
    setDeleteAgentModal({ show: true, agent, password: '', error: '' });
  };

  const closeDeleteAgentModal = () => {
    if (deleteAgentMutation.isPending) return;
    setDeleteAgentModal({ show: false, agent: null, password: '', error: '' });
  };

  const confirmDeleteAgent = () => {
    if (deleteAgentModal.password !== FOUNDER_DELETE_PASSWORD) {
      setDeleteAgentModal(current => ({ ...current, error: 'Contraseña incorrecta.' }));
      setToast({ show: true, type: 'error', message: 'Contraseña incorrecta. No se eliminó la IA.' });
      return;
    }

    if (!deleteAgentModal.agent?.id) return;
    deleteAgentMutation.mutate(deleteAgentModal.agent.id);
  };

  const sendMessage = (content = draft) => {
    if (!chatContext || !activeAgent || chatMutation.isPending) return;

    const text = String(content || '').trim();
    if (!text) return;

    const targetChat = activeChat || {
      ...createChatFromAgent(activeAgent),
      model: chatContext.model,
      reasoningEffort: chatContext.reasoningEffort,
      enableWebSearch: chatContext.enableWebSearch,
    };
    const userMessage = {
      id: createChatId(),
      role: 'user',
      content: text,
      createdAt: new Date().toISOString(),
    };
    const nextMessages = [...(targetChat.messages || []), userMessage];
    const nextTitle = (targetChat.messages || []).length === 0 ? getChatTitle(targetChat, text) : targetChat.title;

    setDraft('');
    setActiveChatId(targetChat.id);
    setSelectedAgentId(activeAgent.id);
    setChats(current => {
      const nextChat = {
        ...targetChat,
        title: nextTitle,
        updatedAt: new Date().toISOString(),
        messages: nextMessages,
      };

      const exists = current.some(chat => chat.id === targetChat.id);
      return exists
        ? current.map(chat => (chat.id === targetChat.id ? nextChat : chat))
        : [nextChat, ...current].slice(0, MAX_STORED_CHATS);
    });

    chatMutation.mutate({
      chatId: targetChat.id,
      nextMessages,
      messages: normalizeMessagesForApi(nextMessages),
      options: {
        model: targetChat.model,
        reasoningEffort: targetChat.reasoningEffort,
        enableWebSearch: targetChat.enableWebSearch,
        systemInstruction: buildAgentSystemInstruction(activeAgent, targetChat),
      },
    });
  };

  const handleComposerKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const renderAgentRow = (agent) => (
    <S.SidebarItem
      key={agent.id}
      role="button"
      tabIndex={0}
      $active={String(agent.id) === String(activeAgent?.id)}
      onClick={() => selectAgent(agent)}
      onKeyDown={event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectAgent(agent);
        }
      }}
      title={agent.name}
    >
      <AgentAvatar agent={agent} $compact />
      <span>
        <strong>{agent.name}</strong>
      </span>
      <S.AgentEditButton
        type="button"
        $shifted
        title="Editar configuración"
        onClick={(event) => {
          event.stopPropagation();
          openAgentModal(agent);
        }}
      >
        <IconPencil />
      </S.AgentEditButton>
      <S.AgentDeleteButton
        type="button"
        title="Borrar agente"
        onClick={event => requestDeleteAgent(event, agent)}
      >
        <IconTrash />
      </S.AgentDeleteButton>
    </S.SidebarItem>
  );

  const renderAgentSection = ({ title, count, items, emptyText }) => (
    <S.SidebarSection>
      <S.SectionLabel>
        <span>{title}</span>
        <strong>{count}</strong>
      </S.SectionLabel>
      {isLoading ? (
        <S.SidebarEmpty>Cargando...</S.SidebarEmpty>
      ) : items.length ? (
        items.map(renderAgentRow)
      ) : (
        <S.SidebarEmpty>{emptyText}</S.SidebarEmpty>
      )}
    </S.SidebarSection>
  );

  const isChatOpen = Boolean(chatContext && activeAgent);
  const activeAgentSection = activeAgent ? inferAgentSection(activeAgent) : 'agent';
  const activeAgentTypeLabel = activeAgent ? getAgentTypeLabel(activeAgent) : '';
  const showRagCapability = Boolean(activeAgent?.config?.rag?.enabled) && activeAgentSection !== 'rag';

  return (
    <S.ScreenWrapper>
      <S.InternalSidebar>
        <S.SidebarHeader>
          <S.BrandMark>
            <S.BrandIcon><S.AITextIcon>IA</S.AITextIcon></S.BrandIcon>
            <div>
              <S.BrandName>AI Hub</S.BrandName>
              <S.BrandSubtitle>Agentes y conversaciones</S.BrandSubtitle>
            </div>
          </S.BrandMark>
          <S.SidebarIconButton type="button" onClick={() => openAgentModal()} title="Nuevo agente">
            <IconPlus />
          </S.SidebarIconButton>
        </S.SidebarHeader>

        <S.SidebarSearch>
          <IconSearch />
          <input
            type="search"
            placeholder="Buscar agentes o chats"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
        </S.SidebarSearch>

        <S.SidebarScroll>
          {renderAgentSection({
            title: 'AGENTES',
            count: sidebarAgentGroups.agents.length,
            items: sidebarAgentGroups.agents,
            emptyText: searchQuery ? 'No hay agentes para esta búsqueda.' : 'Sin agentes custom todavía.',
          })}

          {renderAgentSection({
            title: 'ASISTENTES',
            count: sidebarAgentGroups.assistants.length,
            items: sidebarAgentGroups.assistants,
            emptyText: searchQuery ? 'No hay asistentes para esta búsqueda.' : 'Sin asistentes externos todavía.',
          })}

          {renderAgentSection({
            title: 'RAGs',
            count: sidebarAgentGroups.rags.length,
            items: sidebarAgentGroups.rags,
            emptyText: searchQuery ? 'No hay RAGs para esta búsqueda.' : 'Sin RAGs configurados todavía.',
          })}

          <S.SidebarDivider />

          <S.SidebarSection>
            <S.SectionLabel>
              <span>CHATS ANTERIORES</span>
              <strong>{filteredChats.length}</strong>
            </S.SectionLabel>
            {filteredChats.length ? filteredChats.map(chat => (
              <S.ChatHistoryItem
                key={chat.id}
                role="button"
                tabIndex={0}
                $active={activeChatId === chat.id}
                onClick={() => {
                  setActiveChatId(chat.id);
                  setSelectedAgentId(chat.agentId);
                  setChatMenu(null);
                }}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setActiveChatId(chat.id);
                    setSelectedAgentId(chat.agentId);
                    setChatMenu(null);
                  }
                }}
                title={chat.title}
              >
                {chat.pinned && <IconPin />}
                <span>
                  {renamingChatId === chat.id ? (
                    <S.ChatRenameInput
                      value={renameDraft}
                      autoFocus
                      onChange={event => setRenameDraft(event.target.value)}
                      onClick={event => event.stopPropagation()}
                      onBlur={commitRenameChat}
                      onKeyDown={event => {
                        if (event.key === 'Enter') commitRenameChat();
                        if (event.key === 'Escape') cancelRenameChat();
                      }}
                    />
                  ) : (
                    <strong>{chat.title}</strong>
                  )}
                </span>
                <S.ChatMenuButton
                  type="button"
                  title="Opciones del chat"
                  onClick={event => openChatMenu(event, chat)}
                >
                  <IconDots />
                </S.ChatMenuButton>
              </S.ChatHistoryItem>
            )) : (
              <S.SidebarEmpty>{chats.length ? 'No hay chats para esta búsqueda.' : 'Los chats que abras van a quedar acá.'}</S.SidebarEmpty>
            )}
          </S.SidebarSection>
        </S.SidebarScroll>

        {chatMenu && (
          <S.ChatContextMenu
            ref={chatMenuRef}
            style={{ top: chatMenu.top, left: chatMenu.left }}
            onClick={event => event.stopPropagation()}
          >
            <S.ChatMenuItem type="button" onClick={() => togglePinChat(chatMenu.chatId)}>
              <IconPin />
              Fijar
            </S.ChatMenuItem>
            <S.ChatMenuItem
              type="button"
              onClick={() => {
                const chat = chats.find(item => item.id === chatMenu.chatId);
                if (chat) beginRenameChat(chat);
              }}
            >
              <IconPencil />
              Cambiar nombre
            </S.ChatMenuItem>
            <S.ChatMenuItem type="button" $danger onClick={() => deleteChat(chatMenu.chatId)}>
              <IconTrash />
              Borrar
            </S.ChatMenuItem>
          </S.ChatContextMenu>
        )}
      </S.InternalSidebar>

      <S.MainArea>
        {!isChatOpen && (
          <S.TopBar>
            <div>
              <S.Eyebrow>
                <IconShield />
                Centro de inteligencia
              </S.Eyebrow>
              <S.Title>AI Hub Imponect</S.Title>
              <S.Subtitle>Gestioná agentes, asistentes y RAGs con perfiles, herramientas, memoria documental y chats operativos.</S.Subtitle>
            </div>
            <S.TopActions>
              <S.CreateAgentButton type="button" onClick={() => openAgentModal()}>
                <IconPlus />
                Nuevo Agente/Asistente/RAG
              </S.CreateAgentButton>
            </S.TopActions>
          </S.TopBar>
        )}

        {isChatOpen ? (
          <S.ChatWorkspace>
            <S.ChatHeader>
              <S.ActiveAgentInfo>
                <AgentAvatar agent={activeAgent} />
                <div>
                  <S.ActiveAgentName>{activeAgent.name}</S.ActiveAgentName>
                  <S.ActiveAgentDescription>{activeAgent.description || getAgentTypeLabel(activeAgent)}</S.ActiveAgentDescription>
                </div>
              </S.ActiveAgentInfo>

              <S.ChatHeaderActions>
                <S.ControlGroup>
                  <label>Modelo</label>
                  <select value={chatContext.model} onChange={event => updateChatContext({ model: event.target.value })}>
                    {MODEL_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </S.ControlGroup>
                <S.ControlGroup>
                  <label>RAZONAMIENTO</label>
                  <select value={chatContext.reasoningEffort} onChange={event => updateChatContext({ reasoningEffort: event.target.value })}>
                    {EFFORT_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </S.ControlGroup>
                <S.ToggleButton
                  type="button"
                  $active={chatContext.enableWebSearch}
                  onClick={() => updateChatContext({ enableWebSearch: !chatContext.enableWebSearch })}
                  title="Activar o desactivar búsqueda web"
                >
                  <IconSearch />
                  Web
                </S.ToggleButton>
                <S.IconButton type="button" onClick={() => startDraftChat(activeAgent)} title={`Nuevo chat con ${getAgentChatTargetLabel(activeAgent)}`}>
                  <IconPlus />
                </S.IconButton>
                <S.IconButton type="button" onClick={() => { setActiveChatId(null); setSelectedAgentId(null); }} title="Cerrar chat">
                  <IconClose />
                </S.IconButton>
              </S.ChatHeaderActions>
            </S.ChatHeader>

            {activeAgent.type === 'external' && activeAgent.external_url ? (
              <S.ExternalFrame src={activeAgent.external_url} title={activeAgent.name} />
            ) : (
              <>
                <S.ToolStrip>
                  <S.ToolChip $active>
                    <S.AITextIcon $compact>IA</S.AITextIcon>
                    {activeAgentTypeLabel}
                  </S.ToolChip>
                  <S.ToolChip $active={chatContext.enableWebSearch}>
                    <IconSearch />
                    Búsqueda web
                  </S.ToolChip>
                  {showRagCapability && (
                    <S.ToolChip $active>
                      <IconDatabase />
                      RAG configurado
                    </S.ToolChip>
                  )}
                  <S.ToolChip>
                    <IconShield />
                    Guardrails
                  </S.ToolChip>
                  <S.ToolChip>
                    <IconSettings />
                    Runtime
                  </S.ToolChip>
                </S.ToolStrip>

                <S.MessagesPane>
                  {chatContext.messages.length === 0 ? (
                    <S.EmptyChat>
                      <AgentAvatar agent={activeAgent} />
                      <h2>{activeAgent.name}</h2>
                      <p>{activeAgent.description || 'Iniciá una conversación con este agente.'}</p>
                      <S.QuickPromptGrid>
                        {QUICK_PROMPTS.map(prompt => (
                          <S.QuickPromptButton key={prompt} type="button" onClick={() => sendMessage(prompt)}>
                            {prompt}
                          </S.QuickPromptButton>
                        ))}
                      </S.QuickPromptGrid>
                    </S.EmptyChat>
                  ) : (
                    chatContext.messages.map(message => (
                      <S.MessageRow key={message.id} $role={message.role}>
                        <S.MessageBubble $role={message.role} $error={message.isError}>
                          <S.MessageRole>{message.role === 'user' ? 'Vos' : activeAgent.name}</S.MessageRole>
                          <S.MessageText $role={message.role}>
                            <Suspense fallback={<S.MarkdownFallback>{message.content || ''}</S.MarkdownFallback>}>
                              <MarkdownMessage content={message.content || ''} />
                            </Suspense>
                          </S.MessageText>
                          {message.sources?.length > 0 && (
                            <S.SourceList>
                              {message.sources.map(source => (
                                <a key={source.url || source.title} href={source.url} target="_blank" rel="noopener noreferrer">
                                  {source.title || source.url}
                                </a>
                              ))}
                            </S.SourceList>
                          )}
                          {(message.provider || message.model) && (
                            <S.MessageMeta>{message.provider || 'ai'} · {message.model || chatContext.model}</S.MessageMeta>
                          )}
                        </S.MessageBubble>
                      </S.MessageRow>
                    ))
                  )}
                  {chatMutation.isPending && activeChatId === chatMutation.variables?.chatId && (
                    <S.ThinkingRow>
                      <IconRefresh />
                      <S.ThinkingCore>
                        <span />
                        <span />
                        <span />
                      </S.ThinkingCore>
                      <S.ThinkingText>Pensando con {chatContext.model}...</S.ThinkingText>
                    </S.ThinkingRow>
                  )}
                  <div ref={messagesEndRef} />
                </S.MessagesPane>

                <S.Composer>
                  <textarea
                    placeholder={`Mensaje para ${activeAgent.name}`}
                    value={draft}
                    onChange={event => setDraft(event.target.value)}
                    onKeyDown={handleComposerKeyDown}
                    disabled={chatMutation.isPending}
                  />
                  <S.SendButton
                    type="button"
                    onClick={() => sendMessage()}
                    disabled={!draft.trim() || chatMutation.isPending}
                    title="Enviar mensaje"
                  >
                    <IconSend />
                  </S.SendButton>
                </S.Composer>
              </>
            )}
          </S.ChatWorkspace>
        ) : (
          <S.LibraryView>
            <S.LibraryHeader>
              <div>
                <S.LibraryTitle>Elegí un agente para empezar</S.LibraryTitle>
                <S.LibrarySubtitle>Los modelos y el reasoning arrancan con la configuración guardada del agente y se pueden ajustar por chat.</S.LibrarySubtitle>
              </div>
            </S.LibraryHeader>

            <S.AgentsGrid>
              {isLoading ? (
                <S.LoadingCard>Cargando agentes...</S.LoadingCard>
              ) : filteredAgents.length ? filteredAgents.map(agent => (
                <S.AgentCard key={agent.id}>
                  <S.AgentCardIdentity>
                    <AgentAvatar agent={agent} />
                    <S.AgentName>{agent.name}</S.AgentName>
                  </S.AgentCardIdentity>
                  <S.AgentDescription>{agent.description}</S.AgentDescription>
                  <S.AgentCardMeta>
                    <span>{getAgentTypeLabel(agent)}</span>
                    <span>{getDefaultModel(agent)}</span>
                  </S.AgentCardMeta>
                  <S.LaunchButton type="button" onClick={() => selectAgent(agent)}>
                    <IconMaximize />
                    Abrir Chat
                  </S.LaunchButton>
                </S.AgentCard>
              )) : (
                <S.EmptyLibrary>
                  <S.AITextIcon $large>IA</S.AITextIcon>
                  <h2>No hay agentes todavía</h2>
                  <p>Creá tu primer agente para iniciar conversaciones con configuración propia.</p>
                  <S.CreateAgentButton type="button" onClick={() => openAgentModal()}>
                    <IconPlus />
                    Nuevo Agente/Asistente/RAG
                  </S.CreateAgentButton>
                </S.EmptyLibrary>
              )}
            </S.AgentsGrid>
          </S.LibraryView>
        )}
      </S.MainArea>

      {deleteAgentModal.show && (
        <S.DeleteModalOverlay onClick={closeDeleteAgentModal}>
          <S.DeleteModalCard onClick={event => event.stopPropagation()}>
            <S.DeleteModalIcon>
              <IconTrash />
            </S.DeleteModalIcon>
            <S.DeleteModalTitle>Confirmar eliminación</S.DeleteModalTitle>
            <S.DeleteModalText>
              Se requiere contraseña para eliminar {deleteAgentModal.agent?.name || 'este agente'}.
            </S.DeleteModalText>
            <S.DeletePasswordInput
              type="password"
              autoFocus
              placeholder="Contraseña Founders"
              value={deleteAgentModal.password}
              onChange={event => setDeleteAgentModal(current => ({ ...current, password: event.target.value, error: '' }))}
              onKeyDown={event => {
                if (event.key === 'Enter') confirmDeleteAgent();
                if (event.key === 'Escape') closeDeleteAgentModal();
              }}
            />
            {deleteAgentModal.error && <S.DeleteModalError>{deleteAgentModal.error}</S.DeleteModalError>}
            <S.DeleteModalActions>
              <S.DeleteCancelButton type="button" onClick={closeDeleteAgentModal}>
                Cancelar
              </S.DeleteCancelButton>
              <S.DeleteConfirmButton
                type="button"
                onClick={confirmDeleteAgent}
                disabled={deleteAgentMutation.isPending}
              >
                {deleteAgentMutation.isPending ? 'Eliminando...' : 'Eliminar'}
              </S.DeleteConfirmButton>
            </S.DeleteModalActions>
          </S.DeleteModalCard>
        </S.DeleteModalOverlay>
      )}

      {toast.show && (
        <S.ToastNotification $type={toast.type}>
          {toast.type === 'error' ? <IconWarning /> : <IconCheck />}
          <span>{toast.message}</span>
          <S.ToastCloseButton type="button" onClick={() => setToast(current => ({ ...current, show: false }))}>
            <IconClose />
          </S.ToastCloseButton>
        </S.ToastNotification>
      )}
    </S.ScreenWrapper>
  );
};
