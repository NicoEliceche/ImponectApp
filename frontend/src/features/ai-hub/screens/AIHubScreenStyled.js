import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[6]};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing[6]};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding-bottom: ${({ theme }) => theme.spacing[4]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.size['3xl']};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.text};
  margin: 0;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 500;
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

export const CreateAgentButton = styled.button`
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textInverse};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[3]} ${({ theme }) => theme.spacing[5]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  font-size: ${({ theme }) => theme.typography.size.sm};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[3]};
  min-height: ${({ theme }) => theme.layout.buttonHeight};
  white-space: nowrap;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: ${({ theme }) => theme.shadow.md};

  &:hover {
    background-color: ${({ theme }) => theme.color.accentLight};
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const AgentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); /* Tightened min-width */
  gap: ${({ theme }) => theme.spacing[5]}; /* Reduced gap */
`;

export const AgentCard = styled.div`
  background-color: ${({ theme }) => theme.color.surface};
  padding: ${({ theme }) => theme.spacing[5]}; /* Reduced padding */
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.shadow.md};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.xl};
    transform: translateY(-4px);
    border-color: #c6893f;
  }
`;

export const AgentIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.1)' : '#fff8f0'};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[3]};
  color: #c6893f;
  border: 1px solid rgba(198, 137, 63, 0.15);

  img {
    width: 2.25rem;
    height: 2.25rem;
    object-fit: contain;
  }

  svg {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

export const AgentName = styled.h3`
  font-weight: 800;
  font-size: 1.15rem; /* Slightly smaller */
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.color.text};
`;

export const AgentDescription = styled.p`
  font-size: 0.8125rem; /* Smaller font for high density */
  color: ${({ theme }) => theme.color.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  flex: 1;
  line-height: 1.4;
`;

export const LaunchButton = styled.button`
  width: 100%;
  padding: 0.7rem; /* Reduced padding */
  background: #c6893f;
  color: white;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #d4a373;
    box-shadow: 0 4px 12px rgba(198, 137, 63, 0.3);
  }

  svg {
    width: 1rem !important;
    height: 1rem !important;
  }
`;

export const AddAgentCard = styled.button`
  border: 2px dashed ${({ theme }) => theme.color.border};
  padding: ${({ theme }) => theme.spacing[5]};
  border-radius: ${({ theme }) => theme.radius.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.textSecondary};
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  min-height: 200px; /* Reduced from 250px */

  &:hover {
    border-color: #c6893f;
    color: #c6893f;
    background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.05)' : '#fffaf5'};
  }

  svg {
    width: 2.25rem; /* Smaller icon */
    height: 2.25rem;
    margin-bottom: ${({ theme }) => theme.spacing[2]};
  }

  span {
    font-weight: 800;
    font-size: 1rem;
  }
`;

// Modal Styles
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
`;

export const ModalUI = styled.div`
  background: ${({ theme }) => theme.color.surface};
  width: 900px;
  max-width: 95%;
  height: 90vh;
  border-radius: 24px;
  border: 1px solid #c6893f;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${fadeIn} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ModalHeader = styled.div`
  padding: 1.25rem 1.75rem; /* Tightened */
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.isDark ? 'rgba(198, 137, 63, 0.05)' : '#fffaf5'};

  h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 900;
    color: #c6893f;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

export const SidebarTabs = styled.div`
  width: 220px; /* Slimmer */
  border-right: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.02)' : '#fcfcfc'};
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
  gap: 0.4rem;
`;

export const TabItem = styled.button`
  padding: 0.65rem 1rem;
  border-radius: 10px;
  border: none;
  background: ${({ $active }) => $active ? '#c6893f' : 'transparent'};
  color: ${({ $active, theme }) => $active ? 'white' : theme.color.textSecondary};
  font-weight: 700;
  text-align: left;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    background: ${({ $active }) => $active ? '#c6893f' : 'rgba(0,0,0,0.05)'};
  }

  svg { width: 1.1rem !important; height: 1.1rem !important; }
`;

export const ConfigPane = styled.div`
  flex: 1;
  padding: 2rem; /* Tightened */
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.7rem;
    font-weight: 900;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  input, textarea, select {
    padding: 0.85rem; /* Tightened */
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ theme }) => theme.isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc'};
    color: ${({ theme }) => theme.color.text};
    font-size: 0.9rem;
    font-weight: 500;
    outline: none;
    transition: all 0.2s;

    &:focus {
      border-color: #c6893f;
      box-shadow: 0 0 0 3px rgba(198, 137, 63, 0.1);
    }
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }
`;

export const ModalFooter = styled.div`
  padding: 1.25rem 1.75rem;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  background: ${({ theme }) => theme.color.surface};
`;

export const Button = styled.button`
  padding: 0.65rem 1.75rem; /* Tightened */
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  
  ${({ $variant }) => $variant === 'primary' ? css`
    background: #c6893f;
    color: white;
    &:hover { background: #d4a373; transform: translateY(-1px); }
  ` : css`
    background: transparent;
    color: #64748b;
    border: 1px solid transparent;
    &:hover { background: rgba(0,0,0,0.05); }
  `}
`;

// Iframe View
export const IframeContainer = styled.div`
  background: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 9rem);
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
`;

export const IframeHeader = styled.div`
  padding: 0.65rem 1.25rem;
  background: ${({ theme }) => theme.color.surface};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .agent-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 900;
    color: #c6893f;
    font-size: 1rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
    }
  }
`;

export const StyledIframe = styled.iframe`
  flex: 1;
  border: none;
  width: 100%;
  height: 100%;
  min-height: 36rem;
`;

export const CustomAgentPlaceholder = styled.div`
  flex: 1;
  min-height: 36rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.textSecondary};
  text-align: center;

  svg {
    width: 4rem;
    height: 4rem;
    opacity: 0.25;
    margin-bottom: ${({ theme }) => theme.spacing[5]};
  }

  h3 {
    margin: 0 0 ${({ theme }) => theme.spacing[3]};
    color: ${({ theme }) => theme.color.text};
  }

  p {
    margin: 0;
  }
`;
