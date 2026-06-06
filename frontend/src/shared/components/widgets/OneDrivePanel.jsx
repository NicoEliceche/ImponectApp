import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useOneDriveFiles } from '../../../app/services/oneDriveService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../app/stores/authStore';
import { useOneDriveActions } from '../../../features/documents/api/oneDriveApi';
import { IconFile, IconWarning, IconFolder, IconDownload } from '../Icons';
import MoveModal from './MoveModal';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const WidgetCard = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  
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
  background-color: #2b5797;
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

const StatusText = styled.p`
  font-size: 10px;
  font-weight: 800;
  color: ${({ $isOnline, theme }) => $isOnline ? theme.color.success : theme.color.error};
  text-transform: uppercase;
`;

const RefreshButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.textSecondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : theme.color.neutral[100]};
    color: ${({ theme }) => theme.color.primary};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    ${({ $isRefreshing }) => $isRefreshing && css`animation: ${rotate} 1s linear infinite;`}
  }
`;

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  flex: 1;
  overflow-y: auto;
  max-height: 240px;
  padding-right: 4px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.color.border}; border-radius: 10px; }
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.color.textSecondary};
  cursor: pointer;
  background-color: ${({ $selected, theme }) => $selected ? (theme.isDark ? 'rgba(66, 153, 225, 0.2)' : '#ebf8ff') : (theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50])};
  border: 1px solid ${({ $selected, theme }) => $selected ? theme.color.accent : 'transparent'};
  
  &:hover {
    background-color: ${({ $selected, theme }) => $selected ? (theme.isDark ? 'rgba(66, 153, 225, 0.25)' : '#e2f2ff') : (theme.isDark ? 'rgba(255,255,255,0.08)' : theme.color.neutral[100])};
    color: ${({ theme }) => theme.color.text};
  }

  svg { width: 1rem; height: 1rem; margin-right: 0.75rem; }
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
  margin-top: auto;

  &:hover { background-color: ${({ theme }) => theme.color.primary}; color: white; border-color: ${({ theme }) => theme.color.accent}; }
`;

const ContextMenu = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 1000;
  min-width: 180px;
  color: ${({ theme }) => theme.color.text};
`;

const MenuItem = styled.div`
  padding: 0.625rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:hover { background: ${({ $isDelete, theme }) => $isDelete ? '#fef2f2' : theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'}; color: ${({ $isDelete }) => $isDelete ? '#ef4444' : 'inherit'}; }
`;

const OneDrivePanel = () => {
  const navigate = useNavigate();
  const { tokens } = useAuth();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [selectedIds, setSelectedIds] = useState([]);
  const [lastSelectedId, setLastSelectedId] = useState(null);
  const [contextMenu, setContextMenu] = useState(null);
  const [moveModal, setMoveModal] = useState({ show: false, item: null });
  const [clipboard, setClipboard] = useState(null);

  const { data: files, isLoading, refetch, isFetching, error } = useOneDriveFiles();
  const { deleteItem, moveItem, copyItem } = useOneDriveActions();

  const isUnauthenticated = (!tokens.microsoft && !files && !isLoading) || error?.status === 401;

  useEffect(() => {
    const handleGlobalClick = () => setContextMenu(null);
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleSelection = (e, file) => {
    e.stopPropagation();
    if (e.ctrlKey || e.metaKey) {
      setSelectedIds(prev => prev.includes(file.id) ? prev.filter(id => id !== file.id) : [...prev, file.id]);
    } else if (e.shiftKey && lastSelectedId) {
      const startIndex = files.findIndex(f => f.id === lastSelectedId);
      const endIndex = files.findIndex(f => f.id === file.id);
      if (startIndex !== -1 && endIndex !== -1) {
        const start = Math.min(startIndex, endIndex);
        const end = Math.max(startIndex, endIndex);
        setSelectedIds(files.slice(start, end + 1).map(f => f.id));
      }
    } else {
      setSelectedIds([file.id]);
    }
    setLastSelectedId(file.id);
  };

  const handleContextMenu = (e, file) => {
    e.preventDefault();
    e.stopPropagation();
    if (file) {
      if (!selectedIds.includes(file.id)) {
        setSelectedIds([file.id]);
        setLastSelectedId(file.id);
      }
    } else {
      setSelectedIds([]);
    }
    setContextMenu({ x: e.pageX, y: e.pageY, item: file });
  };

  const handleAction = (action, targetItem = null) => {
    const item = targetItem || contextMenu?.item;
    if (!item && !['paste'].includes(action)) return;

    switch (action) {
      case 'open':
        if (item.folder) navigate(`/documents/${item.id}`);
        else window.open(item.webUrl, '_blank');
        break;
      case 'download': window.open(item['@microsoft.graph.downloadUrl'], '_blank'); break;
      case 'route':
        const pId = item.parentReference?.id;
        navigate(pId ? `/documents/${pId}` : '/documents');
        break;
      case 'copy': setClipboard({ type: 'copy', item }); break;
      case 'move': setMoveModal({ show: true, item }); break;
      case 'paste':
        if (clipboard?.type === 'copy') copyItem.mutate({ itemId: clipboard.item.id, parentId: null });
        setClipboard(null);
        break;
      case 'delete':
        if (prompt('Password (Founders2025!):') === 'Founders2025!') deleteItem.mutate({ itemId: item.id });
        break;
    }
    setContextMenu(null);
  };

  return (
    <WidgetCard onClick={() => setSelectedIds([])}>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconWrapper><IconFolder style={{ width: '1.5rem' }} /></IconWrapper>
          <div>
            <Title>Documentos (OneDrive)</Title>
            <StatusText $isOnline={isOnline && !isLoading && !isUnauthenticated}>
              {isLoading ? 'Cargando...' : (isUnauthenticated ? 'DESCONECTADO' : (isOnline ? 'SINCRONIZADO' : 'SIN CONEXIÓN'))}
            </StatusText>
          </div>
        </div>
        <RefreshButton onClick={(e) => { e.stopPropagation(); refetch(); }} $isRefreshing={isFetching}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </RefreshButton>
      </Header>
      
      <FileList onContextMenu={(e) => handleContextMenu(e, null)}>
        {files?.map(file => (
          <FileItem 
            key={file.id} 
            $selected={selectedIds.includes(file.id)}
            onClick={(e) => handleSelection(e, file)}
            onContextMenu={(e) => handleContextMenu(e, file)}
          >
            {file.folder ? <IconFolder style={{ color: '#fbbf24' }} /> : <IconFile style={{ color: '#2b5797' }} />}
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</span>
          </FileItem>
        ))}
      </FileList>

      {contextMenu && (
        <ContextMenu style={{ top: contextMenu.y, left: contextMenu.x }} onClick={e => e.stopPropagation()}>
          {contextMenu.item ? (
            <>
              <MenuItem onClick={() => handleAction('open')}>Abrir</MenuItem>
              <MenuItem onClick={() => handleAction('download')}>Descargar</MenuItem>
              <MenuItem onClick={() => handleAction('route')}>Ir a la ruta</MenuItem>
              <MenuItem onClick={() => handleAction('copy')}>Copiar</MenuItem>
              <MenuItem onClick={() => handleAction('move')}>Mover</MenuItem>
              <MenuItem $isDelete onClick={() => handleAction('delete')}>Borrar</MenuItem>
            </>
          ) : (
            clipboard && <MenuItem onClick={() => handleAction('paste')}>Pegar "{clipboard.item.name}"</MenuItem>
          )}
        </ContextMenu>
      )}

      {moveModal.show && (
        <MoveModal 
          isOpen={moveModal.show} 
          itemName={moveModal.item.name}
          onClose={() => setMoveModal({ show: false, item: null })}
          onMove={(targetId) => {
            moveItem.mutate({ itemId: moveModal.item.id, parentId: targetId });
            setMoveModal({ show: false, item: null });
          }}
        />
      )}

      <ActionButton onClick={(e) => { e.stopPropagation(); navigate('/documents'); }}>Ver Archivos</ActionButton>
    </WidgetCard>
  );
};

export default OneDrivePanel;
