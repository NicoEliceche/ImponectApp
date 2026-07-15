import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  IconAttachment,
  IconBack,
  IconCheck,
  IconClose,
  IconForward,
  IconPhone,
  IconPin,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconSend,
  IconSettings,
  IconStore,
  IconVideo,
  IconDots,
} from '../../../shared/components/Icons';
import { publicAsset } from '../../../shared/utils/urls';
import {
  disconnectWhatsAppIntegration,
  fetchWhatsAppIntegrationStatus,
  saveWhatsAppManualConfig,
  testWhatsAppIntegration,
} from '../api/crmApi';
import * as S from './CRMScreenStyled';

const SESSION_FILTER_KEY = 'imponect.chats.channelFilter';
const SESSION_ACCOUNTS_KEY = 'imponect.chats.connectedAccounts';
const WHATSAPP_CONNECTED_STATUSES = new Set(['connected']);
const WHATSAPP_ATTENTION_STATUSES = new Set(['needs_setup', 'requires_attention', 'disconnected']);

const createVerifyToken = () => `imponect-whatsapp-${Date.now().toString(36)}-${Math.random().toString(16).slice(2, 8)}`;

const channels = [
  { id: 'all', label: 'Todo', shortLabel: 'Todo', sync: 'synced' },
  { id: 'whatsapp', label: 'WhatsApp', shortLabel: 'WA', sync: 'synced' },
  { id: 'instagram', label: 'Instagram', shortLabel: 'IG', sync: 'syncing' },
  { id: 'facebook', label: 'Facebook', shortLabel: 'FB', sync: 'synced' },
  { id: 'alibaba', label: 'Alibaba', shortLabel: 'AB', sync: 'synced' },
  { id: 'made', label: 'Made-in-China', shortLabel: 'MIC', sync: 'warning' },
  { id: '1688', label: '1688', shortLabel: '1688', sync: 'synced' },
];

const channelMessagingPolicies = {
  whatsapp: {
    open: {
      locked: false,
      tone: 'success',
      badge: 'WhatsApp 24h activa',
      note: 'Respuesta libre habilitada porque el cliente escribió dentro de la ventana permitida.',
    },
    template_required: {
      locked: true,
      tone: 'warning',
      badge: 'Template requerido',
      note: 'La ventana de 24h de WhatsApp está vencida. Imponect bloquea mensajes libres para evitar incumplir la política.',
      actionLabel: 'Enviar template aprobado',
      actionTitle: 'Templates aprobados de WhatsApp',
      actionOptions: ['Enviar seguimiento de cotización', 'Solicitar confirmación de datos', 'Avisar novedad de presupuesto', 'Enviar actualización de carga'],
      placeholder: 'Esperando respuesta del cliente o envío de template aprobado',
    },
  },
  instagram: {
    open: {
      locked: false,
      tone: 'success',
      badge: 'Instagram 24h activa',
      note: 'Respuesta libre habilitada por interacción reciente del usuario.',
    },
    human_agent: {
      locked: false,
      tone: 'warning',
      badge: 'Agente humano',
      note: 'Fuera de 24h, pero dentro de la ventana manual extendida de Meta. Solo respuesta humana, sin automatizaciones ni mensajes masivos.',
    },
    expired: {
      locked: true,
      tone: 'danger',
      badge: 'Instagram vencido',
      note: 'Meta no permite mensajes libres para este DM. Hace falta una opción permitida por la plataforma.',
      actionLabel: 'Ver opciones permitidas',
      actionTitle: 'Opciones permitidas por Instagram',
      actionOptions: ['Revisar respuesta humana disponible', 'Esperar nuevo mensaje del usuario', 'Asignar a revisión manual'],
      placeholder: 'Chat bloqueado por política de Meta',
    },
  },
  facebook: {
    open: {
      locked: false,
      tone: 'success',
      badge: 'Facebook 24h activa',
      note: 'Respuesta libre habilitada por interacción reciente del usuario.',
    },
    human_agent: {
      locked: false,
      tone: 'warning',
      badge: 'Agente humano',
      note: 'Fuera de 24h, pero dentro de la ventana manual extendida de Meta. Solo respuesta humana, sin automatizaciones ni mensajes masivos.',
    },
    expired: {
      locked: true,
      tone: 'danger',
      badge: 'Messenger vencido',
      note: 'Meta no permite mensajes libres para este chat. Hace falta una opción permitida por la plataforma.',
      actionLabel: 'Ver opciones permitidas',
      actionTitle: 'Opciones permitidas por Facebook',
      actionOptions: ['Revisar respuesta humana disponible', 'Esperar nuevo mensaje del usuario', 'Asignar a revisión manual'],
      placeholder: 'Chat bloqueado por política de Meta',
    },
  },
  alibaba: {
    external_pending: {
      locked: false,
      tone: 'info',
      badge: 'Alibaba pendiente',
      note: 'El chat web de Alibaba queda para una etapa posterior. Por ahora este canal funciona como registro operativo.',
    },
  },
  made: {
    trade_messenger: {
      locked: false,
      tone: 'info',
      badge: 'Trade Messenger',
      note: 'Made-in-China usa Message Centre y Trade Messenger. No hay API pública de chat confirmada para integrarlo como inbox propio todavía.',
    },
  },
  '1688': {
    wangwang_restricted: {
      locked: false,
      tone: 'warning',
      badge: 'WangWang restringido',
      note: '1688/WangWang requiere capacidades del ecosistema Alibaba TOP y permisos específicos. La integración directa de mensajes queda en evaluación.',
    },
  },
};

const conversations = [
  {
    id: 'wa-breen',
    platform: 'whatsapp',
    name: 'Breen',
    subtitle: '+54 221 445-6745',
    accountType: 'Business Account',
    avatar: 'BR',
    pinned: true,
    favorite: true,
    unread: 0,
    time: 'Ayer',
    status: 'read',
    lastMessage: 'Última semana de Junio, Bingo',
    messagingWindow: 'template_required',
    tags: ['Catálogo', 'Cliente activo'],
    messages: [
      { id: 'm1', from: 'them', text: 'Hola Nico, ¿nos pasás el recibo de pago?', time: '17:04' },
      { id: 'm2', from: 'me', text: 'Okebon, maná (4kg)\nAzúcar\nLeche\nCafé instantáneo\nYerba', time: '17:07', status: 'read' },
      { id: 'm3', from: 'me', type: 'file', title: '2026_06_03_17_07_28_589_receipt.pdf', meta: '1 page · PDF · 15 kB', time: '17:07', status: 'read' },
      { id: 'm4', from: 'me', text: 'Plastificar del 1 al 10 por separado.', time: '19:17', status: 'read' },
      { id: 'm5', from: 'me', text: 'Y para la otra clase dentro de 2 semanas imprimir en papel común uno de cada juguete.', time: '19:18', status: 'read' },
      { id: 'm6', from: 'me', text: 'Última semana de Junio, Bingo', time: '19:28', status: 'read' },
    ],
  },
  {
    id: 'wa-constructora',
    platform: 'whatsapp',
    name: '+54 9 2223 42-6786 (You)',
    subtitle: 'Cámara argentina de la construcción',
    accountType: 'Personal',
    avatar: 'CA',
    pinned: true,
    favorite: false,
    unread: 2,
    time: 'Martes',
    status: 'delivered',
    lastMessage: 'Cámara argentina de la constru...',
    messagingWindow: 'open',
    tags: ['Grupo'],
    messages: [
      { id: 'm1', from: 'them', text: '¿Tenés el presupuesto final?', time: '09:12' },
      { id: 'm2', from: 'me', text: 'Lo reviso y te lo paso antes del mediodía.', time: '09:15', status: 'delivered' },
    ],
  },
  {
    id: 'wa-founders',
    platform: 'whatsapp',
    name: 'IMPONECT - FOUNDERS',
    subtitle: 'Alan: Yo ahora mientras llegan me pon...',
    accountType: 'Grupo',
    avatar: 'IF',
    pinned: true,
    favorite: true,
    unread: 3,
    time: '06:39',
    status: 'sent',
    lastMessage: 'Alan: Yo ahora mientras llegan me pon...',
    messagingWindow: 'template_required',
    tags: ['Equipo'],
    messages: [
      { id: 'm1', from: 'them', text: 'Alan: Yo ahora mientras llegan me pongo con eso.', time: '06:39' },
      { id: 'm2', from: 'me', text: 'Perfecto, lo vemos después del daily.', time: '06:41', status: 'sent' },
    ],
  },
  {
    id: 'ig-mayra',
    platform: 'instagram',
    name: 'mayra.design',
    subtitle: '@mayra.design · Instagram DM',
    accountType: 'Creator',
    avatar: 'MD',
    pinned: false,
    favorite: true,
    unread: 5,
    time: '08:12',
    status: 'read',
    lastMessage: 'Te mandé las medidas por DM.',
    messagingWindow: 'human_agent',
    tags: ['Diseño', 'Story reply'],
    messages: [
      { id: 'm1', from: 'them', text: 'Vi la historia de packaging. ¿Tienen medidas chicas?', time: '08:08' },
      { id: 'm2', from: 'me', text: 'Sí, te mando las opciones por acá.', time: '08:10', status: 'read' },
      { id: 'm3', from: 'them', text: 'Te mandé las medidas por DM.', time: '08:12' },
    ],
  },
  {
    id: 'fb-transportes',
    platform: 'facebook',
    name: 'Transportes Sur',
    subtitle: 'Messenger · Respuesta a anuncio',
    accountType: 'Page',
    avatar: 'TS',
    pinned: false,
    favorite: false,
    unread: 1,
    time: 'Ayer',
    status: 'delivered',
    lastMessage: '¿Pueden cotizar retiro en Avellaneda?',
    messagingWindow: 'open',
    tags: ['Ad response'],
    messages: [
      { id: 'm1', from: 'them', text: '¿Pueden cotizar retiro en Avellaneda?', time: '18:22' },
      { id: 'm2', from: 'me', text: 'Sí, pasanos volumen y horario de carga.', time: '18:31', status: 'delivered' },
    ],
  },
  {
    id: 'ab-supplier',
    platform: 'alibaba',
    name: 'Shenzhen Bright Packing Co.',
    subtitle: 'Alibaba.com · Gold Supplier',
    accountType: 'Supplier',
    avatar: 'SB',
    pinned: true,
    favorite: false,
    unread: 4,
    time: '02:18',
    status: 'read',
    lastMessage: 'PI updated with Trade Assurance.',
    messagingWindow: 'external_pending',
    tags: ['Trade Assurance', 'Cotización'],
    messages: [
      { id: 'm1', from: 'them', text: 'MOQ can be 500 units with custom logo.', time: '01:52' },
      { id: 'm2', from: 'me', text: 'Please update PI including cartons dimensions.', time: '02:04', status: 'read' },
      { id: 'm3', from: 'them', type: 'product', title: 'Custom rigid box 18x12x6', meta: 'FOB Ningbo · 500 units · 12 days', time: '02:18' },
    ],
  },
  {
    id: 'mic-inquiry',
    platform: 'made',
    name: 'Ningbo Better Tools',
    subtitle: 'Made-in-China · Message Centre',
    accountType: 'Manufacturer',
    avatar: 'NB',
    pinned: false,
    favorite: true,
    unread: 2,
    time: 'Lun',
    status: 'sent',
    lastMessage: 'We attached CE certificate.',
    messagingWindow: 'trade_messenger',
    tags: ['Inquiry', 'Certificados'],
    messages: [
      { id: 'm1', from: 'them', text: 'We attached CE certificate.', time: '11:08' },
      { id: 'm2', from: 'me', text: 'Please also send packing list and lead time.', time: '11:22', status: 'sent' },
    ],
  },
  {
    id: '1688-store',
    platform: '1688',
    name: '义乌玩具旗舰店',
    subtitle: '1688 · AliWangWang',
    accountType: 'Store',
    avatar: '1688',
    pinned: false,
    favorite: false,
    unread: 6,
    time: '00:41',
    status: 'delivered',
    lastMessage: '可以混批，今天能发货。',
    messagingWindow: 'wangwang_restricted',
    tags: ['采购', 'Traducir'],
    messages: [
      { id: 'm1', from: 'them', text: '可以混批，今天能发货。', time: '00:38' },
      { id: 'm2', from: 'me', text: '请确认一箱数量和重量。', time: '00:41', status: 'delivered' },
    ],
  },
];

const platformMenuOptions = {
  whatsapp: ['Info del contacto', 'Catálogo', 'Buscar mensajes', 'Silenciar notificaciones', 'Mensajes temporales', 'Etiquetas', 'Exportar chat', 'Vaciar chat', 'Bloquear / reportar'],
  instagram: ['Perfil de Instagram', 'Responder con plantilla', 'Asignar conversación', 'Marcar para seguimiento', 'Ocultar conversación', 'Bloquear / restringir'],
  facebook: ['Ver perfil en Messenger', 'Responder comentario asociado', 'Asignar conversación', 'Marcar como listo', 'Mover a spam', 'Bloquear usuario'],
  alibaba: ['Ficha del proveedor', 'Trade Assurance', 'Traducir conversación', 'Crear orden', 'Solicitar PI', 'Ver historial de cotizaciones'],
  made: ['Ficha del fabricante', 'Inquiry basket', 'Descargar mensajes', 'Agregar a contactos', 'Blacklist', 'Backup de mensajes'],
  '1688': ['Traducir conversación', 'Ver tienda', 'Crear pedido', 'Solicitar fotos reales', 'Consultar stock', 'Guardar contacto WangWang'],
};

const channelById = channels.reduce((acc, channel) => {
  acc[channel.id] = channel;
  return acc;
}, {});

const defaultConnectedAccounts = channels
  .filter(channel => channel.id !== 'all')
  .map((channel, index) => ({
    id: channel.id,
    name: channel.label,
    enabled: true,
    sync: channel.sync,
    interval: '15',
    order: index,
    connection: channel.sync === 'warning' ? 'Requiere revisión' : 'Conectada',
  }));

const getStoredFilter = () => {
  if (typeof window === 'undefined') return ['all'];

  const storedFilter = sessionStorage.getItem(SESSION_FILTER_KEY);
  if (!storedFilter) return ['all'];

  try {
    const parsedFilter = JSON.parse(storedFilter);
    return Array.isArray(parsedFilter) && parsedFilter.length ? parsedFilter : ['all'];
  } catch {
    return [storedFilter];
  }
};

const getStoredAccounts = () => {
  if (typeof window === 'undefined') return defaultConnectedAccounts;

  const storedAccounts = sessionStorage.getItem(SESSION_ACCOUNTS_KEY);
  if (!storedAccounts) return defaultConnectedAccounts;

  try {
    const parsedAccounts = JSON.parse(storedAccounts);
    if (!Array.isArray(parsedAccounts)) return defaultConnectedAccounts;

    return defaultConnectedAccounts.map(defaultAccount => ({
      ...defaultAccount,
      ...parsedAccounts.find(account => account.id === defaultAccount.id),
    }));
  } catch {
    return defaultConnectedAccounts;
  }
};

const getUnreadCount = (channelId, visibleChannelIds = null) => {
  const visibleChannels = visibleChannelIds ? new Set(visibleChannelIds) : null;

  return conversations
  .filter(chat => {
    if (visibleChannels && !visibleChannels.has(chat.platform)) return false;
    return channelId === 'all' || chat.platform === channelId;
  })
  .reduce((total, chat) => total + chat.unread, 0);
};

const getSyncText = (sync) => {
  if (sync === 'syncing') return 'Sincronizando';
  if (sync === 'warning') return 'Revisar sync';
  return 'Sincronizado';
};

const getPlatformLabel = (platform) => channelById[platform]?.label || platform;

const getWhatsAppSyncState = (integration, isLoading) => {
  if (isLoading) return 'syncing';
  if (!integration || WHATSAPP_ATTENTION_STATUSES.has(integration.status)) return 'warning';
  return 'synced';
};

const getWhatsAppConnectionLabel = (integration, isLoading) => {
  if (isLoading) return 'Consultando conexión';
  if (!integration || integration.status === 'needs_setup') return 'Requiere configuración';
  if (integration.status === 'requires_attention') return 'Requiere actualizar credenciales';
  if (integration.status === 'disconnected') return 'Desconectada';
  if (integration.last_verified_at) return 'Conectada y verificada';
  return 'Conectada sin prueba reciente';
};

const getWhatsAppStatusTitle = (integration) => {
  if (!integration || integration.status === 'needs_setup') return 'WhatsApp no conectado';
  if (integration.status === 'requires_attention') return 'WhatsApp requiere atención';
  if (integration.status === 'disconnected') return 'WhatsApp desconectado';
  return 'WhatsApp conectado';
};

const isBusinessLike = (chat) => ['Business Account', 'Supplier', 'Manufacturer', 'Store'].includes(chat.accountType);

const getMessagingGuardrail = (chat) => {
  if (!chat) return null;

  const platformPolicies = channelMessagingPolicies[chat.platform] || {};
  const state = chat.messagingWindow || 'open';
  const policy = platformPolicies[state] || platformPolicies.open;

  return policy || {
    locked: false,
    tone: 'info',
    badge: 'Canal conectado',
    note: 'Este canal se gestionará según las reglas de su integración cuando conectemos la API real.',
  };
};

const MessageStatus = ({ status }) => {
  if (!status) return null;

  return (
    <S.MessageStatus $status={status} aria-label={status}>
      {status === 'sent' ? '✓' : '✓✓'}
    </S.MessageStatus>
  );
};

const PlatformLogo = ({ platform }) => {
  const channel = channelById[platform] || channelById.all;
  return (
    <S.PlatformLogo $platform={platform}>
      {channel.shortLabel}
    </S.PlatformLogo>
  );
};

const ChatModal = ({ modal, onClose }) => {
  if (!modal) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalPanel onClick={event => event.stopPropagation()}>
        <S.ModalHeader>
          <div>
            <S.ModalTitle>{modal.title}</S.ModalTitle>
            <S.ModalSubtitle>{modal.subtitle}</S.ModalSubtitle>
          </div>
          <S.IconButton onClick={onClose} title="Cerrar">
            <IconClose />
          </S.IconButton>
        </S.ModalHeader>

        <S.ModalOptions>
          {modal.options.map(option => (
            <S.ModalOption key={option}>
              <IconCheck />
              <span>{option}</span>
            </S.ModalOption>
          ))}
        </S.ModalOptions>
      </S.ModalPanel>
    </S.ModalOverlay>
  );
};

const AccountSettingsModal = ({ accounts, onClose, onMove, onRefresh, onSave, onUpdate }) => (
  <S.ModalOverlay onClick={onClose}>
    <S.AccountsModalPanel onClick={event => event.stopPropagation()}>
      <S.ModalHeader>
        <div>
          <S.ModalTitle>Configuración de cuentas</S.ModalTitle>
          <S.ModalSubtitle>Conexiones, orden, sincronización y visibilidad de filtros.</S.ModalSubtitle>
        </div>
        <S.IconButton onClick={onClose} title="Cerrar">
          <IconClose />
        </S.IconButton>
      </S.ModalHeader>

      <S.AccountRows>
        {accounts.map((account, index) => (
          <S.AccountRow key={account.id}>
            <S.AccountIdentity>
              <S.SyncIndicator $sync={account.sync} />
              <PlatformLogo platform={account.id} />
              <div>
                <S.AccountName>{account.name}</S.AccountName>
                <S.AccountStatus>{account.connection}</S.AccountStatus>
              </div>
            </S.AccountIdentity>

            <S.AccountControls>
              <S.AccountInput
                value={account.name}
                onChange={event => onUpdate(account.id, 'name', event.target.value)}
                aria-label={`Nombre de ${account.name}`}
              />
              <S.AccountSelect
                value={account.sync}
                onChange={event => onUpdate(account.id, 'sync', event.target.value)}
                aria-label={`Estado de sync de ${account.name}`}
              >
                <option value="synced">Sincronizado</option>
                <option value="syncing">Sincronizando</option>
                <option value="warning">Revisar sync</option>
              </S.AccountSelect>
              <S.AccountSelect
                value={account.interval}
                onChange={event => onUpdate(account.id, 'interval', event.target.value)}
                aria-label={`Frecuencia de ${account.name}`}
              >
                <option value="5">Cada 5 min</option>
                <option value="15">Cada 15 min</option>
                <option value="30">Cada 30 min</option>
                <option value="60">Cada 1 hora</option>
              </S.AccountSelect>
              <S.AccountToggle>
                <input
                  type="checkbox"
                  checked={account.enabled}
                  onChange={event => onUpdate(account.id, 'enabled', event.target.checked)}
                />
                Visible
              </S.AccountToggle>
            </S.AccountControls>

            <S.RowActions>
              <S.IconButton onClick={() => onMove(index, -1)} disabled={index === 0} title="Subir">
                <IconBack />
              </S.IconButton>
              <S.IconButton onClick={() => onMove(index, 1)} disabled={index === accounts.length - 1} title="Bajar">
                <IconForward />
              </S.IconButton>
              <S.IconButton onClick={() => onRefresh(account.id)} title="Actualizar sync">
                <IconRefresh />
              </S.IconButton>
            </S.RowActions>
          </S.AccountRow>
        ))}
      </S.AccountRows>

      <S.ModalFooter>
        <S.SecondaryButton onClick={onClose}>Cancelar</S.SecondaryButton>
        <S.PrimaryButton onClick={onSave}>Guardar cambios</S.PrimaryButton>
      </S.ModalFooter>
    </S.AccountsModalPanel>
  </S.ModalOverlay>
);

const WhatsAppSetupPanel = ({
  integration,
  isLoading,
  error,
  onOpenManualConfig,
  onRefresh,
  onTest,
  onDisconnect,
  onShowMetaInfo,
  isTesting,
  isDisconnecting,
}) => {
  const isConnected = WHATSAPP_CONNECTED_STATUSES.has(integration?.status);
  const canTest = Boolean(integration?.has_access_token && integration?.phone_number_id);
  const lastVerifiedText = integration?.last_verified_at
    ? new Intl.DateTimeFormat('es-AR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(integration.last_verified_at))
    : 'Sin prueba registrada';

  return (
    <S.SetupPanel>
      <S.SetupBadge $sync={getWhatsAppSyncState(integration, isLoading)}>
        <S.SyncIndicator $sync={getWhatsAppSyncState(integration, isLoading)} />
        {getWhatsAppConnectionLabel(integration, isLoading)}
      </S.SetupBadge>

      <S.SetupTitle>{getWhatsAppStatusTitle(integration)}</S.SetupTitle>
      <S.SetupText>
        Para recibir y responder mensajes desde Imponect, vinculá una cuenta de WhatsApp Business Platform.
        Podés conectar con Meta más adelante o cargar credenciales manualmente desde esta pantalla.
      </S.SetupText>

      {error && <S.SetupError>{error}</S.SetupError>}

      <S.SetupGrid>
        <S.SetupInfoCard>
          <span>Webhook URL</span>
          <strong>{integration?.webhook_url || 'Disponible al consultar el backend'}</strong>
        </S.SetupInfoCard>
        <S.SetupInfoCard>
          <span>Número</span>
          <strong>{integration?.phone_number || 'Sin número vinculado'}</strong>
        </S.SetupInfoCard>
        <S.SetupInfoCard>
          <span>Phone Number ID</span>
          <strong>{integration?.phone_number_id || 'Pendiente'}</strong>
        </S.SetupInfoCard>
        <S.SetupInfoCard>
          <span>Última verificación</span>
          <strong>{lastVerifiedText}</strong>
        </S.SetupInfoCard>
      </S.SetupGrid>

      <S.SetupActions>
        <S.PrimaryButton type="button" onClick={onOpenManualConfig}>
          <IconSettings />
          {isConnected ? 'Actualizar credenciales' : 'Configuración manual'}
        </S.PrimaryButton>
        <S.SecondaryButton type="button" onClick={onShowMetaInfo}>
          Conectar con Meta
        </S.SecondaryButton>
        <S.SecondaryButton type="button" onClick={onTest} disabled={!canTest || isTesting}>
          <IconRefresh />
          {isTesting ? 'Probando...' : 'Probar conexión'}
        </S.SecondaryButton>
        {integration?.status && integration.status !== 'needs_setup' && (
          <S.SecondaryButton type="button" onClick={onDisconnect} disabled={isDisconnecting}>
            {isDisconnecting ? 'Desconectando...' : 'Desconectar'}
          </S.SecondaryButton>
        )}
        <S.IconButton type="button" onClick={onRefresh} title="Actualizar estado">
          <IconRefresh />
        </S.IconButton>
      </S.SetupActions>
    </S.SetupPanel>
  );
};

const WhatsAppManualModal = ({
  form,
  integration,
  error,
  isSaving,
  isTesting,
  onChange,
  onClose,
  onCopyWebhook,
  onSubmit,
  onSubmitAndTest,
}) => (
  <S.ModalOverlay onClick={onClose}>
    <S.WhatsAppConfigModal as="form" onSubmit={onSubmit} onClick={event => event.stopPropagation()}>
      <S.ModalHeader>
        <div>
          <S.ModalTitle>Configuración manual de WhatsApp</S.ModalTitle>
          <S.ModalSubtitle>
            Pegá las credenciales de WhatsApp Cloud API. Los tokens se guardan en backend y no se devuelven completos al navegador.
          </S.ModalSubtitle>
        </div>
        <S.IconButton type="button" onClick={onClose} title="Cerrar">
          <IconClose />
        </S.IconButton>
      </S.ModalHeader>

      <S.ConfigBody>
        <S.ConfigWarning>
          <IconCheck />
          <span>Si el token expiró, escribí uno nuevo. Si dejás el campo vacío y ya había token guardado, se conserva el anterior.</span>
        </S.ConfigWarning>

        <S.ConfigGrid>
          <S.ConfigField>
            <span>Número asociado</span>
            <input
              value={form.phone_number}
              onChange={event => onChange('phone_number', event.target.value)}
              placeholder="+54 9 ..."
            />
          </S.ConfigField>
          <S.ConfigField>
            <span>WhatsApp Business Account ID</span>
            <input
              value={form.business_account_id}
              onChange={event => onChange('business_account_id', event.target.value)}
              placeholder="WABA ID"
              required
            />
          </S.ConfigField>
          <S.ConfigField>
            <span>Phone Number ID</span>
            <input
              value={form.phone_number_id}
              onChange={event => onChange('phone_number_id', event.target.value)}
              placeholder="Phone Number ID"
              required
            />
          </S.ConfigField>
          <S.ConfigField>
            <span>Verify Token</span>
            <input
              value={form.verify_token}
              onChange={event => onChange('verify_token', event.target.value)}
              placeholder="Token para validar webhook"
              required
            />
          </S.ConfigField>
          <S.ConfigField $wide>
            <span>Access Token</span>
            <input
              value={form.access_token}
              onChange={event => onChange('access_token', event.target.value)}
              placeholder={integration?.access_token_masked || 'Pegá el token de Meta'}
              autoComplete="off"
            />
          </S.ConfigField>
          <S.ConfigField $wide>
            <span>App Secret</span>
            <input
              value={form.app_secret}
              onChange={event => onChange('app_secret', event.target.value)}
              placeholder={integration?.app_secret_masked || 'Opcional, recomendado para producción'}
              autoComplete="off"
            />
          </S.ConfigField>
          <S.ConfigField $wide>
            <span>Webhook URL</span>
            <S.CopyRow>
              <input value={integration?.webhook_url || ''} readOnly />
              <S.SecondaryButton type="button" onClick={onCopyWebhook}>Copiar</S.SecondaryButton>
            </S.CopyRow>
          </S.ConfigField>
        </S.ConfigGrid>

        {error && <S.SetupError>{error}</S.SetupError>}
      </S.ConfigBody>

      <S.ModalFooter>
        <S.SecondaryButton type="button" onClick={onClose} disabled={isSaving || isTesting}>
          Cancelar
        </S.SecondaryButton>
        <S.SecondaryButton type="button" onClick={onSubmitAndTest} disabled={isSaving || isTesting}>
          <IconRefresh />
          {isTesting ? 'Probando...' : 'Guardar y probar'}
        </S.SecondaryButton>
        <S.PrimaryButton type="submit" disabled={isSaving || isTesting}>
          {isSaving ? 'Guardando...' : 'Guardar configuración'}
        </S.PrimaryButton>
      </S.ModalFooter>
    </S.WhatsAppConfigModal>
  </S.ModalOverlay>
);

export const CRMScreen = () => {
  const [activeChannels, setActiveChannels] = useState(getStoredFilter);
  const [connectedAccounts, setConnectedAccounts] = useState(getStoredAccounts);
  const [quickFilter, setQuickFilter] = useState('all');
  const [activeChatId, setActiveChatId] = useState('');
  const [modal, setModal] = useState(null);
  const [showAccountsModal, setShowAccountsModal] = useState(false);
  const [whatsappIntegration, setWhatsappIntegration] = useState(null);
  const [isWhatsappLoading, setIsWhatsappLoading] = useState(true);
  const [whatsappAction, setWhatsappAction] = useState('');
  const [whatsappError, setWhatsappError] = useState('');
  const [showWhatsAppManualModal, setShowWhatsAppManualModal] = useState(false);
  const [whatsappForm, setWhatsappForm] = useState({
    phone_number: '',
    business_account_id: '',
    phone_number_id: '',
    verify_token: '',
    access_token: '',
    app_secret: '',
  });

  const loadWhatsAppIntegration = useCallback(async () => {
    setIsWhatsappLoading(true);
    setWhatsappError('');

    try {
      const data = await fetchWhatsAppIntegrationStatus();
      setWhatsappIntegration(data);
    } catch (error) {
      setWhatsappError(error.message || 'No se pudo consultar WhatsApp.');
    } finally {
      setIsWhatsappLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWhatsAppIntegration();
  }, [loadWhatsAppIntegration]);

  const visibleChannelIds = useMemo(() => (
    connectedAccounts.filter(account => account.enabled).map(account => account.id)
  ), [connectedAccounts]);

  const isWhatsAppConnected = WHATSAPP_CONNECTED_STATUSES.has(whatsappIntegration?.status);
  const whatsappSyncState = getWhatsAppSyncState(whatsappIntegration, isWhatsappLoading);
  const unreadVisibleChannelIds = useMemo(() => (
    isWhatsAppConnected ? visibleChannelIds : visibleChannelIds.filter(channelId => channelId !== 'whatsapp')
  ), [isWhatsAppConnected, visibleChannelIds]);
  const displayedConnectedAccounts = useMemo(() => connectedAccounts.map(account => (
    account.id === 'whatsapp'
      ? {
          ...account,
          sync: whatsappSyncState,
          connection: getWhatsAppConnectionLabel(whatsappIntegration, isWhatsappLoading),
        }
      : account
  )), [connectedAccounts, isWhatsappLoading, whatsappIntegration, whatsappSyncState]);

  const orderedChannels = useMemo(() => {
    const accountChannels = [...displayedConnectedAccounts]
      .sort((a, b) => a.order - b.order)
      .filter(account => account.enabled)
      .map(account => ({
        ...channelById[account.id],
        label: account.name,
        sync: account.sync,
      }));

    return [channelById.all, ...accountChannels];
  }, [displayedConnectedAccounts]);

  const filteredConversations = useMemo(() => {
    const showAllChannels = activeChannels.includes('all');
    const visibleChannels = new Set(visibleChannelIds);
    const channelFiltered = conversations.filter(chat => (
      visibleChannels.has(chat.platform)
      && (chat.platform !== 'whatsapp' || isWhatsAppConnected)
      && (showAllChannels || activeChannels.includes(chat.platform))
    ));
    const quickFiltered = channelFiltered.filter((chat) => {
      if (quickFilter === 'unread') return chat.unread > 0;
      if (quickFilter === 'favorites') return chat.favorite;
      return true;
    });

    return [...quickFiltered].sort((a, b) => Number(b.pinned) - Number(a.pinned));
  }, [activeChannels, isWhatsAppConnected, quickFilter, visibleChannelIds]);

  const activeChat = useMemo(() => (
    filteredConversations.find(chat => chat.id === activeChatId) || filteredConversations[0]
  ), [activeChatId, filteredConversations]);
  const activeGuardrail = useMemo(() => getMessagingGuardrail(activeChat), [activeChat]);
  const isWhatsAppFocused = !activeChannels.includes('all') && activeChannels.includes('whatsapp');
  const shouldShowWhatsAppSetup = isWhatsAppFocused && !isWhatsAppConnected;

  useEffect(() => {
    sessionStorage.setItem(SESSION_FILTER_KEY, JSON.stringify(activeChannels));
  }, [activeChannels]);

  useEffect(() => {
    const visibleChannelIds = new Set(orderedChannels.map(channel => channel.id));
    if (activeChannels.some(channelId => !visibleChannelIds.has(channelId))) {
      setActiveChannels(['all']);
    }
  }, [activeChannels, orderedChannels]);

  useEffect(() => {
    if (activeChat) {
      setActiveChatId(activeChat.id);
    }
  }, [activeChat]);

  const openOptionsModal = (title, subtitle, options) => {
    setModal({ title, subtitle, options });
  };

  const handleChannelChange = (channelId) => {
    setActiveChannels((currentChannels) => {
      if (channelId === 'all') return ['all'];

      const selectedChannels = currentChannels.filter(id => id !== 'all');
      const nextChannels = selectedChannels.includes(channelId)
        ? selectedChannels.filter(id => id !== channelId)
        : [...selectedChannels, channelId];

      return nextChannels.length ? nextChannels : ['all'];
    });
    setQuickFilter('all');
  };

  const updateConnectedAccount = (accountId, field, value) => {
    setConnectedAccounts(currentAccounts => currentAccounts.map(account => (
      account.id === accountId
        ? {
            ...account,
            [field]: value,
            ...(field === 'sync' ? { connection: value === 'warning' ? 'Requiere revisión' : value === 'syncing' ? 'Sincronizando ahora' : 'Conectada' } : {}),
          }
        : account
    )));
  };

  const moveConnectedAccount = (index, direction) => {
    setConnectedAccounts((currentAccounts) => {
      const sortedAccounts = [...currentAccounts].sort((a, b) => a.order - b.order);
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= sortedAccounts.length) return currentAccounts;

      const nextAccounts = [...sortedAccounts];
      [nextAccounts[index], nextAccounts[targetIndex]] = [nextAccounts[targetIndex], nextAccounts[index]];

      return nextAccounts.map((account, order) => ({ ...account, order }));
    });
  };

  const refreshConnectedAccount = (accountId) => {
    setConnectedAccounts(currentAccounts => currentAccounts.map(account => (
      account.id === accountId
        ? { ...account, sync: 'synced', connection: 'Actualizada recién' }
        : account
    )));
  };

  const saveConnectedAccounts = () => {
    sessionStorage.setItem(SESSION_ACCOUNTS_KEY, JSON.stringify(connectedAccounts));
    setShowAccountsModal(false);
  };

  const openWhatsAppManualConfig = () => {
    setWhatsappForm({
      phone_number: whatsappIntegration?.phone_number || '',
      business_account_id: whatsappIntegration?.business_account_id || '',
      phone_number_id: whatsappIntegration?.phone_number_id || '',
      verify_token: whatsappIntegration?.verify_token || createVerifyToken(),
      access_token: '',
      app_secret: '',
    });
    setWhatsappError('');
    setShowWhatsAppManualModal(true);
  };

  const updateWhatsAppForm = (field, value) => {
    setWhatsappForm(currentForm => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const saveWhatsAppConfig = async ({ testAfterSave = false } = {}) => {
    setWhatsappAction(testAfterSave ? 'save-test' : 'save');
    setWhatsappError('');

    try {
      const savedIntegration = await saveWhatsAppManualConfig(whatsappForm);
      setWhatsappIntegration(savedIntegration);

      if (testAfterSave) {
        const testResult = await testWhatsAppIntegration();
        setWhatsappIntegration(testResult.integration);
      }

      setShowWhatsAppManualModal(false);
    } catch (error) {
      setWhatsappError(error.message || 'No se pudo guardar la configuración de WhatsApp.');
    } finally {
      setWhatsappAction('');
    }
  };

  const handleWhatsAppConfigSubmit = (event) => {
    event.preventDefault();
    saveWhatsAppConfig();
  };

  const testWhatsAppConnection = async () => {
    setWhatsappAction('test');
    setWhatsappError('');

    try {
      const result = await testWhatsAppIntegration();
      setWhatsappIntegration(result.integration);
    } catch (error) {
      setWhatsappError(error.message || 'No se pudo probar la conexión de WhatsApp.');
      loadWhatsAppIntegration();
    } finally {
      setWhatsappAction('');
    }
  };

  const disconnectWhatsApp = async () => {
    setWhatsappAction('disconnect');
    setWhatsappError('');

    try {
      const updatedIntegration = await disconnectWhatsAppIntegration();
      setWhatsappIntegration(updatedIntegration);
      setActiveChatId('');
    } catch (error) {
      setWhatsappError(error.message || 'No se pudo desconectar WhatsApp.');
    } finally {
      setWhatsappAction('');
    }
  };

  const copyWhatsAppWebhook = async () => {
    if (!whatsappIntegration?.webhook_url) return;
    try {
      await navigator.clipboard?.writeText(whatsappIntegration.webhook_url);
    } catch {
      setWhatsappError('No se pudo copiar la URL automáticamente.');
    }
  };

  const showMetaSignupInfo = () => {
    openOptionsModal(
      'Conectar con Meta',
      'Embedded Signup queda preparado como camino recomendado para producción.',
      [
        'Iniciar sesión con Meta Business',
        'Elegir Business Manager y WABA',
        'Seleccionar número de WhatsApp',
        'Guardar Phone Number ID y WABA ID automáticamente',
        'Validar webhook con el Verify Token de Imponect',
      ],
    );
  };

  return (
    <S.ScreenWrapper>
      <S.TopSection>
        <S.ChannelBar aria-label="Filtros por aplicación">
          <S.ChannelSettingsButton onClick={() => setShowAccountsModal(true)} title="Configurar cuentas conectadas">
            <IconSettings />
          </S.ChannelSettingsButton>
          {orderedChannels.map(channel => (
            <S.ChannelButton
              key={channel.id}
              $active={activeChannels.includes(channel.id)}
              $sync={channel.sync}
              onClick={() => handleChannelChange(channel.id)}
              title={getSyncText(channel.sync)}
            >
              <S.SyncIndicator $sync={channel.sync} />
              <PlatformLogo platform={channel.id} />
              <span>{channel.label}</span>
              <S.UnreadBadge>
                {getUnreadCount(channel.id, unreadVisibleChannelIds)}
              </S.UnreadBadge>
            </S.ChannelButton>
          ))}
        </S.ChannelBar>
      </S.TopSection>

      <S.ChatLayout>
        <S.ConversationsList>
          <S.ListTopBar>
            <S.ListTitle>Chats</S.ListTitle>
            <S.ListActions>
              <S.IconButton
                title="Nuevo chat"
                onClick={() => openOptionsModal('Nuevo chat', 'Crear conversación en el canal activo', ['Nuevo contacto', 'Nuevo grupo', 'Importar lead', 'Crear conversación interna'])}
              >
                <IconPlus />
              </S.IconButton>
              <S.IconButton
                title="Opciones de bandeja"
                onClick={() => openOptionsModal('Opciones de bandeja', 'Configuración general de la lista de chats', ['Filtros guardados', 'Chats archivados', 'Mensajes fijados', 'Automatizaciones', 'Asignación por equipo', 'Preferencias de notificación'])}
              >
                <IconDots />
              </S.IconButton>
            </S.ListActions>
          </S.ListTopBar>

          <S.SearchBox>
            <IconSearch />
            <input type="search" placeholder="Buscar o iniciar un chat nuevo" />
          </S.SearchBox>

          <S.QuickFilters>
            <S.QuickFilter $active={quickFilter === 'all'} onClick={() => setQuickFilter('all')}>All</S.QuickFilter>
            <S.QuickFilter $active={quickFilter === 'unread'} onClick={() => setQuickFilter('unread')}>
              Unread {filteredConversations.filter(chat => chat.unread > 0).length}
            </S.QuickFilter>
            <S.QuickFilter $active={quickFilter === 'favorites'} onClick={() => setQuickFilter('favorites')}>Favorites</S.QuickFilter>
            <S.QuickFilter onClick={() => openOptionsModal('Filtros avanzados', 'Segmentación de conversaciones', ['Por responsable', 'Por etiqueta', 'Por SLA vencido', 'Por origen de campaña', 'Por conversación sin respuesta'])}>
              <IconDots />
            </S.QuickFilter>
          </S.QuickFilters>

          <S.ChatItems>
            {filteredConversations.length ? filteredConversations.map(chat => (
              <S.ChatItem
                key={chat.id}
                $active={activeChat?.id === chat.id}
                onClick={() => setActiveChatId(chat.id)}
              >
                <S.Avatar $platform={chat.platform}>{chat.avatar}</S.Avatar>
                <S.ChatSummary>
                  <S.ChatSummaryTop>
                    <S.ChatName>{chat.name}</S.ChatName>
                    <S.ChatTime $unread={chat.unread > 0}>{chat.time}</S.ChatTime>
                  </S.ChatSummaryTop>
                  <S.ChatMeta>{getPlatformLabel(chat.platform)} · {chat.accountType}</S.ChatMeta>
                  <S.LastMessageRow>
                    <MessageStatus status={chat.status} />
                    <S.LastMessage>{chat.lastMessage}</S.LastMessage>
                  </S.LastMessageRow>
                  <S.TagRow>
                    {chat.tags.map(tag => <S.Tag key={tag}>{tag}</S.Tag>)}
                  </S.TagRow>
                </S.ChatSummary>
                <S.ChatIndicators>
                  {chat.pinned && <IconPin />}
                  {chat.unread > 0 && <S.ChatUnread>{chat.unread}</S.ChatUnread>}
                </S.ChatIndicators>
              </S.ChatItem>
            )) : (
              <S.ListEmptyState>
                {shouldShowWhatsAppSetup
                  ? 'WhatsApp requiere configuración para mostrar conversaciones.'
                  : 'No hay conversaciones para este filtro.'}
              </S.ListEmptyState>
            )}
          </S.ChatItems>

          <S.AccountFooter>
            <S.AccountAvatar src={publicAsset('assets/imponect_logo.jpg')} alt="Imponect WhatsApp" />
            <S.AccountInfo>
              <strong>Imponect WhatsApp</strong>
              <span>Business Account · {getWhatsAppConnectionLabel(whatsappIntegration, isWhatsappLoading)}</span>
            </S.AccountInfo>
            <S.FooterActions>
              <S.IconButton
                title="Catálogo"
                onClick={() => openOptionsModal('Catálogo de WhatsApp', 'Administrar productos y colecciones', ['Agregar producto', 'Editar colecciones', 'Compartir catálogo', 'Ver inventario', 'Sincronizar Commerce Manager'])}
              >
                <IconStore />
              </S.IconButton>
              <S.IconButton
                title="Cuenta"
                onClick={() => openOptionsModal('Cuenta de WhatsApp', 'Configuración de la cuenta conectada', ['Perfil comercial', 'Horario de atención', 'Respuestas rápidas', 'Mensaje de ausencia', 'Usuarios y permisos', 'Números conectados'])}
              >
                <IconDots />
              </S.IconButton>
            </S.FooterActions>
          </S.AccountFooter>
        </S.ConversationsList>

        <S.ChatView>
          {shouldShowWhatsAppSetup ? (
            <WhatsAppSetupPanel
              integration={whatsappIntegration}
              isLoading={isWhatsappLoading}
              error={whatsappError}
              onOpenManualConfig={openWhatsAppManualConfig}
              onRefresh={loadWhatsAppIntegration}
              onTest={testWhatsAppConnection}
              onDisconnect={disconnectWhatsApp}
              onShowMetaInfo={showMetaSignupInfo}
              isTesting={whatsappAction === 'test' || whatsappAction === 'save-test'}
              isDisconnecting={whatsappAction === 'disconnect'}
            />
          ) : activeChat ? (
            <>
              <S.ChatHeader>
                <S.HeaderIdentity>
                  <S.Avatar $platform={activeChat.platform}>{activeChat.avatar}</S.Avatar>
                  <div>
                    <S.OpenChatName>{activeChat.name}</S.OpenChatName>
                    <S.OpenChatMeta>{activeChat.accountType}</S.OpenChatMeta>
                  </div>
                </S.HeaderIdentity>
                <S.OpenChatActions>
                  {isBusinessLike(activeChat) && (
                    <S.IconButton
                      title="Catálogo"
                      onClick={() => openOptionsModal('Catálogo y productos', activeChat.name, ['Ver catálogo', 'Enviar producto', 'Crear cotización', 'Agregar item al catálogo', 'Editar disponibilidad'])}
                    >
                      <IconStore />
                    </S.IconButton>
                  )}
                  <S.IconButton title="Videollamada"><IconVideo /></S.IconButton>
                  <S.IconButton title="Llamada"><IconPhone /></S.IconButton>
                  <S.IconButton title="Buscar"><IconSearch /></S.IconButton>
                  <S.IconButton
                    title="Opciones"
                    onClick={() => openOptionsModal('Opciones del chat', activeChat.name, platformMenuOptions[activeChat.platform] || [])}
                  >
                    <IconDots />
                  </S.IconButton>
                </S.OpenChatActions>
              </S.ChatHeader>

              {activeGuardrail && (
                <S.PolicyBanner $locked={activeGuardrail.locked} $tone={activeGuardrail.tone}>
                  <S.PolicyBadge $platform={activeChat.platform}>{activeGuardrail.badge}</S.PolicyBadge>
                  <S.PolicyText $locked={activeGuardrail.locked} $tone={activeGuardrail.tone}>{activeGuardrail.note}</S.PolicyText>
                  {activeGuardrail.actionLabel && (
                    <S.TemplateAction
                      type="button"
                      onClick={() => openOptionsModal(
                        activeGuardrail.actionTitle || 'Opciones permitidas',
                        activeChat.name,
                        activeGuardrail.actionOptions || [],
                      )}
                    >
                      {activeGuardrail.actionLabel}
                    </S.TemplateAction>
                  )}
                </S.PolicyBanner>
              )}

              <S.MessageArea $platform={activeChat.platform}>
                <S.DateDivider>Hoy</S.DateDivider>
                {activeChat.messages.map(message => (
                  <S.MessageBubble key={message.id} $own={message.from === 'me'}>
                    {message.type === 'file' && (
                      <S.AttachmentCard>
                        <S.FileBadge>PDF</S.FileBadge>
                        <div>
                          <strong>{message.title}</strong>
                          <span>{message.meta}</span>
                        </div>
                      </S.AttachmentCard>
                    )}
                    {message.type === 'product' && (
                      <S.ProductCard>
                        <S.ProductThumb>{activeChat.avatar}</S.ProductThumb>
                        <div>
                          <strong>{message.title}</strong>
                          <span>{message.meta}</span>
                        </div>
                      </S.ProductCard>
                    )}
                    {!message.type && <S.MessageText>{message.text}</S.MessageText>}
                    <S.MessageFooter>
                      <span>{message.time}</span>
                      <MessageStatus status={message.status} />
                    </S.MessageFooter>
                  </S.MessageBubble>
                ))}
              </S.MessageArea>

              <S.Composer $locked={activeGuardrail?.locked}>
                <S.IconButton title="Adjuntar" disabled={activeGuardrail?.locked}><IconAttachment /></S.IconButton>
                <S.EmojiButton type="button" disabled={activeGuardrail?.locked}>☺</S.EmojiButton>
                <S.ComposerInput
                  disabled={activeGuardrail?.locked}
                  placeholder={activeGuardrail?.locked ? activeGuardrail.placeholder : 'Escribe un mensaje'}
                />
                <S.IconButton title="Enviar" disabled={activeGuardrail?.locked}><IconSend /></S.IconButton>
              </S.Composer>
            </>
          ) : (
            <S.EmptyChat>Selecciona una conversación para comenzar.</S.EmptyChat>
          )}
        </S.ChatView>
      </S.ChatLayout>

      <ChatModal modal={modal} onClose={() => setModal(null)} />
      {showAccountsModal && (
        <AccountSettingsModal
          accounts={[...displayedConnectedAccounts].sort((a, b) => a.order - b.order)}
          onClose={() => setShowAccountsModal(false)}
          onMove={moveConnectedAccount}
          onRefresh={refreshConnectedAccount}
          onSave={saveConnectedAccounts}
          onUpdate={updateConnectedAccount}
        />
      )}
      {showWhatsAppManualModal && (
        <WhatsAppManualModal
          form={whatsappForm}
          integration={whatsappIntegration}
          error={whatsappError}
          isSaving={whatsappAction === 'save' || whatsappAction === 'save-test'}
          isTesting={whatsappAction === 'test' || whatsappAction === 'save-test'}
          onChange={updateWhatsAppForm}
          onClose={() => setShowWhatsAppManualModal(false)}
          onCopyWebhook={copyWhatsAppWebhook}
          onSubmit={handleWhatsAppConfigSubmit}
          onSubmitAndTest={() => saveWhatsAppConfig({ testAfterSave: true })}
        />
      )}
    </S.ScreenWrapper>
  );
};
