import styled, { keyframes } from 'styled-components';
import {
  pageHeaderContent,
  pageHeaderEyebrow,
  pageHeaderSubtitle,
  pageHeaderSurface,
  pageHeaderTitle,
} from '../../../shared/styles/pageHeader';

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const signalPulse = keyframes`
  0%, 100% {
    opacity: 0.45;
    transform: scaleY(0.7);
  }
  50% {
    opacity: 1;
    transform: scaleY(1);
  }
`;

const sonarPing = keyframes`
  0% {
    opacity: 0.85;
    transform: scale(0.35);
  }
  72% {
    opacity: 0;
    transform: scale(2.45);
  }
  100% {
    opacity: 0;
    transform: scale(2.45);
  }
`;

const sonarBlink = keyframes`
  0%, 100% {
    opacity: 0.72;
    transform: scale(0.88);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

const toneColor = (tone, theme) => {
  if (tone === 'success') return theme.color.success;
  if (tone === 'warning') return theme.color.warning;
  if (tone === 'accent') return theme.color.accent;
  if (tone === 'danger') return theme.color.error;
  return theme.color.primary;
};

const toneBackground = (tone, theme) => {
  if (theme.isDark) {
    if (tone === 'success') return 'rgba(16, 185, 129, 0.12)';
    if (tone === 'warning') return 'rgba(245, 158, 11, 0.14)';
    if (tone === 'accent') return 'rgba(198, 137, 63, 0.14)';
    if (tone === 'danger') return 'rgba(239, 68, 68, 0.12)';
    return 'rgba(0, 85, 128, 0.22)';
  }

  if (tone === 'success') return theme.color.successLight;
  if (tone === 'warning') return theme.color.warningLight;
  if (tone === 'accent') return theme.color.accentFaded;
  if (tone === 'danger') return theme.color.errorLight;
  return theme.color.primaryFaded;
};

// ── Layout ─────────────────────────────────────────────────────────────────

export const ScreenWrapper = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export const Header = styled.header`
  ${pageHeaderSurface};
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderContent = styled.div`
  ${pageHeaderContent};
`;

export const HeaderPanel = styled.div`
  position: relative;
  z-index: 1;
  min-width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(6, 19, 26, 0.72)' : 'rgba(255, 255, 255, 0.78)'};
  backdrop-filter: blur(10px);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 0;
    align-items: stretch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const ControlGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(20rem, 0.9fr) minmax(18rem, 0.8fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

// ── Header ─────────────────────────────────────────────────────────────────

export const Eyebrow = styled.p`
  ${pageHeaderEyebrow};
`;

export const SignalIcon = styled.span`
  width: 1.25rem;
  height: 1rem;
  display: inline-flex;
  align-items: flex-end;
  gap: 2px;

  span {
    width: 4px;
    border-radius: ${({ theme }) => theme.radius.sm};
    background: ${({ theme }) => theme.color.accent};
    animation: ${signalPulse} 1.8s ease-in-out infinite;
  }

  span:nth-child(1) {
    height: 35%;
  }

  span:nth-child(2) {
    height: 70%;
    animation-delay: 160ms;
  }

  span:nth-child(3) {
    height: 100%;
    animation-delay: 320ms;
  }
`;

export const MainTitle = styled.h1`
  ${pageHeaderTitle};
`;

export const SubTitle = styled.p`
  ${pageHeaderSubtitle};
  max-width: 48rem;
`;

export const DateLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-align: right;
  text-transform: capitalize;
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;

export const CommandStatus = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.success};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;

  span {
    position: relative;
    width: 0.72rem;
    height: 0.72rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.success};
    color: ${({ theme }) => theme.color.success};
    box-shadow: 0 0 0 0.22rem ${({ theme }) => theme.isDark ? 'rgba(16, 185, 129, 0.18)' : theme.color.successLight}, 0 0 1rem rgba(16, 185, 129, 0.45);
    animation: ${sonarBlink} 1.45s ease-in-out infinite;

    &::before,
    &::after {
      content: '';
      position: absolute;
      inset: -0.44rem;
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0;
      transform-origin: center;
      animation: ${sonarPing} 1.8s ease-out infinite;
      pointer-events: none;
    }

    &::after {
      inset: -0.68rem;
      animation-delay: 0.55s;
    }
  }
`;

export const RefreshButton = styled.button`
  width: 100%;
  min-height: 1.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }

  &:disabled {
    cursor: progress;
    opacity: 0.72;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
  }
`;

export const ErrorBanner = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.warning};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(245, 158, 11, 0.16)' : theme.color.warningLight};
  color: ${({ theme }) => theme.isDark ? '#fde68a' : theme.color.warning};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;

// ── KPIs ───────────────────────────────────────────────────────────────────

export const KpiGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const KpiCard = styled.article`
  position: relative;
  overflow: hidden;
  min-height: 9.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ $tone, theme }) => toneColor($tone, theme)};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(135deg, ${({ $tone, theme }) => toneBackground($tone, theme)} 0%, ${({ theme }) => theme.color.surface} 58%),
    ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  animation: ${riseIn} 0.45s ease both;
  animation-delay: ${({ $delay }) => $delay};

  &::after {
    content: '';
    position: absolute;
    right: -1.5rem;
    bottom: -2rem;
    width: 7rem;
    height: 7rem;
    border: 1px solid ${({ $tone, theme }) => toneColor($tone, theme)};
    transform: rotate(45deg);
    opacity: 0.12;
    pointer-events: none;
  }
`;

export const KpiIcon = styled.div`
  width: 2.35rem;
  height: 2.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $tone, theme }) => toneColor($tone, theme)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ $tone, theme }) => toneColor($tone, theme)};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const KpiLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const KpiValue = styled.strong`
  display: block;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const KpiHelper = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

// ── Panels ─────────────────────────────────────────────────────────────────

export const CommandPanel = styled.article`
  min-width: 0;
  min-height: 18rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.surface} 0%, ${({ theme }) => theme.isDark ? 'rgba(22, 46, 58, 0.74)' : theme.color.neutral[50]} 100%);
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 0;
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const ActionPanel = styled(CommandPanel)`
  min-height: 18rem;
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const PanelSubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const PanelBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.75rem;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.14)' : theme.color.accentFaded};
  color: ${({ theme }) => theme.isDark ? '#f4c27f' : theme.color.accentDark};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const PanelMetric = styled.strong`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};

  small {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-transform: uppercase;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
  }
`;

export const PanelAction = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 2rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: ${({ theme }) => theme.layout.buttonHeight};
    justify-content: center;
    width: 100%;
  }
`;

// ── Alerts ─────────────────────────────────────────────────────────────────

export const AlertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const AlertItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ $tone, theme }) => toneColor($tone, theme)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $tone, theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : toneBackground($tone, theme)};

  strong {
    display: block;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  p {
    margin: ${({ theme }) => theme.spacing[1]} 0 0;
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const AlertIcon = styled.div`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $tone, theme }) => toneColor($tone, theme)};
  color: ${({ theme }) => theme.color.textInverse};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

// ── Progress ───────────────────────────────────────────────────────────────

export const ProgressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ProgressItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ProgressTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    white-space: nowrap;
  }
`;

export const ProgressTrack = styled.div`
  height: 0.55rem;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.08)' : theme.color.neutral[200]};
`;

export const ProgressFill = styled.div`
  width: ${({ $value }) => `${Math.max(0, Math.min($value, 100))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${({ $tone, theme }) => toneColor($tone, theme)};
  box-shadow: 0 0 1rem ${({ $tone, theme }) => toneColor($tone, theme)};
  transition: width 0.35s ease;
`;

// ── Actions ────────────────────────────────────────────────────────────────

export const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const QuickAction = styled.button`
  min-height: 5.25rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  padding: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.10)' : theme.color.accentFaded};
  }

  svg {
    width: 1.35rem;
    height: 1.35rem;
    color: ${({ theme }) => theme.color.accent};
  }

  span {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  small {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  }
`;

// ── Reports ────────────────────────────────────────────────────────────────

export const ReportList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ReportItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    margin-top: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: auto minmax(0, 1fr);

    > :last-child {
      grid-column: 1 / -1;
      justify-self: start;
    }
  }
`;

export const ReportState = styled.span`
  min-width: 4.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $tone, theme }) => toneBackground($tone, theme)};
  color: ${({ $tone, theme }) => theme.isDark && $tone === 'warning' ? '#fde68a' : toneColor($tone, theme)};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const IconButton = styled.button`
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 0.95rem;
    height: 0.95rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ theme }) => theme.layout.buttonHeight};
    height: ${({ theme }) => theme.layout.buttonHeight};
  }
`;

// ── Channels ───────────────────────────────────────────────────────────────

export const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ChannelItem = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 6rem;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const ChannelInfo = styled.div`
  min-width: 0;

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    margin-top: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const ChannelGauge = styled.div`
  height: 0.6rem;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.08)' : theme.color.neutral[200]};
`;

export const ChannelNeedle = styled.div`
  width: ${({ $value }) => `${Math.max(0, Math.min($value, 100))}%`};
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.accent});
`;

// ── Integrations ───────────────────────────────────────────────────────────

export const DatabaseIcon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  color: ${({ theme }) => theme.color.accent};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const IntegrationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const IntegrationItem = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:last-child {
    border-bottom: 0;
  }

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    margin-top: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const HealthPill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.55rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $tone, theme }) => toneBackground($tone, theme)};
  color: ${({ $tone, theme }) => theme.isDark && $tone === 'warning' ? '#fde68a' : toneColor($tone, theme)};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  white-space: nowrap;
`;
