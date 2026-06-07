import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { IconRefresh } from '../../../shared/components/Icons';

const Card = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  min-width: 0;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MiniCard = styled.div`
  padding: ${({ theme }) => theme.spacing[6]};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50]};
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    transform: translateY(-2px);
  }
`;

const MiniHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const MiniHeaderText = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Logo = styled.img`
  width: 3rem; /* Increased from 2.5rem */
  height: 3rem;
  object-fit: contain;
  background: white;
  padding: 2px; /* Reduced from 4px to minimize white space */
  border-radius: ${({ theme }) => theme.radius.lg};
`;

const MiniTitle = styled.span`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base}; /* Increased to base (0.875rem) */
  line-height: 1.2;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: ${({ $primary, theme }) => $primary ? '#c6893f' : (theme.isDark ? 'rgba(255,255,255,0.05)' : '#fff')};
  color: ${({ $primary, theme }) => $primary ? 'white' : theme.color.text};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ $primary, theme }) => $primary ? 'transparent' : theme.color.border};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.size.sm}; /* Increased to sm (0.75rem) */
  transition: all 0.2s;

  &:hover {
    background-color: ${({ $primary, theme }) => $primary ? '#d4a373' : theme.color.neutral[100]};
  }
`;

const StatusText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 10px;
  font-weight: 800;
  margin-top: 0.25rem;
  color: ${({ $error }) => $error ? '#ef4444' : '#22c55e'};
`;

const SyncDot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
  box-shadow: 0 0 8px currentColor;
`;

const SyncButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
    transform: translateY(-1px);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

const QuickLinks = () => {
  const navigate = useNavigate();

  const { data: driveItems, error: driveError, refetch: refetchDrive, isFetching: isFetchingDrive } = useQuery({
    queryKey: ['oneDriveExplorer'],
    queryFn: async () => {
      const res = await fetch('/api/onedrive/files');
      if (!res.ok) throw new Error();
      return res.json();
    },
    retry: false
  });

  const oneDriveStatus = driveError ? 'DESCONECTADO' : (driveItems ? 'SINCRONIZADO' : 'CONECTANDO...');

  return (
    <Card>
      <Title>Accesos Rápidos</Title>
      <Grid>
        {/* OneDrive */}
        <MiniCard>
          <MiniHeader>
            <Logo src="/assets/onedrive_logo.png" alt="OneDrive" />
            <MiniHeaderText>
              <MiniTitle>Documentos (OneDrive)</MiniTitle>
              <StatusText $error={!!driveError}>
                <SyncDot /> {oneDriveStatus}
              </StatusText>
            </MiniHeaderText>
            <SyncButton onClick={() => refetchDrive()} title="Sincronizar OneDrive">
              <IconRefresh className={isFetchingDrive ? 'animate-spin' : ''} />
            </SyncButton>
          </MiniHeader>
          <ActionButton $primary onClick={() => navigate('/documents')}>
            Ver Archivos
          </ActionButton>
        </MiniCard>

        {/* ClickUp */}
        <MiniCard>
          <MiniHeader>
            <Logo src="/assets/clickup_logo.png" alt="ClickUp" />
            <MiniTitle>Tablero Principal (ClickUp)</MiniTitle>
          </MiniHeader>
          <ActionButton $primary onClick={() => window.open('https://app.clickup.com/90133071152/v/g/2ky5k19g-273', '_blank')}>
            Abrir Tablero
          </ActionButton>
        </MiniCard>

        {/* Web Principal */}
        <MiniCard>
          <MiniHeader>
            <Logo src="/assets/imponect_logo.jpg" alt="Imponect" />
            <MiniTitle>Web Principal</MiniTitle>
          </MiniHeader>
          <ActionButton $primary onClick={() => window.open('https://www.imponect.com', '_blank')}>
            Ir a Imponect.com
          </ActionButton>
        </MiniCard>

        {/* Email */}
        <MiniCard>
          <MiniHeader>
            <Logo src="/assets/imponect_email_logo.svg" alt="Email Imponect" />
            <MiniTitle>Email</MiniTitle>
          </MiniHeader>
          <ActionButton $primary onClick={() => navigate('/email')}>
            Revisar correo
          </ActionButton>
        </MiniCard>
      </Grid>
    </Card>
  );
};

export default QuickLinks;
