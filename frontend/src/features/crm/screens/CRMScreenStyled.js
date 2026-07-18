import styled, { css, keyframes } from 'styled-components';

const tacticalSweep = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

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

const getPolicyBorderColor = (tone, theme) => {
  if (tone === 'danger') return theme.color.error;
  if (tone === 'success') return theme.color.success;
  if (tone === 'warning') return theme.color.warning;
  return theme.color.info;
};

const getPolicyBackground = (tone, theme) => {
  if (theme.isDark) {
    if (tone === 'danger') return 'rgba(239, 68, 68, 0.16)';
    if (tone === 'success') return 'rgba(16, 185, 129, 0.14)';
    if (tone === 'warning') return 'rgba(245, 158, 11, 0.16)';
    return 'rgba(0, 85, 128, 0.22)';
  }

  if (tone === 'danger') return theme.color.errorLight;
  if (tone === 'success') return theme.color.successLight;
  if (tone === 'warning') return theme.color.warningLight;
  return theme.color.infoLight;
};

const getPolicyTextColor = (tone, theme) => {
  if (!theme.isDark) {
    if (tone === 'danger') return theme.color.error;
    if (tone === 'success') return '#047857';
    if (tone === 'warning') return '#92400e';
    return theme.color.info;
  }

  if (tone === 'danger') return '#fecaca';
  if (tone === 'success') return '#a7f3d0';
  if (tone === 'warning') return '#fde68a';
  return '#bfdbfe';
};

export const ScreenWrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  min-height: calc(100vh - 2.5rem);

  &::before {
    content: '';
    position: absolute;
    inset: -1rem;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.055)' : 'rgba(0, 51, 77, 0.035)'} 1px, transparent 1px),
      linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : 'rgba(198, 137, 63, 0.035)'} 1px, transparent 1px);
    background-size: 46px 46px;
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[4]};
    min-height: auto;
  }
`;

export const TopSection = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[4]};
  background:
    linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.08)' : 'rgba(198, 137, 63, 0.10)'} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,51,77,0.06)'} 1px, transparent 1px),
    linear-gradient(135deg, ${({ theme }) => theme.isDark ? 'rgba(13, 31, 41, 0.92)' : 'rgba(255,255,255,0.88)'} 0%, ${({ theme }) => theme.color.surface} 100%);
  background-size: 46px 46px, 46px 46px, 100% 100%;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.14), transparent);
    animation: ${tacticalSweep} 6.5s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: ${({ theme }) => theme.spacing[1]};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ChannelButton = styled.button`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 2.4rem;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) => ($active ? (theme.isDark ? 'rgba(198, 137, 63, 0.16)' : theme.color.accentFaded) : theme.color.surface)};
  color: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.text)};
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
    box-shadow: 0 0 18px rgba(198, 137, 63, 0.12);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    flex: 0 0 auto;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => theme.layout.buttonHeight};
    height: ${({ theme }) => theme.layout.buttonHeight};
    flex: 0 0 ${({ theme }) => theme.layout.buttonHeight};
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
  position: relative;
  display: grid;
  grid-template-columns: ${({ $chatListWidth }) => `${Math.round(Number($chatListWidth) || 400)}px 0.45rem minmax(0, 1fr)`};
  min-height: calc(100vh - 7rem);
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  cursor: ${({ $isResizing }) => ($isResizing ? 'col-resize' : 'default')};
  user-select: ${({ $isResizing }) => ($isResizing ? 'none' : 'auto')};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.025)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
  box-shadow: ${({ theme }) => theme.shadow.md}, 0 0 28px rgba(0, 51, 77, 0.12);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    cursor: default;
    user-select: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

export const ConversationsList = styled.aside`
  min-width: 0;
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? '#0d1f29' : theme.color.surface} 0%, ${({ theme }) => theme.isDark ? '#111b21' : theme.color.neutral[50]} 100%);
  display: flex;
  flex-direction: column;
  min-height: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    max-height: 34rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-height: min(42dvh, 24rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-height: 18rem;
  }
`;

export const ChatResizeHandle = styled.button`
  position: relative;
  width: 100%;
  min-width: 0.45rem;
  align-self: stretch;
  border: none;
  border-left: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-right: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  padding: 0;
  background: ${({ $active, theme }) => (
    $active
      ? (theme.isDark ? 'rgba(198, 137, 63, 0.24)' : theme.color.accentFaded)
      : (theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[100])
  )};
  cursor: col-resize;
  touch-action: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.13rem;
    height: 3.5rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.accent};
    opacity: ${({ $active }) => ($active ? 1 : 0.38)};
    transform: translate(-50%, -50%);
    box-shadow: 0 0 16px rgba(198, 137, 63, 0.22);
  }

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.18)' : theme.color.accentFaded};
    outline: none;
  }

  &:hover::before,
  &:focus-visible::before {
    opacity: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const ListTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.045)' : 'rgba(198, 137, 63, 0.06)'};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
  }
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
  min-width: 2.15rem;
  min-height: 2.15rem;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => theme.layout.buttonHeight};
    height: ${({ theme }) => theme.layout.buttonHeight};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ theme }) => theme.layout.inputHeight};
    margin: 0 ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
  }
`;

export const QuickFilters = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[3]};
  overflow-x: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
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
  background: ${({ $active, theme }) => ($active ? (theme.isDark ? 'rgba(198, 137, 63, 0.12)' : theme.color.accentFaded) : 'transparent')};
  color: ${({ theme }) => theme.color.text};
  display: grid;
  grid-template-columns: 3.1rem minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: left;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.09)' : theme.color.accentFaded};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 4.75rem;
    grid-template-columns: 3rem minmax(0, 1fr) auto;
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
  box-shadow: 0 0 18px ${({ $platform }) => `${getPlatformColor($platform)}44`};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 58dvh;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: auto;
    min-height: ${({ theme }) => theme.spacing[16]};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    align-items: flex-start;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-self: flex-start;
  }
`;

export const PolicyBanner = styled.div`
  min-height: 3.25rem;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ $tone, theme }) => getPolicyBorderColor($tone, theme)};
  background: ${({ $tone, theme }) => getPolicyBackground($tone, theme)};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  }
`;

export const PolicyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.75rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $platform }) => getPlatformColor($platform)};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  white-space: nowrap;
`;

export const PolicyText = styled.p`
  margin: 0;
  color: ${({ $tone, theme }) => getPolicyTextColor($tone, theme)};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const TemplateAction = styled.button`
  min-height: 2.15rem;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.accentLight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    min-height: ${({ theme }) => theme.layout.buttonHeight};
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[3]};
    min-height: 18rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 96%;
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
  background: ${({ $locked, theme }) => {
    if ($locked) return theme.isDark ? '#2a2418' : theme.color.neutral[100];
    return theme.isDark ? '#202c33' : theme.color.surface;
  }};
  border-top: 1px solid ${({ $locked, theme }) => ($locked ? theme.color.warning : theme.color.border)};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing[2]};
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const EmojiButton = styled.button`
  width: 2.15rem;
  height: 2.15rem;
  min-width: 2.15rem;
  min-height: 2.15rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.lg};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => theme.layout.buttonHeight};
    height: ${({ theme }) => theme.layout.buttonHeight};
  }
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.72;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: ${({ theme }) => theme.layout.inputHeight};
    padding: 0 ${({ theme }) => theme.spacing[4]};
  }
`;

export const EmptyChat = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const ListEmptyState = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.textSecondary};
  margin: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const SetupPanel = styled.section`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[8]};
  background:
    radial-gradient(circle at 20% 20%, ${({ theme }) => theme.isDark ? 'rgba(0,168,132,0.16)' : 'rgba(0,168,132,0.1)'} 0%, transparent 28%),
    linear-gradient(135deg, ${({ theme }) => theme.isDark ? '#0b141a' : theme.color.surface} 0%, ${({ theme }) => theme.isDark ? '#111b21' : theme.color.neutral[50]} 100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing[5]};
  }
`;

export const SetupBadge = styled.div`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ $sync }) => getSyncColor($sync)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const SetupTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const SetupText = styled.p`
  max-width: 48rem;
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed || theme.typography.lineHeight.normal};
`;

export const SetupError = styled.div`
  max-width: 52rem;
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.errorLight};
  color: ${({ theme }) => theme.color.error};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const SetupGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
  max-width: 56rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const SetupInfoCard = styled.div`
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.045)' : theme.color.surface};
  padding: ${({ theme }) => theme.spacing[4]};

  span,
  strong {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${({ theme }) => theme.color.textTertiary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    margin-top: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const SetupActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};
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

export const WhatsAppConfigModal = styled(ModalPanel)`
  width: min(100%, 62rem);
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

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.accentLight};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  svg {
    width: 1rem;
    height: 1rem;
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.neutral[100]};
    color: ${({ theme }) => theme.color.text};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const ConfigBody = styled.div`
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ConfigWarning = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.12)' : theme.color.accentFaded};
  color: ${({ theme }) => theme.color.text};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const ConfigGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ConfigField = styled.label`
  grid-column: ${({ $wide }) => ($wide ? '1 / -1' : 'auto')};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;

  input {
    width: 100%;
    min-width: 0;
    height: 2.65rem;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    text-transform: none;
    outline: none;
    color-scheme: ${({ theme }) => theme.isDark ? 'dark' : 'light'};

    &:focus {
      border-color: ${({ theme }) => theme.color.accent};
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
    }
  }
`;

export const CopyRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
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
