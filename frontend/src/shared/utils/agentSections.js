export const AGENT_SECTION_OPTIONS = [
  { value: 'agent', label: 'Agente' },
  { value: 'assistant', label: 'Asistente' },
  { value: 'rag', label: 'RAG' },
];

const SECTION_VALUES = new Set(AGENT_SECTION_OPTIONS.map(option => option.value));

export const normalizeAgentSection = (value, fallback = 'agent') => {
  const normalized = String(value || '').trim().toLowerCase();
  if (SECTION_VALUES.has(normalized)) return normalized;
  return fallback;
};

export const inferAgentSection = (agent, fallback = 'agent') => {
  const config = agent?.config || {};
  const configured = normalizeAgentSection(
    config.sidebar_group || config.sidebarGroup || config.ai_section || config.aiSection,
    '',
  );

  if (configured) return configured;
  if (config.rag?.enabled) return 'rag';
  if (agent?.type === 'external') return 'assistant';
  return normalizeAgentSection(fallback);
};

export const getAgentSectionLabel = (value) => {
  const section = normalizeAgentSection(value);
  return AGENT_SECTION_OPTIONS.find(option => option.value === section)?.label || 'Agente';
};
