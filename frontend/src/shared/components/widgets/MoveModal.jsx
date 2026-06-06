import React, { useState } from 'react';
import styled from 'styled-components';
import { useOneDriveExplorer } from '../../../features/documents/api/oneDriveApi';
import { IconFolder, IconBack, IconClose } from '../Icons';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6000;
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.color.surface};
  width: 90%;
  max-width: 500px;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};
  overflow: hidden;
`;

const Header = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.color.text};
`;

const Breadcrumbs = styled.div`
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.02)' : '#f9fafb'};
  font-size: 0.8125rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
`;

const BreadcrumbItem = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.color.textSecondary};
  &:hover { color: ${({ theme }) => theme.color.primary}; }
  &.active { color: ${({ theme }) => theme.color.text}; font-weight: 600; }
`;

const FolderList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
`;

const FolderRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover { background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'}; }
`;

const MoveToBtn = styled.button`
  margin-left: auto;
  padding: 0.4rem 0.75rem;
  background: ${({ theme }) => theme.color.primaryFaded};
  color: ${({ theme }) => theme.color.primary};
  border: none;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  opacity: 0;
  ${FolderRow}:hover & { opacity: 1; }
  &:hover { background: ${({ theme }) => theme.color.primary}; color: white; }
`;

const Footer = styled.div`
  padding: 1.25rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActionBtn = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
`;

const CancelBtn = styled(ActionBtn)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textSecondary};
  &:hover { background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'}; }
`;

const ConfirmBtn = styled(ActionBtn)`
  background: ${({ theme }) => theme.color.accent};
  border: none;
  color: white;
  &:hover { opacity: 0.9; }
`;

const MoveModal = ({ isOpen, onClose, onMove, itemName }) => {
  const [currentFolderId, setCurrentFolderId] = useState(null);
  const [path, setPath] = useState([{ id: null, name: 'IMPONECT' }]);
  
  const { data: items, isLoading } = useOneDriveExplorer(currentFolderId);
  const folders = items?.filter(i => i.folder) || [];

  const handleNavigate = (folder) => {
    setCurrentFolderId(folder.id);
    setPath(prev => [...prev, { id: folder.id, name: folder.name }]);
  };

  const handleBreadcrumb = (item, index) => {
    setCurrentFolderId(item.id);
    setPath(prev => prev.slice(0, index + 1));
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <Header>
          <Title>Mover "{itemName}"</Title>
          <IconClose style={{ cursor: 'pointer', width: '1.25rem' }} onClick={onClose} />
        </Header>
        
        <Breadcrumbs>
          {path.map((item, index) => (
            <React.Fragment key={item.id || 'root'}>
              {index > 0 && <span>/</span>}
              <BreadcrumbItem 
                className={index === path.length - 1 ? 'active' : ''}
                onClick={() => handleBreadcrumb(item, index)}
              >
                {item.name}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </Breadcrumbs>

        <FolderList>
          {isLoading ? (
            <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>Cargando carpetas...</div>
          ) : folders.length > 0 ? (
            folders.map(folder => (
              <FolderRow key={folder.id} onClick={() => handleNavigate(folder)}>
                <IconFolder style={{ width: '1.25rem', marginRight: '0.75rem', color: '#fbbf24' }} />
                <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{folder.name}</span>
                <MoveToBtn onClick={(e) => { e.stopPropagation(); onMove(folder.id); }}>
                  Mover a esta carpeta
                </MoveToBtn>
              </FolderRow>
            ))
          ) : (
            <div style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>Esta carpeta está vacía</div>
          )}
        </FolderList>

        <Footer>
          <CancelBtn onClick={onClose}>Cancelar</CancelBtn>
          <ConfirmBtn onClick={() => onMove(currentFolderId)}>
            Mover acá
          </ConfirmBtn>
        </Footer>
      </Modal>
    </Overlay>
  );
};

export default MoveModal;
