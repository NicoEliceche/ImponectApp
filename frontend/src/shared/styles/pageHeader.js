import { css, keyframes } from 'styled-components';

export const pageHeaderScan = keyframes`
  0% {
    transform: translate3d(-110%, 0, 0);
    opacity: 0;
  }

  12% {
    opacity: 1;
  }

  54% {
    opacity: 1;
  }

  100% {
    transform: translate3d(110%, 0, 0);
    opacity: 0;
  }
`;

export const pageHeaderDiagonalScan = keyframes`
  0% {
    transform: translate3d(-120%, 22%, 0) rotate(-9deg);
    opacity: 0;
  }

  22% {
    opacity: 0.72;
  }

  100% {
    transform: translate3d(120%, -22%, 0) rotate(-9deg);
    opacity: 0;
  }
`;

export const pageHeaderSurface = css`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  gap: ${({ theme }) => theme.spacing[3]};
  min-height: calc(${({ theme }) => theme.layout.buttonHeight} + ${({ theme }) => theme.spacing[10]} + ${({ theme }) => theme.spacing[8]});
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background:
    linear-gradient(90deg, ${({ theme }) => `color-mix(in srgb, ${theme.color.accent} ${theme.isDark ? 8 : 10}%, transparent)`} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'color-mix(in srgb, white 5%, transparent)' : `color-mix(in srgb, ${theme.color.primary} 6%, transparent)`} 1px, transparent 1px),
    ${({ theme }) => theme.color.surface};
  background-size: ${({ theme }) => theme.spacing[12]} ${({ theme }) => theme.spacing[12]};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &::before {
    content: '';
    position: absolute;
    top: -45%;
    bottom: -45%;
    left: -40%;
    width: 68%;
    z-index: 0;
    pointer-events: none;
    background:
      linear-gradient(
        90deg,
        transparent 0%,
        rgba(198, 137, 63, 0.08) 28%,
        rgba(198, 137, 63, ${({ theme }) => theme.isDark ? 0.42 : 0.34}) 50%,
        rgba(212, 163, 106, ${({ theme }) => theme.isDark ? 0.24 : 0.18}) 62%,
        transparent 100%
      );
    filter: blur(0.12rem);
    transform: translate3d(-110%, 0, 0);
    animation: ${pageHeaderScan} 5.8s ease-in-out infinite;
    will-change: transform, opacity;
  }

  &::after {
    content: '';
    position: absolute;
    top: -34%;
    bottom: -34%;
    left: -46%;
    width: 76%;
    z-index: 0;
    pointer-events: none;
    background:
      linear-gradient(
        105deg,
        transparent 0%,
        rgba(198, 137, 63, 0) 34%,
        rgba(198, 137, 63, ${({ theme }) => theme.isDark ? 0.28 : 0.20}) 52%,
        transparent 78%
      );
    transform: translate3d(-120%, 22%, 0) rotate(-9deg);
    animation: ${pageHeaderDiagonalScan} 8.4s ease-in-out 1.1s infinite;
    will-change: transform, opacity;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
      opacity: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing[3]};
  }
`;

export const pageHeaderContent = css`
  position: relative;
  z-index: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const pageHeaderEyebrow = css`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  width: fit-content;
  margin: 0 0 ${({ theme }) => theme.spacing[1]};
  color: ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.typography.size.sm};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.snug};
  text-transform: uppercase;
  letter-spacing: 0;

  svg {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
  }
`;

export const pageHeaderTitle = css`
  margin: 0;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.typography.size['4xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  letter-spacing: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.size['3xl']};
  }
`;

export const pageHeaderSubtitle = css`
  max-width: 58rem;
  margin: ${({ theme }) => theme.spacing[1]} 0 0;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;
