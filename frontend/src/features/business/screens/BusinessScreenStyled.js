import styled, { css, keyframes } from 'styled-components';
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

const toneColor = (tone, theme) => {
  if (tone === 'success') return theme.color.success;
  if (tone === 'warning') return theme.color.warning;
  if (tone === 'accent') return theme.color.accent;
  return theme.color.primary;
};

const toneBackground = (tone, theme) => {
  if (theme.isDark) {
    if (tone === 'success') return 'rgba(16, 185, 129, 0.12)';
    if (tone === 'warning') return 'rgba(245, 158, 11, 0.14)';
    if (tone === 'accent') return 'rgba(198, 137, 63, 0.14)';
    return 'rgba(0, 85, 128, 0.22)';
  }

  if (tone === 'success') return theme.color.successLight;
  if (tone === 'warning') return theme.color.warningLight;
  if (tone === 'accent') return theme.color.accentFaded;
  return theme.color.primaryFaded;
};

const statusTone = (status) => {
  const normalized = String(status || '').toLowerCase();
  if (normalized.includes('riesgo') || normalized.includes('pendiente') || normalized.includes('optimizar')) return 'warning';
  if (normalized.includes('borrador') || normalized.includes('validacion') || normalized.includes('cotizando')) return 'accent';
  if (normalized.includes('bloqueado')) return 'danger';
  return 'success';
};

// ── Layout ─────────────────────────────────────────────────────────────────

export const ScreenWrapper = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.color.text};
`;

export const Header = styled.header`
  ${pageHeaderSurface};
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.6fr);
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderText = styled.div`
  ${pageHeaderContent};
`;

export const HeaderActions = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[3]};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ContentStack = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ContentGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(20rem, 0.8fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`;

// ── Header ─────────────────────────────────────────────────────────────────

export const Eyebrow = styled.p`
  ${pageHeaderEyebrow};

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const PageTitle = styled.h1`
  ${pageHeaderTitle};
`;

export const PageDescription = styled.p`
  ${pageHeaderSubtitle};
  max-width: 52rem;
`;

export const SearchBox = styled.label`
  min-height: ${({ theme }) => theme.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

export const CommandButton = styled.button`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

// ── Modules ────────────────────────────────────────────────────────────────

export const ModuleRail = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ModuleButton = styled.button`
  position: relative;
  overflow: hidden;
  min-height: 4.8rem;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $active, theme }) => ($active ? (theme.isDark ? 'rgba(198, 137, 63, 0.12)' : theme.color.accentFaded) : theme.color.surface)};
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.textSecondary)};
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
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
`;

export const ActiveModuleHeader = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ActiveLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const ActiveTitle = styled.h2`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const LivePill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: fit-content;
  min-height: 2rem;
  border: 1px solid ${({ theme }) => theme.color.success};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? 'rgba(16, 185, 129, 0.14)' : theme.color.successLight};
  color: ${({ theme }) => theme.isDark ? '#86efac' : theme.color.success};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;

  span {
    width: 0.55rem;
    height: 0.55rem;
    border-radius: ${({ theme }) => theme.radius.full};
    background: currentColor;
  }
`;

// ── Cards ──────────────────────────────────────────────────────────────────

export const KpiGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const KpiCard = styled.article`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 8.5rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ $tone, theme }) => toneColor($tone, theme)};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(135deg, ${({ $tone, theme }) => toneBackground($tone, theme)} 0%, ${({ theme }) => theme.color.surface} 62%),
    ${({ theme }) => theme.color.surface};
  animation: ${riseIn} 0.45s ease both;
`;

export const KpiLabel = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const KpiValue = styled.strong`
  color: ${({ $tone, theme }) => toneColor($tone, theme)};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const KpiHelper = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const FinanceGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FinanceCard = styled.article`
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  span,
  strong,
  small {
    display: block;
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    margin-top: ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size['3xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  small {
    margin-top: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }
`;

// ── Panels ─────────────────────────────────────────────────────────────────

export const Panel = styled.article`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const PanelTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const PanelSubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const PanelChip = styled.span`
  min-height: 1.75rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.14)' : theme.color.accentFaded};
  color: ${({ theme }) => theme.isDark ? '#f4c27f' : theme.color.accentDark};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  white-space: nowrap;
`;

export const PanelAction = styled.button`
  min-height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
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
`;

// ── Tables ─────────────────────────────────────────────────────────────────

export const TableWrap = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const DataTable = styled.table`
  width: 100%;
  min-width: 42rem;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[3]};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    text-align: left;
    vertical-align: middle;
  }

  th {
    color: ${({ theme }) => theme.color.textTertiary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
    letter-spacing: 0;
  }

  td strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  tbody tr {
    transition: background-color 0.2s ease;
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]};
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.45rem;
  border-radius: ${({ theme }) => theme.radius.full};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  white-space: nowrap;

  ${({ $status, theme }) => {
    const tone = statusTone($status);

    if (tone === 'danger') {
      return css`
        background: ${theme.isDark ? 'rgba(239, 68, 68, 0.16)' : theme.color.errorLight};
        color: ${theme.isDark ? '#fecaca' : theme.color.error};
      `;
    }

    if (tone === 'warning') {
      return css`
        background: ${theme.isDark ? 'rgba(245, 158, 11, 0.18)' : theme.color.warningLight};
        color: ${theme.isDark ? '#fde68a' : theme.color.warning};
      `;
    }

    if (tone === 'accent') {
      return css`
        background: ${theme.isDark ? 'rgba(198, 137, 63, 0.16)' : theme.color.accentFaded};
        color: ${theme.isDark ? '#f4c27f' : theme.color.accentDark};
      `;
    }

    return css`
      background: ${theme.isDark ? 'rgba(16, 185, 129, 0.16)' : theme.color.successLight};
      color: ${theme.isDark ? '#86efac' : theme.color.success};
    `;
  }}
`;

export const PriorityBadge = styled(StatusBadge)`
  ${({ $priority, theme }) => {
    if ($priority === 'Alta') {
      return css`
        background: ${theme.isDark ? 'rgba(198, 137, 63, 0.16)' : theme.color.accentFaded};
        color: ${theme.isDark ? '#f4c27f' : theme.color.accentDark};
      `;
    }

    return css`
      background: ${theme.isDark ? 'rgba(0, 85, 128, 0.22)' : theme.color.primaryFaded};
      color: ${theme.isDark ? '#93c5fd' : theme.color.primary};
    `;
  }}
`;

export const RowActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const IconAction = styled.button`
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
`;

// ── Overview ───────────────────────────────────────────────────────────────

export const ReadinessGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const ReadinessCard = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  column-gap: ${({ theme }) => theme.spacing[3]};
  row-gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ $tone, theme }) => toneColor($tone, theme)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $tone, theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : toneBackground($tone, theme)};

  svg {
    grid-row: span 2;
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ $tone, theme }) => toneColor($tone, theme)};
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  }
`;

// ── Finance ────────────────────────────────────────────────────────────────

export const AllocationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const AllocationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const AllocationTop = styled.div`
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
  }
`;

export const ProgressTrack = styled.div`
  height: 0.6rem;
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
  transition: width 0.3s ease;
`;

// ── Marketing ──────────────────────────────────────────────────────────────

export const ChannelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ChannelCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
`;

export const ChannelTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const ChannelMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  span {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  small {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
`;

// ── Purchases ──────────────────────────────────────────────────────────────

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const CheckItem = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ $done, theme }) => ($done ? theme.color.success : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $done, theme }) => ($done ? (theme.isDark ? 'rgba(16, 185, 129, 0.12)' : theme.color.successLight) : theme.color.surface)};
  color: ${({ theme }) => theme.color.text};

  svg {
    width: 1.1rem;
    height: 1.1rem;
    color: ${({ $done, theme }) => ($done ? theme.color.success : theme.color.textSecondary)};
  }

  span {
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

// ── Reports ────────────────────────────────────────────────────────────────

export const ReportBuilder = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const BuilderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }
`;

export const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const TypeButton = styled.button`
  min-height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const BuilderPreview = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px dashed ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.08)' : theme.color.accentFaded};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.color.accent};
  }
`;
