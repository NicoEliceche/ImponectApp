import styled, { css } from 'styled-components';
import {
  pageHeaderContent,
  pageHeaderEyebrow,
  pageHeaderSubtitle,
  pageHeaderSurface,
  pageHeaderTitle,
} from '../../../shared/styles/pageHeader';

const panelBase = css`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.035)' : theme.color.neutral[50]} 0%, ${({ theme }) => theme.color.surface} 100%);
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 20px rgba(198, 137, 63, 0.08);
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
      background: ${theme.isDark ? theme.color.neutral[50] : theme.color.warningLight};
    `;
  }

  if ($tone === 'destination') {
    return css`
      border-left-color: ${theme.color.accent};
      background: ${theme.isDark ? theme.color.neutral[50] : theme.color.accentFaded};
    `;
  }

  if ($tone === 'total') {
    return css`
      border-left-color: ${theme.color.success};
      background: ${theme.isDark ? theme.color.neutral[50] : theme.color.successLight};
    `;
  }

  return css`
    border-left-color: ${theme.color.primary};
    background: ${theme.isDark ? theme.color.neutral[50] : theme.color.primaryFaded};
  `;
};

export const ScreenWrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};

  &::before {
    content: '';
    position: absolute;
    inset: -1rem;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198,137,63,0.055)' : 'rgba(0,51,77,0.035)'} 1px, transparent 1px),
      linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.03)' : 'rgba(198,137,63,0.035)'} 1px, transparent 1px);
    background-size: 44px 44px;
    opacity: 0.82;
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

export const HeaderSummaryRow = styled.div`
  position: relative;
  z-index: 2;
  width: 20rem;
  display: flex;
  justify-content: flex-end;
  align-self: stretch;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    pointer-events: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: stretch;
  }
`;

export const TitleBlock = styled.div`
  ${pageHeaderContent};
`;

export const Eyebrow = styled.p`
  ${pageHeaderEyebrow};
`;

export const Title = styled.h1`
  ${pageHeaderTitle};
`;

export const Subtitle = styled.p`
  ${pageHeaderSubtitle};
  max-width: 58rem;
`;

export const HeaderSummary = styled.div`
  ${panelBase};
  border-color: ${({ theme }) => theme.color.accent};
  height: 100%;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  width: 100%;
  max-width: 20rem;
  min-width: 16rem;
  pointer-events: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: none;
    min-width: 0;
  }
`;

export const SummaryLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.06em;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  text-transform: uppercase;
`;

export const SummaryValue = styled.strong`
  display: block;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const SummaryValueRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const SummaryBadge = styled.span`
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  white-space: nowrap;
`;

export const SummaryMeta = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const TabButton = styled.button`
  ${buttonBase};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.border)};
  background: ${({ $active, theme }) => {
    if (!$active) return theme.color.surface;
    return theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded;
  }};
  color: ${({ $active, theme }) => {
    if (!$active) return theme.color.textSecondary;
    return theme.isDark ? theme.color.accent : theme.color.accentDark;
  }};
  box-shadow: ${({ $active }) => ($active ? '0 0 16px rgba(198, 137, 63, 0.18)' : 'none')};
`;

export const WorkspaceGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(28rem, 1fr);
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

export const PanelActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: stretch;

    button {
      width: 100%;
    }
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
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.errorLight};
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
  grid-template-columns: repeat(4, minmax(0, 10.75rem));
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 10.75rem));
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
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
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

export const ReadOnlyUnit = styled(InputUnit)`
  strong {
    width: 100%;
    min-width: 0;
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: ${({ theme }) => theme.spacing[3]};
    top: 50%;
    transform: translateY(-50%);
    border-left: ${({ theme }) => theme.spacing[1]} solid transparent;
    border-right: ${({ theme }) => theme.spacing[1]} solid transparent;
    border-top: ${({ theme }) => theme.spacing[2]} solid ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    pointer-events: none;
  }

  select {
    appearance: none;
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    color-scheme: ${({ theme }) => theme.isDark ? 'dark' : 'light'};
    cursor: pointer;
    padding: 0 ${({ theme }) => theme.spacing[8]} 0 ${({ theme }) => theme.spacing[3]};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  option {
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.text};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  option:checked {
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
  }
`;

export const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[3]};
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
  grid-template-columns: repeat(${({ $columns }) => $columns || 2}, minmax(0, 10.75rem));
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 10.75rem));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const DestinationFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const DestinationRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns || 3}, minmax(0, 10.75rem));
  gap: ${({ theme }) => theme.spacing[3]};
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 10.75rem));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FiscalDepositAnchor = styled.div`
  --fiscal-line-top: calc(100% - ${({ theme }) => theme.spacing[6]} - ${({ theme }) => theme.spacing[1]});

  position: relative;

  > ${Field} ${InputUnit} {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.18)' : theme.color.accentFaded};
  }

  &::before {
    content: '';
    position: absolute;
    left: calc(${({ theme }) => theme.spacing[5]} * -1);
    top: var(--fiscal-line-top);
    width: ${({ theme }) => theme.spacing[5]};
    border-top: ${({ theme }) => theme.spacing[1]} solid ${({ theme }) => theme.color.accent};
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    left: calc(${({ theme }) => theme.spacing[5]} * -1);
    top: var(--fiscal-line-top);
    height: 24.5rem;
    border-left: ${({ theme }) => theme.spacing[1]} solid ${({ theme }) => theme.color.accent};
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const FiscalScalePanel = styled.section`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const FiscalConnector = styled.div`
  min-height: ${({ theme }) => theme.spacing[6]};
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.06em;
  text-transform: uppercase;

  span {
    position: relative;
    z-index: 1;
  }
`;

export const FiscalScale = styled.div`
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.18)' : theme.color.accentFaded};
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    left: calc(${({ theme }) => theme.spacing[5]} * -1);
    top: 50%;
    width: ${({ theme }) => theme.spacing[5]};
    border-top: ${({ theme }) => theme.spacing[1]} solid ${({ theme }) => theme.color.accent};
    transform: translateY(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &::before {
      display: none;
    }
  }
`;

export const FiscalScaleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.bold};

  &:last-child {
    border-bottom: none;
  }

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  strong {
    flex-shrink: 0;
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: flex-start;
    flex-direction: column;
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
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }
`;

export const BudgetPanel = styled.section`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
`;

export const BudgetTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  overflow: hidden;
`;

export const BudgetCell = styled.div`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing[3]};
  border-right: 1px solid ${({ theme }) => theme.color.border};

  &:last-child {
    border-right: none;
  }

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
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.border};

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const ActionPanel = styled.div`
  ${panelBase};
  padding: ${({ theme }) => theme.spacing[4]};
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.isDark ? theme.color.accentLight : theme.color.accentDark};
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
  }
`;

export const GoldOutlineButton = styled.button`
  ${buttonBase};
  border: 1px solid ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.surface};
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
    border-color: ${({ theme }) => theme.color.accentLight};
    color: ${({ theme }) => theme.isDark ? theme.color.accentLight : theme.color.accentDark};
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
    color: ${({ $emphasis, theme }) => {
      if (!$emphasis) return theme.color.text;
      return theme.isDark ? theme.color.accent : theme.color.primary;
    }};
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

export const MethodCard = styled.button`
  ${panelBase};
  width: 100%;
  padding: 0;
  border-color: ${({ $selected, theme }) => ($selected ? theme.color.accent : theme.color.border)};
  appearance: none;
  overflow: hidden;
  color: inherit;
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  ${({ $selected, theme }) => $selected && css`
    box-shadow: 0 0 0 0.125rem ${theme.isDark ? 'rgba(198, 137, 63, 0.22)' : theme.color.accentFaded};
  `}

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    transform: translateY(-1px);
  }
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
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
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
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.primary};
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

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 6000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[5]};
  background: ${({ theme }) => theme.color.overlay};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const BudgetModal = styled.div`
  width: min(100%, 58rem);
  max-height: min(92vh, 52rem);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow['2xl']};
`;

export const BudgetHeaderImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  background: ${({ theme }) => theme.color.primary};
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const ModalHeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: stretch;
    flex-direction: column-reverse;
  }
`;

export const BudgetMethodSelect = styled.select`
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  outline: none;
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.surface};
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;
  color-scheme: ${({ theme }) => theme.isDark ? 'dark' : 'light'};

  &:focus {
    box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
  }
`;

export const ModalKicker = styled.span`
  display: block;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ModalTitle = styled.h2`
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xl};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const IconOnlyButton = styled.button`
  width: ${({ theme }) => theme.layout.buttonHeight};
  height: ${({ theme }) => theme.layout.buttonHeight};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.textSecondary};
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
  }
`;

export const BudgetForm = styled.form`
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  overflow-y: auto;
`;

export const BudgetFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const BudgetFormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  min-width: 0;

  label {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  input,
  select {
    width: 100%;
    min-width: 0;
    min-height: calc(${({ theme }) => theme.layout.inputHeight} - ${({ theme }) => theme.spacing[3]});
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.radius.md};
    outline: none;
    background: ${({ theme }) => theme.color.neutral[50]};
    color: ${({ theme }) => theme.color.text};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    color-scheme: ${({ theme }) => theme.isDark ? 'dark' : 'light'};

    &:focus {
      border-color: ${({ theme }) => theme.color.accent};
      box-shadow: 0 0 0 0.2rem ${({ theme }) => theme.color.accentFaded};
    }
  }

  select {
    cursor: pointer;
  }
`;

export const BudgetSectionTitle = styled.h3`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.color.accent};
  border-bottom: 1px solid ${({ theme }) => theme.color.accent};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const BudgetImageDropZone = styled.div`
  position: relative;
  flex: 0 0 auto;
  height: auto;
  min-height: calc(4.5rem + ${({ theme }) => theme.spacing[6]});
  overflow: visible;
  border: 1px dashed ${({ $disabled, theme }) => ($disabled ? theme.color.border : theme.color.accent)};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.neutral[50]};
  padding: ${({ theme }) => theme.spacing[3]};
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent};
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.accentFaded};
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const BudgetImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(4.5rem, 4.5rem));
  grid-auto-rows: 4.5rem;
  gap: ${({ theme }) => theme.spacing[2]};
  align-content: start;
  flex: 0 0 auto;
  height: auto;
  width: 100%;
  min-width: 0;
  padding-right: 3.25rem;
`;

export const BudgetImageTile = styled.div`
  position: relative;
  width: 4.5rem;
  height: 4.5rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const BudgetImageAddButton = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[100] : theme.color.surface};
  color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  &:hover {
    background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.accentFaded};
    transform: translateY(-1px);
  }
`;

export const BudgetImageRemoveButton = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 1.35rem;
  height: 1.35rem;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: ${({ theme }) => theme.radius.full};
  background: rgba(0, 26, 38, 0.82);
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

export const BudgetImageCounter = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing[3]};
  right: ${({ theme }) => theme.spacing[3]};
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: 1;
`;

export const SellerInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const SellerInfoItem = styled.div`
  display: grid;
  grid-template-columns: minmax(8rem, auto) minmax(0, 1fr);
  min-width: 0;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};

  &:nth-child(2n) {
    border-right: none;
  }

  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }

  &:last-child {
    grid-column: 1 / -1;
    border-right: none;
    border-bottom: none;
  }

  span,
  strong {
    min-width: 0;
    padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
    overflow-wrap: anywhere;
  }

  span {
    background: ${({ theme }) => theme.color.neutral[50]};
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-right: none;

    &:nth-last-child(-n + 2) {
      border-bottom: 1px solid ${({ theme }) => theme.color.border};
    }

    &:last-child {
      grid-column: auto;
      border-bottom: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const BudgetModalSummary = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? theme.color.neutral[50] : theme.color.accentFaded};
  padding: ${({ theme }) => theme.spacing[3]};

  span,
  small {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.isDark ? theme.color.accent : theme.color.accentDark};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-align: right;
  }

  small {
    grid-column: 1 / -1;
    letter-spacing: 0;
    font-size: ${({ theme }) => theme.typography.size.base};
    text-transform: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;

    strong {
      text-align: left;
    }
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`;
