import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { AgentModal } from '../../shared/components/AgentModal';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.color.background};
  font-family: inherit;
  color: ${({ theme }) => theme.color.text};
  transition: background-color 0.3s ease;
  overflow: hidden;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing[6]};
  width: 100%;
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContentWidth}; 
  margin: 0 auto;
  width: 100%;
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
      <AgentModal />
    </LayoutWrapper>
  );
};

export default MainLayout;
