import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-0.2rem); }
`;

export const ChatShell = styled.section`
  min-height: ${({ $panel }) => ($panel ? '0' : '28rem')};
  height: ${({ $panel }) => ($panel ? '100%' : 'min(36rem, calc(100vh - 10rem))')};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 0.25rem solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ $panel, theme }) => ($panel ? '0' : theme.radius['2xl'])};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ $panel, theme }) => ($panel ? 'none' : theme.shadow.lg)};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  background: linear-gradient(135deg, ${({ theme }) => theme.color.primaryDark}, ${({ theme }) => theme.color.primary});
  color: ${({ theme }) => theme.color.textInverse};
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;

  > div:first-child {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: ${({ theme }) => theme.radius.md};
    background: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.primaryDark};
  }

  svg { width: 1.3rem; height: 1.3rem; }
  h3 { margin: 0; font-size: ${({ theme }) => theme.typography.size.lg}; }
  p { margin: ${({ theme }) => theme.spacing[1]} 0 0; color: rgba(255,255,255,0.68); font-size: ${({ theme }) => theme.typography.size.xs}; }
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const IconButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255,255,255,0.06);
  color: white;
  cursor: pointer;

  &:hover { background: rgba(255,255,255,0.14); border-color: ${({ theme }) => theme.color.accent}; }
  svg { width: 1rem; height: 1rem; }
`;

export const Messages = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.isDark ? 'rgba(0,0,0,0.12)' : theme.color.neutral[50]};
`;

export const Message = styled.div`
  align-self: ${({ $user }) => ($user ? 'flex-end' : 'flex-start')};
  width: fit-content;
  max-width: 92%;
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ $user, theme }) => ($user ? theme.color.accent : theme.color.border)};
  background: ${({ $user, theme }) => ($user ? theme.color.accent : theme.color.surface)};
  color: ${({ $user, theme }) => ($user ? theme.color.textInverse : theme.color.text)};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const MessageLabel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ $user, theme }) => ($user ? 'rgba(255,255,255,0.72)' : theme.color.accent)};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
`;

export const MessageText = styled.div`
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const ResultPill = styled.div`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $error, theme }) => ($error ? theme.color.errorLight : theme.color.successLight)};
  color: ${({ $error, theme }) => ($error ? theme.color.error : theme.color.success)};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const Sources = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const Matches = styled(Sources)`
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-left: 0.18rem solid ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.color.neutral[50]};
`;

export const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[3]};
`;

export const Suggestion = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &:hover { border-color: ${({ theme }) => theme.color.accent}; color: ${({ theme }) => theme.color.accent}; }
`;

export const Loading = styled.div`
  align-self: flex-start;
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};

  span {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.accent};
    animation: ${pulse} 1s infinite ease-in-out;
  }
  span:nth-child(2) { animation-delay: 0.15s; }
  span:nth-child(3) { animation-delay: 0.3s; }
`;

export const Error = styled.div`
  margin: 0 ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.errorLight};
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
`;

export const Input = styled.textarea`
  flex: 1;
  min-width: 0;
  max-height: 7rem;
  resize: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.text};
  font: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};

  &:focus { border-color: ${({ theme }) => theme.color.accent}; }
`;

export const SendButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.accent};
  color: white;
  cursor: pointer;

  &:disabled { opacity: 0.45; cursor: not-allowed; }
  svg { width: 1.1rem; height: 1.1rem; }
`;

export const DrawerBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 26, 38, 0.38);
  z-index: 3990;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background: transparent;
    pointer-events: none;
  }
`;

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 4000;
  width: min(100%, 27rem);
  height: 100vh;
  transform: translateX(${({ $open }) => ($open ? '0' : '105%')});
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  transition: transform 0.25s ease;
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
`;

export const FloatingButton = styled.button`
  position: fixed;
  right: ${({ theme }) => theme.spacing[6]};
  bottom: ${({ theme }) => theme.spacing[6]};
  z-index: 3980;
  width: 3.75rem;
  height: 3.75rem;
  display: grid;
  place-items: center;
  border: 0.2rem solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.full};
  background: linear-gradient(135deg, ${({ theme }) => theme.color.primaryDark}, ${({ theme }) => theme.color.primary});
  color: white;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  transition: transform 0.2s ease;

  &:hover { transform: translateY(-0.2rem) scale(1.03); }
  svg { width: 1.55rem; height: 1.55rem; }

  ${({ $hidden }) => $hidden && css`display: none;`}
`;
