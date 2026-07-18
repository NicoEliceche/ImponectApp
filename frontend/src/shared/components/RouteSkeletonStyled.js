import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    transform: translateX(-120%);
  }

  100% {
    transform: translateX(120%);
  }
`;

const skeletonSurface = ({ theme }) => (
  theme.isDark ? 'rgba(255, 255, 255, 0.055)' : 'rgba(0, 51, 77, 0.07)'
);

const skeletonBorder = ({ theme }) => (
  theme.isDark ? 'rgba(198, 137, 63, 0.18)' : 'rgba(198, 137, 63, 0.24)'
);

export const SkeletonShell = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[5]};
`;

export const SkeletonHeader = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${skeletonBorder};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing[5]};
  background:
    linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.08)' : 'rgba(198, 137, 63, 0.10)'} 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.045)' : 'rgba(0,51,77,0.055)'} 1px, transparent 1px),
    linear-gradient(135deg, ${({ theme }) => theme.isDark ? 'rgba(13, 31, 41, 0.92)' : 'rgba(255,255,255,0.90)'} 0%, ${({ theme }) => theme.color.surface} 100%);
  background-size: 46px 46px, 46px 46px, 100% 100%;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.14), transparent);
    animation: ${shimmer} 1.6s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: ${({ theme }) => theme.spacing[4]};
`;

export const SkeletonCard = styled.div`
  position: relative;
  overflow: hidden;
  min-height: ${({ $large }) => ($large ? '10rem' : '8rem')};
  border: 1px solid ${skeletonBorder};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  background: ${({ theme }) => theme.isDark ? 'rgba(13, 31, 41, 0.74)' : 'rgba(255,255,255,0.76)'};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.10), transparent);
    transform: translateX(-120%);
    animation: ${shimmer} 1.8s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }
`;

export const SkeletonPill = styled.div`
  width: min(11rem, 45%);
  height: 0.8rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${skeletonSurface};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

export const SkeletonTitle = styled.div`
  width: min(24rem, 76%);
  height: 2.15rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background: ${skeletonSurface};
  margin-bottom: ${({ theme }) => theme.spacing[3]};
`;

export const SkeletonLine = styled.div`
  width: ${({ $wide, $short }) => ($wide ? '68%' : $short ? '38%' : '54%')};
  height: 0.85rem;
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${skeletonSurface};
`;
