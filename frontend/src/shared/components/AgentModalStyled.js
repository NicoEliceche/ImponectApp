import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0.75rem) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.color.overlay};
  backdrop-filter: blur(0.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
  padding: ${({ theme }) => theme.spacing[5]};
`;

export const ModalUI = styled.div`
  background: ${({ theme }) => theme.color.surface};
  width: min(100%, 76rem);
  height: min(92vh, 58rem);
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.accent};
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.28s ease;
`;

export const ModalHeader = styled.div`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.color.neutral[50]};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.accent};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: ${({ theme }) => theme.radius.full};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.neutral[100]};
    color: ${({ theme }) => theme.color.error};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const SidebarTabs = styled.div`
  width: 15rem;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.neutral[50]};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    flex-direction: row;
    overflow-x: auto;
  }
`;

export const TabItem = styled.button`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  background: ${({ $active, theme }) => ($active ? theme.color.accent : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.color.textInverse : theme.color.textSecondary)};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-align: left;
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-height: 2.5rem;
  white-space: nowrap;

  &:hover {
    background: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.neutral[100])};
    color: ${({ $active, theme }) => ($active ? theme.color.textInverse : theme.color.text)};
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }
`;

export const ConfigPane = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[6]};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const SectionBlock = styled.section`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.color.surface};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  > svg {
    width: ${({ theme }) => theme.spacing[6]};
    height: ${({ theme }) => theme.spacing[6]};
    flex: 0 0 ${({ theme }) => theme.spacing[6]};
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const SectionSubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[2]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const FieldGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};

  label {
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    color: ${({ theme }) => theme.color.textSecondary};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: ${({ theme }) => theme.spacing[3]};
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.neutral[50]};
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    font-family: inherit;

    &:focus {
      border-color: ${({ theme }) => theme.color.accent};
      box-shadow: 0 0 0 0.2rem ${({ theme }) => (theme.isDark ? theme.color.accentDark : theme.color.accentFaded)};
    }
  }

  textarea {
    min-height: ${({ $compact }) => ($compact ? '4.75rem' : '7rem')};
    resize: vertical;
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }

  ${({ $wide }) => $wide && css`
    grid-column: 1 / -1;
  `}
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const AgentIconDropZone = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  border: 1px dashed ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  padding: ${({ theme }) => theme.spacing[3]};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    background: ${({ theme }) => (theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded)};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto minmax(0, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const AgentIconPreview = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ $empty, theme }) => ($empty ? theme.color.border : theme.color.accent)};
  background: ${({ theme }) => (
    theme.isDark
      ? `linear-gradient(180deg, ${theme.color.neutral[100]} 0%, ${theme.color.surface} 100%)`
      : `linear-gradient(180deg, ${theme.color.accentFaded} 0%, ${theme.color.surface} 100%)`
  )};
  color: ${({ theme }) => theme.color.accent};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  svg {
    width: 4.1rem;
    height: 4.1rem;
    align-self: flex-end;
    margin-bottom: -1px;
  }
`;

export const AgentIconUploadCopy = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const AgentIconActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: 1 / -1;
    justify-content: flex-start;
  }
`;

export const RagFilesDropZone = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  border: 1px dashed ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => (
    theme.isDark
      ? `linear-gradient(135deg, ${theme.color.neutral[100]} 0%, ${theme.color.surface} 100%)`
      : `linear-gradient(135deg, ${theme.color.accentFaded} 0%, ${theme.color.neutral[50]} 100%)`
  )};
  padding: ${({ theme }) => theme.spacing[4]};
  cursor: ${({ $loading }) => ($loading ? 'progress' : 'pointer')};
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accentLight};
    background: ${({ theme }) => (theme.isDark ? theme.color.neutral[50] : theme.color.accentFaded)};
    transform: translateY(-1px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: auto minmax(0, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const RagFilesDropIcon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ $loading, theme }) => ($loading ? `0 0 0 0.2rem ${theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded}` : 'none')};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.35rem;
    height: 1.35rem;
  }
`;

export const RagUploadSpinner = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid ${({ theme }) => theme.color.border};
  border-top-color: ${({ theme }) => theme.color.accent};
  animation: ${spin} 0.8s linear infinite;
`;

export const RagFilesCounter = styled.span`
  justify-self: end;
  min-width: 4rem;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.color.surface};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: 1 / -1;
    justify-self: start;
  }
`;

export const RagUploadProgress = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  height: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.neutral[100]};
  overflow: hidden;
`;

export const RagUploadProgressFill = styled.span`
  display: block;
  width: ${({ $progress }) => `${Math.max(0, Math.min(100, Number($progress) || 0))}%`};
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.accent};
  transition: width 0.18s ease;
`;

export const RagFileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const RagFileItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const RagFileThumb = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.color.surface};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  svg {
    width: 1.45rem;
    height: 1.45rem;
    opacity: ${({ $isImage }) => ($isImage ? 1 : 0.9)};
  }
`;

export const RagFileMeta = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-transform: uppercase;
  }
`;

export const RagFileRemove = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid transparent;
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.error};
    background: ${({ theme }) => (theme.isDark ? theme.color.neutral[100] : theme.color.errorLight)};
    color: ${({ theme }) => theme.color.error};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const CodeTextarea = styled.textarea`
  min-height: ${({ $large }) => ($large ? '15rem' : '9rem')};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  cursor: pointer;

  input {
    width: 1rem;
    height: 1rem;
    accent-color: ${({ theme }) => theme.color.accent};
  }
`;

export const SegmentedControl = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.neutral[50]};
`;

export const SegmentButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  background-color: ${({ $active, theme }) => ($active ? theme.color.accent : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.color.textInverse : theme.color.textSecondary)};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
`;

export const SmallButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const ServerCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.color.neutral[50]};
`;

export const ServerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const InlineActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[3]};

  > svg {
    width: ${({ theme }) => theme.spacing[5]};
    height: ${({ theme }) => theme.spacing[5]};
    flex: 0 0 ${({ theme }) => theme.spacing[5]};
    color: ${({ theme }) => theme.color.textSecondary};
  }
`;

export const ErrorText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const GeneratedJson = styled.pre`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.primaryDark};
  color: ${({ theme }) => theme.color.textInverse};
  overflow: auto;
  min-height: 9rem;
  max-height: 16rem;
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const ModalFooter = styled.div`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[6]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.color.surface};
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[6]};
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};

  ${({ $variant }) => $variant === 'primary' ? css`
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.textInverse};

    &:hover {
      background: ${({ theme }) => theme.color.accentLight};
      transform: translateY(-1px);
    }

    &:disabled {
      background: ${({ theme }) => theme.color.textDisabled};
      cursor: not-allowed;
      transform: none;
    }
  ` : css`
    background: transparent;
    color: ${({ theme }) => theme.color.textSecondary};

    &:hover {
      background: ${({ theme }) => theme.color.neutral[100]};
    }
  `}
`;
