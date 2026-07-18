import styled from 'styled-components';
import {
  pageHeaderContent,
  pageHeaderEyebrow,
  pageHeaderSubtitle,
  pageHeaderSurface,
  pageHeaderTitle,
} from '../../../shared/styles/pageHeader';

const getBadgeBackground = (variant, theme) => {
  if (theme.isDark) {
    if (variant === 'success') return 'rgba(16, 185, 129, 0.14)';
    if (variant === 'warning') return 'rgba(245, 158, 11, 0.16)';
    if (variant === 'info') return 'rgba(0, 85, 128, 0.28)';
    if (variant === 'accent') return 'rgba(198, 137, 63, 0.18)';
    return 'rgba(148, 163, 184, 0.14)';
  }

  if (variant === 'success') return theme.color.successLight;
  if (variant === 'warning') return theme.color.warningLight;
  if (variant === 'info') return theme.color.infoLight;
  if (variant === 'accent') return theme.color.accentFaded;
  return theme.color.neutral[100];
};

const getBadgeTextColor = (variant, theme) => {
  if (theme.isDark) {
    if (variant === 'success') return '#a7f3d0';
    if (variant === 'warning') return '#fde68a';
    if (variant === 'info') return '#bfdbfe';
    if (variant === 'accent') return '#f5d0a5';
    return theme.color.textSecondary;
  }

  if (variant === 'success') return '#047857';
  if (variant === 'warning') return '#92400e';
  if (variant === 'info') return '#005580';
  if (variant === 'accent') return theme.color.accentDark;
  return theme.color.textSecondary;
};

const getStatusBadgeVariant = (variant) => {
  if (variant === 'success') return 'success';
  if (variant === 'warning') return 'warning';
  return 'neutral';
};

export const ScreenWrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[6]};

  &::before {
    content: '';
    position: absolute;
    inset: -1rem;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198,137,63,0.055)' : 'rgba(0,51,77,0.035)'} 1px, transparent 1px),
      linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : 'rgba(198,137,63,0.035)'} 1px, transparent 1px);
    background-size: 48px 48px;
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

export const TitleContainer = styled.div`
  ${pageHeaderContent};
`;

export const Eyebrow = styled.p`
  ${pageHeaderEyebrow};
`;

export const Title = styled.h1`
  ${pageHeaderTitle};
`;

export const Description = styled.p`
  ${pageHeaderSubtitle};
`;

export const HeaderActions = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const PrimaryButton = styled.button`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  transition: background-color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.color.accentDark};
    border-color: ${({ theme }) => theme.color.accentDark};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const SecondaryButton = styled.button`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.text};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accent};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`;

export const TableCard = styled.section`
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 22px rgba(198, 137, 63, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: transparent;
    border: none;
    box-shadow: none;
    overflow: visible;
  }
`;

export const TableScroller = styled.div`
  width: 100%;
  overflow-x: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    overflow: visible;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 820px;
  text-align: center;
  border-collapse: collapse;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 0;
    display: block;

    thead {
      display: none;
    }

    tbody {
      display: grid;
      gap: ${({ theme }) => theme.spacing[4]};
    }

    tr {
      display: grid;
      gap: ${({ theme }) => theme.spacing[3]};
      padding: ${({ theme }) => theme.spacing[4]};
      border: 1px solid ${({ theme }) => theme.color.border};
      border-radius: ${({ theme }) => theme.radius.md};
      background:
        linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
      box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 20px rgba(198, 137, 63, 0.1);
    }
  }
`;

export const Th = styled.th`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0;
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.08)' : theme.color.neutral[50]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  text-align: center;
  white-space: nowrap;
`;

export const Td = styled.td`
  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  color: ${({ theme }) => theme.color.textSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  text-align: center;
  vertical-align: middle;
  white-space: ${({ $nowrap }) => ($nowrap ? 'nowrap' : 'normal')};

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: ${({ theme }) => theme.spacing[3]};
    padding: 0;
    border-bottom: none;
    text-align: left;
    white-space: normal;

    &::before {
      content: attr(data-label);
      color: ${({ theme }) => theme.color.textTertiary};
      font-size: ${({ theme }) => theme.typography.size.xs};
      font-weight: ${({ theme }) => theme.typography.weight.extrabold};
      text-align: left;
      text-transform: uppercase;
    }
  }
`;

export const QuoteId = styled.span`
  color: ${({ theme }) => theme.color.textTertiary};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const Amount = styled.span`
  color: ${({ theme }) => theme.color.accent};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const MethodBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-width: 5.5rem;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1px solid ${({ $method, theme }) => ($method === 'air' ? '#60a5fa' : theme.color.accent)};
  color: ${({ $method, theme }) => getBadgeTextColor($method === 'air' ? 'info' : 'accent', theme)};
  background-color: ${({ $method, theme }) => getBadgeBackground($method === 'air' ? 'info' : 'accent', theme)};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 7.5rem;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0;
  border: 1px solid ${({ $variant, theme }) => {
    const variant = getStatusBadgeVariant($variant);
    if (variant === 'success') return theme.color.success;
    if (variant === 'warning') return theme.color.warning;
    return theme.color.border;
  }};
  background-color: ${({ $variant, theme }) => getBadgeBackground(getStatusBadgeVariant($variant), theme)};
  color: ${({ $variant, theme }) => getBadgeTextColor(getStatusBadgeVariant($variant), theme)};
`;

export const ActionsCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const IconActionButton = styled.button`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme, $emphasis, $success, $undo }) => {
    if ($success) return theme.color.success;
    if ($undo) return theme.color.accent;
    if ($emphasis) return theme.color.accent;
    return theme.color.border;
  }};
  background-color: ${({ theme }) => theme.color.surface};
  color: ${({ theme, $emphasis, $success, $undo }) => {
    if ($success) return theme.color.success;
    if ($undo) return theme.color.accent;
    if ($emphasis) return theme.color.accent;
    return theme.color.textSecondary;
  }};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover:not(:disabled) {
    border-color: ${({ theme, $success }) => ($success ? theme.color.success : theme.color.accent)};
    color: ${({ theme, $success }) => ($success ? theme.color.success : theme.color.accent)};
    background-color: ${({ theme, $success }) => {
      if ($success) return theme.isDark ? 'rgba(16, 185, 129, 0.14)' : theme.color.successLight;
      return theme.isDark ? 'rgba(198, 137, 63, 0.14)' : theme.color.accentFaded;
    }};
  }

  &:disabled {
    opacity: ${({ $sent }) => ($sent ? 1 : 0.42)};
    cursor: ${({ $sent }) => ($sent ? 'default' : 'not-allowed')};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ theme }) => theme.layout.buttonHeight};
    height: ${({ theme }) => theme.layout.buttonHeight};
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 14rem;
  gap: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textSecondary};
  text-align: center;
  padding: ${({ theme }) => theme.spacing[8]};

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.lg};
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  background-color: ${({ theme }) => theme.color.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-end;
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const Modal = styled.form`
  width: min(34rem, 100%);
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.border};
  background-color: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  padding: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    max-height: calc(100dvh - ${({ theme }) => theme.spacing[6]});
    border-radius: ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.lg} ${({ theme }) => theme.radius.md} ${({ theme }) => theme.radius.md};
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ModalDescription = styled.p`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
`;

export const ModalError = styled.div`
  border: 1px solid ${({ theme }) => theme.color.error};
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.color.errorLight};
  color: ${({ theme }) => theme.color.error};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;

  input,
  select {
    height: 2.5rem;
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.color.border};
    background-color: ${({ theme }) => theme.color.neutral[50]};
    color: ${({ theme }) => theme.color.text};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    outline: none;
    color-scheme: ${({ theme }) => (theme.isDark ? 'dark' : 'light')};

    &:focus {
      border-color: ${({ theme }) => theme.color.accent};
      box-shadow: 0 0 0 2px rgba(198, 137, 63, 0.18);
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;
  }
`;
