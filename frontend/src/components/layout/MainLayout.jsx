import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { AgentModal } from '../../shared/components/AgentModal';
import { AssistantPanel } from '../../features/app-assistant';

const LayoutWrapper = styled.div`
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
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContentWidth}; 
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const MainLayout = () => {
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
      <AgentModal />
    </LayoutWrapper>
  );
};

export default MainLayout;
