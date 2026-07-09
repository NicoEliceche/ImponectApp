import React, { useEffect, useMemo, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiUrl } from '../utils/urls';
import {
  IconClose,
  IconCode,
  IconDatabase,
  IconFolder,
  IconIA,
  IconMCP,
  IconPencil,
  IconPlus,
  IconServer,
  IconSettings,
  IconShield,
  IconTrash,
} from './Icons';
import { useUIStore } from '../../app/stores/uiStore';
import * as S from './AgentModalStyled';

const createMcpServer = () => ({
  id: `mcp-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  name: 'filesystem',
  transport: 'stdio',
  command: 'cmd',
  args: '/c\nnpx\n-y\n@modelcontextprotocol/server-filesystem\nC:/Nico/Workspaces/ImponectApp',
  url: 'https://example.com/mcp',
  env: '',
  headers: 'Authorization=Bearer <token>',
  timeout: '60',
  protocolVersion: '2025-11-25',
  approvalPolicy: 'ask',
  alwaysLoad: true,
  toolFilter: '',
});

const defaultAgentForm = {
  name: '',
  description: '',
  type: 'custom',
  external_url: '',
  icon_url: '',
  config: {
    instructions: '',
    agent_mode: 'single',
    model_provider: 'openai',
    model: 'gpt-5.4-mini',
    handoff_description: '',
    output_type: 'text',
    output_schema: '',
    model_settings: {
      temperature: '0.2',
      top_p: '1',
      max_tokens: '4096',
      reasoning_effort: 'medium',
      verbosity: 'medium',
      tool_choice: 'auto',
      parallel_tool_calls: true,
      truncation: 'auto',
      store: true,
      prompt_cache_retention: 'in_memory',
      top_logprobs: '',
    },
    runtime: {
      max_turns: '12',
      timeout_seconds: '90',
      retry_attempts: '2',
      tool_not_found_behavior: 'return_error_to_model',
      memory_strategy: 'session',
      tracing_enabled: true,
    },
    guardrails: {
      input: '',
      output: '',
      pii_redaction: true,
      human_approval: 'tools',
    },
    rag: {
      enabled: true,
      assistant_id: '',
      vector_store_id: '',
      data_sources: 'documentos, drive, base de datos',
      ingestion_mode: 'manual',
      chunking_strategy: 'recursive',
      chunk_size_tokens: '800',
      chunk_overlap_tokens: '200',
      separators: '\\n\\n, \\n, espacio',
      embedding_model: 'text-embedding-3-large',
      vector_database: 'openai_vector_store',
      namespace: 'default',
      metadata_schema: 'source, owner, date, permissions, tags',
      attribute_filters: '',
      retrieval_mode: 'hybrid',
      top_k: '8',
      score_threshold: '0.2',
      max_context_tokens: '16000',
      reranker_model: 'auto',
      query_rewrite: true,
      citations: true,
      strict_grounding: true,
    },
    skills: {
      mode: 'basic',
      instructions: '',
      folder_name: 'custom-skill',
      name: 'custom-skill',
      description: '',
      trigger_examples: '',
      resources: 'scripts, references, assets',
      skill_md: '',
      files: '[\n  {\n    "path": "references/domain.md",\n    "purpose": "Contexto de dominio que se carga solo cuando hace falta"\n  },\n  {\n    "path": "scripts/task.py",\n    "purpose": "Automatizacion repetible o validacion deterministica"\n  }\n]',
    },
    mcp: {
      mode: 'guided',
      json: '',
      servers: [createMcpServer()],
    },
  },
};

const cloneDefaultAgentForm = () => ({
  ...defaultAgentForm,
  config: {
    ...defaultAgentForm.config,
    model_settings: { ...defaultAgentForm.config.model_settings },
    runtime: { ...defaultAgentForm.config.runtime },
    guardrails: { ...defaultAgentForm.config.guardrails },
    rag: { ...defaultAgentForm.config.rag },
    skills: { ...defaultAgentForm.config.skills },
    mcp: {
      ...defaultAgentForm.config.mcp,
      servers: [createMcpServer()],
    },
  },
});

const stringifyListValue = (value) => {
  if (Array.isArray(value)) return value.join(', ');
  return String(value || '');
};

const stringifyObjectValue = (value) => {
  if (!value || typeof value !== 'object') return String(value || '');
  return Object.entries(value).map(([key, item]) => `${key}=${item}`).join('\n');
};

const hydrateAgentForm = (agent) => {
  const base = cloneDefaultAgentForm();
  const config = agent?.config || {};
  const modelSettings = config.model_settings || {};
  const runtime = config.runtime || {};
  const guardrails = config.guardrails || {};
  const rag = config.rag || {};
  const skills = config.skills || {};
  const mcpServers = config.mcp_servers || config.mcpServers || null;

  return {
    ...base,
    name: agent?.name || '',
    description: agent?.description || '',
    type: agent?.type || 'custom',
    external_url: agent?.external_url || '',
    icon_url: agent?.icon_url || '',
    config: {
      ...base.config,
      instructions: config.instructions || '',
      agent_mode: config.agent_mode || base.config.agent_mode,
      model_provider: config.model_provider || base.config.model_provider,
      model: config.model || base.config.model,
      handoff_description: config.handoff_description || '',
      output_type: config.output_type || base.config.output_type,
      output_schema: config.output_schema || '',
      model_settings: {
        ...base.config.model_settings,
        temperature: String(modelSettings.temperature ?? base.config.model_settings.temperature),
        top_p: String(modelSettings.top_p ?? base.config.model_settings.top_p),
        max_tokens: String(modelSettings.max_tokens ?? base.config.model_settings.max_tokens),
        reasoning_effort: modelSettings.reasoning_effort || modelSettings.reasoning?.effort || base.config.model_settings.reasoning_effort,
        verbosity: modelSettings.verbosity || base.config.model_settings.verbosity,
        tool_choice: modelSettings.tool_choice || base.config.model_settings.tool_choice,
        parallel_tool_calls: modelSettings.parallel_tool_calls ?? base.config.model_settings.parallel_tool_calls,
        truncation: modelSettings.truncation || base.config.model_settings.truncation,
        store: modelSettings.store ?? base.config.model_settings.store,
        prompt_cache_retention: modelSettings.prompt_cache_retention || base.config.model_settings.prompt_cache_retention,
        top_logprobs: String(modelSettings.top_logprobs ?? ''),
      },
      runtime: {
        ...base.config.runtime,
        max_turns: String(runtime.max_turns ?? base.config.runtime.max_turns),
        timeout_seconds: String(runtime.timeout_seconds ?? base.config.runtime.timeout_seconds),
        retry_attempts: String(runtime.retry_attempts ?? base.config.runtime.retry_attempts),
        tool_not_found_behavior: runtime.tool_not_found_behavior || base.config.runtime.tool_not_found_behavior,
        memory_strategy: runtime.memory_strategy || base.config.runtime.memory_strategy,
        tracing_enabled: runtime.tracing_enabled ?? base.config.runtime.tracing_enabled,
      },
      guardrails: {
        ...base.config.guardrails,
        input: guardrails.input || '',
        output: guardrails.output || '',
        pii_redaction: guardrails.pii_redaction ?? base.config.guardrails.pii_redaction,
        human_approval: guardrails.human_approval || base.config.guardrails.human_approval,
      },
      rag: {
        ...base.config.rag,
        enabled: rag.enabled ?? base.config.rag.enabled,
        assistant_id: rag.assistant_id || '',
        vector_store_id: rag.vector_store_id || '',
        data_sources: stringifyListValue(rag.data_sources || base.config.rag.data_sources),
        ingestion_mode: rag.ingestion_mode || base.config.rag.ingestion_mode,
        chunking_strategy: rag.chunking_strategy || base.config.rag.chunking_strategy,
        chunk_size_tokens: String(rag.chunk_size_tokens ?? base.config.rag.chunk_size_tokens),
        chunk_overlap_tokens: String(rag.chunk_overlap_tokens ?? base.config.rag.chunk_overlap_tokens),
        separators: stringifyListValue(rag.separators || base.config.rag.separators),
        embedding_model: rag.embedding_model || base.config.rag.embedding_model,
        vector_database: rag.vector_database || base.config.rag.vector_database,
        namespace: rag.namespace || base.config.rag.namespace,
        metadata_schema: stringifyListValue(rag.metadata_schema || base.config.rag.metadata_schema),
        attribute_filters: stringifyObjectValue(rag.attribute_filters),
        retrieval_mode: rag.retrieval_mode || base.config.rag.retrieval_mode,
        top_k: String(rag.top_k ?? base.config.rag.top_k),
        score_threshold: String(rag.score_threshold ?? base.config.rag.score_threshold),
        max_context_tokens: String(rag.max_context_tokens ?? base.config.rag.max_context_tokens),
        reranker_model: rag.reranker_model || base.config.rag.reranker_model,
        query_rewrite: rag.query_rewrite ?? base.config.rag.query_rewrite,
        citations: rag.citations ?? base.config.rag.citations,
        strict_grounding: rag.strict_grounding ?? base.config.rag.strict_grounding,
      },
      skills: {
        ...base.config.skills,
        mode: skills.mode || base.config.skills.mode,
        instructions: skills.instructions || '',
        folder_name: skills.folder_name || base.config.skills.folder_name,
        name: skills.name || base.config.skills.name,
        description: skills.description || '',
        trigger_examples: skills.trigger_examples || '',
        resources: stringifyListValue(skills.resources || base.config.skills.resources),
        skill_md: skills.skill_md || '',
        files: Array.isArray(skills.files) ? JSON.stringify(skills.files, null, 2) : skills.files || base.config.skills.files,
      },
      mcp: {
        ...base.config.mcp,
        mode: mcpServers ? 'json' : base.config.mcp.mode,
        json: mcpServers ? JSON.stringify(mcpServers, null, 2) : '',
        servers: [createMcpServer()],
      },
    },
  };
};

const tabs = [
  { id: 'config', label: 'Configuración', icon: IconSettings },
  { id: 'rag', label: 'RAG (Datos)', icon: IconDatabase },
  { id: 'skills', label: 'Skills', icon: IconCode },
  { id: 'mcp', label: 'MCP Servers', icon: IconMCP },
];

const numberOrUndefined = (value) => {
  if (value === '' || value === null || value === undefined) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const parseList = (value) => (
  String(value || '')
    .split(/\n|,/)
    .map(item => item.trim())
    .filter(Boolean)
);

const parseKeyValueLines = (value) => {
  const entries = String(value || '')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separator = line.includes('=') ? '=' : ':';
      const [key, ...rest] = line.split(separator);
      return [key?.trim(), rest.join(separator).trim()];
    })
    .filter(([key]) => Boolean(key));

  if (!entries.length) return undefined;
  return Object.fromEntries(entries);
};

const cleanObject = (value) => {
  if (Array.isArray(value)) {
    return value
      .map(cleanObject)
      .filter(item => item !== undefined && item !== '');
  }

  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
      .map(([key, item]) => [key, cleanObject(item)])
      .filter(([, item]) => item !== undefined && item !== '');

    return entries.length ? Object.fromEntries(entries) : undefined;
  }

  if (value === '') return undefined;
  return value;
};

const buildGuidedMcpConfig = (servers) => ({
  mcpServers: servers.reduce((acc, server, index) => {
    const name = server.name?.trim() || `server_${index + 1}`;
    const common = {
      timeout: numberOrUndefined(server.timeout),
      protocolVersion: server.protocolVersion,
      approvalPolicy: server.approvalPolicy,
      alwaysLoad: server.alwaysLoad,
      toolFilter: parseList(server.toolFilter),
    };

    if (server.transport === 'stdio') {
      acc[name] = cleanObject({
        command: server.command,
        args: parseList(server.args),
        env: parseKeyValueLines(server.env),
        ...common,
      });
      return acc;
    }

    acc[name] = cleanObject({
      type: server.transport,
      url: server.url,
      headers: parseKeyValueLines(server.headers),
      ...common,
    });
    return acc;
  }, {}),
});

export const AgentModal = () => {
  const queryClient = useQueryClient();
  const { isAgentModalOpen, closeAgentModal, editingAgent } = useUIStore();
  const [activeTab, setActiveTab] = useState('config');
  const [validationError, setValidationError] = useState('');
  const [agentForm, setAgentForm] = useState(() => cloneDefaultAgentForm());
  const isEditingAgent = Boolean(editingAgent?.id);

  const generatedMcpConfig = useMemo(
    () => buildGuidedMcpConfig(agentForm.config.mcp.servers),
    [agentForm.config.mcp.servers],
  );

  const generatedMcpJson = useMemo(
    () => JSON.stringify(generatedMcpConfig, null, 2),
    [generatedMcpConfig],
  );

  const resetForm = () => {
    setAgentForm(cloneDefaultAgentForm());
    setValidationError('');
    setActiveTab('config');
  };

  useEffect(() => {
    if (!isAgentModalOpen) return;
    if (editingAgent) {
      setAgentForm(hydrateAgentForm(editingAgent));
      setValidationError('');
      setActiveTab('config');
      return;
    }

    resetForm();
  }, [isAgentModalOpen, editingAgent]);

  const updateField = (key, value) => {
    setAgentForm(prev => ({ ...prev, [key]: value }));
  };

  const updateConfig = (key, value) => {
    setAgentForm(prev => ({
      ...prev,
      config: { ...prev.config, [key]: value },
    }));
  };

  const updateNestedConfig = (section, key, value) => {
    setAgentForm(prev => ({
      ...prev,
      config: {
        ...prev.config,
        [section]: {
          ...prev.config[section],
          [key]: value,
        },
      },
    }));
  };

  const updateMcp = (key, value) => {
    setAgentForm(prev => ({
      ...prev,
      config: {
        ...prev.config,
        mcp: {
          ...prev.config.mcp,
          [key]: value,
        },
      },
    }));
  };

  const updateMcpServer = (id, key, value) => {
    setAgentForm(prev => ({
      ...prev,
      config: {
        ...prev.config,
        mcp: {
          ...prev.config.mcp,
          servers: prev.config.mcp.servers.map(server => (
            server.id === id ? { ...server, [key]: value } : server
          )),
        },
      },
    }));
  };

  const addMcpServer = () => {
    setAgentForm(prev => ({
      ...prev,
      config: {
        ...prev.config,
        mcp: {
          ...prev.config.mcp,
          servers: [...prev.config.mcp.servers, createMcpServer()],
        },
      },
    }));
  };

  const removeMcpServer = (id) => {
    setAgentForm(prev => ({
      ...prev,
      config: {
        ...prev.config,
        mcp: {
          ...prev.config.mcp,
          servers: prev.config.mcp.servers.filter(server => server.id !== id),
        },
      },
    }));
  };

  const saveAgentMutation = useMutation({
    mutationFn: (agentPayload) => fetch(apiUrl(isEditingAgent ? `/api/ai/agents/${editingAgent.id}` : '/api/ai/agents'), {
      method: isEditingAgent ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(agentPayload),
    }).then(r => r.json()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['aiAgents'] });
      closeAgentModal();
      resetForm();
    },
  });

  const buildPayload = () => {
    let mcpServers = generatedMcpConfig;

    if (agentForm.config.mcp.mode === 'json') {
      const rawJson = agentForm.config.mcp.json.trim();
      mcpServers = rawJson ? JSON.parse(rawJson) : {};
    }

    const config = cleanObject({
      instructions: agentForm.config.instructions,
      agent_mode: agentForm.config.agent_mode,
      model_provider: agentForm.config.model_provider,
      model: agentForm.config.model,
      handoff_description: agentForm.config.handoff_description,
      output_type: agentForm.config.output_type,
      output_schema: agentForm.config.output_schema,
      model_settings: {
        temperature: numberOrUndefined(agentForm.config.model_settings.temperature),
        top_p: numberOrUndefined(agentForm.config.model_settings.top_p),
        max_tokens: numberOrUndefined(agentForm.config.model_settings.max_tokens),
        reasoning: {
          effort: agentForm.config.model_settings.reasoning_effort,
        },
        verbosity: agentForm.config.model_settings.verbosity,
        tool_choice: agentForm.config.model_settings.tool_choice,
        parallel_tool_calls: agentForm.config.model_settings.parallel_tool_calls,
        truncation: agentForm.config.model_settings.truncation,
        store: agentForm.config.model_settings.store,
        prompt_cache_retention: agentForm.config.model_settings.prompt_cache_retention,
        top_logprobs: numberOrUndefined(agentForm.config.model_settings.top_logprobs),
      },
      runtime: {
        max_turns: numberOrUndefined(agentForm.config.runtime.max_turns),
        timeout_seconds: numberOrUndefined(agentForm.config.runtime.timeout_seconds),
        retry_attempts: numberOrUndefined(agentForm.config.runtime.retry_attempts),
        tool_not_found_behavior: agentForm.config.runtime.tool_not_found_behavior,
        memory_strategy: agentForm.config.runtime.memory_strategy,
        tracing_enabled: agentForm.config.runtime.tracing_enabled,
      },
      guardrails: agentForm.config.guardrails,
      rag: {
        ...agentForm.config.rag,
        chunk_size_tokens: numberOrUndefined(agentForm.config.rag.chunk_size_tokens),
        chunk_overlap_tokens: numberOrUndefined(agentForm.config.rag.chunk_overlap_tokens),
        top_k: numberOrUndefined(agentForm.config.rag.top_k),
        score_threshold: numberOrUndefined(agentForm.config.rag.score_threshold),
        max_context_tokens: numberOrUndefined(agentForm.config.rag.max_context_tokens),
        data_sources: parseList(agentForm.config.rag.data_sources),
        metadata_schema: parseList(agentForm.config.rag.metadata_schema),
        attribute_filters: parseKeyValueLines(agentForm.config.rag.attribute_filters),
      },
      skills: {
        ...agentForm.config.skills,
        resources: parseList(agentForm.config.skills.resources),
        files: agentForm.config.skills.mode === 'advanced'
          ? JSON.parse(agentForm.config.skills.files || '[]')
          : undefined,
      },
      mcp_servers: mcpServers,
    });

    return {
      name: agentForm.name,
      description: agentForm.description,
      type: agentForm.type,
      external_url: agentForm.type === 'external' ? agentForm.external_url : '',
      icon_url: agentForm.icon_url,
      config,
    };
  };

  const handleSaveAgent = () => {
    setValidationError('');

    try {
      saveAgentMutation.mutate(buildPayload());
    } catch (error) {
      setValidationError(error instanceof Error ? error.message : 'La configuración avanzada no es un JSON válido.');
    }
  };

  if (!isAgentModalOpen) return null;

  return (
    <S.ModalOverlay onClick={closeAgentModal}>
      <S.ModalUI onClick={event => event.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>{isEditingAgent ? <IconPencil /> : <IconPlus />} {isEditingAgent ? 'Editar Agente/Asistente' : 'Nuevo Agente/Asistente'}</S.ModalTitle>
          <S.CloseButton onClick={closeAgentModal}><IconClose /></S.CloseButton>
        </S.ModalHeader>

        <S.ModalContent>
          <S.SidebarTabs>
            {tabs.map(tab => (
              <S.TabItem
                key={tab.id}
                $active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon />
                {tab.label}
              </S.TabItem>
            ))}
          </S.SidebarTabs>

          <S.ConfigPane>
            {activeTab === 'config' && (
              <>
                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Identidad</S.SectionTitle>
                      <S.SectionSubtitle>Nombre, propósito, entrada externa y presentación visual.</S.SectionSubtitle>
                    </div>
                    <IconIA />
                  </S.SectionHeader>
                  <S.FieldGrid>
                    <S.FormGroup>
                      <label>Nombre del Agente</label>
                      <input
                        type="text"
                        placeholder="Asistente de Ventas"
                        value={agentForm.name}
                        onChange={event => updateField('name', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Tipo</label>
                      <select value={agentForm.type} onChange={event => updateField('type', event.target.value)}>
                        <option value="custom">Personalizado (Imponect AI)</option>
                        <option value="external">Externo (iFrame Link)</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Descripción</label>
                      <textarea
                        placeholder="Propósito operativo del agente"
                        value={agentForm.description}
                        onChange={event => updateField('description', event.target.value)}
                      />
                    </S.FormGroup>
                    {agentForm.type === 'external' && (
                      <S.FormGroup $wide>
                        <label>URL del Chat</label>
                        <input
                          type="text"
                          placeholder="https://chatgpt.com/g/..."
                          value={agentForm.external_url}
                          onChange={event => updateField('external_url', event.target.value)}
                        />
                      </S.FormGroup>
                    )}
                    <S.FormGroup $wide>
                      <label>URL del Icono</label>
                      <input
                        type="text"
                        placeholder="assets/mi-agente.png"
                        value={agentForm.icon_url}
                        onChange={event => updateField('icon_url', event.target.value)}
                      />
                    </S.FormGroup>
                  </S.FieldGrid>
                </S.SectionBlock>

                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Instrucciones y Orquestación</S.SectionTitle>
                      <S.SectionSubtitle>System prompt, handoffs, salida esperada y modo de ejecución.</S.SectionSubtitle>
                    </div>
                    <IconShield />
                  </S.SectionHeader>
                  <S.FieldGrid>
                    <S.FormGroup>
                      <label>Modo</label>
                      <select
                        value={agentForm.config.agent_mode}
                        onChange={event => updateConfig('agent_mode', event.target.value)}
                      >
                        <option value="single">Agente único</option>
                        <option value="router">Router multiagente</option>
                        <option value="specialist">Especialista delegable</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Tipo de salida</label>
                      <select
                        value={agentForm.config.output_type}
                        onChange={event => updateConfig('output_type', event.target.value)}
                      >
                        <option value="text">Texto libre</option>
                        <option value="json_schema">JSON Schema</option>
                        <option value="tool_result">Resultado de tool</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Instrucciones</label>
                      <textarea
                        placeholder="Define rol, límites, tono, criterios de éxito y formato de respuesta"
                        value={agentForm.config.instructions}
                        onChange={event => updateConfig('instructions', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Descripción para Handoff</label>
                      <textarea
                        placeholder="Cuándo otros agentes deberían delegar en este agente"
                        value={agentForm.config.handoff_description}
                        onChange={event => updateConfig('handoff_description', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Output Schema</label>
                      <S.CodeTextarea
                        as="textarea"
                        placeholder='{"type":"object","properties":{"answer":{"type":"string"}}}'
                        value={agentForm.config.output_schema}
                        onChange={event => updateConfig('output_schema', event.target.value)}
                      />
                    </S.FormGroup>
                  </S.FieldGrid>
                </S.SectionBlock>

                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Modelo</S.SectionTitle>
                      <S.SectionSubtitle>Proveedor, sampling, razonamiento, uso de tools y persistencia.</S.SectionSubtitle>
                    </div>
                    <IconSettings />
                  </S.SectionHeader>
                  <S.FieldGrid>
                    <S.FormGroup>
                      <label>Proveedor</label>
                      <select
                        value={agentForm.config.model_provider}
                        onChange={event => updateConfig('model_provider', event.target.value)}
                      >
                        <option value="openai">OpenAI</option>
                        <option value="anthropic">Anthropic</option>
                        <option value="google">Google</option>
                        <option value="local">Local / OpenRouter</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Modelo</label>
                      <input
                        type="text"
                        value={agentForm.config.model}
                        onChange={event => updateConfig('model', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Temperature</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="2"
                        value={agentForm.config.model_settings.temperature}
                        onChange={event => updateNestedConfig('model_settings', 'temperature', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Top P</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="1"
                        value={agentForm.config.model_settings.top_p}
                        onChange={event => updateNestedConfig('model_settings', 'top_p', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Max Tokens</label>
                      <input
                        type="number"
                        value={agentForm.config.model_settings.max_tokens}
                        onChange={event => updateNestedConfig('model_settings', 'max_tokens', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Reasoning Effort</label>
                      <select
                        value={agentForm.config.model_settings.reasoning_effort}
                        onChange={event => updateNestedConfig('model_settings', 'reasoning_effort', event.target.value)}
                      >
                        <option value="none">None</option>
                        <option value="minimal">Minimal</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="xhigh">XHigh</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Verbosity</label>
                      <select
                        value={agentForm.config.model_settings.verbosity}
                        onChange={event => updateNestedConfig('model_settings', 'verbosity', event.target.value)}
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Tool Choice</label>
                      <select
                        value={agentForm.config.model_settings.tool_choice}
                        onChange={event => updateNestedConfig('model_settings', 'tool_choice', event.target.value)}
                      >
                        <option value="auto">Auto</option>
                        <option value="required">Required</option>
                        <option value="none">None</option>
                        <option value="file_search">File Search</option>
                        <option value="web_search">Web Search</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Truncation</label>
                      <select
                        value={agentForm.config.model_settings.truncation}
                        onChange={event => updateNestedConfig('model_settings', 'truncation', event.target.value)}
                      >
                        <option value="auto">Auto</option>
                        <option value="disabled">Disabled</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Prompt Cache</label>
                      <select
                        value={agentForm.config.model_settings.prompt_cache_retention}
                        onChange={event => updateNestedConfig('model_settings', 'prompt_cache_retention', event.target.value)}
                      >
                        <option value="in_memory">In memory</option>
                        <option value="24h">24h</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Top Logprobs</label>
                      <input
                        type="number"
                        placeholder="Opcional"
                        value={agentForm.config.model_settings.top_logprobs}
                        onChange={event => updateNestedConfig('model_settings', 'top_logprobs', event.target.value)}
                      />
                    </S.FormGroup>
                  </S.FieldGrid>
                  <S.InlineActions>
                    <S.CheckboxRow>
                      <input
                        type="checkbox"
                        checked={agentForm.config.model_settings.parallel_tool_calls}
                        onChange={event => updateNestedConfig('model_settings', 'parallel_tool_calls', event.target.checked)}
                      />
                      Parallel tool calls
                    </S.CheckboxRow>
                    <S.CheckboxRow>
                      <input
                        type="checkbox"
                        checked={agentForm.config.model_settings.store}
                        onChange={event => updateNestedConfig('model_settings', 'store', event.target.checked)}
                      />
                      Store responses
                    </S.CheckboxRow>
                  </S.InlineActions>
                </S.SectionBlock>

                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Runtime y Seguridad</S.SectionTitle>
                      <S.SectionSubtitle>Turnos, timeout, memoria, trazas, approval y guardrails.</S.SectionSubtitle>
                    </div>
                    <IconShield />
                  </S.SectionHeader>
                  <S.FieldGrid>
                    <S.FormGroup>
                      <label>Max Turns</label>
                      <input
                        type="number"
                        value={agentForm.config.runtime.max_turns}
                        onChange={event => updateNestedConfig('runtime', 'max_turns', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Timeout Segundos</label>
                      <input
                        type="number"
                        value={agentForm.config.runtime.timeout_seconds}
                        onChange={event => updateNestedConfig('runtime', 'timeout_seconds', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Retries</label>
                      <input
                        type="number"
                        value={agentForm.config.runtime.retry_attempts}
                        onChange={event => updateNestedConfig('runtime', 'retry_attempts', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Tool Not Found</label>
                      <select
                        value={agentForm.config.runtime.tool_not_found_behavior}
                        onChange={event => updateNestedConfig('runtime', 'tool_not_found_behavior', event.target.value)}
                      >
                        <option value="raise_error">Raise error</option>
                        <option value="return_error_to_model">Return error to model</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Memoria</label>
                      <select
                        value={agentForm.config.runtime.memory_strategy}
                        onChange={event => updateNestedConfig('runtime', 'memory_strategy', event.target.value)}
                      >
                        <option value="none">Sin memoria</option>
                        <option value="session">Sesión</option>
                        <option value="persistent">Persistente</option>
                        <option value="summarized">Resumida</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Human Approval</label>
                      <select
                        value={agentForm.config.guardrails.human_approval}
                        onChange={event => updateNestedConfig('guardrails', 'human_approval', event.target.value)}
                      >
                        <option value="none">None</option>
                        <option value="tools">Tools sensibles</option>
                        <option value="all_tools">Todas las tools</option>
                        <option value="external_write">Escritura externa</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Input Guardrails</label>
                      <textarea
                        placeholder="Validaciones antes de llamar al modelo"
                        value={agentForm.config.guardrails.input}
                        onChange={event => updateNestedConfig('guardrails', 'input', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Output Guardrails</label>
                      <textarea
                        placeholder="Validaciones antes de entregar la respuesta"
                        value={agentForm.config.guardrails.output}
                        onChange={event => updateNestedConfig('guardrails', 'output', event.target.value)}
                      />
                    </S.FormGroup>
                  </S.FieldGrid>
                  <S.InlineActions>
                    <S.CheckboxRow>
                      <input
                        type="checkbox"
                        checked={agentForm.config.runtime.tracing_enabled}
                        onChange={event => updateNestedConfig('runtime', 'tracing_enabled', event.target.checked)}
                      />
                      Tracing
                    </S.CheckboxRow>
                    <S.CheckboxRow>
                      <input
                        type="checkbox"
                        checked={agentForm.config.guardrails.pii_redaction}
                        onChange={event => updateNestedConfig('guardrails', 'pii_redaction', event.target.checked)}
                      />
                      PII redaction
                    </S.CheckboxRow>
                  </S.InlineActions>
                </S.SectionBlock>
              </>
            )}

            {activeTab === 'rag' && (
              <>
                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Fuentes e Ingesta</S.SectionTitle>
                      <S.SectionSubtitle>Documentos, conectores, IDs de plataforma e indexación.</S.SectionSubtitle>
                    </div>
                    <IconFolder />
                  </S.SectionHeader>
                  <S.FieldGrid>
                    <S.FormGroup>
                      <label>Assistant ID</label>
                      <input
                        type="text"
                        placeholder="asst_..."
                        value={agentForm.config.rag.assistant_id}
                        onChange={event => updateNestedConfig('rag', 'assistant_id', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Vector Store ID</label>
                      <input
                        type="text"
                        placeholder="vs_..."
                        value={agentForm.config.rag.vector_store_id}
                        onChange={event => updateNestedConfig('rag', 'vector_store_id', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Ingesta</label>
                      <select
                        value={agentForm.config.rag.ingestion_mode}
                        onChange={event => updateNestedConfig('rag', 'ingestion_mode', event.target.value)}
                      >
                        <option value="manual">Manual</option>
                        <option value="scheduled">Programada</option>
                        <option value="webhook">Webhook</option>
                        <option value="realtime">Tiempo real</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Fuentes</label>
                      <textarea
                        placeholder="documentos, drive, notion, postgres, web"
                        value={agentForm.config.rag.data_sources}
                        onChange={event => updateNestedConfig('rag', 'data_sources', event.target.value)}
                      />
                    </S.FormGroup>
                  </S.FieldGrid>
                  <S.CheckboxRow>
                    <input
                      type="checkbox"
                      checked={agentForm.config.rag.enabled}
                      onChange={event => updateNestedConfig('rag', 'enabled', event.target.checked)}
                    />
                    RAG activo
                  </S.CheckboxRow>
                </S.SectionBlock>

                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Chunking y Embeddings</S.SectionTitle>
                      <S.SectionSubtitle>Segmentación, overlap, modelo de embedding y almacenamiento vectorial.</S.SectionSubtitle>
                    </div>
                    <IconDatabase />
                  </S.SectionHeader>
                  <S.FieldGrid>
                    <S.FormGroup>
                      <label>Estrategia</label>
                      <select
                        value={agentForm.config.rag.chunking_strategy}
                        onChange={event => updateNestedConfig('rag', 'chunking_strategy', event.target.value)}
                      >
                        <option value="recursive">Recursive</option>
                        <option value="semantic">Semantic</option>
                        <option value="markdown">Markdown / headers</option>
                        <option value="parent_child">Parent-child</option>
                        <option value="fixed">Fixed token</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Chunk Tokens</label>
                      <input
                        type="number"
                        value={agentForm.config.rag.chunk_size_tokens}
                        onChange={event => updateNestedConfig('rag', 'chunk_size_tokens', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Overlap Tokens</label>
                      <input
                        type="number"
                        value={agentForm.config.rag.chunk_overlap_tokens}
                        onChange={event => updateNestedConfig('rag', 'chunk_overlap_tokens', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Embedding Model</label>
                      <input
                        type="text"
                        value={agentForm.config.rag.embedding_model}
                        onChange={event => updateNestedConfig('rag', 'embedding_model', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Vector DB</label>
                      <select
                        value={agentForm.config.rag.vector_database}
                        onChange={event => updateNestedConfig('rag', 'vector_database', event.target.value)}
                      >
                        <option value="openai_vector_store">OpenAI Vector Store</option>
                        <option value="pgvector">Postgres pgvector</option>
                        <option value="pinecone">Pinecone</option>
                        <option value="qdrant">Qdrant</option>
                        <option value="weaviate">Weaviate</option>
                        <option value="faiss">FAISS</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Namespace</label>
                      <input
                        type="text"
                        value={agentForm.config.rag.namespace}
                        onChange={event => updateNestedConfig('rag', 'namespace', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Separadores</label>
                      <input
                        type="text"
                        value={agentForm.config.rag.separators}
                        onChange={event => updateNestedConfig('rag', 'separators', event.target.value)}
                      />
                    </S.FormGroup>
                  </S.FieldGrid>
                </S.SectionBlock>

                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Retrieval</S.SectionTitle>
                      <S.SectionSubtitle>Búsqueda, filtros, rerank, presupuesto de contexto y grounding.</S.SectionSubtitle>
                    </div>
                    <IconShield />
                  </S.SectionHeader>
                  <S.FieldGrid>
                    <S.FormGroup>
                      <label>Modo</label>
                      <select
                        value={agentForm.config.rag.retrieval_mode}
                        onChange={event => updateNestedConfig('rag', 'retrieval_mode', event.target.value)}
                      >
                        <option value="semantic">Semantic</option>
                        <option value="keyword">Keyword / BM25</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="graph">Graph RAG</option>
                        <option value="agentic">Agentic retrieval</option>
                      </select>
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Top K</label>
                      <input
                        type="number"
                        value={agentForm.config.rag.top_k}
                        onChange={event => updateNestedConfig('rag', 'top_k', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Score Threshold</label>
                      <input
                        type="number"
                        step="0.05"
                        value={agentForm.config.rag.score_threshold}
                        onChange={event => updateNestedConfig('rag', 'score_threshold', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Context Tokens</label>
                      <input
                        type="number"
                        value={agentForm.config.rag.max_context_tokens}
                        onChange={event => updateNestedConfig('rag', 'max_context_tokens', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup>
                      <label>Reranker</label>
                      <input
                        type="text"
                        value={agentForm.config.rag.reranker_model}
                        onChange={event => updateNestedConfig('rag', 'reranker_model', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Metadata Schema</label>
                      <textarea
                        value={agentForm.config.rag.metadata_schema}
                        onChange={event => updateNestedConfig('rag', 'metadata_schema', event.target.value)}
                      />
                    </S.FormGroup>
                    <S.FormGroup $wide>
                      <label>Attribute Filters</label>
                      <textarea
                        placeholder="owner=ventas&#10;permissions=internal"
                        value={agentForm.config.rag.attribute_filters}
                        onChange={event => updateNestedConfig('rag', 'attribute_filters', event.target.value)}
                      />
                    </S.FormGroup>
                  </S.FieldGrid>
                  <S.InlineActions>
                    <S.CheckboxRow>
                      <input
                        type="checkbox"
                        checked={agentForm.config.rag.query_rewrite}
                        onChange={event => updateNestedConfig('rag', 'query_rewrite', event.target.checked)}
                      />
                      Query rewrite
                    </S.CheckboxRow>
                    <S.CheckboxRow>
                      <input
                        type="checkbox"
                        checked={agentForm.config.rag.citations}
                        onChange={event => updateNestedConfig('rag', 'citations', event.target.checked)}
                      />
                      Citas
                    </S.CheckboxRow>
                    <S.CheckboxRow>
                      <input
                        type="checkbox"
                        checked={agentForm.config.rag.strict_grounding}
                        onChange={event => updateNestedConfig('rag', 'strict_grounding', event.target.checked)}
                      />
                      Strict grounding
                    </S.CheckboxRow>
                  </S.InlineActions>
                </S.SectionBlock>
              </>
            )}

            {activeTab === 'skills' && (
              <>
                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Modo de Skill</S.SectionTitle>
                      <S.SectionSubtitle>Instrucciones simples o estructura profesional completa.</S.SectionSubtitle>
                    </div>
                    <S.SegmentedControl>
                      <S.SegmentButton
                        $active={agentForm.config.skills.mode === 'basic'}
                        onClick={() => updateNestedConfig('skills', 'mode', 'basic')}
                      >
                        Básico
                      </S.SegmentButton>
                      <S.SegmentButton
                        $active={agentForm.config.skills.mode === 'advanced'}
                        onClick={() => updateNestedConfig('skills', 'mode', 'advanced')}
                      >
                        Avanzado
                      </S.SegmentButton>
                    </S.SegmentedControl>
                  </S.SectionHeader>
                  {agentForm.config.skills.mode === 'basic' ? (
                    <S.FormGroup $wide>
                      <label>Instrucciones de Skill</label>
                      <textarea
                        placeholder="Describe capacidades, reglas, pasos, herramientas y límites"
                        value={agentForm.config.skills.instructions}
                        onChange={event => updateNestedConfig('skills', 'instructions', event.target.value)}
                      />
                    </S.FormGroup>
                  ) : (
                    <S.FieldGrid>
                      <S.FormGroup>
                        <label>Folder Name</label>
                        <input
                          type="text"
                          value={agentForm.config.skills.folder_name}
                          onChange={event => updateNestedConfig('skills', 'folder_name', event.target.value)}
                        />
                      </S.FormGroup>
                      <S.FormGroup>
                        <label>Skill Name</label>
                        <input
                          type="text"
                          value={agentForm.config.skills.name}
                          onChange={event => updateNestedConfig('skills', 'name', event.target.value)}
                        />
                      </S.FormGroup>
                      <S.FormGroup $wide>
                        <label>Description</label>
                        <textarea
                          placeholder="Qué hace y cuándo debe activarse"
                          value={agentForm.config.skills.description}
                          onChange={event => updateNestedConfig('skills', 'description', event.target.value)}
                        />
                      </S.FormGroup>
                      <S.FormGroup $wide>
                        <label>Trigger Examples</label>
                        <textarea
                          placeholder="Pedidos reales que deberían activar esta skill"
                          value={agentForm.config.skills.trigger_examples}
                          onChange={event => updateNestedConfig('skills', 'trigger_examples', event.target.value)}
                        />
                      </S.FormGroup>
                      <S.FormGroup $wide>
                        <label>Recursos</label>
                        <input
                          type="text"
                          value={agentForm.config.skills.resources}
                          onChange={event => updateNestedConfig('skills', 'resources', event.target.value)}
                        />
                      </S.FormGroup>
                      <S.FormGroup $wide>
                        <label>SKILL.md</label>
                        <S.CodeTextarea
                          as="textarea"
                          $large
                          placeholder={'---\nname: custom-skill\ndescription: ...\n---\n\n# Custom Skill\n\nInstrucciones...'}
                          value={agentForm.config.skills.skill_md}
                          onChange={event => updateNestedConfig('skills', 'skill_md', event.target.value)}
                        />
                      </S.FormGroup>
                      <S.FormGroup $wide>
                        <label>Archivos Avanzados</label>
                        <S.CodeTextarea
                          as="textarea"
                          $large
                          value={agentForm.config.skills.files}
                          onChange={event => updateNestedConfig('skills', 'files', event.target.value)}
                        />
                      </S.FormGroup>
                    </S.FieldGrid>
                  )}
                </S.SectionBlock>

                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Estructura Esperada</S.SectionTitle>
                      <S.SectionSubtitle>SKILL.md, agents/openai.yaml y recursos opcionales por carpeta.</S.SectionSubtitle>
                    </div>
                    <IconPencil />
                  </S.SectionHeader>
                  <S.GeneratedJson>{`skill-name/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── scripts/
├── references/
└── assets/`}</S.GeneratedJson>
                </S.SectionBlock>
              </>
            )}

            {activeTab === 'mcp' && (
              <>
                <S.SectionBlock>
                  <S.SectionHeader>
                    <div>
                      <S.SectionTitle>Configuración MCP</S.SectionTitle>
                      <S.SectionSubtitle>Formulario guiado o JSON directo para servidores locales/remotos.</S.SectionSubtitle>
                    </div>
                    <S.SegmentedControl>
                      <S.SegmentButton
                        $active={agentForm.config.mcp.mode === 'guided'}
                        onClick={() => updateMcp('mode', 'guided')}
                      >
                        Guiado
                      </S.SegmentButton>
                      <S.SegmentButton
                        $active={agentForm.config.mcp.mode === 'json'}
                        onClick={() => updateMcp('mode', 'json')}
                      >
                        JSON
                      </S.SegmentButton>
                    </S.SegmentedControl>
                  </S.SectionHeader>

                  {agentForm.config.mcp.mode === 'json' ? (
                    <S.FormGroup $wide>
                      <label>mcpServers JSON</label>
                      <S.CodeTextarea
                        as="textarea"
                        $large
                        placeholder={generatedMcpJson}
                        value={agentForm.config.mcp.json}
                        onChange={event => updateMcp('json', event.target.value)}
                      />
                    </S.FormGroup>
                  ) : (
                    <>
                      {agentForm.config.mcp.servers.map((server, index) => (
                        <S.ServerCard key={server.id}>
                          <S.ServerHeader>
                            <S.SectionTitle>Server {index + 1}</S.SectionTitle>
                            <S.InlineActions>
                              <IconServer />
                              {agentForm.config.mcp.servers.length > 1 && (
                                <S.SmallButton onClick={() => removeMcpServer(server.id)}>
                                  <IconTrash />
                                  Quitar
                                </S.SmallButton>
                              )}
                            </S.InlineActions>
                          </S.ServerHeader>
                          <S.FieldGrid>
                            <S.FormGroup>
                              <label>Nombre</label>
                              <input
                                type="text"
                                value={server.name}
                                onChange={event => updateMcpServer(server.id, 'name', event.target.value)}
                              />
                            </S.FormGroup>
                            <S.FormGroup>
                              <label>Transport</label>
                              <select
                                value={server.transport}
                                onChange={event => updateMcpServer(server.id, 'transport', event.target.value)}
                              >
                                <option value="stdio">stdio</option>
                                <option value="http">Streamable HTTP</option>
                                <option value="sse">SSE legacy</option>
                                <option value="ws">WebSocket</option>
                              </select>
                            </S.FormGroup>
                            <S.FormGroup>
                              <label>Timeout</label>
                              <input
                                type="number"
                                value={server.timeout}
                                onChange={event => updateMcpServer(server.id, 'timeout', event.target.value)}
                              />
                            </S.FormGroup>
                            <S.FormGroup>
                              <label>Protocol Version</label>
                              <input
                                type="text"
                                value={server.protocolVersion}
                                onChange={event => updateMcpServer(server.id, 'protocolVersion', event.target.value)}
                              />
                            </S.FormGroup>
                            <S.FormGroup>
                              <label>Approval Policy</label>
                              <select
                                value={server.approvalPolicy}
                                onChange={event => updateMcpServer(server.id, 'approvalPolicy', event.target.value)}
                              >
                                <option value="ask">Ask</option>
                                <option value="never">Never</option>
                                <option value="always">Always</option>
                              </select>
                            </S.FormGroup>
                            {server.transport === 'stdio' ? (
                              <>
                                <S.FormGroup>
                                  <label>Command</label>
                                  <input
                                    type="text"
                                    value={server.command}
                                    onChange={event => updateMcpServer(server.id, 'command', event.target.value)}
                                  />
                                </S.FormGroup>
                                <S.FormGroup $wide>
                                  <label>Args</label>
                                  <textarea
                                    value={server.args}
                                    onChange={event => updateMcpServer(server.id, 'args', event.target.value)}
                                  />
                                </S.FormGroup>
                                <S.FormGroup $wide>
                                  <label>Env</label>
                                  <textarea
                                    placeholder="API_KEY=value"
                                    value={server.env}
                                    onChange={event => updateMcpServer(server.id, 'env', event.target.value)}
                                  />
                                </S.FormGroup>
                              </>
                            ) : (
                              <>
                                <S.FormGroup $wide>
                                  <label>Address</label>
                                  <input
                                    type="text"
                                    value={server.url}
                                    onChange={event => updateMcpServer(server.id, 'url', event.target.value)}
                                  />
                                </S.FormGroup>
                                <S.FormGroup $wide>
                                  <label>Headers</label>
                                  <textarea
                                    value={server.headers}
                                    onChange={event => updateMcpServer(server.id, 'headers', event.target.value)}
                                  />
                                </S.FormGroup>
                              </>
                            )}
                            <S.FormGroup $wide>
                              <label>Tool Filter</label>
                              <input
                                type="text"
                                placeholder="read_file, search, query"
                                value={server.toolFilter}
                                onChange={event => updateMcpServer(server.id, 'toolFilter', event.target.value)}
                              />
                            </S.FormGroup>
                          </S.FieldGrid>
                          <S.CheckboxRow>
                            <input
                              type="checkbox"
                              checked={server.alwaysLoad}
                              onChange={event => updateMcpServer(server.id, 'alwaysLoad', event.target.checked)}
                            />
                            Always load
                          </S.CheckboxRow>
                        </S.ServerCard>
                      ))}
                      <S.SmallButton onClick={addMcpServer}>
                        <IconPlus />
                        Agregar MCP Server
                      </S.SmallButton>
                    </>
                  )}
                </S.SectionBlock>

                {agentForm.config.mcp.mode === 'guided' && (
                  <S.SectionBlock>
                    <S.SectionHeader>
                      <div>
                        <S.SectionTitle>JSON Generado</S.SectionTitle>
                        <S.SectionSubtitle>Payload que se guarda en la configuración del agente.</S.SectionSubtitle>
                      </div>
                      <IconMCP />
                    </S.SectionHeader>
                    <S.GeneratedJson>{generatedMcpJson}</S.GeneratedJson>
                  </S.SectionBlock>
                )}
              </>
            )}
          </S.ConfigPane>
        </S.ModalContent>

        <S.ModalFooter>
          {validationError && <S.ErrorText>{validationError}</S.ErrorText>}
          <S.Button onClick={closeAgentModal}>Cancelar</S.Button>
          <S.Button
            $variant="primary"
            onClick={handleSaveAgent}
            disabled={saveAgentMutation.isPending}
          >
            {isEditingAgent ? 'Actualizar Agente' : 'Guardar Agente'}
          </S.Button>
        </S.ModalFooter>
      </S.ModalUI>
    </S.ModalOverlay>
  );
};
