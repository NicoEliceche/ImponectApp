import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const slideInRight = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const EmailWrapper = styled.div`
  display: flex;
  height: calc(100vh - 3rem);
  background: ${({ theme }) => theme?.color?.background || '#f4f7f9'};
  color: ${({ theme }) => theme?.color?.text || '#001a26'};
`;

export const EmailSidebar = styled.div`
  width: 190px;
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  border-right: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  display: flex;
  flex-direction: column;
  padding: 1rem 0.6rem;
`;

export const AccountSwitcher = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const AccountSelect = styled.select`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.inputHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.04)' : theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.text};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 3px rgba(198, 137, 63, 0.12);
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.textDisabled};
  }
`;

export const AccountSwitcherMeta = styled.span`
  color: ${({ theme }) => theme.color.textTertiary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

export const SidebarSpacer = styled.div`
  flex: 1;
`;

export const SetupState = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]};
`;

export const SetupCard = styled.div`
  width: 100%;
  max-width: 25rem;
  padding: ${({ theme }) => theme.spacing[10]};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  text-align: center;
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50]};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.lg};
`;

export const SetupIcon = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.12)' : theme.color.accentFaded};

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const SetupTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const SetupButton = styled.button`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[8]};
  margin-bottom: 0;
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: none;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadow.md};

  &:hover {
    background: ${({ theme }) => theme.color.accentLight};
    transform: translateY(-1px);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const SidebarSectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.75rem;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;

  p {
    font-size: 9px;
    font-weight: 800;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 0;
  }
`;

export const ComposeBtn = styled.button`
  background: #c6893f;
  color: white;
  padding: 0.65rem;
  border-radius: 12px;
  border: none;
  font-weight: 800;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(198, 137, 63, 0.25);

  &:hover {
    background: #d4a373;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(198, 137, 63, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
    box-shadow: none;
  }

  &:disabled:hover {
    background: #c6893f;
    transform: none;
    box-shadow: none;
  }

  svg { 
    width: 18px !important; 
    height: 18px !important; 
    min-width: 18px;
    min-height: 18px;
  }
`;

export const FolderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  background: ${({ $active, theme }) =>
    $active ? (theme?.isDark ? 'rgba(198, 137, 63, 0.15)' : '#fff8f0') : 'transparent'};
  color: ${({ $active, theme }) => ($active ? '#c6893f' : theme?.color?.textSecondary || '#64748b')};
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? (theme?.isDark ? 'rgba(198, 137, 63, 0.2)' : '#fff8f0') : theme?.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6'};
    transform: translateX(2px);
  }

  svg, img { 
    width: 18px !important; 
    height: 18px !important;
    min-width: 18px;
    min-height: 18px;
    flex-shrink: 0;
  }
`;

export const EmailListContainer = styled.div`
  flex: 0 0 420px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme?.color?.background || '#f4f7f9'};
  border-right: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
`;

export const ListToolbar = styled.div`
  padding: 0.5rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  min-height: 3.25rem;
`;

export const SearchHeader = styled.div`
  padding: 0.85rem 1.25rem;
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  display: flex;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.55rem 1rem 0.55rem 2.5rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc'};
  color: ${({ theme }) => theme?.color?.text || '#001a26'};
  outline: none;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:focus { 
    border-color: #c6893f; 
    background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
    box-shadow: 0 0 0 3px rgba(198, 137, 63, 0.1);
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme?.color?.textSecondary || '#64748b'};
  cursor: pointer;
  padding: 0.45rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  ${({ $active }) => $active && css`
    background: ${({ theme }) => theme?.isDark ? 'rgba(198, 137, 63, 0.2)' : '#fff8f0'};
    color: #c6893f;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);
  `}

  &:hover {
    background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.08)' : '#f1f5f9'};
    color: ${({ $danger }) => ($danger ? '#ef4444' : '#c6893f')};
    ${({ $active }) => $active && css`
        background: ${({ theme }) => theme?.isDark ? 'rgba(198, 137, 63, 0.25)' : '#fff3e6'};
    `}
  }

  svg, img { 
    width: 18px !important; 
    height: 18px !important;
    min-width: 18px;
    min-height: 18px;
  }
`;

export const EmailRow = styled.div`
  padding: 0.65rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  cursor: pointer;
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  align-items: center;
  gap: 0.75rem;
  background: ${({ $selected, theme }) => 
    $selected ? (theme?.isDark ? 'rgba(198, 137, 63, 0.15)' : '#fff9f2') : 'transparent'};
  transition: all 0.15s;

  &:hover {
    background: ${({ $selected, theme }) => $selected ? (theme?.isDark ? 'rgba(198, 137, 63, 0.2)' : '#fff3e6') : (theme?.isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc')};
  }

  &:hover .hover-checkbox,
  &:focus-within .hover-checkbox {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover .email-row-actions,
  &:focus-within .email-row-actions {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover .email-row-date,
  &:focus-within .email-row-date {
    opacity: 0;
  }
`;

export const SenderName = styled.span`
  font-weight: ${({ $unread }) => ($unread ? '800' : '600')};
  font-size: 0.875rem;
  color: ${({ theme }) => theme?.color?.text || '#001a26'};
  ${({ $unread }) => $unread && `
    text-shadow: 0 0 10px rgba(198, 137, 63, 0.4);
  `}
`;

export const SubjectText = styled.span`
  font-weight: ${({ $unread }) => ($unread ? '700' : '400')};
  font-size: 0.8125rem;
  color: ${({ $unread, theme }) => $unread ? '#c6893f' : (theme?.color?.textSecondary || '#64748b')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
`;

export const ComposeModalUI = styled.div`
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  width: 850px;
  height: 85vh;
  border-radius: 20px;
  border: 1px solid #c6893f;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(198, 137, 63, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ComposeHeader = styled.div`
  background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.02)' : '#fcfcfc'};
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
`;

export const ModalTitle = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme?.isDark ? 'rgba(198, 137, 63, 0.1)' : '#fffaf5'};
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};

  h3 {
    font-size: 1rem;
    font-weight: 900;
    color: #c6893f;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  svg { width: 20px !important; height: 20px !important; }
`;

export const ComposeField = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  transition: all 0.2s;

  &:last-child { border-bottom: none; }

  label {
    background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.03)' : '#f8fafc'};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; /* Centered horizontally */
    padding: 0.4rem; /* Reduced height */
    font-size: 0.7rem;
    font-weight: 900;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border-right: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  }

  input {
    padding: 0.6rem 1.5rem; /* Reduced height */
    border: none;
    background: transparent;
    font-size: 0.9375rem;
    font-weight: 500;
    color: ${({ theme }) => theme?.color?.text || '#001a26'};
    outline: none;
    width: 100%;

    &::placeholder { color: #94a3b8; }
  }

  &:focus-within {
    background: ${({ theme }) => theme?.isDark ? 'rgba(198, 137, 63, 0.05)' : '#fffdfa'};
    label { color: #c6893f; border-right-color: #c6893f; }
  }
`;

export const EditorWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  position: relative;
  overflow: hidden; /* Ensure scroll stays internal */
`;

export const EditorToolbar = styled.div`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.02)' : '#f8fafc'};
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`;

export const EditorArea = styled.div`
  flex: 1;
  padding: 2rem;
  outline: none;
  overflow-y: auto; /* Internal scroll */
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme?.color?.text || '#001a26'};

  &:empty:before {
    content: attr(placeholder);
    color: #94a3b8;
    font-style: italic;
  }

  img {
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin: 1rem 0;
  }

  ul, ol {
    padding-left: 2rem;
    margin: 1rem 0;
  }
  
  ul { list-style-type: disc; }
  ol { list-style-type: decimal; }
`;

export const AttachmentArea = styled.div`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.02)' : '#fafafa'};
  border-top: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  flex-shrink: 0; /* Don't squash when editor grows */
`;

export const AttachmentPill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  border: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme?.color?.text || '#001a26'};
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  transition: all 0.2s;

  &:hover {
    border-color: #c6893f;
    transform: translateY(-1px);
  }

  button {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    padding: 2px;
    display: flex;
    &:hover { transform: scale(1.2); }
    svg { width: 14px !important; height: 14px !important; }
  }

  svg { width: 16px !important; height: 16px !important; color: #c6893f; }
`;

export const ModalFooter = styled.div`
  padding: 1rem 1.5rem;
  background: ${({ theme }) => theme?.isDark ? 'rgba(0,0,0,0.2)' : '#f8fafc'};
  border-top: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex-shrink: 0; /* Keep it fixed at the bottom */
`;

export const SendButton = styled.button`
  background: #c6893f;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  border: none;
  font-weight: 900;
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(198, 137, 63, 0.3);

  &:hover {
    background: #d4a373;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(198, 137, 63, 0.4);
  }

  &:active { transform: translateY(0); }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
    transform: none;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: #64748b;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'};
    color: ${({ theme }) => theme?.color?.text || '#001a26'};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }
`;

export const ComposeError = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme?.color?.errorLight || 'rgba(239, 68, 68, 0.12)'};
  color: ${({ theme }) => theme?.color?.error || '#ef4444'};
  font-size: 0.875rem;
  font-weight: 700;

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

export const DropZoneOverlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(198, 137, 63, 0.15);
  backdrop-filter: blur(4px);
  border: 4px dashed #c6893f;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  
  .message {
    background: white;
    padding: 1.5rem 3rem;
    border-radius: 100px;
    box-shadow: 0 20px 50px rgba(198, 137, 63, 0.3);
    color: #c6893f;
    font-weight: 900;
    font-size: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

export const ToastNotification = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: ${({ $type }) => {
    if ($type === 'error') return '#dc2626';
    if ($type === 'loading') return '#334155';
    return '#10b981';
  }};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px ${({ $type }) => $type === 'error' ? 'rgba(220, 38, 38, 0.3)' : 'rgba(15, 23, 42, 0.3)'};
  z-index: 9999;
  animation: ${slideInRight} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  font-weight: 700;
  font-size: 0.9375rem;

  svg { width: 20px !important; height: 20px !important; }
`;

export const ToastSpinner = styled.span`
  width: 1.125rem;
  height: 1.125rem;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  flex-shrink: 0;
`;

export const ToastCloseButton = styled.button`
  display: flex;
  padding: 0.125rem;
  margin-left: 0.25rem;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const ToastActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 6px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-weight: 800;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const ConfigOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6000;
`;

export const ModalUI = styled.div`
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  padding: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 450px;
  color: ${({ theme }) => theme?.color?.text || '#001a26'};
  box-shadow: ${({ theme }) => theme?.shadow?.['2xl'] || '0 25px 50px -12px rgba(0,0,0,0.25)'};
  border: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
`;

export const LargeModalUI = styled(ModalUI)`
  max-width: 1000px;
  width: 90%;
  height: 85vh;
  display: flex;
  flex-direction: column;
`;

export const ConfigForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;

  label {
    font-size: 10px;
    font-weight: 800;
    color: #94a3b8;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
    display: block;
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
    background: ${({ theme }) => theme?.isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc'};
    color: ${({ theme }) => theme?.color?.text || '#001a26'};
    outline: none;
    font-size: 0.875rem;
    &:focus { border-color: #c6893f; box-shadow: 0 0 0 3px rgba(198, 137, 63, 0.1); }
  }

  textarea {
    min-height: 6.25rem;
    resize: vertical;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 1rem;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;
`;

export const CancelBtnUI = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  background: transparent;
  color: #64748b;
  cursor: pointer;
  font-weight: 700;
  &:hover { background: rgba(0,0,0,0.05); color: ${({ theme }) => theme?.color?.text || '#001a26'}; }
`;

export const SubmitBtnUI = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 10px;
  border: none;
  background: #c6893f;
  color: white;
  cursor: pointer;
  font-weight: 800;
  box-shadow: 0 4px 15px rgba(198, 137, 63, 0.2);
  &:hover { background: #d4a373; transform: translateY(-1px); }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }
`;

// Shared re-exports
export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  gap: 2px;
`;

export const RowHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const RowMeta = styled.div`
  position: relative;
  flex: 0 0 calc(${({ theme }) => theme.spacing[16]} + ${({ theme }) => theme.spacing[6]});
  height: ${({ theme }) => theme.spacing[8]};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const RowDate = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme?.color?.textSecondary || '#64748b'};
  text-align: right;
  transition: opacity 0.15s ease;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $selected }) => ($selected ? '1' : '0')};
  pointer-events: ${({ $selected }) => ($selected ? 'auto' : 'none')};
  transition: opacity 0.2s;
  input { cursor: pointer; accent-color: #c6893f; width: 14px; height: 14px; }
`;

export const RowActions = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%);
  transition: opacity 0.15s ease;
`;

export const RowActionButton = styled.button`
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
  padding: 0;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textTertiary};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.15s ease, transform 0.15s ease;

  &:hover {
    background: transparent;
    color: ${({ $danger, theme }) => ($danger ? theme.color.error : theme.color.accent)};
    transform: translateY(-1px);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  ${({ $envelope }) => $envelope && css`
    svg .envelope-fill {
      fill: ${({ theme }) => theme.color.accent};
      opacity: 0;
      transition: opacity 0.15s ease;
    }

    &:hover svg .envelope-fill {
      opacity: 1;
    }
  `}
`;

export const EmptyState = styled.div`
  padding: 8rem 2rem;
  text-align: center;
  color: #94a3b8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  svg { width: 4rem; height: 4rem; opacity: 0.2; }
  p { font-weight: 700; margin: 0; }
`;

export const Spinner = styled.div`
  width: ${({ theme }) => theme.spacing[8]};
  height: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid ${({ theme }) => theme.color.border};
  border-bottom-color: ${({ theme }) => theme.color.accent};
  animation: ${spin} 0.8s linear infinite;
`;

export const ConfigError = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.errorLight};
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

export const ReadingPane = styled.div`
  flex: 1;
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
`;

export const EmailHeaderInfo = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  padding-bottom: 1rem;
  h2 { font-size: 1.375rem; font-weight: 800; margin-bottom: 0.75rem; color: ${({ theme }) => theme?.color?.text || '#001a26'}; }
  .meta { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;}
  .sender { font-weight: 700; font-size: 0.875rem; color: #c6893f; }
  .date { font-size: 0.75rem; color: #94a3b8; }
`;

export const EmailContentBody = styled.div`
  line-height: 1.6;
  font-size: 0.9375rem;
  color: ${({ theme }) => theme?.color?.textSecondary || '#64748b'};
  white-space: pre-wrap;
  flex: 1;
  overflow-y: auto;

  ${({ theme }) => theme?.isDark && css`
    color-scheme: dark;
    background-color: ${theme.color.neutral[50]};
    color: ${theme.color.text};

    &,
    body,
    table,
    thead,
    tbody,
    tfoot,
    tr,
    td,
    th,
    div,
    section,
    article,
    main,
    header,
    footer,
    p,
    span,
    font,
    center,
    blockquote,
    ul,
    ol,
    li,
    pre,
    code {
      background-color: ${theme.color.neutral[50]} !important;
      border-color: ${theme.color.border} !important;
      color: ${theme.color.text} !important;
    }

    [bgcolor],
    [style*='background'],
    [style*='background-color'] {
      background-color: ${theme.color.neutral[50]} !important;
    }

    [color],
    [style*='color'] {
      color: ${theme.color.text} !important;
    }

    a,
    a * {
      color: ${theme.color.accentLight} !important;
    }

    img,
    picture,
    svg,
    video,
    canvas {
      background-color: transparent !important;
      color: inherit !important;
    }

    hr {
      background-color: ${theme.color.border} !important;
      border-color: ${theme.color.border} !important;
    }
  `}
`;

export const MenuItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  transition: all 0.2s;
  gap: 0.75rem;
  &:hover {
    background: ${({ $isDelete, theme }) => ($isDelete ? '#fef2f2' : theme?.isDark ? 'rgba(255,255,255,0.05)' : '#f3f4f6')};
    color: ${({ $isDelete }) => ($isDelete ? '#ef4444' : 'inherit')};
  }
`;

export const ContextMenu = styled.div`
  position: fixed;
  background: ${({ theme }) => theme?.color?.surface || '#ffffff'};
  border: 1px solid ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  box-shadow: ${({ theme }) => theme?.shadow?.lg || '0 10px 15px -3px rgba(0,0,0,0.1)'};
  border-radius: 12px;
  padding: 0.5rem;
  z-index: 8000;
  min-width: 180px;
  color: ${({ theme }) => theme?.color?.text || '#001a26'};
  animation: ${fadeIn} 0.15s ease-out;
`;

export const SignatureArea = styled.div`
  margin-top: 0.5rem;
  padding: 0.75rem;
  border-top: 1px dashed ${({ theme }) => theme?.color?.border || '#e2e8f0'};
  color: ${({ theme }) => theme?.color?.textSecondary || '#64748b'};
  font-size: 0.8125rem;
  font-style: italic;
`;
