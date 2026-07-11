import styled, { css } from 'styled-components';

const panelBase = css`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

const buttonBase = css`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }
`;

const groupTone = ({ $tone, theme }) => {
  if ($tone === 'tax') {
    return css`
      border-left-color: ${theme.color.warning};
      background: ${theme.color.warningLight};
    `;
  }

  if ($tone === 'destination') {
    return css`
      border-left-color: ${theme.color.accent};
      background: ${theme.color.accentFaded};
    `;
  }

  if ($tone === 'total') {
    return css`
      border-left-color: ${theme.color.success};
      background: ${theme.color.successLight};
    `;
  }

  return css`
    border-left-color: ${theme.color.primary};
    background: ${theme.color.primaryFaded};
  `;
};

export const ScreenWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(16rem, auto);
  align-items: end;
  gap: ${({ theme }) => theme.spacing[5]};
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    align-items: stretch;
  }
`;

export const TitleBlock = styled.div`
  min-width: 0;
`;

export const Eyebrow = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const HeaderSummary = styled.div`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  min-width: 0;
`;

export const SummaryLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const SummaryValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const SummaryMeta = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const TabButton = styled.button`
  ${buttonBase};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  background: ${({ $active, theme }) => ($active ? theme.color.accentFaded : theme.color.surface)};
  color: ${({ $active, theme }) => ($active ? theme.color.accentDark : theme.color.textSecondary)};
`;

export const WorkspaceGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(22rem, 0.8fr);
  gap: ${({ theme }) => theme.spacing[5]};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`;

export const MainColumn = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const SideColumn = styled.aside`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const PanelMeta = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const LoadsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const LoadCard = styled.article`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const LoadHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const LoadTitle = styled.div`
  min-width: 0;

  strong,
  span {
    display: block;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    margin-top: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const IconButton = styled.button`
  width: ${({ theme }) => theme.layout.buttonHeight};
  height: ${({ theme }) => theme.layout.buttonHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.error};
    color: ${({ theme }) => theme.color.error};
    background: ${({ theme }) => theme.color.errorLight};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.45;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

export const LoadGrid = styled.div`
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

export const Field = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  opacity: ${({ $muted }) => ($muted ? 0.58 : 1)};
  transition: opacity 0.2s ease;

  label {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`;

export const InputUnit = styled.div`
  display: grid;
  grid-template-columns: minmax(4rem, auto) minmax(0, 1fr);
  align-items: center;
  min-height: ${({ theme }) => theme.layout.inputHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
  }

  span {
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    border-right: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.color.accentFaded};
    color: ${({ theme }) => theme.color.accentDark};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    white-space: nowrap;
  }

  input {
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const TextInput = styled.input`
  width: 100%;
  min-height: ${({ theme }) => theme.layout.inputHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  color: ${({ theme }) => theme.color.text};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
  }
`;

export const SelectUnit = styled(InputUnit)`
  select {
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }
`;

export const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const SettingsPanel = styled.section`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SettingsFields = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  min-width: 0;

  span,
  strong {
    display: block;
    min-width: 0;
    overflow-wrap: anywhere;
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  strong {
    margin-top: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const ActionPanel = styled.div`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const PrimaryButton = styled.button`
  ${buttonBase};
  border: 1px solid ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.accentLight};
  }
`;

export const SecondaryButton = styled.button`
  ${buttonBase};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.primary};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.accentDark};
    background: ${({ theme }) => theme.color.accentFaded};
  }
`;

export const BreakdownPanel = styled.section`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const BreakdownGroup = styled.div`
  border-left: ${({ theme }) => theme.spacing[1]} solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.radius.sm};
  padding: ${({ theme }) => theme.spacing[3]};
  ${({ $tone, theme }) => groupTone({ $tone, theme })};
`;

export const GroupTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ResultRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const ResultRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ $emphasis, theme }) => ($emphasis ? theme.typography.weight.extrabold : theme.typography.weight.medium)};

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  strong {
    flex-shrink: 0;
    color: ${({ $emphasis, theme }) => ($emphasis ? theme.color.primary : theme.color.text)};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-align: right;
  }
`;

export const ComparisonLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const MethodCard = styled.article`
  ${panelBase};
  border-color: ${({ $winner, theme }) => ($winner ? theme.color.accent : theme.color.border)};
  overflow: hidden;
`;

export const MethodHeader = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.neutral[50]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: auto minmax(0, 1fr);
  }
`;

export const MethodIcon = styled.div`
  width: ${({ theme }) => theme.layout.buttonHeight};
  height: ${({ theme }) => theme.layout.buttonHeight};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const MethodTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const MethodMeta = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const WinnerBadge = styled.span`
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.accentFaded};
  color: ${({ theme }) => theme.color.accentDark};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  white-space: nowrap;

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-column: 1 / -1;
    justify-self: start;
  }
`;

export const MethodRows = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const ChartPanel = styled.section`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const BarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  strong {
    color: ${({ theme }) => theme.color.primary};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-align: right;
  }
`;

export const BarTrack = styled.div`
  height: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.neutral[100]};
  overflow: hidden;
`;

export const BarFill = styled.div`
  width: ${({ $width }) => $width};
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $variant, theme }) => (
    $variant === 'air'
      ? `linear-gradient(90deg, ${theme.color.primaryLight}, ${theme.color.info})`
      : `linear-gradient(90deg, ${theme.color.accent}, ${theme.color.success})`
  )};
  transition: width 0.2s ease;
`;

export const SummaryBand = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
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
