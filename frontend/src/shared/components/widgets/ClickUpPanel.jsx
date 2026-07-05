import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { apiUrl } from '../../utils/urls';

const WidgetCard = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: ${({ theme }) => theme.spacing[4]};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
`;

const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  max-height: 240px;
  overflow-y: auto;
  padding-right: 4px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.border};
    border-radius: 10px;
  }
`;

const TaskItem = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border-left: 4px solid ${({ $color }) => $color || '#e5e7eb'};
  
  p {
    color: ${({ theme }) => theme.color.text};
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid transparent;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.size.sm};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.accent};
    color: white;
  }
`;

const ClickUpPanel = () => {
  const navigate = useNavigate();
  const { data: tasks, isLoading, error } = useQuery({
    queryKey: ['clickupTasks'],
    queryFn: async () => {
      // Por ahora mockeamos o intentamos fetch si existe el endpoint
      const res = await fetch(apiUrl('/api/clickup/tasks'));
      if (res.status === 401) throw new Error('No ClickUp token found');
      if (!res.ok) throw new Error('Failed to fetch ClickUp tasks');
      return res.json();
    },
    retry: false
  });

  const handleConnect = () => {
    window.location.href = apiUrl('/api/auth/clickup/auth');
  };

  const isUnauthenticated = error && error.message.includes('No ClickUp token found');

  return (
    <WidgetCard>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconWrapper>
            <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </IconWrapper>
          <div>
            <Title>ClickUp</Title>
            <p style={{ fontSize: '10px', color: '#cbd5e1', fontWeight: '800' }}>
              {isLoading ? 'CARGANDO...' : (isUnauthenticated ? 'DESCONECTADO' : `${tasks?.length || 0} TAREAS`)}
            </p>
          </div>
        </div>
      </Header>
      
      <TaskList>
        {isLoading ? (
          <TaskItem><p style={{ fontSize: '12px' }}>Cargando tareas...</p></TaskItem>
        ) : isUnauthenticated ? (
          <TaskItem><p style={{ fontSize: '12px' }}>Debes conectar ClickUp para ver tus tareas.</p></TaskItem>
        ) : tasks?.length > 0 ? (
          tasks.slice(0, 2).map(task => (
            <TaskItem key={task.id} $color={task.status?.color}>
              <p style={{ fontSize: '12px', fontWeight: '700' }}>{task.name}</p>
            </TaskItem>
          ))
        ) : (
          <TaskItem><p style={{ fontSize: '12px' }}>No hay tareas pendientes.</p></TaskItem>
        )}
      </TaskList>

      {isUnauthenticated ? (
        <ActionButton onClick={handleConnect} style={{ backgroundColor: '#7b68ee', color: 'white' }}>
          Conectar ClickUp
        </ActionButton>
      ) : (
        <ActionButton onClick={() => window.open('https://app.clickup.com/90133071152/v/g/2ky5k19g-273', '_blank')}>
          Abrir Tablero
        </ActionButton>
      )}
    </WidgetCard>
  );
};

export default ClickUpPanel;
