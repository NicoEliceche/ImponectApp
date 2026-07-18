import styled, { keyframes } from 'styled-components';

const sweep = keyframes`
  0% {
    transform: translate3d(-120%, 0, 0);
    opacity: 0;
  }

  18% {
    opacity: 1;
  }

  100% {
    transform: translate3d(120%, 0, 0);
    opacity: 0;
  }
`;

const sonar = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.42);
  }

  100% {
    box-shadow: 0 0 0 0.9rem rgba(16, 185, 129, 0);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Screen = styled.main`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100vw;
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing[8]};
  overflow: hidden;
  background:
    radial-gradient(circle at 16% 16%, rgba(198, 137, 63, 0.16), transparent 28rem),
    radial-gradient(circle at 84% 12%, rgba(0, 85, 128, 0.26), transparent 32rem),
    ${({ theme }) => theme.color.background};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: stretch;
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const GridGlow = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(180deg, rgba(198, 137, 63, 0.13) 1px, transparent 1px);
  background-size: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[12]};

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    bottom: -30%;
    left: -50%;
    width: 70%;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.24), transparent);
    filter: blur(0.2rem);
    animation: ${sweep} 6s ease-in-out infinite;
  }
`;

export const LoginShell = styled.section`
  position: relative;
  z-index: 1;
  width: min(100%, 68rem);
  max-width: 100%;
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(20rem, 0.88fr);
  gap: ${({ theme }) => theme.spacing[5]};
  transition: filter 0.2s ease, transform 0.2s ease;
  filter: ${({ $blurred }) => ($blurred ? 'blur(0.35rem)' : 'none')};
  transform: ${({ $blurred }) => ($blurred ? 'scale(0.99)' : 'none')};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: calc(100vw - ${({ theme }) => theme.spacing[8]});
    grid-template-columns: 1fr;
    align-content: center;
  }
`;

export const BrandPanel = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 0;
  max-width: 100%;
  min-height: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(90deg, ${({ theme }) => `color-mix(in srgb, ${theme.color.accent} 10%, transparent)`} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,51,77,0.06)'} 1px, transparent 1px),
    ${({ theme }) => theme.color.surface};
  background-size: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[12]};
  box-shadow: ${({ theme }) => theme.shadow.xl};

  &::after {
    content: '';
    position: absolute;
    inset: auto -12% -32% 32%;
    height: 54%;
    background: radial-gradient(circle, rgba(198, 137, 63, 0.24), transparent 64%);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;

export const BrandBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  width: fit-content;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1px solid rgba(198, 137, 63, 0.42);
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.12)' : theme.color.accentFaded};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};

  img {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: ${({ theme }) => theme.radius.sm};
    object-fit: cover;
  }
`;

export const Eyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
`;

export const Title = styled.h1`
  max-width: 12ch;
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.size['3xl']};
  }
`;

export const Subtitle = styled.p`
  max-width: 42rem;
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`;

export const SignalRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  width: fit-content;
  margin-top: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.success};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;

  span {
    width: 0.72rem;
    height: 0.72rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.success};
    animation: ${sonar} 1.5s ease-out infinite;
  }
`;

export const AuthCard = styled.div`
  align-self: stretch;
  min-width: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[5]};
  min-height: 32rem;
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid rgba(198, 137, 63, 0.35);
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(6, 19, 26, 0.92)' : 'rgba(255, 255, 255, 0.94)'};
  box-shadow: ${({ theme }) => theme.shadow.xl}, 0 0 2rem rgba(198, 137, 63, 0.16);
  backdrop-filter: blur(1rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing[6]};
  }
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const CardKicker = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
`;

export const CardTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  overflow-wrap: anywhere;
`;

export const InlineError = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(239, 68, 68, 0.12)' : theme.color.errorLight};
  color: ${({ theme }) => theme.isDark ? '#fecaca' : theme.color.error};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const GoogleButtonSlot = styled.div`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};

  > div {
    width: 100% !important;
  }
`;

export const WorkingLine = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  span {
    width: 1rem;
    height: 1rem;
    border: 2px solid rgba(198, 137, 63, 0.24);
    border-top-color: ${({ theme }) => theme.color.accent};
    border-radius: ${({ theme }) => theme.radius.full};
    animation: ${spin} 0.72s linear infinite;
  }
`;

export const ErrorOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.isDark ? 'rgba(0, 0, 0, 0.42)' : 'rgba(0, 26, 38, 0.24)'};
  backdrop-filter: blur(0.6rem);
`;

export const ErrorModal = styled.div`
  width: min(100%, 28rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[8]};
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
  text-align: center;
`;

export const ErrorIcon = styled.div`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? 'rgba(239, 68, 68, 0.14)' : theme.color.errorLight};
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ErrorTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ErrorText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const ErrorHint = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const RetryButton = styled.button`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  margin-top: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.color.accent}, ${({ theme }) => theme.color.accentLight});
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;
`;

export const AuthLoading = styled.div`
  min-height: 100dvh;
  display: grid;
  place-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  align-content: center;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};

  span {
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid rgba(198, 137, 63, 0.22);
    border-top-color: ${({ theme }) => theme.color.accent};
    border-radius: ${({ theme }) => theme.radius.full};
    animation: ${spin} 0.72s linear infinite;
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }
`;
