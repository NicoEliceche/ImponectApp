import styled from 'styled-components';

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
`;

export const ViewerHeader = styled.div`
  height: 3.5rem;
  background: #00334d;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1.5rem 0 10rem;
  justify-content: space-between;
`;

export const FileName = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

export const IframeContainer = styled.div`
  flex: 1;
  background: #f1f5f9;
`;

export const ExplorerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 4rem);
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};
  user-select: none;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.color.surface};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  gap: 1rem;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 0.5rem;
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
    svg {
      color: white !important;
    }
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
`;

export const FileListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const FileHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.02)' : '#f9fafb'};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  font-weight: 600;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const HeaderCell = styled.div``;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const FileRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s;
  background-color: ${({ $selected, theme }) => $selected ? (theme.isDark ? 'rgba(66, 153, 225, 0.2)' : '#ebf8ff') : 'transparent'};
  &:hover {
    background: ${({ $selected, theme }) => $selected ? (theme.isDark ? 'rgba(66, 153, 225, 0.25)' : '#e2f2ff') : theme.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'};
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
`;

export const LoadingState = styled.div`
  padding: 2rem;
  text-align: center;
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
`;

export const CreationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
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
`;
