import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useUIStore } from '../../../app/stores/uiStore';
import { apiUrl } from '../../../shared/utils/urls';
import { 
  IconIA, 
  IconClose, 
  IconMaximize,
  IconPlus
} from '../../../shared/components/Icons';
import * as S from './AIHubScreenStyled';

export const AIHubScreen = () => {
  const [launchAgent, setLaunchAgent] = useState(null);
  const openAgentModal = useUIStore(state => state.openAgentModal);

  // Fetch agents
  const { data: agents = [], isLoading } = useQuery({
    queryKey: ['aiAgents'],
    queryFn: () => fetch(apiUrl('/api/ai/agents')).then(r => r.ok ? r.json() : [])
  });

  if (launchAgent) {
    return (
      <S.IframeContainer>
        <S.IframeHeader>
          <div className="agent-info">
            <IconIA />
            <span>{launchAgent.name}</span>
          </div>
          <S.Button onClick={() => setLaunchAgent(null)}>
            <IconClose /> Salir del Chat
          </S.Button>
        </S.IframeHeader>
        {launchAgent.type === 'external' ? (
          <S.StyledIframe src={launchAgent.external_url} title={launchAgent.name} />
        ) : (
          <S.CustomAgentPlaceholder>
            <div>
              <IconIA />
              <h3>Interfaz de Agente Custom</h3>
              <p>Esta es una placeholder para la orquestación interna del agente.</p>
            </div>
          </S.CustomAgentPlaceholder>
        )}
      </S.IframeContainer>
    );
  }

  return (
    <S.ScreenWrapper>
      <S.Header>
        <div>
          <S.Title>Agentes / Asistentes</S.Title>
          <S.Subtitle>Gestiona y orquesta tus inteligencias artificiales desde un solo lugar.</S.Subtitle>
        </div>
        <S.CreateAgentButton onClick={openAgentModal}>
          <IconPlus />
          Nuevo Agente/Asistente
        </S.CreateAgentButton>
      </S.Header>

      <S.AgentsGrid>
        {isLoading ? (
          <p>Cargando agentes...</p>
        ) : (
          <>
            {agents.map(agent => (
              <S.AgentCard key={agent.id}>
                <S.AgentIcon>
                  {agent.icon_url ? <img src={agent.icon_url} alt={agent.name} /> : <IconIA />}
                </S.AgentIcon>
                <S.AgentName>{agent.name}</S.AgentName>
                <S.AgentDescription>{agent.description}</S.AgentDescription>
                <S.LaunchButton onClick={() => setLaunchAgent(agent)}>
                  <IconMaximize /> Abrir Chat
                </S.LaunchButton>
              </S.AgentCard>
            ))}
          </>
        )}
      </S.AgentsGrid>
    </S.ScreenWrapper>
  );
};

