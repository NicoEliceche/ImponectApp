import styled, { css } from 'styled-components';

const resultAccent = {
  air: '#0f62fe',
  sea: '#0f766e',
};

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
  width: 100%;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: ${({ theme }) => theme.spacing[6]};
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
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0;
`;

export const Description = styled.p`
  max-width: 48rem;
  margin: ${({ theme }) => theme.spacing[2]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`;

export const HeaderSummary = styled.div`
  min-width: 15rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const SummaryLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const SummaryValue = styled.strong`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
  font-size: ${({ theme }) => theme.typography.size['2xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const SummaryMeta = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(22rem, 0.9fr) minmax(0, 1.3fr);
  gap: ${({ theme }) => theme.spacing[5]};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const FormPanel = styled.section`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[5]};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const OutputPanel = styled.section`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const PanelTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  min-width: 0;

  > label,
  > span,
  & > label {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
`;

export const InputUnit = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  min-height: ${({ theme }) => theme.layout.inputHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.neutral[50]};
  overflow: hidden;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
  }

  span {
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    border-right: 1px solid ${({ theme }) => theme.color.border};
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.08)' : theme.color.accentFaded};
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
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    font-family: inherit;
  }
`;

export const TransportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const TransportBox = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const TransportTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const FormNote = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const AdvancedRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const MetricGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
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
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  strong {
    margin-top: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ResultCard = styled.article`
  border: 1px solid ${({ $winner, theme }) => ($winner ? theme.color.accent : theme.color.border)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ $winner, theme }) => ($winner ? theme.shadow.md : theme.shadow.sm)};
  overflow: hidden;
`;

export const ResultHeader = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : theme.color.neutral[50]};
`;

export const ResultIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textInverse};
  background: ${({ theme }) => theme.color.primary};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const ResultMethod = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
`;

export const ResultHint = styled.span`
  display: block;
  margin-top: ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export const WinnerBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.accentFaded};
  color: ${({ theme }) => theme.color.accentDark};
  border: 1px solid ${({ theme }) => theme.color.accent};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  white-space: nowrap;

  svg {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

export const ResultRows = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
`;

export const ResultRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[2]} 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};

  strong {
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-align: right;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.color.border};
  margin: ${({ theme }) => theme.spacing[2]} 0;
`;

export const TotalRow = styled(ResultRow)`
  align-items: baseline;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};

  strong {
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size.xl};
  }
`;

export const ComparisonPanel = styled.section`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[5]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
  box-shadow: ${({ theme }) => theme.shadow.sm};
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
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const BarTrack = styled.div`
  height: 0.85rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.neutral[100]};
  overflow: hidden;
`;

export const BarFill = styled.div`
  height: 100%;
  width: ${({ $width }) => $width};
  border-radius: ${({ theme }) => theme.radius.full};
  transition: width 0.2s ease;
  ${({ $variant, theme }) => css`
    background: ${$variant === 'air'
      ? `linear-gradient(90deg, ${theme.color.primary}, ${resultAccent.air})`
      : `linear-gradient(90deg, ${theme.color.accent}, ${resultAccent.sea})`};
  `}
`;

export const FooterNote = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.sm};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.color.accent};
    flex-shrink: 0;
  }
`;
