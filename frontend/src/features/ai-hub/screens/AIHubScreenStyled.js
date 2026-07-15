import styled, { css, keyframes } from 'styled-components';

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const neuralSweep = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  18% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const neuralPulse = keyframes`
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.82);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

const dataBlink = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 rgba(198, 137, 63, 0);
  }
  50% {
    box-shadow: 0 0 22px rgba(198, 137, 63, 0.36);
  }
`;

// ── Layout ──────────────────────────────────────────────────────────────────

export const ScreenWrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: grid;
  grid-template-columns: minmax(17rem, 19rem) minmax(0, 1fr);
  height: calc(100vh - 3rem);
  min-height: calc(100vh - 3rem);
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.07)' : 'rgba(0, 51, 77, 0.045)'} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : 'rgba(198, 137, 63, 0.04)'} 1px, transparent 1px),
    ${({ theme }) => theme.color.background};
  background-size: 48px 48px, 48px 48px, 100% 100%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 34px rgba(198, 137, 63, 0.12);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(115deg, transparent 0%, rgba(198, 137, 63, 0.12) 48%, transparent 70%);
    animation: ${neuralSweep} 8s ease-in-out infinite;
    z-index: -1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: calc(100vh - 3rem);
  }
`;

export const InternalSidebar = styled.aside`
  position: relative;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background:
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(180deg, rgba(198, 137, 63, 0.14) 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.color.primaryDark} 0%, ${({ theme }) => theme.color.primary} 100%);
  background-size: 100% 100%, 100% 42px, 100% 100%;
  color: ${({ theme }) => theme.color.textInverse};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent, rgba(198, 137, 63, 0.16), transparent);
    animation: ${neuralSweep} 7s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-height: 24rem;
  }
`;

export const MainArea = styled.main`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[5]};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: calc(100vh - 27rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

// ── Sidebar ─────────────────────────────────────────────────────────────────

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-shrink: 0;
`;

export const BrandMark = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;
`;

export const BrandIcon = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.color.accent};
  flex-shrink: 0;
  box-shadow: 0 0 22px rgba(198, 137, 63, 0.28);
  animation: ${dataBlink} 3.8s ease-in-out infinite;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`;

export const AITextIcon = styled.span`
  width: ${({ $large, $compact }) => ($large ? '2.75rem' : $compact ? '1rem' : '1.6rem')};
  height: ${({ $large, $compact }) => ($large ? '2.75rem' : $compact ? '1rem' : '1.6rem')};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ $large, $compact, theme }) => (
    $large
      ? theme.typography.size['3xl']
      : $compact
        ? theme.typography.size.sm
        : theme.typography.size.xl
  )};
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
`;

export const BrandName = styled.strong`
  display: block;
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const BrandSubtitle = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: rgba(255, 255, 255, 0.68);
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const SidebarIconButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.color.textInverse};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const SidebarSearch = styled.label`
  min-height: ${({ theme }) => theme.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.08);
  flex-shrink: 0;

  svg {
    width: 1rem;
    height: 1rem;
    color: rgba(255, 255, 255, 0.72);
    flex-shrink: 0;
  }

  input {
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.textInverse};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};

    &::placeholder {
      color: rgba(255, 255, 255, 0.58);
    }
  }
`;

export const SidebarScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  min-height: 0;
  overflow-y: auto;
  padding-right: ${({ theme }) => theme.spacing[2]};
`;

export const SidebarSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  color: rgba(255, 255, 255, 0.66);
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;

  strong {
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.12);
  flex-shrink: 0;
`;

export const SidebarEmpty = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const SidebarItem = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $active, theme }) => (
    $active
      ? `linear-gradient(135deg, ${theme.color.accent} 0%, ${theme.color.accentDark} 100%)`
      : `linear-gradient(180deg, ${theme.color.primary} 0%, ${theme.color.primaryDark} 100%)`
  )};
  color: ${({ theme }) => theme.color.textInverse};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  text-align: left;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16), transparent);
    transform: translateX(-120%);
    transition: transform 0.34s ease;
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 18px rgba(198, 137, 63, 0.18);

    &::before {
      transform: translateX(120%);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }

  span {
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;
  }

  strong {
    color: ${({ theme }) => theme.color.textInverse};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  small {
    margin-top: ${({ theme }) => theme.spacing[1]};
    color: rgba(255, 255, 255, 0.62);
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ChatHistoryItem = styled(SidebarItem)`
  position: relative;
  min-height: ${({ theme }) => theme.spacing[10]};
  padding-right: ${({ theme }) => theme.spacing[8]};

  > svg {
    width: 0.95rem;
    height: 0.95rem;
    flex-shrink: 0;
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const AgentEditButton = styled.button`
  position: absolute;
  right: ${({ $shifted, theme }) => ($shifted ? theme.spacing[8] : theme.spacing[2])};
  top: 50%;
  transform: translateY(-50%);
  width: 1.75rem;
  height: 1.75rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ theme }) => theme.color.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  z-index: 1;

  ${SidebarItem}:hover &,
  ${SidebarItem}:focus-within & {
    background: ${({ theme }) => theme.color.primaryDark};
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.textInverse};
  }

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }
`;

export const AgentDeleteButton = styled(AgentEditButton)`
  color: ${({ theme }) => theme.color.error};

  ${SidebarItem}:hover &,
  ${SidebarItem}:focus-within & {
    background: ${({ theme }) => theme.color.primaryDark};
  }

  &:hover {
    background: ${({ theme }) => theme.color.error};
    color: ${({ theme }) => theme.color.textInverse};
  }
`;

export const ChatMenuButton = styled(AgentEditButton)`
  color: ${({ theme }) => theme.color.accent};
`;

export const ChatRenameInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: rgba(255, 255, 255, 0.08);
  color: ${({ theme }) => theme.color.textInverse};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  outline: none;
`;

export const ChatContextMenu = styled.div`
  position: fixed;
  z-index: 7000;
  width: 11rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primaryDark};
  box-shadow: ${({ theme }) => theme.shadow.xl};
  padding: ${({ theme }) => theme.spacing[2]};
`;

export const ChatMenuItem = styled.button`
  width: 100%;
  min-height: ${({ theme }) => theme.spacing[10]};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: transparent;
  color: ${({ $danger, theme }) => ($danger ? theme.color.errorLight : theme.color.textInverse)};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    color: ${({ $danger, theme }) => ($danger ? theme.color.errorLight : theme.color.accent)};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ $danger, theme }) => ($danger ? theme.color.errorLight : theme.color.accent)};
    flex-shrink: 0;
  }
`;

export const ToolAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.color.accent};
  flex-shrink: 0;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
`;

// ── Shared Buttons ──────────────────────────────────────────────────────────

export const CreateAgentButton = styled.button`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.shadow.md};
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.color.accentLight};
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const IconButton = styled.button`
  width: ${({ theme }) => theme.spacing[10]};
  height: ${({ theme }) => theme.spacing[10]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.color.accent};
    border-color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

// ── Header ──────────────────────────────────────────────────────────────────

export const TopBar = styled.header`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(135deg, ${({ theme }) => theme.isDark ? 'rgba(13,31,41,0.94)' : 'rgba(255,255,255,0.9)'} 0%, ${({ theme }) => theme.color.surface} 100%);
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 24px rgba(198, 137, 63, 0.12);
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.14), transparent);
    animation: ${neuralSweep} 6.5s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const Subtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

// ── Agent Library ───────────────────────────────────────────────────────────

export const LibraryView = styled.section`
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const LibraryHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const LibraryTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const LibrarySubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  max-width: 56rem;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const AgentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const AgentCard = styled.article`
  position: relative;
  overflow: hidden;
  min-width: 0;
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[5]};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  animation: ${riseIn} 0.35s ease both;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: ${({ theme }) => theme.shadow.md}, 0 0 28px rgba(198, 137, 63, 0.16);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.12), transparent);
    transform: translateX(-120%);
    transition: transform 0.36s ease;
  }

  &:hover::before {
    transform: translateX(120%);
  }
`;

export const AgentCardIdentity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const AgentAvatar = styled.div`
  width: ${({ $compact }) => ($compact ? '2rem' : '3.25rem')};
  height: ${({ $compact }) => ($compact ? '2rem' : '3.25rem')};
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(198,137,63,0.18)' : theme.color.accentFaded} 0%, ${({ theme }) => theme.color.surface} 100%);
  border: 1px solid ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.accent};
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 0 18px rgba(198, 137, 63, 0.18);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  svg {
    width: ${({ $compact }) => ($compact ? '1.85rem' : '3rem')};
    height: ${({ $compact }) => ($compact ? '1.85rem' : '3rem')};
    align-self: flex-end;
    margin-bottom: -1px;
  }
`;

export const AgentName = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
`;

export const AgentDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  text-align: left;
  flex: 1;
`;

export const AgentCardMeta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  span {
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.full};
    color: ${({ theme }) => theme.color.textSecondary};
    background: ${({ theme }) => theme.color.neutral[50]};
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const LaunchButton = styled.button`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.accentLight};
    box-shadow: 0 0 18px rgba(198, 137, 63, 0.28);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const LoadingCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const EmptyLibrary = styled.div`
  grid-column: 1 / -1;
  min-height: 18rem;
  border: 1px dashed ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[8]};
  color: ${({ theme }) => theme.color.textSecondary};

  > svg {
    width: 2.75rem;
    height: 2.75rem;
    color: ${({ theme }) => theme.color.accent};
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.xl};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

// ── Chat Workspace ──────────────────────────────────────────────────────────

export const ChatWorkspace = styled.section`
  position: relative;
  min-height: 0;
  flex: 1;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 32px rgba(198, 137, 63, 0.12);
`;

export const ChatHeader = styled.header`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background:
    linear-gradient(135deg, ${({ theme }) => theme.isDark ? 'rgba(13,31,41,0.96)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.13), transparent);
    animation: ${neuralSweep} 6s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    flex-direction: column;
  }
`;

export const ActiveAgentInfo = styled.div`
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ActiveAgentName = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
`;

export const ActiveAgentDescription = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const ChatHeaderActions = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ControlGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};

  label {
    display: block;
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  select {
    height: ${({ theme }) => theme.spacing[10]};
    min-height: ${({ theme }) => theme.spacing[10]};
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    outline: none;
  }
`;

export const ToggleButton = styled.button`
  height: ${({ theme }) => theme.spacing[10]};
  min-height: ${({ theme }) => theme.spacing[10]};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $active, theme }) => ($active ? (theme.isDark ? 'rgba(198,137,63,0.16)' : theme.color.accentFaded) : theme.color.surface)};
  color: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.textSecondary)};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const ExternalFrame = styled.iframe`
  grid-row: 2 / -1;
  width: 100%;
  height: 100%;
  min-height: 35rem;
  border: none;
  background: ${({ theme }) => theme.color.background};
`;

export const ToolStrip = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.isDark ? 'rgba(6,19,26,0.72)' : theme.color.surface};
`;

export const ToolChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) => ($active ? (theme.isDark ? 'rgba(198,137,63,0.16)' : theme.color.accentFaded) : theme.color.neutral[50])};
  color: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.textSecondary)};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

export const MessagesPane = styled.div`
  position: relative;
  min-height: 0;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[6]};
  background:
    linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198,137,63,0.055)' : 'rgba(0,51,77,0.035)'} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : 'rgba(198,137,63,0.035)'} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.color.background} 0%, ${({ theme }) => theme.color.neutral[50]} 100%);
  background-size: 42px 42px, 42px 42px, 100% 100%;
`;

export const EmptyChat = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.textSecondary};

  ${AgentAvatar} {
    width: 4.75rem;
    height: 4.75rem;
    animation: ${dataBlink} 3s ease-in-out infinite;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  p {
    max-width: 42rem;
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const QuickPromptGrid = styled.div`
  width: min(100%, 48rem);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const QuickPromptButton = styled.button`
  position: relative;
  overflow: hidden;
  min-height: 5rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 20px rgba(198, 137, 63, 0.12);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.13), transparent);
    transform: translateX(-120%);
    transition: transform 0.32s ease;
  }

  &:hover::before {
    transform: translateX(120%);
  }
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
  margin-bottom: ${({ theme }) => theme.spacing[5]};
`;

export const MessageBubble = styled.article`
  position: relative;
  overflow: hidden;
  width: min(100%, ${({ $role }) => ($role === 'user' ? '46rem' : '58rem')});
  border: 1px solid ${({ $role, $error, theme }) => {
    if ($error) return theme.color.error;
    return $role === 'user' ? theme.color.primaryLight : theme.color.accent;
  }};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $role, $error, theme }) => {
    if ($error) return theme.color.errorLight;
    return $role === 'user'
      ? `linear-gradient(135deg, ${theme.color.primary} 0%, ${theme.color.primaryDark} 100%)`
      : `linear-gradient(180deg, ${theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${theme.color.surface} 100%)`;
  }};
  color: ${({ $role, $error, theme }) => {
    if ($error) return theme.color.error;
    return $role === 'user' ? theme.color.textInverse : theme.color.text;
  }};
  padding: ${({ theme }) => theme.spacing[5]};
  box-shadow: ${({ $role, theme }) => (
    $role === 'user'
      ? '0 0 22px rgba(0, 51, 77, 0.16)'
      : `${theme.shadow.sm}, 0 0 18px rgba(198, 137, 63, 0.12)`
  )};
  animation: ${riseIn} 0.22s ease both;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.7), transparent);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const MessageRole = styled.strong`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.72;
`;

export const MessageText = styled.div`
  white-space: normal;
  overflow-wrap: anywhere;
  font-size: ${({ theme }) => theme.typography.size.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};

  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }

  p,
  ul,
  ol,
  blockquote,
  pre,
  table {
    margin: 0 0 ${({ theme }) => theme.spacing[5]};
  }

  h1,
  h2,
  h3,
  h4 {
    margin: ${({ theme }) => theme.spacing[6]} 0 ${({ theme }) => theme.spacing[3]};
    color: inherit;
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.size['2xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.size.xl};
  }

  h3,
  h4 {
    font-size: ${({ theme }) => theme.typography.size.lg};
  }

  ul,
  ol {
    padding-left: ${({ theme }) => theme.spacing[6]};
  }

  li + li {
    margin-top: ${({ theme }) => theme.spacing[2]};
  }

  strong {
    color: ${({ $role, theme }) => ($role === 'user' ? theme.color.textInverse : theme.color.accent)};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  em {
    color: ${({ $role, theme }) => ($role === 'user' ? theme.color.textInverse : theme.color.textSecondary)};
  }

  a {
    color: ${({ $role, theme }) => ($role === 'user' ? theme.color.accentLight : theme.color.accent)};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-decoration: underline;
    text-underline-offset: ${({ theme }) => theme.spacing[1]};
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => theme.color.accent};
    padding: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
    color: ${({ $role, theme }) => ($role === 'user' ? theme.color.textInverse : theme.color.textSecondary)};
  }

  code {
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ $role, theme }) => ($role === 'user' ? theme.color.primaryDark : theme.color.neutral[50])};
    color: inherit;
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  pre {
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ $role, theme }) => ($role === 'user' ? theme.color.primaryDark : theme.color.neutral[50])};
    padding: ${({ theme }) => theme.spacing[4]};
    overflow-x: auto;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  pre code {
    border: none;
    background: transparent;
    padding: 0;
    white-space: pre;
  }

  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid ${({ theme }) => theme.color.border};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    text-align: left;
    vertical-align: middle;
  }

  th {
    color: ${({ theme }) => theme.color.accent};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.color.border};
    margin: ${({ theme }) => theme.spacing[4]} 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};

    p,
    ul,
    ol,
    blockquote,
    pre,
    table {
      margin-bottom: ${({ theme }) => theme.spacing[4]};
    }
  }
`;

export const MarkdownCodeBlock = styled.div`
  margin: 0 0 ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => (theme.isDark ? theme.color.primaryDark : theme.color.neutral[50])};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const MarkdownCodeHeader = styled.div`
  min-height: ${({ theme }) => theme.spacing[10]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => (theme.isDark ? theme.color.neutral[50] : theme.color.surface)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
`;

export const MarkdownCodeLanguage = styled.span`
  min-width: 0;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const MarkdownCopyButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  min-height: ${({ theme }) => theme.spacing[8]};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.neutral[50]};
  }

  svg,
  img {
    width: 1rem;
    height: 1rem;
    flex: 0 0 1rem;
  }
`;

export const MarkdownCodePre = styled.pre`
  && {
    margin: 0;
    border: none;
    border-radius: 0;
    background: ${({ theme }) => (theme.isDark ? theme.color.background : theme.color.neutral[50])};
    padding: ${({ theme }) => theme.spacing[5]};
    overflow-x: auto;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  && code {
    display: block;
    min-width: max-content;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    padding: 0;
    white-space: pre;
    overflow-wrap: normal;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
    font-size: ${({ theme }) => theme.typography.size.base};
    tab-size: 2;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: ${({ theme }) => theme.color.syntax.keyword};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-symbol,
  .hljs-bullet {
    color: ${({ theme }) => theme.color.syntax.string};
  }

  .hljs-number,
  .hljs-literal {
    color: ${({ theme }) => theme.color.syntax.number};
  }

  .hljs-comment,
  .hljs-quote {
    color: ${({ theme }) => theme.color.syntax.comment};
    font-style: italic;
  }

  .hljs-title,
  .hljs-title.function_,
  .hljs-title.class_,
  .hljs-section {
    color: ${({ theme }) => theme.color.syntax.function};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-params,
  .hljs-name {
    color: ${({ theme }) => theme.color.syntax.variable};
  }

  .hljs-tag,
  .hljs-selector-id,
  .hljs-selector-class {
    color: ${({ theme }) => theme.color.syntax.tag};
  }

  .hljs-attr,
  .hljs-attribute,
  .hljs-property,
  .hljs-built_in,
  .hljs-type {
    color: ${({ theme }) => theme.color.syntax.attribute};
  }

  .hljs-operator,
  .hljs-punctuation {
    color: ${({ theme }) => theme.color.syntax.punctuation};
  }

  .hljs-meta,
  .hljs-doctag {
    color: ${({ theme }) => theme.color.syntax.meta};
  }

  .hljs-deletion {
    color: ${({ theme }) => theme.color.syntax.deletion};
  }

  .hljs-addition {
    color: ${({ theme }) => theme.color.syntax.addition};
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    && {
      padding: ${({ theme }) => theme.spacing[4]};
    }

    && code {
      font-size: ${({ theme }) => theme.typography.size.sm};
    }
  }
`;

export const SourceList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};

  a {
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.neutral[50]};
    color: ${({ theme }) => theme.color.textLink};
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-decoration: none;
    max-width: 18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MessageMeta = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  opacity: 0.62;
`;

export const ThinkingRow = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.12)' : theme.color.accentFaded};
  color: ${({ theme }) => theme.color.accent};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  box-shadow: 0 0 24px rgba(198, 137, 63, 0.18);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
    animation: ${neuralSweep} 1.8s ease-in-out infinite;
  }

  svg {
    width: 1rem;
    height: 1rem;
    animation: ${spin} 0.9s linear infinite;
  }
`;

export const ThinkingCore = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.22rem;

  span {
    width: 0.42rem;
    height: 0.42rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.accent};
    animation: ${neuralPulse} 1.1s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation-delay: 130ms;
  }

  span:nth-child(3) {
    animation-delay: 260ms;
  }
`;

export const ThinkingText = styled.span`
  position: relative;
  z-index: 1;
`;

export const Composer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(6,19,26,0.88)' : theme.color.surface} 0%, ${({ theme }) => theme.color.surface} 100%);

  textarea {
    width: 100%;
    min-height: ${({ theme }) => theme.layout.inputHeight};
    max-height: 11rem;
    resize: vertical;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.neutral[50]};
    color: ${({ theme }) => theme.color.text};
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    outline: none;

    &:focus {
      border-color: ${({ theme }) => theme.color.accent};
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.isDark ? 'rgba(198,137,63,0.18)' : theme.color.accentFaded}, 0 0 20px rgba(198, 137, 63, 0.16);
    }
  }
`;

export const SendButton = styled.button`
  width: ${({ theme }) => theme.layout.buttonHeight};
  height: ${({ theme }) => theme.layout.buttonHeight};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  align-self: end;
  box-shadow: 0 0 18px rgba(198, 137, 63, 0.18);

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.accentLight};
    transform: translateY(-1px);
  }

  &:disabled {
    background: ${({ theme }) => theme.color.textDisabled};
    cursor: not-allowed;
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

// ── Delete Confirmation ─────────────────────────────────────────────────────

export const DeleteModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 8000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.color.overlay};
  backdrop-filter: blur(0.35rem);
`;

export const DeleteModalCard = styled.div`
  width: min(100%, 26rem);
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
  padding: ${({ theme }) => theme.spacing[6]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  text-align: center;
`;

export const DeleteModalIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => (theme.isDark ? 'rgba(239, 68, 68, 0.16)' : theme.color.errorLight)};
  color: ${({ theme }) => theme.color.error};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`;

export const DeleteModalTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const DeleteModalText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const DeletePasswordInput = styled.input`
  width: 100%;
  height: ${({ theme }) => theme.layout.inputHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.text};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  outline: none;
  color-scheme: ${({ theme }) => (theme.isDark ? 'dark' : 'light')};

  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
  }
`;

export const DeleteModalError = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const DeleteModalActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;

export const DeleteCancelButton = styled.button`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  padding: 0 ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const DeleteConfirmButton = styled.button`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.textInverse};
  padding: 0 ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// ── Toast ───────────────────────────────────────────────────────────────────

export const ToastNotification = styled.div`
  position: fixed;
  right: ${({ theme }) => theme.spacing[6]};
  bottom: ${({ theme }) => theme.spacing[6]};
  z-index: 9000;
  width: min(24rem, calc(100vw - 2rem));
  min-height: 3.1rem;
  border: 1px solid ${({ $type, theme }) => ($type === 'error' ? theme.color.error : theme.color.success)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $type, theme }) => {
    if ($type === 'error') return theme.isDark ? '#3f1111' : theme.color.error;
    return theme.isDark ? '#063d2a' : theme.color.success;
  }};
  color: ${({ theme }) => theme.color.textInverse};
  box-shadow: ${({ theme }) => theme.shadow.xl};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  animation: ${riseIn} 0.22s ease both;

  span {
    min-width: 0;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`;

export const ToastCloseButton = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: currentColor;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.78;

  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.14);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

// ── Conditional Helpers ─────────────────────────────────────────────────────

export const ToolState = styled.span`
  ${({ $active, theme }) => $active && css`
    color: ${theme.color.accentDark};
    border-color: ${theme.color.accent};
    background: ${theme.color.accentFaded};
  `}
`;
