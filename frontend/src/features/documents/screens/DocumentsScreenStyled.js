import styled, { keyframes } from 'styled-components';

const scan = keyframes`
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

export const FullscreenViewer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 5000;
  display: flex;
  flex-direction: column;
`;

export const FloatingBackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 5001;
  background: #00334d;
  color: white;
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  border: 2px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    background: #001a26;
  }
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: ${({ theme }) => theme.spacing[3]};
    left: ${({ theme }) => theme.spacing[3]};
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    padding: 0 ${({ theme }) => theme.spacing[4]};
  }
`;

export const ViewerHeader = styled.div`
  height: 3.5rem;
  background: #00334d;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 10rem;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 7.25rem;
    height: auto;
    align-items: flex-end;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[3]};
    padding-top: ${({ theme }) => theme.spacing[16]};
  }
`;

export const FileName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const IframeContainer = styled.div`
  flex: 1;
  background: #f1f5f9;
`;

export const ExplorerWrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  background:
    linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198,137,63,0.055)' : 'rgba(0,51,77,0.035)'} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : 'rgba(198,137,63,0.035)'} 1px, transparent 1px),
    ${({ theme }) => theme.color.background};
  background-size: 48px 48px, 48px 48px, 100% 100%;
  color: ${({ theme }) => theme.color.text};
  user-select: none;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
    min-height: calc(100dvh - 8.5rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background-size: 34px 34px, 34px 34px, 100% 100%;
  }
`;

export const Toolbar = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background:
    linear-gradient(135deg, ${({ theme }) => theme.isDark ? 'rgba(13,31,41,0.94)' : 'rgba(255,255,255,0.92)'} 0%, ${({ theme }) => theme.color.surface} 100%);
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  gap: 1rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.14), transparent);
    animation: ${scan} 7s ease-in-out infinite;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: wrap;
    padding: ${({ theme }) => theme.spacing[4]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const NavBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
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

export const PathBar = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textSecondary};
  display: flex;
  align-items: center;
  min-width: 0;
  overflow-x: auto;
  white-space: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 3;
    flex-basis: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.inputHeight};
  }
`;

export const BreadcrumbItem = styled.span`
  cursor: pointer;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

export const ToolbarActions = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const ActionBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : '#fff'};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  transition: all 0.2s;
  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.color.accent};
    color: white;
    box-shadow: 0 0 16px rgba(198, 137, 63, 0.22);
    svg {
      color: white !important;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    justify-content: center;
    width: 100%;
  }
`;

export const GoldenCreateBtn = styled(ActionBtn)`
  background: #c6893f;
  color: #fff;
  border: none;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 4px 12px rgba(198, 137, 63, 0.3);

  &:hover {
    background: #d4a373;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(198, 137, 63, 0.4);
  }



  svg {
    color: white !important;
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 400px;
  margin: 0 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0;
    max-width: none;
    min-width: min(100%, 18rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-basis: 100%;
    order: 2;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.text};
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #c6893f;
    background: ${({ theme }) => theme.color.surface};
    box-shadow: 0 0 0 2px rgba(198, 137, 63, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.inputHeight};
  }
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.textSecondary};
  pointer-events: none;
  svg { width: 1.1rem; height: 1.1rem; }
`;

export const ClearSearchBtn = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover { color: #ef4444; }
  svg { width: 1rem; height: 1rem; }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => theme.layout.buttonHeight};
    height: ${({ theme }) => theme.layout.buttonHeight};
    justify-content: center;
  }
`;

export const FileListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow: visible;
  }
`;

export const FileHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.isDark ? 'rgba(198,137,63,0.075)' : '#f9fafb'};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  font-weight: 600;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0;
  color: ${({ theme }) => theme.color.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const HeaderCell = styled.div``;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[3]};
    overflow-y: visible;
  }
`;

export const FileRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s;
  background-color: ${({ $selected, theme }) => $selected ? (theme.isDark ? 'rgba(198, 137, 63, 0.14)' : theme.color.accentFaded) : 'transparent'};
  &:hover {
    background: ${({ $selected, theme }) => $selected ? (theme.isDark ? 'rgba(198, 137, 63, 0.18)' : theme.color.accentFaded) : theme.isDark ? 'rgba(198, 137, 63, 0.08)' : '#f3f4f6'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[4]};
    border: 1px solid ${({ $selected, theme }) => ($selected ? theme.color.accent : theme.color.border)};
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ $selected, theme }) => ($selected ? (theme.isDark ? 'rgba(198, 137, 63, 0.14)' : theme.color.accentFaded) : theme.color.surface)};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const VideoPlayerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 6000;
  display: flex;
  flex-direction: column;
  color: white;
  backdrop-filter: blur(10px);
`;

export const VideoStage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  video {
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  }
`;

export const PlayerControls = styled.div`
  background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
    padding-bottom: calc(${({ theme }) => theme.spacing[5]} + env(safe-area-inset-bottom));
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const ControlBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    opacity: 0.8;
    &:hover { transform: scale(1.1); opacity: 1; }
    svg { width: 1.5rem; height: 1.5rem; }
  }

  .play-btn {
    width: 4rem;
    height: 4rem;
    background: #c6893f;
    border-radius: 50%;
    color: white;
    opacity: 1;
    box-shadow: 0 4px 15px rgba(198, 137, 63, 0.4);
    &:hover { background: #d4a373; }
    svg { width: 2.5rem; height: 2.5rem; margin-left: ${({ $playing }) => $playing ? '0' : '4px'}; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[3]};
    flex-wrap: wrap;
    justify-content: center;

    button {
      min-width: ${({ theme }) => theme.layout.buttonHeight};
      min-height: ${({ theme }) => theme.layout.buttonHeight};
    }

    .play-btn {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

export const VolumeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  right: 0;
  
  .vol-btn {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    &:hover { background: rgba(255,255,255,0.2); }
    svg { width: 1rem; height: 1rem; }
  }

  input[type="range"] {
    width: 80px;
    cursor: pointer;
    accent-color: #d4a373;
  }

  .vol-percent {
    font-size: 0.75rem;
    font-weight: 800;
    min-width: 2.5rem;
    text-align: center;
    font-variant-numeric: tabular-nums;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: static;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  
  span {
    font-size: 0.75rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    min-width: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

export const Timeline = styled.input`
  flex: 1;
  height: 6px;
  cursor: pointer;
  accent-color: #d4a373;
  border-radius: 3px;
  background: rgba(255,255,255,0.2);
  appearance: none;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
`;

export const Cell = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[1]};
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
    color: ${({ theme }) => theme.color.text};
    line-height: ${({ theme }) => theme.typography.lineHeight.snug};

    &::before {
      content: attr(data-label);
      color: ${({ theme }) => theme.color.textSecondary};
      font-size: ${({ theme }) => theme.typography.size.xs};
      font-weight: ${({ theme }) => theme.typography.weight.extrabold};
      text-transform: uppercase;
    }
  }
`;

export const StatusBadge = styled.span`
  background: #dcfce7;
  color: #166534;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const ContextMenu = styled.div`
  position: fixed;
  background: ${({ theme }) => theme.color.surface};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 1000;
  min-width: 180px;
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    left: ${({ theme }) => theme.spacing[3]} !important;
    right: ${({ theme }) => theme.spacing[3]};
    top: auto !important;
    bottom: calc(${({ theme }) => theme.spacing[4]} + env(safe-area-inset-bottom));
    min-width: 0;
  }
`;

export const MenuItem = styled.div`
  padding: 0.625rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:hover {
    background: ${({ $isDelete, theme }) => $isDelete ? '#fef2f2' : theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'};
    color: ${({ $isDelete }) => $isDelete ? '#ef4444' : 'inherit'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
  }
`;

export const LoadingState = styled.div`
  padding: 2rem;
  text-align: center;
  min-height: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  svg {
    width: 1.15rem;
    height: 1.15rem;
  }
`;

export const ErrorState = styled.div`
  margin: ${({ theme }) => theme.spacing[6]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.errorLight};
  color: ${({ theme }) => theme.color.error};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: ${({ theme }) => theme.spacing[3]};
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const ErrorTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const ErrorMeta = styled.code`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  white-space: pre-wrap;
  word-break: break-word;
`;

export const ErrorActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const DiagnosticBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $primary, theme }) => ($primary ? theme.color.primary : theme.color.surface)};
  color: ${({ $primary, theme }) => ($primary ? theme.color.textInverse : theme.color.text)};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    justify-content: center;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-end;
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const ModalUI = styled.div`
  background: ${({ theme }) => theme.color.surface};
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: ${({ theme }) => theme.color.text};
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: none;
    max-height: calc(100dvh - ${({ theme }) => theme.spacing[6]});
    overflow-y: auto;
    padding: ${({ theme }) => theme.spacing[4]};
    border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} 0 0;
  }
`;

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 0.875rem 1rem;
  margin: 1.5rem 0;
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : '#f9fafb'};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 0.75rem;
  outline: none;
  color: ${({ theme }) => theme.color.text};
  font-size: 1rem;
  transition: all 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.accent}33;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;

export const CancelBtnUI = styled.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
  }
`;

export const SubmitBtnUI = styled.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: none;
  background: ${({ theme }) => theme.color.accent};
  color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
  }
`;

export const DeleteBtnUI = styled.button`
  flex: 1;
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: none;
  background: #ef4444;
  color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background: #dc2626;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
  }
`;

export const CreationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const CreationOption = styled.div`
  padding: 1rem;
  border: 2px solid ${({ $selected, theme }) => $selected ? theme.color.accent : theme.color.border};
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;
  background: ${({ $selected, theme }) => $selected ? (theme.isDark ? 'rgba(66, 153, 225, 0.1)' : '#f0f9ff') : 'transparent'};
  
  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme, $selected }) => !$selected && (theme.isDark ? 'rgba(255,255,255,0.02)' : '#f9fafb')};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    font-size: 0.75rem;
    font-weight: 600;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    flex-direction: row;
    justify-content: flex-start;
  }
`;
