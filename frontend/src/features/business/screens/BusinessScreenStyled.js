import styled, { keyframes, css } from 'styled-components';

const riseIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.04); }
`;

export const ScreenWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ $collapsed }) => ($collapsed ? '4.5rem' : '12.5rem')} minmax(0, 1fr);
  height: calc(100vh - 3rem);
  min-height: calc(100vh - 3rem);
  background:
    radial-gradient(circle at top right, ${({ theme }) => theme.color.accentFaded} 0%, transparent 32%),
    ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const InternalSidebar = styled.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.primaryDark} 0%, ${({ theme }) => theme.color.primary} 100%);
  color: ${({ theme }) => theme.color.textInverse};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
    overflow-x: auto;
    padding: ${({ theme }) => theme.spacing[3]};
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-shrink: 0;
`;

export const BrandMark = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;
`;

export const BrandIcon = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  color: ${({ theme }) => theme.color.accent};
  flex-shrink: 0;

  svg {
    width: 1.45rem;
    height: 1.45rem;
  }
`;

export const BrandName = styled.strong`
  display: block;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;
`;

export const BrandSubtitle = styled.span`
  display: block;
  color: rgba(255, 255, 255, 0.65);
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  flex: 1;
  min-width: 0;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    flex: 0 0 auto;
    overflow-x: auto;
  }
`;

export const SidebarItem = styled.button`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $active }) => ($active ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.04)')};
  color: ${({ theme }) => theme.color.textInverse};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
  min-width: 0;

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.color.accent};
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
    flex-shrink: 0;
    color: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.textInverse)};
  }

  span {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  strong {
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  small {
    color: rgba(255, 255, 255, 0.65);
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
    min-width: 11rem;
  }
`;

export const SidebarFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: auto;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-top: 0;
    flex-direction: row;
  }
`;

export const CollapseButton = styled.button`
  align-self: center;
  width: 2.35rem;
  height: 2.35rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(255, 255, 255, 0.06);
  color: ${({ theme }) => theme.color.textInverse};
  cursor: pointer;

  span {
    font-size: 1.15rem;
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const MainArea = styled.main`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const TopBar = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;

  strong {
    color: ${({ theme }) => theme.color.text};
  }
`;

export const SearchBox = styled.label`
  min-height: ${({ theme }) => theme.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.neutral[50]};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.color.textSecondary};
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-family: inherit;
  }
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const IconAction = styled.button`
  position: relative;
  width: 2.45rem;
  height: 2.45rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const ActionBadge = styled.span`
  position: absolute;
  top: -0.3rem;
  right: -0.3rem;
  min-width: 1rem;
  height: 1rem;
  padding: 0 0.2rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.error};
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ProfileButton = styled.button`
  width: 2.45rem;
  height: 2.45rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.textInverse};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const PageHeader = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const PageDescription = styled.p`
  max-width: 52rem;
  margin: ${({ theme }) => theme.spacing[2]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const PageMeta = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  strong,
  span {
    display: block;
  }

  strong {
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    margin-top: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const KpiGrid = styled.div`
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

export const KpiCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[4]};
  animation: ${riseIn} 0.45s ease both;
`;

export const KpiLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const KpiValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const KpiTrend = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
  color: ${({ $tone, theme }) => {
    if ($tone === 'success') return theme.color.success;
    if ($tone === 'warning') return theme.color.warning;
    if ($tone === 'danger') return theme.color.error;
    return theme.color.primary;
  }};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  span {
    width: 1.1rem;
    height: 1.1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.radius.full};
    background: ${({ theme }) => theme.color.accentFaded};
    color: ${({ theme }) => theme.color.accentDark};
    font-size: 11px;
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    animation: ${pulse} 3s ease-in-out infinite;
  }
`;

export const ModuleStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ModuleCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.surface} 0%, ${({ theme }) => theme.color.neutral[50]} 100%);
  padding: ${({ theme }) => theme.spacing[4]};
`;

export const ModuleLabel = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const ModuleValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ModuleHint = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
`;

export const ChartGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(18rem, 0.7fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const ChartPanel = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[5]};
`;

export const SideChartPanel = styled(ChartPanel)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const PanelSubtitle = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const PanelChip = styled.span`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  white-space: nowrap;
`;

export const LineChart = styled.div`
  position: relative;
  min-height: 16rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, rgba(198, 137, 63, 0.03), rgba(0, 51, 77, 0.02)),
    ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.02)' : theme.color.neutral[50]};
  padding: ${({ theme }) => theme.spacing[4]};
  overflow: hidden;
`;

export const LineChartGrid = styled.div`
  position: absolute;
  inset: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  color: ${({ theme }) => theme.color.textTertiary};
  font-size: 10px;

  span {
    border-top: 1px dashed ${({ theme }) => theme.color.border};
    padding-top: 0.15rem;
  }
`;

export const LineChartArea = styled.div`
  position: relative;
  height: 100%;
  min-height: 14rem;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
  align-items: end;
  z-index: 1;
`;

export const LinePoint = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  animation: ${riseIn} 0.55s ease both;
  animation-delay: ${({ $delay }) => $delay};

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 10px;
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  strong {
    width: 100%;
    height: ${({ $height }) => `${$height}%`};
    min-height: 1.35rem;
    border-radius: ${({ theme }) => theme.radius.md} ${({ theme }) => theme.radius.md} 0 0;
    background: linear-gradient(180deg, ${({ theme }) => theme.color.accent} 0%, ${({ theme }) => theme.color.primary} 100%);
    box-shadow: 0 0.75rem 1.4rem rgba(0, 51, 77, 0.12);
  }

  small {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-transform: uppercase;
  }
`;

export const DonutWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[2]} 0 ${({ theme }) => theme.spacing[3]};
`;

export const DonutChart = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    conic-gradient(
      ${({ theme }) => theme.color.primary} 0% ${({ $accentA }) => $accentA}%,
      ${({ theme }) => theme.color.accent} ${({ $accentA }) => $accentA}% ${({ $accentA, $accentB }) => $accentA + $accentB}%,
      ${({ theme }) => theme.color.success} ${({ $accentA, $accentB }) => $accentA + $accentB}% 100%
    );
  box-shadow: inset 0 0 0 0.85rem ${({ theme }) => theme.color.surface}, ${({ theme }) => theme.shadow.sm};

  div {
    width: 6.8rem;
    height: 6.8rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.color.surface};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`;

export const BreakdownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const BreakdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  span {
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing[2]};
  }

  strong {
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const Dot = styled.span`
  width: 0.7rem;
  height: 0.7rem;
  border-radius: ${({ theme }) => theme.radius.full};
  flex-shrink: 0;
  background: ${({ $tone, theme }) => {
    if ($tone === 'accent') return theme.color.accent;
    if ($tone === 'success') return theme.color.success;
    return theme.color.primary;
  }};
`;

export const TablePanel = styled.section`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const FiltersRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const FilterButton = styled.button`
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, theme }) => ($active ? theme.color.accentFaded : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.color.accentDark : theme.color.textSecondary)};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  white-space: nowrap;
`;

export const TableSearch = styled.label`
  min-height: ${({ theme }) => theme.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.neutral[50]};
  padding: 0 ${({ theme }) => theme.spacing[4]};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.color.textSecondary};
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-family: inherit;
  }
`;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  th,
  td {
    padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[3]};
    border-bottom: 1px solid ${({ theme }) => theme.color.border};
    text-align: left;
    vertical-align: middle;
  }

  th {
    color: ${({ theme }) => theme.color.textTertiary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  td {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  tbody tr {
    transition: background-color 0.2s ease;
  }

  tbody tr:hover {
    background: ${({ theme }) => theme.color.neutral[50]};
  }

  td:nth-child(2) strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  th:last-child,
  td:last-child {
    width: 16rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    overflow-x: auto;
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.primaryFaded};
  color: ${({ theme }) => theme.color.primary};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const PriorityBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};

  ${({ $priority, theme }) => {
    if ($priority === 'Crítica') {
      return css`
        background: ${theme.color.errorLight};
        color: ${theme.color.error};
      `;
    }

    if ($priority === 'Alta') {
      return css`
        background: ${theme.color.accentFaded};
        color: ${theme.color.accentDark};
      `;
    }

    if ($priority === 'Media') {
      return css`
        background: ${theme.color.warningLight};
        color: ${theme.color.warning};
      `;
    }

    return css`
      background: ${theme.color.successLight};
      color: ${theme.color.success};
    `;
  }}
`;

export const RowActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
`;

export const ActionLink = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.full};
  background: transparent;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accentDark};
  }
`;
