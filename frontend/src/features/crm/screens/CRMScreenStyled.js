import styled, { css } from 'styled-components';

const platformColors = {
  all: '#334155',
  whatsapp: '#00a884',
  instagram: '#c13584',
  facebook: '#1877f2',
  alibaba: '#ff6a00',
  made: '#0f62fe',
  '1688': '#ff5000',
};

const syncColors = {
  synced: '#10b981',
  syncing: '#f59e0b',
  warning: '#ef4444',
};

const getPlatformColor = (platform) => platformColors[platform] || platformColors.all;
const getSyncColor = (sync) => syncColors[sync] || syncColors.synced;

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  min-height: calc(100vh - 2.5rem);
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const ChannelBar = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: flex-start;
  column-gap: ${({ theme }) => theme.spacing[3]};
  row-gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
  overflow: visible;
`;

export const ChannelButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 2.4rem;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) => ($active ? theme.color.accentFaded : theme.color.surface)};
  color: ${({ $active, theme }) => ($active && theme.isDark ? theme.color.primary : theme.color.text)};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  max-width: 100%;
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    transform: translateY(-1px);
  }
`;

export const ChannelSettingsButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
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
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const SyncIndicator = styled.span`
  width: 0.55rem;
  height: 0.55rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $sync }) => getSyncColor($sync)};
  box-shadow: 0 0 0 0.2rem ${({ $sync }) => `${getSyncColor($sync)}22`};
  flex-shrink: 0;
`;

export const PlatformLogo = styled.span`
  width: 1.65rem;
  height: 1.65rem;
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ $platform }) => getPlatformColor($platform)};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const UnreadBadge = styled.span`
  min-width: 1.35rem;
  height: 1.35rem;
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

export const ChatLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(21rem, 25rem) minmax(0, 1fr);
  min-height: calc(100vh - 7rem);
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const ConversationsList = styled.aside`
  min-width: 0;
  background-color: ${({ theme }) => theme.isDark ? '#111b21' : theme.color.surface};
  border-right: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  flex-direction: column;
  min-height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    max-height: 34rem;
  }
`;

export const ListTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[3]};
`;

export const ListTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.text};
`;

export const ListActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const IconButton = styled.button`
  width: 2.15rem;
  height: 2.15rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.color.neutral[100]};
    color: ${({ theme }) => theme.color.text};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const SearchBox = styled.label`
  margin: 0 ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[3]};
  height: 2.6rem;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? '#202c33' : theme.color.neutral[100]};
  color: ${({ theme }) => theme.color.textSecondary};
  padding: 0 ${({ theme }) => theme.spacing[4]};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-family: inherit;
  }
`;

export const QuickFilters = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[3]};
  overflow-x: auto;
`;

export const QuickFilter = styled.button`
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.success : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) => ($active ? theme.color.successLight : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.color.success : theme.color.textSecondary)};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  min-height: 2rem;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  white-space: nowrap;
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const ChatItems = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 0 ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]};
`;

export const ChatItem = styled.button`
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $active, theme }) => ($active ? theme.color.neutral[100] : 'transparent')};
  color: ${({ theme }) => theme.color.text};
  display: grid;
  grid-template-columns: 3.1rem minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.color.neutral[100]};
  }
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(135deg, ${({ $platform }) => getPlatformColor($platform)}, ${({ theme }) => theme.color.accent});
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  flex-shrink: 0;
`;

export const AccountAvatar = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.full};
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.color.success};
  background: ${({ theme }) => theme.color.surface};
  flex-shrink: 0;
`;

export const ChatSummary = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ChatSummaryTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ChatName = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  font-size: ${({ theme }) => theme.typography.size.base};
`;

export const ChatTime = styled.span`
  flex-shrink: 0;
  color: ${({ $unread, theme }) => ($unread ? theme.color.success : theme.color.textSecondary)};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ChatMeta = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const LastMessageRow = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const LastMessage = styled.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const TagRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.neutral[100]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
`;

export const ChatIndicators = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textTertiary};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const ChatUnread = styled.span`
  min-width: 1.25rem;
  height: 1.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.success};
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const AccountFooter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.border};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.isDark ? '#202c33' : theme.color.neutral[50]};
`;

export const AccountInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};

  strong,
  span {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
`;

export const FooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ChatView = styled.section`
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.isDark ? '#0b141a' : theme.color.primaryFaded};
`;

export const ChatHeader = styled.div`
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: 0 ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.isDark ? '#202c33' : theme.color.surface};
`;

export const HeaderIdentity = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const OpenChatName = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const OpenChatMeta = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const OpenChatActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-shrink: 0;
`;

export const MessageArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[8]} ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  background:
    radial-gradient(circle at 1rem 1rem, ${({ $platform }) => `${getPlatformColor($platform)}16`} 0 0.16rem, transparent 0.17rem),
    linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
  background-size: 2.5rem 2.5rem, auto;
`;

export const DateDivider = styled.div`
  align-self: center;
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const MessageBubble = styled.div`
  max-width: min(38rem, 78%);
  align-self: ${({ $own }) => ($own ? 'flex-end' : 'flex-start')};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ $own, theme }) => ($own ? '#005c4b' : theme.color.surface)};
  color: ${({ $own, theme }) => ($own ? theme.color.textInverse : theme.color.text)};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 92%;
  }
`;

export const MessageText = styled.p`
  margin: 0;
  white-space: pre-line;
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const MessageFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  opacity: 0.85;
`;

export const MessageStatus = styled.span`
  color: ${({ $status }) => ($status === 'read' ? '#53bdeb' : 'currentColor')};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0;
`;

const cardStyles = css`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing[3]};
  min-width: min(21rem, 100%);

  strong,
  span {
    display: block;
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  span {
    margin-top: ${({ theme }) => theme.spacing[1]};
    font-size: ${({ theme }) => theme.typography.size.xs};
    opacity: 0.85;
  }
`;

export const AttachmentCard = styled.div`
  ${cardStyles}
`;

export const FileBadge = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  flex-shrink: 0;
`;

export const ProductCard = styled.div`
  ${cardStyles}
`;

export const ProductThumb = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  flex-shrink: 0;
`;

export const Composer = styled.div`
  min-height: 4rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.isDark ? '#202c33' : theme.color.surface};
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export const EmojiButton = styled.button`
  width: 2.15rem;
  height: 2.15rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.lg};
  cursor: pointer;
`;

export const ComposerInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 2.7rem;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? '#2a3942' : theme.color.neutral[100]};
  color: ${({ theme }) => theme.color.text};
  padding: 0 ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-family: inherit;
`;

export const EmptyChat = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 6000;
  background: ${({ theme }) => theme.color.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[5]};
`;

export const ModalPanel = styled.div`
  width: min(100%, 34rem);
  max-height: min(90vh, 42rem);
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
  display: flex;
  flex-direction: column;
`;

export const AccountsModalPanel = styled(ModalPanel)`
  width: min(100%, 58rem);
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const ModalTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ModalSubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[2]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const ModalOptions = styled.div`
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const AccountRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  overflow-y: auto;
`;

export const AccountRow = styled.div`
  display: grid;
  grid-template-columns: minmax(13rem, 1.2fr) minmax(20rem, 2fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.color.neutral[50]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const AccountIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;
`;

export const AccountName = styled.strong`
  display: block;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const AccountStatus = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const AccountControls = styled.div`
  display: grid;
  grid-template-columns: minmax(8rem, 1fr) minmax(8rem, 0.9fr) minmax(8rem, 0.9fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const AccountInput = styled.input`
  min-width: 0;
  height: 2.35rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
  }
`;

export const AccountSelect = styled.select`
  height: 2.35rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  outline: none;
`;

export const AccountToggle = styled.label`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;

  input {
    accent-color: ${({ theme }) => theme.color.accent};
  }
`;

export const RowActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
`;

export const PrimaryButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.accentLight};
  }
`;

export const SecondaryButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.neutral[100]};
    color: ${({ theme }) => theme.color.text};
  }
`;

export const ModalOption = styled.button`
  width: 100%;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.text};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.neutral[100]};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.color.success};
  }
`;
