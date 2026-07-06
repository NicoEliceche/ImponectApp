import styled from 'styled-components';

export const LogsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  min-height: calc(100vh - 4rem);
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  flex-wrap: wrap;
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 52rem;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ $danger, theme }) => ($danger ? theme.color.error : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $primary, theme }) => ($primary ? theme.color.primary : theme.color.surface)};
  color: ${({ $danger, $primary, theme }) => {
    if ($danger) return theme.color.error;
    if ($primary) return theme.color.textInverse;
    return theme.color.text;
  }};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;

  &:hover {
    border-color: ${({ $danger, theme }) => ($danger ? theme.color.error : theme.color.primary)};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const RuntimePanel = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const RuntimeItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;

  span {
    color: ${({ theme }) => theme.color.textTertiary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    word-break: break-word;
  }
`;

export const EmptyState = styled.div`
  border: 1px dashed ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  padding: ${({ theme }) => theme.spacing[8]};
  text-align: center;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const LogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const LogEntry = styled.article`
  border: 1px solid ${({ $level, theme }) => {
    if ($level === 'error') return theme.color.error;
    if ($level === 'warn') return theme.color.warning;
    return theme.color.border;
  }};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  overflow: hidden;
`;

export const LogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.neutral[50]};
`;

export const LogTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
  }
`;

export const LevelBadge = styled.span`
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $level, theme }) => {
    if ($level === 'error') return theme.color.errorLight;
    if ($level === 'warn') return theme.color.warningLight;
    return theme.color.primaryFaded;
  }};
  color: ${({ $level, theme }) => {
    if ($level === 'error') return theme.color.error;
    if ($level === 'warn') return theme.color.warning;
    return theme.color.primary;
  }};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
`;

export const Details = styled.pre`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
`;
