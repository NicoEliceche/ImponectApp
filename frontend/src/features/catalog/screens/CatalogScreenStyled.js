import styled, { css, keyframes } from 'styled-components';
import {
  pageHeaderContent,
  pageHeaderEyebrow,
  pageHeaderSubtitle,
  pageHeaderSurface,
  pageHeaderTitle,
} from '../../../shared/styles/pageHeader';

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.75rem) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const sweepLight = keyframes`
  0% {
    transform: translateX(-145%) skewX(-16deg);
    opacity: 0;
  }

  14% {
    opacity: 0.85;
  }

  62% {
    opacity: 0.7;
  }

  100% {
    transform: translateX(245%) skewX(-16deg);
    opacity: 0;
  }
`;

const sonar = keyframes`
  0% {
    box-shadow: 0 0 0 0 var(--catalog-success-ring);
  }

  70% {
    box-shadow: 0 0 0 0.55rem var(--catalog-success-clear);
  }

  100% {
    box-shadow: 0 0 0 0 var(--catalog-success-clear);
  }
`;

const interactive = css`
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    color 0.2s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const panelSurface = css`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(
      135deg,
      ${({ theme }) => theme.isDark ? 'color-mix(in srgb, var(--catalog-panel), white 3%)' : theme.color.surface} 0%,
      ${({ theme }) => theme.isDark ? 'color-mix(in srgb, var(--catalog-panel), black 10%)' : theme.color.neutral[50]} 100%
    );
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 1.5rem color-mix(in srgb, ${({ theme }) => theme.color.accent} 10%, transparent);
`;

// ── Layout principal ────────────────────────────────────────────────────────

export const ScreenWrapper = styled.div`
  --catalog-panel: ${({ theme }) => theme.color.surface};
  --catalog-accent-soft: color-mix(in srgb, ${({ theme }) => theme.color.accent} 14%, transparent);
  --catalog-primary-soft: color-mix(in srgb, ${({ theme }) => theme.color.primaryLight} 14%, transparent);
  --catalog-success-ring: color-mix(in srgb, ${({ theme }) => theme.color.success} 38%, transparent);
  --catalog-success-clear: color-mix(in srgb, ${({ theme }) => theme.color.success} 0%, transparent);

  position: relative;
  isolation: isolate;
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color.text};
  background: transparent;
`;

export const MainArea = styled.main`
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export const Header = styled.header`
  ${pageHeaderSurface};
  display: block;
`;

export const HeaderCopy = styled.div`
  ${pageHeaderContent};
`;

export const Eyebrow = styled.p`
  ${pageHeaderEyebrow};

  svg {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const Title = styled.h1`
  ${pageHeaderTitle};
  max-width: 54rem;
`;

export const Subtitle = styled.p`
  ${pageHeaderSubtitle};
  max-width: 58rem;
`;

export const CommandPanel = styled.aside`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.isDark ? `color-mix(in srgb, ${theme.color.accent} 12%, transparent)` : theme.color.accentFaded};
`;

export const SignalRow = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-height: 2rem;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
`;

export const SignalDot = styled.span`
  width: 0.58rem;
  height: 0.58rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.color.success};
  animation: ${sonar} 1.8s ease-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 5.25rem;
  padding: ${({ theme }) => theme.spacing[4]};
  border: 1px solid color-mix(in srgb, ${({ theme }) => theme.color.accent} 55%, transparent);
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.surface};

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    color: ${({ theme }) => theme.color.accent};
    font-size: ${({ theme }) => theme.typography.size['2xl']};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }
`;

// ── Controles ───────────────────────────────────────────────────────────────

export const ControlDock = styled.section`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(16rem, 1fr) minmax(18rem, 0.82fr) auto;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  margin-top: calc(-1 * ${({ theme }) => theme.spacing[3]});
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    margin-top: calc(-1 * ${({ theme }) => theme.spacing[2]});
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing[3]};
    margin-top: 0;
  }
`;

export const SearchBox = styled.label`
  position: relative;
  isolation: isolate;
  min-width: 0;
  min-height: ${({ theme }) => theme.layout.inputHeight};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: 0 ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 1rem color-mix(in srgb, ${({ theme }) => theme.color.accent} 8%, transparent);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -30% auto -30% -22%;
    width: 34%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, ${({ theme }) => theme.color.accent} 24%, transparent), transparent);
    filter: blur(0.05rem);
    opacity: 0;
    animation: ${sweepLight} 5.6s ease-in-out infinite;
    z-index: 0;
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: 0 0 0 0.2rem var(--catalog-accent-soft);
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.color.accent};
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  input {
    position: relative;
    z-index: 1;
    width: 100%;
    min-width: 0;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.color.text};
    font-family: inherit;
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

export const AudienceSwitch = styled.div`
  position: relative;
  isolation: isolate;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.neutral[50]};
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 1rem color-mix(in srgb, ${({ theme }) => theme.color.primaryLight} 8%, transparent);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -34% auto -34% -24%;
    width: 38%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, ${({ theme }) => theme.color.primaryLight} 24%, transparent), color-mix(in srgb, ${({ theme }) => theme.color.accent} 18%, transparent), transparent);
    filter: blur(0.05rem);
    opacity: 0;
    animation: ${sweepLight} 6.2s ease-in-out 0.8s infinite;
    z-index: 0;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const AudienceButton = styled.button`
  ${interactive};
  position: relative;
  z-index: 1;
  min-width: 0;
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[1]};
  border: 1px solid ${({ $active, theme }) => ($active ? theme.color.accent : 'transparent')};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ $active, theme }) => ($active ? theme.color.surface : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.color.accent : theme.color.textSecondary)};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  cursor: pointer;
  text-align: left;

  strong {
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  }

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.color.accent};
    outline: none;
  }
`;

export const ExportButton = styled.button`
  ${interactive};
  position: relative;
  isolation: isolate;
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.color.accent} 0%, ${({ theme }) => theme.color.accentLight} 100%);
  color: ${({ theme }) => theme.color.textInverse};
  padding: 0 ${({ theme }) => theme.spacing[5]};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  cursor: pointer;
  white-space: nowrap;
  box-shadow: ${({ theme }) => theme.shadow.sm}, 0 0 1.1rem var(--catalog-accent-soft);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: -45% auto -45% -28%;
    width: 42%;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, color-mix(in srgb, ${({ theme }) => theme.color.textInverse} 40%, transparent), color-mix(in srgb, ${({ theme }) => theme.color.accentLight} 30%, transparent), transparent);
    filter: blur(0.04rem);
    opacity: 0;
    animation: ${sweepLight} 4.8s ease-in-out 1.2s infinite;
    z-index: 0;
  }

  svg {
    position: relative;
    z-index: 1;
    width: 1.05rem;
    height: 1.05rem;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-0.1rem);
    box-shadow: 0 0 1.3rem var(--catalog-accent-soft);
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

// ── Workspace ───────────────────────────────────────────────────────────────

export const CatalogWorkspace = styled.section`
  display: block;
  min-width: 0;
`;

export const ProductColumn = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing[3]};
  }
`;

export const ProductCard = styled.article`
  ${interactive};
  position: relative;
  min-width: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  background:
    linear-gradient(
      180deg,
      ${({ theme }) => theme.color.surface} 0%,
      ${({ theme }) => theme.color.surface} 100%
    );
  box-shadow: ${({ theme }) => theme.shadow.sm};
  text-align: left;
  animation: ${reveal} 0.32s ease both;

  &:hover {
    transform: translateY(-0.18rem);
    border-color: ${({ theme }) => theme.color.accent};
    box-shadow: ${({ theme }) => theme.shadow.md}, 0 0 1.4rem var(--catalog-accent-soft);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 0;
  }
`;

export const ProductBadge = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 1.45rem;
  border: 1px solid color-mix(in srgb, ${({ theme }) => theme.color.accent} 70%, transparent);
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ theme }) => theme.isDark ? `color-mix(in srgb, ${theme.color.primaryDark} 82%, transparent)` : theme.color.surface};
  color: ${({ theme }) => theme.color.accent};
  padding: 0 ${({ theme }) => theme.spacing[2]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  text-transform: uppercase;
  white-space: nowrap;
`;

export const ProductImageWrap = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  aspect-ratio: 1 / 1;
  background:
    radial-gradient(circle at 50% 30%, ${({ theme }) => `color-mix(in srgb, ${theme.color.accent} ${theme.isDark ? 10 : 8}%, transparent)`}, transparent 58%),
    ${({ theme }) => theme.color.neutral[100]};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: none;
  }

  ${ProductBadge} {
    position: absolute;
    top: ${({ theme }) => theme.spacing[2]};
    right: ${({ theme }) => theme.spacing[2]};
    backdrop-filter: blur(0.35rem);
  }
`;

export const ProductContent = styled.div`
  min-width: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[3]};
`;

export const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[3]};
  min-width: 0;

  span,
  strong {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  strong {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const ProductTitle = styled.h3`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
`;

export const ValueProp = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.base};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
`;

export const CardProblem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${({ theme }) => theme.color.neutral[50]};

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    text-transform: uppercase;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0;
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing[2]};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing[3]};
  border-top: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.neutral[50]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: stretch;
  }
`;

export const PriceBlock = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[1]};

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.xs};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
    font-variant-numeric: tabular-nums;
  }
`;

export const MarginPill = styled.span`
  max-width: 100%;
  border: 1px solid color-mix(in srgb, ${({ theme }) => theme.color.success} 50%, transparent);
  border-radius: ${({ theme }) => theme.radius.full};
  color: ${({ theme }) => theme.color.success};
  background: color-mix(in srgb, ${({ theme }) => theme.color.success} 12%, transparent);
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[3]};
  font-size: ${({ theme }) => theme.typography.size.xs};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  text-align: center;
`;

// ── Respaldo ────────────────────────────────────────────────────────────────

export const AuthorityBand = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const TrustCard = styled.article`
  ${panelSurface};
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[4]};

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.color.accent};
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.base};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  }
`;

export const EmptyState = styled.div`
  ${panelSurface};
  min-height: 14rem;
  display: grid;
  place-items: center;
  align-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  padding: ${({ theme }) => theme.spacing[6]};
  text-align: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.color.accent};
  }

  strong {
    color: ${({ theme }) => theme.color.text};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  }

  span {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: ${({ theme }) => theme.typography.size.sm};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
`;
