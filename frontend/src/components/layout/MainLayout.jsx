import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useUIStore } from '../../app/stores/uiStore';
import Sidebar from './Sidebar';
import { AssistantPanel } from '../../features/app-assistant';

const AgentModal = lazy(() => import('../../shared/components/AgentModal').then(module => ({ default: module.AgentModal })));

const pageBackgroundSweep = keyframes`
  0% {
    transform: translate3d(-115%, 18%, 0) rotate(-7deg);
    opacity: 0;
  }

  18% {
    opacity: 0.92;
  }

  62% {
    opacity: 0.76;
  }

  100% {
    transform: translate3d(115%, -18%, 0) rotate(-7deg);
    opacity: 0;
  }
`;

const LayoutWrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background:
    linear-gradient(
      135deg,
      ${({ theme }) =>
        theme.isDark
          ? `color-mix(in srgb, ${theme.color.primary} 38%, transparent)`
          : `color-mix(in srgb, ${theme.color.primaryFaded} 92%, transparent)`}
        0%,
      transparent 46%
    ),
    linear-gradient(
      315deg,
      ${({ theme }) =>
        theme.isDark
          ? `color-mix(in srgb, ${theme.color.accentDark} 20%, transparent)`
          : `color-mix(in srgb, ${theme.color.accentFaded} 88%, transparent)`}
        0%,
      transparent 48%
    ),
    linear-gradient(
      180deg,
      ${({ theme }) => theme.color.background} 0%,
      ${({ theme }) => (theme.isDark ? theme.color.primaryDark : theme.color.neutral[50])} 100%
    );
  font-family: inherit;
  color: ${({ theme }) => theme.color.text};
  transition: background 0.3s ease;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.07)' : 'rgba(0, 51, 77, 0.045)'} 1px, transparent 1px),
      linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.035)' : 'rgba(198, 137, 63, 0.045)'} 1px, transparent 1px);
    background-size: 52px 52px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), transparent 88%);
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100vh;
  background:
    linear-gradient(
      180deg,
      ${({ theme }) =>
        theme.isDark
          ? `color-mix(in srgb, ${theme.color.primary} 18%, transparent)`
          : `color-mix(in srgb, ${theme.color.neutral[0]} 62%, transparent)`}
        0%,
      transparent 18rem
    );
`;

const Main = styled.main`
  position: relative;
  isolation: isolate;
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[6]};
  width: 100%;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(90deg, ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.055)' : 'rgba(0, 51, 77, 0.035)'} 1px, transparent 1px),
      linear-gradient(180deg, ${({ theme }) => theme.isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(198, 137, 63, 0.035)'} 1px, transparent 1px);
    background-size: 52px 52px;
    opacity: 0.74;
    z-index: 0;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.92), transparent 92%);
  }

  &::after {
    content: '';
    position: fixed;
    top: -28%;
    bottom: -28%;
    left: -34%;
    width: 48%;
    pointer-events: none;
    z-index: 0;
    background:
      linear-gradient(
        115deg,
        transparent 0%,
        rgba(198, 137, 63, 0.00) 28%,
        rgba(198, 137, 63, ${({ theme }) => theme.isDark ? 0.16 : 0.12}) 48%,
        rgba(212, 163, 106, ${({ theme }) => theme.isDark ? 0.09 : 0.07}) 58%,
        transparent 76%
      );
    filter: blur(0.16rem);
    transform: translate3d(-115%, 18%, 0) rotate(-7deg);
    animation: ${pageBackgroundSweep} 8s ease-in-out infinite;
    will-change: transform, opacity;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      opacity: 0;
    }
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContentWidth}; 
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const MainLayout = () => {
  const isAgentModalOpen = useUIStore(state => state.isAgentModalOpen);

  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentArea>
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </ContentArea>
      <AssistantPanel />
      {isAgentModalOpen && (
        <Suspense fallback={null}>
          <AgentModal />
        </Suspense>
      )}
    </LayoutWrapper>
  );
};

export default MainLayout;
