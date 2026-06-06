import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOneDriveExplorer, useOneDriveActions } from '../api/oneDriveApi';
import { 
  IconFolder, 
  IconFile, 
  IconBack, 
  IconForward, 
  IconWarning,
  IconPrint,
  IconDownload,
  IconPlay,
  IconPause,
  IconSkipBack,
  IconSkipForward,
  IconVolume,
  IconClose,
  IconMaximize,
  IconSearch,
  IconRefresh
} from '../../../shared/components/Icons';
import MoveModal from '../../../shared/components/widgets/MoveModal';
import {
  ExplorerWrapper,
  Toolbar,
  NavButtons,
  NavBtn,
  PathBar,
  BreadcrumbItem,
  ToolbarActions,
  ActionBtn,
  FileListContainer,
  FileHeader,
  HeaderCell,
  ScrollArea,
  FileRow,
  Cell,
  StatusBadge,
  ContextMenu,
  MenuItem,
  ModalOverlay,
  ModalUI,
  ModalTitle,
  ModalInput,
  ModalActions,
  CancelBtnUI,
  SubmitBtnUI,
  DeleteBtnUI,
  CreationGrid,
  CreationOption,
  GoldenCreateBtn,
  SearchWrapper,
  SearchInput,
  SearchIconWrapper,
  ClearSearchBtn,
  LoadingState,
  FullscreenViewer,
  FloatingBackButton,
  ViewerHeader,
  FileName,
  IframeContainer,
  VideoPlayerOverlay,
  VideoStage,
  PlayerControls,
  ControlBar,
  VolumeGroup,
  ProgressContainer,
  Timeline
} from './DocumentsScreenStyled';

export const DocumentsScreen = () => {
  const { folderId } = useParams();
  const navigate = useNavigate();
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [lastSelectedId, setLastSelectedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals state
  const [modalConfig, setModalConfig] = useState({ show: false, type: null, title: '', value: '' });
  const [creationModal, setCreationModal] = useState({ show: false, selectedType: 'folder', skipGrid: false, value: '' });
  const [deleteModal, setDeleteModal] = useState({ show: false, password: '' });
  const [moveModal, setMoveModal] = useState({ show: false, items: [] });
  const [createdFile, setCreatedFile] = useState(null); 
  const [viewingFile, setViewingFile] = useState(null); 

  // Video Player state
  const [videoPlayer, setVideoPlayer] = useState({ 
    show: false, 
    file: null, 
    playing: false, 
    volume: parseFloat(localStorage.getItem('videoVolume') || '0.5'),
    currentTime: 0,
    duration: 0
  });
  const videoRef = useRef(null);

  // Breadcrumbs path management
  const [path, setPath] = useState([{ id: null, name: 'IMPONECT' }]);

  // Fetch items based on folder or search
  const { data: items, isLoading, refetch, isFetching } = useOneDriveExplorer(folderId, searchQuery);
  const { createFolder, deleteItem, renameItem, createFile, moveItem, copyItem } = useOneDriveActions();

  // Internal clipboard
  const [clipboard, setClipboard] = useState(null);

  const formatSize = (bytes) => {
    if (!bytes) return '-';
    const kb = Math.floor(bytes / 1024);
    return kb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' KB';
  };

  const formatDuration = (ms) => {
    if (!ms) return '-';
    const totalSecs = Math.floor(ms / 1000);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Keyboard shortcuts and click-outside listeners
  useEffect(() => {
    const handleGlobalClick = () => setContextMenu(null);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedIds([]);
        setLastSelectedId(null);
        setCreationModal(prev => ({ ...prev, show: false }));
        setVideoPlayer(prev => ({ ...prev, show: false, playing: false }));
        setSearchQuery('');
      }
      if (e.key === 'Delete' || e.key === 'Del') {
        if (selectedIds.length > 0) handleAction('delete');
      }
    };
    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIds, items]);

  // Update path when items or folderId changes
  useEffect(() => {
    if (!folderId) {
      setPath([{ id: null, name: 'IMPONECT' }]);
    } else {
      const currentFolder = items?.find(i => i.id === folderId);
      setPath(prev => {
        const index = prev.findIndex(p => p.id === folderId);
        if (index !== -1) return prev.slice(0, index + 1);
        if (currentFolder) return [...prev, { id: folderId, name: currentFolder.name }];
        return prev;
      });
    }
  }, [folderId, items]);

  const handleSelection = (e, item) => {
    e.stopPropagation();
    if (e.ctrlKey || e.metaKey) {
      setSelectedIds(prev => prev.includes(item.id) ? prev.filter(id => id !== item.id) : [...prev, item.id]);
      setLastSelectedId(item.id);
    } else if (e.shiftKey && lastSelectedId) {
      const startIndex = items.findIndex(i => i.id === lastSelectedId);
      const endIndex = items.findIndex(i => i.id === item.id);
      if (startIndex !== -1 && endIndex !== -1) {
        const start = Math.min(startIndex, endIndex);
        const end = Math.max(startIndex, endIndex);
        const range = items.slice(start, end + 1).map(i => i.id);
        setSelectedIds(prev => Array.from(new Set([...prev, ...range])));
      }
    } else {
      setSelectedIds([item.id]);
      setLastSelectedId(item.id);
    }
  };

  const handleFolderClick = (folder) => {
    setSearchQuery('');
    navigate(`/documents/${folder.id}`);
  };

  const handleBreadcrumbClick = (item) => {
    setSearchQuery('');
    navigate(item.id ? `/documents/${item.id}` : '/documents');
  };

  const goBack = () => path.length > 1 ? handleBreadcrumbClick(path[path.length - 2]) : navigate(-1);
  const goForward = () => navigate(1);

  const handleContextMenu = (e, item = null) => {
    e.preventDefault();
    e.stopPropagation();
    if (item && !selectedIds.includes(item.id)) {
      setSelectedIds([item.id]);
      setLastSelectedId(item.id);
    } else if (!item) setSelectedIds([]);
    setContextMenu({ x: e.pageX, y: e.pageY, item });
  };

  const handleAction = (action, targetItem = null) => {
    const selectedItems = items?.filter(i => selectedIds.includes(i.id)) || [];
    const item = targetItem || selectedItems[0];
    if (!item && !['openCreationModal', 'newFolder', 'newWord', 'newExcel', 'newText', 'paste'].includes(action)) return;

    switch (action) {
      case 'open':
        if (item.folder) handleFolderClick(item);
        else handleOpenFile(item);
        break;
      case 'openCreationModal':
        setCreationModal({ show: true, selectedType: 'folder', skipGrid: false, value: '' });
        break;
      case 'download':
        if (item.folder) alert('Las carpetas no se pueden descargar directamente');
        else window.open(item['@microsoft.graph.downloadUrl'], '_blank');
        break;
      case 'route':
        const pId = item.parentReference?.id;
        setSearchQuery('');
        navigate(pId ? `/documents/${pId}` : '/documents');
        break;
      case 'newFolder': setCreationModal({ show: true, selectedType: 'folder', skipGrid: true, value: '' }); break;
      case 'newWord': setCreationModal({ show: true, selectedType: 'word', skipGrid: true, value: '' }); break;
      case 'newExcel': setCreationModal({ show: true, selectedType: 'excel', skipGrid: true, value: '' }); break;
      case 'newText': setCreationModal({ show: true, selectedType: 'text', skipGrid: true, value: '' }); break;
      case 'rename': setModalConfig({ show: true, type: 'rename', title: 'Renombrar', value: item.name }); break;
      case 'copy': setClipboard({ type: 'copy', items: selectedItems }); break;
      case 'move': setMoveModal({ show: true, items: selectedItems }); break;
      case 'paste':
        if (clipboard && clipboard.type === 'copy') {
          clipboard.items.forEach(i => copyItem.mutate({ itemId: i.id, parentId: folderId }));
          setClipboard(null);
        }
        break;
      case 'delete': setDeleteModal({ show: true, password: '' }); break;
    }
    setContextMenu(null);
  };

  const handleOpenFile = (file) => {
    const isVideo = file.name.match(/\.(mp4|mov|avi|mkv|webm)$/i);
    if (isVideo) setVideoPlayer(v => ({ ...v, show: true, file, playing: true }));
    else if (file.name.match(/\.(docx?|xlsx?|pptx?)$/i)) window.open(file.webUrl, '_blank');
    else setViewingFile(file);
    setCreatedFile(null);
  };

  const handleVideoControl = (type) => {
    if (!videoRef.current) return;
    switch (type) {
      case 'play': 
        if (videoPlayer.playing) videoRef.current.pause();
        else videoRef.current.play();
        setVideoPlayer(v => ({ ...v, playing: !v.playing }));
        break;
      case 'back10': videoRef.current.currentTime -= 10; break;
      case 'fwd10': videoRef.current.currentTime += 10; break;
      case 'fullscreen': videoRef.current.requestFullscreen(); break;
      case 'next':
      case 'prev':
        const videoFiles = items.filter(i => i.name.match(/\.(mp4|mov|avi|mkv|webm)$/i));
        const idx = videoFiles.findIndex(f => f.id === videoPlayer.file.id);
        const nextFile = type === 'next' ? videoFiles[idx + 1] : videoFiles[idx - 1];
        if (nextFile) setVideoPlayer({ ...videoPlayer, file: nextFile, playing: true });
        break;
    }
  };

  const handleVolumeChange = (newVol) => {
    const vol = Math.max(0, Math.min(1, parseFloat(newVol)));
    if (videoRef.current) videoRef.current.volume = vol;
    setVideoPlayer(v => ({ ...v, volume: vol }));
    localStorage.setItem('videoVolume', vol.toString());
  };

  const handleModalSubmit = async () => {
    if (!modalConfig.value) return;
    if (modalConfig.type === 'rename') renameItem.mutate({ itemId: selectedIds[0], newName: modalConfig.value });
    setModalConfig(m => ({ ...m, show: false }));
  };

  const handleCreationSubmit = async () => {
    if (!creationModal.value) return;
    if (creationModal.selectedType === 'folder') createFolder.mutate({ parentId: folderId, name: creationModal.value });
    else createFile.mutate({ parentId: folderId, name: creationModal.value, type: creationModal.selectedType }, {
      onSuccess: (res) => setCreatedFile(res.data)
    });
    setCreationModal(c => ({ ...c, show: false }));
  };

  const handleDelete = () => {
    if (deleteModal.password === 'Founders2025!') {
      selectedIds.forEach(id => deleteItem.mutate({ itemId: id }));
      setDeleteModal({ show: false, password: '' });
      setSelectedIds([]);
    } else alert('Contraseña incorrecta');
  };

  const onDragStart = (e, item) => {
    const ids = selectedIds.includes(item.id) ? selectedIds : [item.id];
    if (!selectedIds.includes(item.id)) setSelectedIds([item.id]);
    e.dataTransfer.setData('itemIds', JSON.stringify(ids));
  };

  const onDrop = (e, target) => {
    e.preventDefault();
    const idsStr = e.dataTransfer.getData('itemIds');
    if (idsStr && target.folder) {
      JSON.parse(idsStr).forEach(id => id !== target.id && moveItem.mutate({ itemId: id, parentId: target.id }));
    }
  };

  if (viewingFile) {
    const isImage = viewingFile.name.match(/\.(jpe?g|png|gif|bmp|webp)$/i);
    const downloadUrl = viewingFile['@microsoft.graph.downloadUrl'];
    return (
      <FullscreenViewer>
        <FloatingBackButton onClick={() => setViewingFile(null)} title="Volver a ImponectApp"><IconBack /></FloatingBackButton>
        <ViewerHeader>
          <FileName>{viewingFile.name}</FileName>
          <ToolbarActions>
            <ActionBtn onClick={() => window.open(downloadUrl, '_blank')} style={{ marginRight: '0.5rem' }}><IconDownload style={{ width: '1rem', marginRight: '0.5rem' }} /> Descargar</ActionBtn>
            <ActionBtn onClick={() => {
              if (isImage) {
                const win = window.open('', '_blank');
                win.document.write(`<html><body style="margin:0; display:flex; justify-content:center; align-items:center; background:#000;"><img src="${downloadUrl}" style="max-width:100%; max-height:100%;" onload="window.print();window.close()"></body></html>`);
                win.document.close();
              } else {
                const frame = document.getElementById('file-iframe');
                if (frame) { frame.contentWindow.focus(); frame.contentWindow.print(); }
              }
            }}><IconPrint style={{ width: '1rem', marginRight: '0.5rem' }} /> Imprimir</ActionBtn>
          </ToolbarActions>
        </ViewerHeader>
        <IframeContainer>
          {isImage ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', background: '#1a1a1a' }}><img src={downloadUrl} alt={viewingFile.name} style={{ maxWidth: '95%', maxHeight: '95%', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }} /></div>
          ) : <iframe id="file-iframe" src={downloadUrl} width="100%" height="100%" frameBorder="0" title="File Viewer" allowFullScreen />}
        </IframeContainer>
      </FullscreenViewer>
    );
  }

  return (
    <ExplorerWrapper onClick={() => setSelectedIds([])}>
      {videoPlayer.show && (
        <VideoPlayerOverlay onClick={() => setVideoPlayer(v => ({ ...v, show: false, playing: false }))}>
          <FloatingBackButton onClick={() => setVideoPlayer(v => ({ ...v, show: false, playing: false }))}><IconClose /></FloatingBackButton>
          <VideoStage onClick={e => e.stopPropagation()}>
            <video 
              ref={videoRef}
              autoPlay 
              src={videoPlayer.file?.['@microsoft.graph.downloadUrl']} 
              onTimeUpdate={() => setVideoPlayer(v => ({ ...v, currentTime: videoRef.current?.currentTime || 0 }))}
              onLoadedMetadata={() => {
                if (videoRef.current) videoRef.current.volume = videoPlayer.volume;
                setVideoPlayer(v => ({ ...v, duration: videoRef.current?.duration || 0 }));
              }}
              onEnded={() => handleVideoControl('next')}
            />
          </VideoStage>
          <PlayerControls onClick={e => e.stopPropagation()}>
            <ProgressContainer>
              <span>{Math.floor(videoPlayer.currentTime / 60)}:{(Math.floor(videoPlayer.currentTime) % 60).toString().padStart(2, '0')}</span>
              <Timeline type="range" min="0" max={videoPlayer.duration || 0} step="0.1" value={videoPlayer.currentTime} onChange={(e) => { if (videoRef.current) videoRef.current.currentTime = e.target.value; }} />
              <span>{Math.floor(videoPlayer.duration / 60)}:{(Math.floor(videoPlayer.duration) % 60).toString().padStart(2, '0')}</span>
            </ProgressContainer>
            <ControlBar $playing={videoPlayer.playing}>
              <button onClick={() => window.open(videoPlayer.file['@microsoft.graph.downloadUrl'], '_blank')} title="Descargar"><IconDownload /></button>
              <div style={{ flex: 1 }} />
              <button onClick={() => handleVideoControl('prev')}><IconSkipBack /></button>
              <button onClick={() => handleVideoControl('back10')}><span style={{ fontSize: '0.7rem', fontWeight: 900 }}>-10</span></button>
              <button className="play-btn" onClick={() => handleVideoControl('play')}>{videoPlayer.playing ? <IconPause /> : <IconPlay />}</button>
              <button onClick={() => handleVideoControl('fwd10')}><span style={{ fontSize: '0.7rem', fontWeight: 900 }}>+10</span></button>
              <button onClick={() => handleVideoControl('next')}><IconSkipForward /></button>
              <div style={{ flex: 1 }} />
              <VolumeGroup>
                <button className="vol-btn" onClick={() => handleVolumeChange(videoPlayer.volume - 0.1)}><span style={{ fontWeight: 900 }}>-</span></button>
                <IconVolume style={{ width: '1.2rem' }} />
                <input type="range" min="0" max="1" step="0.01" value={videoPlayer.volume} onChange={(e) => handleVolumeChange(e.target.value)} />
                <button className="vol-btn" onClick={() => handleVolumeChange(videoPlayer.volume + 0.1)}><span style={{ fontWeight: 900 }}>+</span></button>
                <span className="vol-percent">{Math.round(videoPlayer.volume * 100)}%</span>
                <button onClick={() => handleVideoControl('fullscreen')} style={{ marginLeft: '1rem' }}><IconMaximize /></button>
              </VolumeGroup>
            </ControlBar>
          </PlayerControls>
        </VideoPlayerOverlay>
      )}

      <Toolbar>
        <NavButtons>
          <NavBtn onClick={() => refetch()} title="Sincronizar OneDrive">
            <IconRefresh className={isFetching ? 'animate-spin' : ''} />
          </NavBtn>
          <NavBtn onClick={goBack} title="Atrás"><IconBack /></NavBtn>
          <NavBtn onClick={goForward} title="Adelante"><IconForward /></NavBtn>
        </NavButtons>
        <PathBar>{path.map((item, index) => (
          <React.Fragment key={item.id || 'root'}>
            {index > 0 && <span style={{ margin: '0 0.5rem', opacity: 0.5 }}>/</span>}
            <BreadcrumbItem onClick={() => handleBreadcrumbClick(item)}>{item.name}</BreadcrumbItem>
          </React.Fragment>
        ))}</PathBar>
        
        <SearchWrapper>
          <SearchIconWrapper><IconSearch /></SearchIconWrapper>
          <SearchInput 
            placeholder="Buscar en Imponect..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <ClearSearchBtn onClick={() => setSearchQuery('')}>
              <IconClose />
            </ClearSearchBtn>
          )}
        </SearchWrapper>

        <ToolbarActions>
          <GoldenCreateBtn onClick={() => handleAction('openCreationModal')}>
            <IconFolder style={{ marginRight: '0.5rem' }} /> Crear
          </GoldenCreateBtn>
        </ToolbarActions>
      </Toolbar>

      <FileListContainer onContextMenu={(e) => handleContextMenu(e)}>
        <FileHeader>
          <HeaderCell>Nombre</HeaderCell>
          <HeaderCell>Status</HeaderCell>
          <HeaderCell>Modificado</HeaderCell>
          <HeaderCell>Tipo</HeaderCell>
          <HeaderCell>Peso</HeaderCell>
          <HeaderCell>Duración</HeaderCell>
        </FileHeader>
        {isLoading ? <LoadingState>Cargando archivos...</LoadingState> : (
          <ScrollArea>
            {items?.map(item => (
              <FileRow key={item.id} $selected={selectedIds.includes(item.id)} draggable onDragStart={(e) => onDragStart(e, item)} onDragOver={(e) => e.preventDefault()} onDrop={(e) => onDrop(e, item)} onClick={(e) => handleSelection(e, item)} onDoubleClick={() => handleAction('open', item)} onContextMenu={(e) => handleContextMenu(e, item)}>
                <Cell>{item.folder ? <IconFolder style={{ width: '1.25rem', marginRight: '0.5rem', color: '#fbbf24' }} /> : <IconFile style={{ width: '1.25rem', marginRight: '0.5rem', color: '#60a5fa' }} />}{item.name}</Cell>
                <Cell><StatusBadge>Sincronizado</StatusBadge></Cell>
                <Cell>{new Date(item.lastModifiedDateTime).toLocaleDateString()}</Cell>
                <Cell>{item.folder ? 'Carpeta' : item.name.split('.').pop().toUpperCase()}</Cell>
                <Cell>{formatSize(item.size)}</Cell>
                <Cell>{item.video ? formatDuration(item.video.duration) : '-'}</Cell>
              </FileRow>
            ))}
            {!isLoading && items?.length === 0 && (
              <div style={{ padding: '4rem', textAlign: 'center', color: '#6b7280' }}>
                {searchQuery ? `No se encontraron resultados para "${searchQuery}"` : 'Esta carpeta está vacía'}
              </div>
            )}
          </ScrollArea>
        )}
      </FileListContainer>

      {contextMenu && (
        <ContextMenu style={{ top: contextMenu.y, left: contextMenu.x }} onClick={e => e.stopPropagation()}>
          {contextMenu.item ? (
            <>
              <MenuItem onClick={() => handleAction('open')}>Abrir</MenuItem>
              <MenuItem onClick={() => handleAction('download')}>Descargar</MenuItem>
              <MenuItem onClick={() => handleAction('route')}>Ir a la ruta</MenuItem>
              <MenuItem onClick={() => handleAction('copy')}>Copiar</MenuItem>
              <MenuItem onClick={() => handleAction('move')}>Mover</MenuItem>
              <MenuItem onClick={() => handleAction('rename')}>Renombrar</MenuItem>
              <MenuItem $isDelete onClick={() => handleAction('delete')}><IconWarning style={{ width: '1rem', marginRight: '0.5rem' }} /> Borrar</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => handleAction('newFolder')}><IconFolder style={{ width: '1rem', marginRight: '0.5rem' }} /> Nueva Carpeta</MenuItem>
              <MenuItem onClick={() => handleAction('newExcel')}><IconFile style={{ width: '1rem', marginRight: '0.5rem', color: '#217346' }} /> Nuevo Excel</MenuItem>
              <MenuItem onClick={() => handleAction('newWord')}><IconFile style={{ width: '1rem', marginRight: '0.5rem', color: '#2b579a' }} /> Nuevo Word</MenuItem>
              <MenuItem onClick={() => handleAction('newText')}><IconFile style={{ width: '1rem', marginRight: '0.5rem', color: '#64748b' }} /> Nuevo Archivo de texto</MenuItem>
              {clipboard && <MenuItem onClick={() => handleAction('paste')}>Pegar {clipboard.items.length > 1 ? `(${clipboard.items.length}) elementos` : `"${clipboard.items[0]?.name}"`}</MenuItem>}
            </>
          )}
        </ContextMenu>
      )}

      {moveModal.show && <MoveModal isOpen={moveModal.show} itemName={moveModal.items.length > 1 ? `${moveModal.items.length} elementos` : moveModal.items[0]?.name} onClose={() => setMoveModal({ show: false, items: [] })} onMove={(targetId) => { moveModal.items.forEach(i => moveItem.mutate({ itemId: i.id, parentId: targetId })); setMoveModal({ show: false, items: [] }); setSelectedIds([]); }} />}

      {creationModal.show && (
        <ModalOverlay onClick={() => setCreationModal(c => ({ ...c, show: false }))}>
          <ModalUI onClick={e => e.stopPropagation()}>
            <ModalTitle>{creationModal.skipGrid ? `Crear ${creationModal.selectedType === 'folder' ? 'Carpeta' : creationModal.selectedType === 'text' ? 'Archivo de texto' : creationModal.selectedType.charAt(0).toUpperCase() + creationModal.selectedType.slice(1)}` : 'Crear'}</ModalTitle>
            {!creationModal.skipGrid && (
              <CreationGrid>
                <CreationOption $selected={creationModal.selectedType === 'folder'} onClick={() => setCreationModal(c => ({ ...c, selectedType: 'folder' }))}><IconFolder style={{ color: '#fbbf24' }} /><span>Nueva Carpeta</span></CreationOption>
                <CreationOption $selected={creationModal.selectedType === 'word'} onClick={() => setCreationModal(c => ({ ...c, selectedType: 'word' }))}><IconFile style={{ color: '#2b579a' }} /><span>Nuevo Word</span></CreationOption>
                <CreationOption $selected={creationModal.selectedType === 'excel'} onClick={() => setCreationModal(c => ({ ...c, selectedType: 'excel' }))}><IconFile style={{ color: '#217346' }} /><span>Nuevo Excel</span></CreationOption>
                <CreationOption $selected={creationModal.selectedType === 'text'} onClick={() => setCreationModal(c => ({ ...c, selectedType: 'text' }))}><IconFile style={{ color: '#64748b' }} /><span>Archivo de texto</span></CreationOption>
              </CreationGrid>
            )}
            <ModalInput autoFocus placeholder="Nombre..." value={creationModal.value} onChange={e => setCreationModal(c => ({ ...c, value: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleCreationSubmit()} />
            <ModalActions><CancelBtnUI onClick={() => setCreationModal(c => ({ ...c, show: false }))}>Cancelar</CancelBtnUI><SubmitBtnUI onClick={handleCreationSubmit}>Crear</SubmitBtnUI></ModalActions>
          </ModalUI>
        </ModalOverlay>
      )}

      {modalConfig.show && (
        <ModalOverlay onClick={() => setModalConfig(m => ({ ...m, show: false }))}>
          <ModalUI onClick={e => e.stopPropagation()}>
            <ModalTitle>{modalConfig.title}</ModalTitle>
            <ModalInput autoFocus value={modalConfig.value} onChange={e => setModalConfig(m => ({ ...m, value: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleModalSubmit()} />
            <ModalActions><CancelBtnUI onClick={() => setModalConfig(m => ({ ...m, show: false }))}>Cancelar</CancelBtnUI><SubmitBtnUI onClick={handleModalSubmit}>Confirmar</SubmitBtnUI></ModalActions>
          </ModalUI>
        </ModalOverlay>
      )}

      {deleteModal.show && (
        <ModalOverlay onClick={() => setDeleteModal(d => ({ ...d, show: false }))}>
          <ModalUI onClick={e => e.stopPropagation()}>
            <IconWarning style={{ width: '3rem', color: '#f59e0b', marginBottom: '1rem' }} /><ModalTitle>Confirmar Eliminación</ModalTitle>
            <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>Se requiere contraseña para eliminar.</p>
            <ModalInput type="password" placeholder="Contraseña Founders" value={deleteModal.password} onChange={e => setDeleteModal(d => ({ ...d, password: e.target.value }))} onKeyDown={e => e.key === 'Enter' && handleDelete()} />
            <ModalActions><CancelBtnUI onClick={() => setDeleteModal(d => ({ ...d, show: false }))}>Cancelar</CancelBtnUI><DeleteBtnUI onClick={handleDelete}>Eliminar</DeleteBtnUI></ModalActions>
          </ModalUI>
        </ModalOverlay>
      )}

      {createdFile && (
        <ModalOverlay onClick={() => setCreatedFile(null)}>
          <ModalUI onClick={e => e.stopPropagation()}>
            <div style={{ width: '4rem', height: '4rem', background: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}><IconFile style={{ width: '2rem', color: '#166534' }} /></div>
            <ModalTitle>¡Archivo Creado!</ModalTitle>
            <p style={{ marginBottom: '2rem', color: '#6b7280' }}>El archivo <strong>{createdFile.name}</strong> se ha creado. ¿Abrir ahora?</p>
            <ModalActions><CancelBtnUI onClick={() => setCreatedFile(null)}>Cerrar</CancelBtnUI><SubmitBtnUI onClick={() => handleOpenFile(createdFile)}>Abrir</SubmitBtnUI></ModalActions>
          </ModalUI>
        </ModalOverlay>
      )}
    </ExplorerWrapper>
  );
};
