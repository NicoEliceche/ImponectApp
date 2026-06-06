import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 2px solid ${({ theme }) => theme.color.accentLight};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateContainer = styled.div`
  text-align: right;
`;

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.text};
  letter-spacing: -0.025em;
  margin: 0;

  span {
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.color.textSecondary};
  margin: ${({ theme }) => theme.spacing[1]} 0 0 0;
`;

export const DateLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.accent};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  align-items: start;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 2fr) minmax(20rem, 1fr);
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[8]};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const RecentActivityTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.text};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[5]};
  background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50]};
  border-radius: ${({ theme }) => theme.radius.xl};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  border-left: 4px solid ${({ theme }) => theme.color.accent};
  transition: all 0.2s;
  color: ${({ theme }) => theme.color.text};

  &:hover {
    transform: translateX(4px);
    background-color: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : theme.color.neutral[100]};
  }
`;

export const ActivityIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.color.primaryFaded};
  border-radius: ${({ theme }) => theme.radius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const IAAssistCard = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.primaryDark});
  padding: ${({ theme }) => theme.spacing[6]};
  border-radius: ${({ theme }) => theme.radius['2xl']};
  color: ${({ theme }) => theme.color.textInverse};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
  border-bottom: 4px solid ${({ theme }) => theme.color.accent};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  height: min(42rem, calc(100vh - 10rem));
  min-height: 32rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: sticky;
    top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 34rem;
    min-height: 28rem;
  }
`;

export const IAHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const IATitleGroup = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const IAIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.color.primaryDark};
  background: ${({ theme }) => theme.color.accent};

  svg {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const IATitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const IASubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: rgba(255, 255, 255, 0.68);
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

export const IAClearButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  flex-shrink: 0;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.color.textInverse};
    background: rgba(255, 255, 255, 0.12);
    border-color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const IAMessages = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(0, 0, 0, 0.12);

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.18);
    border-radius: ${({ theme }) => theme.radius.full};
  }
`;

export const IAWelcome = styled.div`
  flex: 1;
  min-height: 13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: rgba(255, 255, 255, 0.68);

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.color.accent};
  }

  strong {
    color: ${({ theme }) => theme.color.textInverse};
    font-size: ${({ theme }) => theme.typography.size.base};
  }

  span {
    max-width: 16rem;
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const IAMessage = styled.div`
  align-self: ${({ $user }) => ($user ? 'flex-end' : 'flex-start')};
  width: fit-content;
  max-width: 92%;
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ $user, theme }) => ($user ? theme.color.accent : 'rgba(255, 255, 255, 0.14)')};
  background: ${({ $user, theme }) => ($user ? theme.color.accent : 'rgba(255, 255, 255, 0.08)')};
  color: ${({ theme }) => theme.color.textInverse};
`;

export const IAMessageLabel = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: rgba(255, 255, 255, 0.64);
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
`;

export const IAMessageText = styled.div`
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const IASources = styled.div`
  margin-top: ${({ theme }) => theme.spacing[3]};
  padding-top: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};

  a {
    color: ${({ theme }) => theme.color.accentLight};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.color.textInverse};
      text-decoration: underline;
    }
  }
`;

export const IALoading = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: rgba(255, 255, 255, 0.08);

  span {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.accent};
    animation: ai-pulse 1s infinite ease-in-out;
  }

  span:nth-child(2) {
    animation-delay: 0.15s;
  }

  span:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes ai-pulse {
    0%, 100% { opacity: 0.3; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-0.2rem); }
  }
`;

export const IAError = styled.div`
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.md};
  background: rgba(239, 68, 68, 0.12);
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const IAForm = styled.form`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[3]};
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:focus-within {
    border-color: ${({ theme }) => theme.color.accent};
  }
`;

export const IAInput = styled.textarea`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.sm};
  flex: 1;
  min-width: 0;
  max-height: 7rem;
  resize: none;
  outline: none;
  font-family: inherit;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export const IASubmitButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.accentDark};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;
