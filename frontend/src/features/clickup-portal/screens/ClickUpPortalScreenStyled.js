import styled from 'styled-components';

export const PortalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

export const PortalHeader = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10000;
  pointer-events: none;
`;

export const BackButton = styled.button`
  pointer-events: auto;
  background: #00334d;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  border: 2px solid white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    background: #001a26;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const PortalFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #f8fafc;
`;
