import React, { useEffect, useMemo, useState } from 'react';
import {
  clearClientLogs,
  downloadClientLogFile,
  formatClientLogs,
  getClientLogs,
  logClientEvent,
  subscribeClientLogs
} from '../../../shared/utils/clientLogger';
import { getRuntimeDiagnostics } from '../../../shared/utils/urls';
import { IconDownload, IconFile, IconRefresh, IconTrash } from '../../../shared/components/Icons';
import {
  ActionButton,
  Actions,
  Details,
  EmptyState,
  Header,
  LevelBadge,
  LogEntry,
  LogHeader,
  LogList,
  LogsWrapper,
  LogTitle,
  RuntimeItem,
  RuntimePanel,
  Subtitle,
  Title,
  TitleGroup
} from './LogsScreenStyled';

export const LogsScreen = () => {
  const [logs, setLogs] = useState(() => getClientLogs());
  const runtime = useMemo(() => getRuntimeDiagnostics(), []);

  useEffect(() => subscribeClientLogs(setLogs), []);

  const refreshLogs = () => setLogs(getClientLogs());

  const copyLogs = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(formatClientLogs(logs));
      logClientEvent('info', 'logs.screen', 'Client logs copied to clipboard', { count: logs.length });
      return;
    }

    logClientEvent('warn', 'logs.screen', 'Clipboard API is not available', { count: logs.length });
  };

  const clearLogs = () => {
    clearClientLogs();
    setLogs([]);
  };

  return (
    <LogsWrapper>
      <Header>
        <TitleGroup>
          <Title>Client logs</Title>
          <Subtitle>
            Eventos guardados en este navegador. Sirven para diagnosticar rutas, API base y errores de sincronizacion sin backend.
          </Subtitle>
        </TitleGroup>
        <Actions>
          <ActionButton onClick={refreshLogs} title="Actualizar logs">
            <IconRefresh />
            Actualizar
          </ActionButton>
          <ActionButton onClick={copyLogs} disabled={!logs.length} title="Copiar logs">
            <IconFile />
            Copiar
          </ActionButton>
          <ActionButton $primary onClick={downloadClientLogFile} disabled={!logs.length} title="Descargar client.log">
            <IconDownload />
            Descargar
          </ActionButton>
          <ActionButton $danger onClick={clearLogs} disabled={!logs.length} title="Limpiar logs">
            <IconTrash />
            Limpiar
          </ActionButton>
        </Actions>
      </Header>

      <RuntimePanel>
        <RuntimeItem>
          <span>URL</span>
          <strong>{runtime.href || '-'}</strong>
        </RuntimeItem>
        <RuntimeItem>
          <span>Base</span>
          <strong>{runtime.baseUrl}</strong>
        </RuntimeItem>
        <RuntimeItem>
          <span>API</span>
          <strong>{runtime.apiBaseUrl || 'relativa (/api)'}</strong>
        </RuntimeItem>
        <RuntimeItem>
          <span>Host</span>
          <strong>{runtime.hostname || '-'}</strong>
        </RuntimeItem>
      </RuntimePanel>

      {!logs.length ? (
        <EmptyState>Todavia no hay logs guardados en este navegador.</EmptyState>
      ) : (
        <LogList>
          {[...logs].reverse().map(log => (
            <LogEntry key={log.id} $level={log.level}>
              <LogHeader>
                <LogTitle>
                  <strong>{log.scope}</strong>
                  <span>{log.timestamp} - {log.message}</span>
                </LogTitle>
                <LevelBadge $level={log.level}>{log.level}</LevelBadge>
              </LogHeader>
              <Details>{JSON.stringify(log.details, null, 2)}</Details>
            </LogEntry>
          ))}
        </LogList>
      )}
    </LogsWrapper>
  );
};
