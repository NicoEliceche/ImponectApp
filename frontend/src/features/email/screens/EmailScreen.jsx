import React, { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  IconWarning, IconFile, IconClose, 
  IconSearch, IconSettings, IconMail, IconPlus, IconPencil, IconDrafts, 
  IconRefresh, IconTrash, IconMailOpen, IconMaximize, IconBack, IconForward,
  IconBrandCopy, IconBrandMove, IconBrandForward, IconBrandReply, IconBrandReplyAll,
  IconBold, IconItalic, IconListBulleted, IconListOrdered, IconUnderline, IconAttachment,
  IconInbox, IconAlignLeft, IconAlignCenter, IconAlignRight, IconAlignJustify, IconCheck,
  IconEnvelopeClosed, IconEnvelopeOpen
} from '../../../shared/components/Icons';
import {
  getEmailAccounts,
  getEmailConfig,
  getEmails,
  performEmailAction,
  saveEmailDraft,
  sendEmail,
  saveEmailConfig
} from '../api/emailApi';
import * as S from './EmailScreenStyled';

const createDefaultComposeModal = () => ({
  show: false,
  to: '',
  cc: '',
  subject: '',
  body: '',
  attachments: []
});

const createDefaultEmailConfig = () => ({
  id: null,
  email: '',
  password: '',
  signature: '',
  imap_host: 'imap.hostinger.com',
  imap_port: 993,
  smtp_host: 'smtp.hostinger.com',
  smtp_port: 465
});

const normalizeEmailConfigForSave = (config) => ({
  ...config,
  imap_port: Number.parseInt(config.imap_port, 10) || 993,
  smtp_port: Number.parseInt(config.smtp_port, 10) || 465
});

const getEmailId = (email) => email?.uid || email?.id;

const withEmailFlag = (email, flag) => {
  const flags = Array.isArray(email?.flags) ? email.flags : [];
  if (flags.includes(flag)) return email;

  return {
    ...email,
    flags: [...flags, flag]
  };
};

const withoutEmailFlag = (email, flag) => {
  const flags = Array.isArray(email?.flags) ? email.flags : [];
  if (!flags.includes(flag)) return email;

  return {
    ...email,
    flags: flags.filter(currentFlag => currentFlag !== flag)
  };
};

export const EmailScreen = () => {
  const queryClient = useQueryClient();
  const [activeFolder, setActiveFolder] = useState('INBOX');
  const [selectedAccountId, setSelectedAccountId] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [lastSelectedId, setLastSelectedId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewingEmail, setViewingEmail] = useState(null);
  const [fullScreenEmail, setFullScreenEmail] = useState(null);
  
  const [showConfig, setShowConfig] = useState(false);
  const [configMode, setConfigMode] = useState('edit');
  const [configError, setConfigError] = useState('');
  const [composeModal, setComposeModal] = useState(createDefaultComposeModal);
  const [composeError, setComposeError] = useState('');
  const [moveModal, setMoveModal] = useState({ show: false, uids: [], action: 'move' }); 
  const [emailContextMenu, setEmailContextMenu] = useState(null);
  const [isDraggingFile, setIsDraggingFile] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  
  const [editorStates, setEditorStates] = useState({
    bold: false, italic: false, underline: false, 
    bulleted: false, ordered: false,
    alignLeft: true, alignCenter: false, alignRight: false, alignJustify: false
  });

  const editorRef = useRef(null);
  const fileInputRef = useRef(null);
  const lastMarkedReadId = useRef(null);

  // Queries
  const { data: accountData = [], isLoading: isLoadingAccounts } = useQuery({
    queryKey: ['emailAccounts'],
    queryFn: getEmailAccounts,
    retry: false
  });

  const emailAccounts = Array.isArray(accountData) ? accountData : [];
  const activeAccount = emailAccounts.find(account => String(account.id) === String(selectedAccountId)) || emailAccounts[0] || null;
  const activeAccountId = activeAccount?.id || '';

  const { data: currentConfig, isLoading: isLoadingConfig } = useQuery({ 
    queryKey: ['emailConfig', activeAccountId], 
    queryFn: () => getEmailConfig(activeAccountId),
    enabled: !!activeAccountId,
    retry: false
  });
  
  const [emailConfig, setEmailConfig] = useState(createDefaultEmailConfig);

  useEffect(() => {
    if (emailAccounts.length === 0) {
      setSelectedAccountId('');
      return;
    }

    const accountExists = emailAccounts.some(account => String(account.id) === String(selectedAccountId));
    if (!selectedAccountId || !accountExists) {
      setSelectedAccountId(String(emailAccounts[0].id));
    }
  }, [emailAccounts, selectedAccountId]);

  useEffect(() => {
    if (currentConfig && !showConfig) setEmailConfig(currentConfig);
  }, [currentConfig, showConfig]);

  const emailListQueryKey = ['emails', activeFolder, activeAccountId];

  const { data: emailsData, isLoading, refetch, isRefetching, isError } = useQuery({      
    queryKey: emailListQueryKey,
    queryFn: () => getEmails({ folder: activeFolder, accountId: activeAccountId }),
    enabled: !!activeAccountId,
    retry: false
  });

  const emails = Array.isArray(emailsData) ? emailsData : [];
  const filtered = emails.filter(e => (e.subject || '').toLowerCase().includes(searchQuery.toLowerCase()) || (e.from || '').toLowerCase().includes(searchQuery.toLowerCase()));
  const isAllRead = selectedIds.length > 0 && selectedIds.every(id => {
    const found = filtered.find(e => (e.uid || e.id) === id);
    return found?.flags?.includes('\\Seen');
  });

  // Mutations
  const actionMutation = useMutation({
    mutationFn: performEmailAction,
    onMutate: async (variables) => {
      if (!variables.isAuto && !variables.isInline) return null;

      const targetIds = new Set((variables.uids || []).map(String));
      const queryKey = ['emails', variables.folder, variables.accountId];

      await queryClient.cancelQueries({ queryKey });

      const previousEmails = queryClient.getQueryData(queryKey);
      const previousViewingEmail = viewingEmail;
      const previousFullScreenEmail = fullScreenEmail;
      const previousSelectedIds = selectedIds;

      const updateEmail = (email) => {
        if (!email || !targetIds.has(String(getEmailId(email)))) return email;
        if (variables.action === 'markRead') return withEmailFlag(email, '\\Seen');
        if (variables.action === 'markUnread') return withoutEmailFlag(email, '\\Seen');
        if (variables.action === 'move' && variables.targetFolder === 'Trash') return null;
        return email;
      };

      queryClient.setQueryData(queryKey, currentEmails => (
        Array.isArray(currentEmails) ? currentEmails.map(updateEmail).filter(Boolean) : currentEmails
      ));

      setViewingEmail(currentEmail => updateEmail(currentEmail));
      setFullScreenEmail(currentEmail => updateEmail(currentEmail));

      if (variables.action === 'move' && variables.targetFolder === 'Trash') {
        setSelectedIds(currentIds => currentIds.filter(id => !targetIds.has(String(id))));
      }

      return { previousEmails, previousViewingEmail, previousFullScreenEmail, previousSelectedIds, queryKey, targetIds };
    },
    onSuccess: (data, variables) => { 
      if (variables.isAuto) return;
      if (variables.isInline) {
        refetch();
        return;
      }
      refetch(); 
      if (!variables.isAuto) setSelectedIds([]); 
      setMoveModal({ show: false, uids: [], action: 'move' }); 
      setEmailContextMenu(null);
    },
    onError: (error, variables, context) => {
      if ((!variables.isAuto && !variables.isInline) || !context) return;

      queryClient.setQueryData(context.queryKey, context.previousEmails);
      setViewingEmail(context.previousViewingEmail);
      setFullScreenEmail(context.previousFullScreenEmail);
      setSelectedIds(context.previousSelectedIds);
    }
  });

  const saveConfigMutation = useMutation({
    mutationFn: saveEmailConfig,
    onSuccess: async (data) => {
      const savedAccountId = data?.account?.id ? String(data.account.id) : '';
      await queryClient.invalidateQueries({ queryKey: ['emailAccounts'] });
      await queryClient.invalidateQueries({ queryKey: ['emailConfig'] });
      await queryClient.invalidateQueries({ queryKey: ['emails'] });
      if (savedAccountId) setSelectedAccountId(savedAccountId);
      setConfigError('');
      setShowConfig(false);
      setToast({ show: true, message: 'Configuración guardada', type: 'success' });
    },
    onError: (error) => {
      setConfigError(error.message || 'No se pudo guardar la configuración de la cuenta.');
    }
  });

  const sendEmailMutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: async (_, variables) => {
      setComposeModal(createDefaultComposeModal());
      setComposeError('');
      setToast({ show: true, message: 'Mensaje enviado', type: 'success' });
      await queryClient.invalidateQueries({ queryKey: ['emails', 'Sent', variables.accountId] });
    },
    onError: (error) => {
      setToast({
        show: true,
        message: error.message || 'No se pudo enviar el mensaje.',
        type: 'error'
      });
    }
  });

  const saveDraftMutation = useMutation({
    mutationFn: ({ silent, ...payload }) => saveEmailDraft(payload),
    onSuccess: async (_, variables) => {
      setComposeModal(createDefaultComposeModal());
      setComposeError('');
      if (!variables.silent) {
        setToast({ show: true, message: 'Borrador guardado', type: 'success' });
      }
      await queryClient.invalidateQueries({ queryKey: ['emails', 'Drafts', variables.accountId] });
    },
    onError: (error) => {
      setComposeError(error.message || 'No se pudo guardar el borrador.');
    }
  });

  // Effects
  useEffect(() => {
    const emailId = viewingEmail?.uid || viewingEmail?.id;
    if (activeAccountId && viewingEmail && !viewingEmail.flags?.includes('\\Seen') && lastMarkedReadId.current !== emailId) {
      lastMarkedReadId.current = emailId;
      actionMutation.mutate({ uids: [emailId], action: 'markRead', folder: activeFolder, accountId: activeAccountId, isAuto: true });
    }
  }, [activeAccountId, activeFolder, viewingEmail]);

  useEffect(() => {
    setSelectedIds([]);
    setLastSelectedId(null);
    setViewingEmail(null);
    setFullScreenEmail(null);
    setActiveFolder('INBOX');
  }, [activeAccountId]);

  useEffect(() => {
    if (toast.show && toast.type !== 'loading') {
      const timer = setTimeout(() => setToast(current => ({ ...current, show: false })), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show, toast.type]);

  useEffect(() => {
    if (composeModal.show && editorRef.current) {
      editorRef.current.innerHTML = composeModal.body || '';
    }
  }, [composeModal.show]);

  // Handlers
  const openNewAccountConfig = () => {
    setConfigMode('create');
    setConfigError('');
    setEmailConfig(createDefaultEmailConfig());
    setShowConfig(true);
  };

  const openSelectedAccountConfig = () => {
    setConfigMode(activeAccountId ? 'edit' : 'create');
    setConfigError('');
    setEmailConfig(currentConfig || createDefaultEmailConfig());
    setShowConfig(true);
  };

  const handleAccountChange = (event) => {
    setSelectedAccountId(event.target.value);
  };

  const handleSaveAccountConfig = () => {
    saveConfigMutation.mutate(normalizeEmailConfigForSave(emailConfig));
  };

  const handleSelection = (e, uid) => {
    e.stopPropagation();
    if (e.shiftKey && lastSelectedId) {
      const allUids = filtered.map(item => item.uid || item.id);
      const start = allUids.indexOf(lastSelectedId);
      const end = allUids.indexOf(uid);
      if (start !== -1 && end !== -1) {
        const range = allUids.slice(Math.min(start, end), Math.max(start, end) + 1);
        setSelectedIds(prev => Array.from(new Set([...prev, ...range])));
        return;
      }
    }
    setSelectedIds(prev => prev.includes(uid) ? prev.filter(id => id !== uid) : [...prev, uid]);
    setLastSelectedId(uid);
  };

  const handleEmailAction = (action, targetFolder = null) => {
    if (selectedIds.length === 0 || !activeAccountId) return;
    if ((action === 'move' || action === 'copy') && !targetFolder) {
      setMoveModal({ show: true, uids: selectedIds, action });
      return;
    }
    const payload = {
      uids: selectedIds,
      action: action === 'delete' ? 'move' : action,
      folder: activeFolder,
      targetFolder: action === 'delete' ? 'Trash' : targetFolder,
      accountId: activeAccountId
    };
    actionMutation.mutate(payload);
  };

  const handleToggleReadState = (event, email) => {
    event.stopPropagation();
    const emailId = getEmailId(email);
    if (!emailId || !activeAccountId) return;

    const isUnread = email.flags ? !email.flags.includes('\\Seen') : false;
    const nextAction = isUnread ? 'markRead' : 'markUnread';

    if (nextAction === 'markUnread') {
      lastMarkedReadId.current = emailId;
    }

    actionMutation.mutate({
      uids: [emailId],
      action: nextAction,
      folder: activeFolder,
      accountId: activeAccountId,
      isInline: true
    });
  };

  const handleMoveEmailToTrash = (event, email) => {
    event.stopPropagation();
    const emailId = getEmailId(email);
    if (!emailId || !activeAccountId) return;

    actionMutation.mutate({
      uids: [emailId],
      action: 'move',
      folder: activeFolder,
      targetFolder: 'Trash',
      accountId: activeAccountId,
      isInline: true
    });
  };

  const updateEditorStates = () => {
    if (!editorRef.current) return;
    setEditorStates({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      bulleted: document.queryCommandState('insertUnorderedList'),
      ordered: document.queryCommandState('insertOrderedList'),
      alignLeft: document.queryCommandState('justifyLeft'),
      alignCenter: document.queryCommandState('justifyCenter'),
      alignRight: document.queryCommandState('justifyRight'),
      alignJustify: document.queryCommandState('justifyFull')
    });
  };

  const handleEditorAction = (cmd, val = null) => {
    document.execCommand(cmd, false, val);
    updateEditorStates();
    editorRef.current?.focus();
  };

  const getComposePayload = () => ({
    to: composeModal.to,
    cc: composeModal.cc,
    subject: composeModal.subject,
    text: editorRef.current?.innerText || '',
    html: editorRef.current?.innerHTML || '',
    attachments: composeModal.attachments,
    accountId: activeAccountId
  });

  const handleDiscardCompose = () => {
    setComposeModal(createDefaultComposeModal());
    setComposeError('');
  };

  const handleSaveDraft = (silent = false) => {
    if (saveDraftMutation.isPending || sendEmailMutation.isPending) return;

    const payload = getComposePayload();
    const hasContent = payload.to || payload.cc || payload.subject || payload.html || payload.attachments.length > 0;

    if (!hasContent) {
      handleDiscardCompose();
      return;
    }

    setComposeError('');
    saveDraftMutation.mutate({ ...payload, silent });
  };

  const handleSendEmail = () => {
    if (saveDraftMutation.isPending || sendEmailMutation.isPending) return;

    const payload = getComposePayload();
    if (!payload.to.trim()) {
      setComposeError('Ingresá al menos un destinatario.');
      return;
    }

    setComposeError('');
    setComposeModal(current => ({ ...current, show: false, body: payload.html }));
    setToast({ show: true, message: 'Enviando mensaje...', type: 'loading' });
    sendEmailMutation.mutate(payload);
  };

  const handlePaste = (e) => {
    const items = (e.clipboardData || e.originalEvent.clipboardData).items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        e.preventDefault();
        const blob = items[i].getAsFile();
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = `<img src="${event.target.result}" style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); margin: 1rem 0;" />`;
          document.execCommand('insertHTML', false, img);
        };
        reader.readAsDataURL(blob);
      }
    }
  };

  const handleMarkdown = (e) => {
    updateEditorStates();
    if (e.key === ' ') {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;
      const range = selection.getRangeAt(0);
      const container = range.startContainer;
      const text = container.textContent;

      if (text.startsWith('* ') || text.startsWith('- ')) {
        e.preventDefault();
        document.execCommand('insertUnorderedList');
        container.textContent = text.substring(2);
      } else if (text.startsWith('1. ')) {
        e.preventDefault();
        document.execCommand('insertOrderedList');
        container.textContent = text.substring(3);
      } else if (text.startsWith('# ')) {
        e.preventDefault();
        document.execCommand('formatBlock', false, 'H1');
        container.textContent = text.substring(2);
      }
    }
    
    if (e.key === 'Enter' || e.key === ' ') {
      const html = editorRef.current.innerHTML;
      const replaced = html
        .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
        .replace(/\*(.*?)\*/g, '<i>$1</i>')
        .replace(/__(.*?)__/g, '<u>$1</u>')
        .replace(/~~(.*?)~~/g, '<strike>$1</strike>');
      
      if (html !== replaced) {
        const savedCursor = saveSelection(editorRef.current);
        editorRef.current.innerHTML = replaced;
        restoreSelection(editorRef.current, savedCursor);
      }
    }
  };

  // Selection helpers
  const saveSelection = (containerEl) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(containerEl);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      return preSelectionRange.toString().length;
    }
    return 0;
  };

  const restoreSelection = (containerEl, chars) => {
    const selection = window.getSelection();
    const range = createRange(containerEl, { count: chars });
    if (range) {
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const createRange = (node, chars, range) => {
    if (!range) {
      range = document.createRange();
      range.selectNode(node);
      range.setStart(node, 0);
    }
    if (chars.count === 0) {
      range.setEnd(node, chars.count);
    } else if (node && chars.count > 0) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent.length < chars.count) {
          chars.count -= node.textContent.length;
        } else {
          range.setEnd(node, chars.count);
          chars.count = 0;
        }
      } else {
        for (let lp = 0; lp < node.childNodes.length; lp++) {
          range = createRange(node.childNodes[lp], chars, range);
          if (chars.count === 0) break;
        }
      }
    }
    return range;
  };

  const handleFileUpload = (files) => {
    const newFiles = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: (file.size / 1024).toFixed(1) + ' KB',
      file: file
    }));
    setComposeModal(prev => ({ ...prev, attachments: [...prev.attachments, ...newFiles] }));
  };

  const removeAttachment = (id) => {
    setComposeModal(prev => ({ ...prev, attachments: prev.attachments.filter(a => a.id !== id) }));
  };

  const stdFolders = [
    { id: 'INBOX', label: 'Bandeja', icon: <IconInbox /> },
    { id: 'Sent', label: 'Enviados', icon: <IconForward /> },
    { id: 'Drafts', label: 'Borradores', icon: <IconDrafts /> },
    { id: 'Junk', label: 'Correo no deseado', icon: <IconWarning /> },
    { id: 'Trash', label: 'Papelera', icon: <IconTrash /> }
  ];

  const activeSignature = currentConfig?.signature || '';
  const isEmailLoading = isLoadingAccounts || isLoadingConfig || isLoading;

  if (!isLoadingAccounts && emailAccounts.length === 0 && !showConfig) return (
    <S.EmailWrapper>
      <S.SetupState>
        <S.SetupCard>
          <S.SetupIcon><IconMail /></S.SetupIcon>
          <S.SetupTitle>Configura tu Email</S.SetupTitle>
          <S.SetupButton onClick={openNewAccountConfig}><IconPlus /> Configurar</S.SetupButton>
        </S.SetupCard>
      </S.SetupState>
    </S.EmailWrapper>
  );

  return (
    <S.EmailWrapper onClick={() => { setEmailContextMenu(null); }}>
      <S.EmailSidebar>
        <S.AccountSwitcher>
          <S.AccountSelect value={activeAccountId || ''} onChange={handleAccountChange} disabled={emailAccounts.length === 0}>
            {emailAccounts.length === 0 ? (
              <option value="">Sin cuentas</option>
            ) : emailAccounts.map(account => (
              <option key={account.id} value={account.id}>{account.email}</option>
            ))}
          </S.AccountSelect>
          <S.AccountSwitcherMeta>
            {emailAccounts.length === 1 ? '1 cuenta conectada' : `${emailAccounts.length} cuentas conectadas`}
          </S.AccountSwitcherMeta>
        </S.AccountSwitcher>

        <S.ComposeBtn disabled={!activeAccountId} onClick={() => setComposeModal({ show: true, to: '', cc: '', subject: '', body: '', attachments: [] })}><IconPencil /> Redactar</S.ComposeBtn>
        {stdFolders.map(f => (
          <S.FolderItem key={f.id} $active={activeFolder === f.id} onClick={() => setActiveFolder(f.id)}>
            {f.icon} {f.label}
          </S.FolderItem>
        ))}
        <S.SidebarSpacer />
        <S.FolderItem onClick={openNewAccountConfig}><IconPlus /> Agregar cuenta</S.FolderItem>
        <S.FolderItem onClick={openSelectedAccountConfig}><IconSettings /> Config</S.FolderItem>
      </S.EmailSidebar>

      <S.EmailListContainer>
        <S.SearchHeader>
          <S.SearchWrapper>
            <IconSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: '#94a3b8' }} />
            <S.SearchInput placeholder="Buscar en la bandeja..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          </S.SearchWrapper>
        </S.SearchHeader>
        <S.ListToolbar>
          <S.ActionGroup>
            {selectedIds.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '0.5rem' }}>
                <input type="checkbox" checked={selectedIds.length === filtered.length && filtered.length > 0} onChange={() => setSelectedIds(selectedIds.length === filtered.length ? [] : filtered.map(e => e.uid || e.id))} style={{ accentColor: '#c6893f', cursor: 'pointer' }} />
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#64748b' }}>SELECCIONAR TODO</span>
              </div>
            )}
            <S.IconButton onClick={() => refetch()} title="Actualizar"><IconRefresh className={isRefetching ? 'animate-spin' : ''} /></S.IconButton>      
          </S.ActionGroup>
          {selectedIds.length > 0 && (
            <S.ActionGroup>
              <S.IconButton title={isAllRead ? "Marcar como no leído" : "Marcar como leído"} onClick={() => handleEmailAction(isAllRead ? 'markUnread' : 'markRead')}><IconMailOpen /></S.IconButton>
              <S.IconButton title="Responder" onClick={() => setComposeModal({ ...composeModal, show: true, to: filtered.find(e => (e.uid || e.id) === selectedIds[0])?.from || '' })}><IconBrandReply /></S.IconButton>
              <S.IconButton title="Responder a todos" onClick={() => {}}><IconBrandReplyAll /></S.IconButton>
              <S.IconButton title="Reenviar" onClick={() => setComposeModal({ ...composeModal, show: true })}><IconBrandForward /></S.IconButton>
              <S.IconButton title="Mover a..." onClick={() => handleEmailAction('move')}><IconBrandMove /></S.IconButton>
              <S.IconButton title="Copiar a..." onClick={() => handleEmailAction('copy')}><IconBrandCopy /></S.IconButton>
              <S.IconButton $danger title="Eliminar" onClick={() => handleEmailAction('delete')}><IconTrash /></S.IconButton>
            </S.ActionGroup>
          )}
        </S.ListToolbar>
        <S.ScrollArea>
          {isEmailLoading ? <S.EmptyState><S.Spinner /></S.EmptyState> : (isError || filtered.length === 0) ? <S.EmptyState><IconMail /><p>{isError ? 'Error cargando carpeta' : 'No hay mensajes en esta carpeta'}</p></S.EmptyState> :
            filtered.map(e => {
              const emailId = e.uid || e.id;
              const isUnread = e.flags ? !e.flags.includes('\\Seen') : false;
              const isSelected = selectedIds.includes(emailId);
              const EnvelopeIcon = isUnread ? IconEnvelopeOpen : IconEnvelopeClosed;

              return (
                <S.EmailRow key={emailId} $unread={isUnread} $selected={isSelected} onClick={() => setViewingEmail(e)} onDoubleClick={() => setFullScreenEmail(e)} onContextMenu={ev => { ev.preventDefault(); setEmailContextMenu({ x: ev.pageX, y: ev.pageY }); if(!isSelected) setSelectedIds([emailId]); }}>
                  <S.CheckboxWrapper className="hover-checkbox" $selected={isSelected} onClick={ev => handleSelection(ev, emailId)}><input type="checkbox" checked={isSelected} readOnly /></S.CheckboxWrapper>
                  <S.RowContent>
                    <S.RowHeader>
                      <S.SenderName $unread={isUnread}>{e.from?.split('<')[0] || 'Desconocido'}</S.SenderName>
                      <S.RowMeta>
                        <S.RowDate className="email-row-date">{new Date(e.date || Date.now()).toLocaleDateString([], { day: '2-digit', month: 'short' })}</S.RowDate>
                        <S.RowActions className="email-row-actions" onClick={ev => ev.stopPropagation()}>
                          <S.RowActionButton
                            $envelope
                            title={isUnread ? 'Marcar como leído' : 'Marcar como no leído'}
                            aria-label={isUnread ? 'Marcar como leído' : 'Marcar como no leído'}
                            onClick={ev => handleToggleReadState(ev, e)}
                          >
                            <EnvelopeIcon />
                          </S.RowActionButton>
                          <S.RowActionButton
                            $danger
                            title="Enviar a la papelera"
                            aria-label="Enviar a la papelera"
                            onClick={ev => handleMoveEmailToTrash(ev, e)}
                          >
                            <IconTrash />
                          </S.RowActionButton>
                        </S.RowActions>
                      </S.RowMeta>
                    </S.RowHeader>
                    <S.SubjectText $unread={isUnread}>{e.subject || '(Sin Asunto)'}</S.SubjectText>
                  </S.RowContent>
                </S.EmailRow>
              );
            })
          }
        </S.ScrollArea>
      </S.EmailListContainer>

      <S.ReadingPane>
        {viewingEmail ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <S.IconButton onClick={() => setViewingEmail(null)}><IconBack /></S.IconButton>
              <S.ActionGroup>
                <S.IconButton title="Responder" onClick={() => setComposeModal({ ...composeModal, show: true, to: viewingEmail.from })}><IconBrandReply /></S.IconButton>
                <S.IconButton title="Responder a todos"><IconBrandReplyAll /></S.IconButton>
                <S.IconButton title="Reenviar"><IconBrandForward /></S.IconButton>
                <S.IconButton onClick={() => setFullScreenEmail(viewingEmail)}><IconMaximize /></S.IconButton>
              </S.ActionGroup>
            </div>
            <S.EmailHeaderInfo><h2>{viewingEmail.subject}</h2><div className="meta"><span className="sender">{viewingEmail.from}</span><span className="date">{new Date(viewingEmail.date).toLocaleString()}</span></div></S.EmailHeaderInfo>
            <S.EmailContentBody dangerouslySetInnerHTML={{ __html: viewingEmail.bodyPreview }} />
          </>
        ) : <S.EmptyState><IconMail /><p>Selecciona un correo para leer</p></S.EmptyState>}
      </S.ReadingPane>

      {emailContextMenu && (
        <S.ContextMenu style={{ top: emailContextMenu.y, left: emailContextMenu.x }} onClick={ev => ev.stopPropagation()}>
          <S.MenuItem onClick={() => handleEmailAction(isAllRead ? 'markUnread' : 'markRead')}>
            <IconMailOpen /> {isAllRead ? "Marcar como no leído" : "Marcar como leído"}
          </S.MenuItem>
          <S.MenuItem onClick={() => setComposeModal({ ...composeModal, show: true, to: filtered.find(e => (e.uid || e.id) === selectedIds[0])?.from || '' })}><IconBrandReply /> Responder</S.MenuItem>
          <S.MenuItem onClick={() => {}}><IconBrandReplyAll /> Responder a todos</S.MenuItem>
          <S.MenuItem onClick={() => setComposeModal({ ...composeModal, show: true })}><IconBrandForward /> Reenviar</S.MenuItem>
          <S.MenuItem onClick={() => handleEmailAction('move')}>
            <IconBrandMove /> Mover a...
          </S.MenuItem>
          <S.MenuItem onClick={() => handleEmailAction('copy')}>
            <IconBrandCopy /> Copiar a...
          </S.MenuItem>
          <S.MenuItem $isDelete onClick={() => handleEmailAction('delete')}>
            <IconTrash /> Enviar a la papelera
          </S.MenuItem>   
        </S.ContextMenu>
      )}

      {moveModal.show && (
        <S.ModalOverlay onClick={() => setMoveModal({ show: false, uids: [], action: 'move' })}>
          <S.ModalUI onClick={ev => ev.stopPropagation()}>
            <S.ModalTitle><h3>{moveModal.action === 'copy' ? 'Copiar a...' : 'Mover a...'}</h3></S.ModalTitle>
            <div style={{ maxHeight: '300px', overflowY: 'auto', padding: '0.5rem' }}>
              {stdFolders.filter(f => f.id !== 'Trash').map(f => (
                <S.FolderItem key={f.id} onClick={() => handleEmailAction(moveModal.action, f.id)}>
                  {f.icon} {f.label}
                </S.FolderItem>
              ))}
            </div>
            <S.ModalActions style={{ marginTop: '1.5rem' }}>
              <S.CancelBtnUI onClick={() => setMoveModal({ show: false, uids: [], action: 'move' })}>Cerrar</S.CancelBtnUI>
            </S.ModalActions>
          </S.ModalUI>
        </S.ModalOverlay>
      )}

      {composeModal.show && (
        <S.ModalOverlay onClick={() => handleSaveDraft(true)}>
          <S.ComposeModalUI 
            onClick={ev => ev.stopPropagation()}
            onDragOver={(e) => { e.preventDefault(); setIsDraggingFile(true); }}
            onDragLeave={() => setIsDraggingFile(false)}
            onDrop={(e) => { e.preventDefault(); setIsDraggingFile(false); handleFileUpload(e.dataTransfer.files); }}
          >
            {isDraggingFile && <S.DropZoneOverlay><div className="message">Suelte los archivos aquí</div></S.DropZoneOverlay>}
            
            <S.ModalTitle>
              <h3><IconPencil /> Nuevo Mensaje</h3>
              <S.IconButton onClick={() => handleSaveDraft(true)} disabled={saveDraftMutation.isPending || sendEmailMutation.isPending}><IconClose /></S.IconButton>
            </S.ModalTitle>

            <S.ComposeHeader>
              <S.ComposeField>
                <label>Para</label>
                <input type="text" placeholder="destinatario@ejemplo.com" value={composeModal.to} onChange={e => setComposeModal({...composeModal, to: e.target.value})} />
              </S.ComposeField>
              <S.ComposeField>
                <label>CC</label>
                <input type="text" placeholder="copia@ejemplo.com" value={composeModal.cc} onChange={e => setComposeModal({...composeModal, cc: e.target.value})} />
              </S.ComposeField>
              <S.ComposeField>
                <label>Asunto</label>
                <input type="text" placeholder="Asunto del mensaje" value={composeModal.subject} onChange={e => setComposeModal({...composeModal, subject: e.target.value})} />
              </S.ComposeField>
            </S.ComposeHeader>

            <S.EditorWrapper>
              <S.EditorToolbar>
                <S.IconButton $active={editorStates.bold} onClick={() => handleEditorAction('bold')} title="Negrita"><IconBold /></S.IconButton>
                <S.IconButton $active={editorStates.italic} onClick={() => handleEditorAction('italic')} title="Itálica"><IconItalic /></S.IconButton>
                <S.IconButton $active={editorStates.underline} onClick={() => handleEditorAction('underline')} title="Subrayado"><IconUnderline /></S.IconButton>
                <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 0.5rem' }} />
                <S.IconButton $active={editorStates.alignLeft} onClick={() => handleEditorAction('justifyLeft')} title="Izquierda"><IconAlignLeft /></S.IconButton>
                <S.IconButton $active={editorStates.alignCenter} onClick={() => handleEditorAction('justifyCenter')} title="Centro"><IconAlignCenter /></S.IconButton>
                <S.IconButton $active={editorStates.alignRight} onClick={() => handleEditorAction('justifyRight')} title="Derecha"><IconAlignRight /></S.IconButton>
                <S.IconButton $active={editorStates.alignJustify} onClick={() => handleEditorAction('justifyFull')} title="Justificado"><IconAlignJustify /></S.IconButton>
                <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 0.5rem' }} />
                <S.IconButton $active={editorStates.ordered} onClick={() => handleEditorAction('insertOrderedList')} title="Lista numerada"><IconListBulleted /></S.IconButton>
                <S.IconButton $active={editorStates.bulleted} onClick={() => handleEditorAction('insertUnorderedList')} title="Lista viñetas"><IconListOrdered /></S.IconButton>
                <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 0.5rem' }} />
                <S.IconButton onClick={() => fileInputRef.current.click()} title="Adjuntar archivos"><IconAttachment /></S.IconButton>
                <input type="file" multiple ref={fileInputRef} style={{ display: 'none' }} onChange={e => handleFileUpload(e.target.files)} />
              </S.EditorToolbar>
              
              <S.EditorArea 
                contentEditable 
                ref={editorRef}
                onKeyUp={handleMarkdown}
                onMouseUp={updateEditorStates}
                onPaste={handlePaste}
                placeholder="Escribe tu mensaje profesional aquí..."
              />
              
              {activeSignature && <S.SignatureArea dangerouslySetInnerHTML={{ __html: activeSignature }} />}
            </S.EditorWrapper>

            {composeModal.attachments.length > 0 && (
              <S.AttachmentArea>
                {composeModal.attachments.map(a => (
                  <S.AttachmentPill key={a.id}>
                    <IconFile /> {a.name} <span style={{ opacity: 0.5, fontWeight: 500 }}>({a.size})</span>
                    <button onClick={() => removeAttachment(a.id)}><IconClose /></button>
                  </S.AttachmentPill>
                ))}
              </S.AttachmentArea>
            )}

            {composeError && <S.ComposeError><IconWarning /> {composeError}</S.ComposeError>}

            <S.ModalFooter>
              <S.CancelButton onClick={handleDiscardCompose} disabled={saveDraftMutation.isPending || sendEmailMutation.isPending}>Descartar</S.CancelButton>
              <S.CancelButton
                style={{ background: 'rgba(198, 137, 63, 0.1)', color: '#c6893f' }}
                onClick={() => handleSaveDraft()}
                disabled={saveDraftMutation.isPending || sendEmailMutation.isPending}
              >
                {saveDraftMutation.isPending ? 'Guardando...' : 'Guardar como borrador'}
              </S.CancelButton>
              <S.SendButton onClick={handleSendEmail} disabled={saveDraftMutation.isPending || sendEmailMutation.isPending}>
                {sendEmailMutation.isPending ? 'Enviando...' : 'Enviar Mensaje'}
              </S.SendButton>
            </S.ModalFooter>
          </S.ComposeModalUI>
        </S.ModalOverlay>
      )}

      {toast.show && (
        <S.ToastNotification $type={toast.type}>
          {toast.type === 'loading' ? <S.ToastSpinner /> : toast.type === 'error' ? <IconWarning /> : <IconCheck />}
          {toast.message}
          {toast.type === 'error' && composeModal.body && (
            <S.ToastActionButton onClick={() => setComposeModal(current => ({ ...current, show: true }))}>Reabrir</S.ToastActionButton>
          )}
          <S.ToastCloseButton onClick={() => setToast(current => ({ ...current, show: false }))}><IconClose /></S.ToastCloseButton>
        </S.ToastNotification>
      )}

      {fullScreenEmail && (
        <S.ModalOverlay onClick={() => setFullScreenEmail(null)}>
          <S.LargeModalUI onClick={ev => ev.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <S.IconButton onClick={() => setFullScreenEmail(null)}><IconClose /></S.IconButton>
            </div>
            <S.EmailHeaderInfo>
              <h2>{fullScreenEmail.subject}</h2>
              <div className="meta"><span>{fullScreenEmail.from}</span><span>{new Date(fullScreenEmail.date || Date.now()).toLocaleString()}</span></div>
            </S.EmailHeaderInfo>
            <S.EmailContentBody style={{ flex: 1 }} dangerouslySetInnerHTML={{ __html: fullScreenEmail.bodyPreview }} />
          </S.LargeModalUI>
        </S.ModalOverlay>
      )}

      {showConfig && (
        <S.ConfigOverlay onClick={() => setShowConfig(false)}>
          <S.ModalUI onClick={ev => ev.stopPropagation()}>
            <S.ModalTitle>
              <h3><IconSettings /> {configMode === 'create' ? 'Agregar cuenta de Email' : 'Configuración de Cuenta'}</h3>
            </S.ModalTitle>
            <S.ConfigForm>
              <div><label>Dirección de Email</label><input type="email" value={emailConfig.email} onChange={ev => setEmailConfig({...emailConfig, email: ev.target.value})} /></div>
              <div>
                <label>Contraseña Aplicación</label>
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder={configMode === 'edit' ? 'Dejar vacío para conservar la actual' : 'Contraseña de aplicación'}
                  value={emailConfig.password}
                  onChange={ev => setEmailConfig({...emailConfig, password: ev.target.value})}
                />
              </div>
              <div><label>Firma Profesional (HTML)</label><textarea value={emailConfig.signature} onChange={ev => setEmailConfig({...emailConfig, signature: ev.target.value})} /></div>
              <S.FormRow>
                <div><label>IMAP Host</label><input type="text" value={emailConfig.imap_host} onChange={ev => setEmailConfig({...emailConfig, imap_host: ev.target.value})} /></div>
                <div><label>Puerto</label><input type="number" value={emailConfig.imap_port} onChange={ev => setEmailConfig({...emailConfig, imap_port: ev.target.value})} /></div>
              </S.FormRow>
              <S.FormRow>
                <div><label>SMTP Host</label><input type="text" value={emailConfig.smtp_host} onChange={ev => setEmailConfig({...emailConfig, smtp_host: ev.target.value})} /></div>
                <div><label>Puerto</label><input type="number" value={emailConfig.smtp_port} onChange={ev => setEmailConfig({...emailConfig, smtp_port: ev.target.value})} /></div>
              </S.FormRow>
              {configError && <S.ConfigError><IconWarning /> {configError}</S.ConfigError>}
            </S.ConfigForm>
            <S.ModalActions>
              <S.CancelBtnUI onClick={() => setShowConfig(false)}>Cancelar</S.CancelBtnUI>
              <S.SubmitBtnUI disabled={saveConfigMutation.isPending} onClick={handleSaveAccountConfig}>
                {saveConfigMutation.isPending ? 'Guardando...' : 'Guardar Cambios'}
              </S.SubmitBtnUI>
            </S.ModalActions>
          </S.ModalUI>
        </S.ConfigOverlay>
      )}
    </S.EmailWrapper>
  );
};
