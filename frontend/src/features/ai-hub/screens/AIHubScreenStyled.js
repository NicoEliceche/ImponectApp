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

// ── Layout ──────────────────────────────────────────────────────────────────

export const ScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(17rem, 19rem) minmax(0, 1fr);
  height: calc(100vh - 3rem);
  min-height: calc(100vh - 3rem);
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    radial-gradient(circle at top right, ${({ theme }) => theme.color.accentFaded} 0%, transparent 34%),
    ${({ theme }) => theme.color.background};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: calc(100vh - 3rem);
  }
`;

export const InternalSidebar = styled.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.primaryDark} 0%, ${({ theme }) => theme.color.primary} 100%);
  color: ${({ theme }) => theme.color.textInverse};
  overflow: hidden;

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

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
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
  background: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.05)')};
  color: ${({ theme }) => theme.color.textInverse};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.color.accent};
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
  right: ${({ theme }) => theme.spacing[2]};
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

  ${SidebarItem}:hover &,
  ${SidebarItem}:focus-within & {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    width: 0.95rem;
    height: 0.95rem;
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
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[5]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  flex-shrink: 0;

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
  min-width: 0;
  background: ${({ theme }) => theme.color.surface};
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
    box-shadow: ${({ theme }) => theme.shadow.md};
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
    linear-gradient(180deg, ${({ theme }) => theme.color.accentFaded} 0%, ${({ theme }) => theme.color.surface} 100%);
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.accent};
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: ${({ $compact, theme }) => ($compact ? theme.spacing[1] : theme.spacing[2])};
  }

  svg {
    width: ${({ $compact }) => ($compact ? '1rem' : '1.6rem')};
    height: ${({ $compact }) => ($compact ? '1rem' : '1.6rem')};
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
  min-height: 0;
  flex: 1;
  display: grid;
  grid-template-rows: auto auto minmax(0, 1fr) auto;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const ChatHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[5]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);

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

export const AgentMetaRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};

  span {
    display: inline-flex;
    align-items: center;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.textSecondary};
    padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
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
  background: ${({ $active, theme }) => ($active ? theme.color.accentFaded : theme.color.surface)};
  color: ${({ $active, theme }) => ($active ? theme.color.accentDark : theme.color.textSecondary)};
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
  background: ${({ theme }) => theme.color.surface};
`;

export const ToolChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) => ($active ? theme.color.accentFaded : theme.color.neutral[50])};
  color: ${({ $active, theme }) => ($active ? theme.color.accentDark : theme.color.textSecondary)};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

export const MessagesPane = styled.div`
  min-height: 0;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[6]};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.background} 0%, ${({ theme }) => theme.color.neutral[50]} 100%);
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
    color: ${({ theme }) => theme.color.accentDark};
  }
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const MessageBubble = styled.article`
  width: min(100%, 50rem);
  border: 1px solid ${({ $error, theme }) => ($error ? theme.color.error : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $role, $error, theme }) => {
    if ($error) return theme.color.errorLight;
    return $role === 'user' ? theme.color.primary : theme.color.surface;
  }};
  color: ${({ $role, $error, theme }) => {
    if ($error) return theme.color.error;
    return $role === 'user' ? theme.color.textInverse : theme.color.text;
  }};
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  animation: ${riseIn} 0.22s ease both;
`;

export const MessageRole = styled.strong`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.72;
`;

export const MessageText = styled.div`
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
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
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  svg {
    width: 1rem;
    height: 1rem;
    animation: ${spin} 0.9s linear infinite;
  }
`;

export const Composer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[5]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};

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
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
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

  &:disabled {
    background: ${({ theme }) => theme.color.textDisabled};
    cursor: not-allowed;
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
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
