import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useThemeStore } from '../../app/stores/themeStore';
import { 
  IconDashboard, 
  IconIA, 
  IconCRM, 
  IconQuotes, 
  IconCalculator,
  IconBusiness, 
  IconCatalog,
  IconSettings,
  IconMail,
  IconFolder,
  IconSun,
  IconMoon
} from '../../shared/components/Icons';

const SidebarWrapper = styled.aside`
  width: ${({ theme }) => theme.layout.sidebarWidth};
  background:
    linear-gradient(180deg, ${({ theme }) => theme.color.primaryDark} 0%, ${({ theme }) => theme.color.primary} 100%);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: sticky;
  top: 0;
  box-shadow: 8px 0 30px rgba(0, 0, 0, 0.18);
  z-index: 100;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  padding: ${({ theme }) => theme.spacing[5]} ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[4]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[3]};
  flex-shrink: 0;
`;

const LogoImage = styled.img`
  width: 86px;
  height: 86px;
  border-radius: ${({ theme }) => theme.radius.md};
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.color.accent};
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
`;

const LogoText = styled.span`
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.textInverse};
  letter-spacing: 0.12em;
  margin-top: 0.25rem;
`;

const Nav = styled.nav`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 0;
  overflow-y: auto;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  padding: ${({ theme }) => theme.spacing[3]};
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  font-size: ${({ theme }) => theme.typography.size.sm};
  gap: ${({ theme }) => theme.spacing[3]};
  letter-spacing: 0.08em;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(255, 255, 255, 0.04);
  margin: 0;
  min-height: 3.1rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.color.textInverse};
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background: linear-gradient(135deg, ${({ theme }) => theme.color.accent} 0%, ${({ theme }) => theme.color.accentLight} 100%);
    color: ${({ theme }) => theme.color.textInverse};
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.18);
    border-color: transparent;
  }

  svg { 
    width: 1.35rem !important; 
    height: 1.35rem !important;
    flex-shrink: 0;
  }
`;

const Footer = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`;

const BottomActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[2]};
  gap: ${({ theme }) => theme.spacing[3]};
`;

const ThemeToggle = styled.button`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: ${({ theme }) => theme.color.accent};
    transform: scale(1.05);
  }

  svg { width: 1.25rem; height: 1.25rem; }
`;

const SettingsLink = styled(StyledNavLink)`
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  min-height: 2.5rem;
  padding: 0;
  background: rgba(255, 255, 255, 0.08);
  &.active {
    box-shadow: none;
  }
`;

const navItems = [
  { name: 'DASHBOARD', path: '/', icon: IconDashboard },
  { name: 'DOCUMENTOS', path: '/documents', icon: IconFolder },
  { name: 'EMAIL', path: '/email', icon: IconMail },
  { name: 'AGENTES / ASISTENTES', path: '/ai-hub', icon: IconIA },
  { name: 'CHATS', path: '/crm', icon: IconCRM },
  { name: 'PRESUPUESTOS', path: '/quotes', icon: IconQuotes },
  { name: 'COTIZADOR', path: '/cotizador', icon: IconCalculator },
  { name: 'NEGOCIO', path: '/business', icon: IconBusiness },
  { name: 'CATÁLOGO', path: '/catalog', icon: IconCatalog },
];

const Sidebar = () => {
  const { mode, toggleTheme } = useThemeStore();

  return (
    <SidebarWrapper>
      <LogoContainer>
        <LogoImage src="/assets/imponect_logo_white.jpg" alt="Imponect Logo" />
        <LogoText>IMPONECT</LogoText>
      </LogoContainer>
      
      <Nav>
        {navItems.map((item) => (
          <StyledNavLink
            key={item.name}
            to={item.path}
          >
            <item.icon />
            {item.name}
          </StyledNavLink>
        ))}
      </Nav>
      
      <Footer>
        <BottomActions>
          <ThemeToggle onClick={toggleTheme} title={mode === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}>
            {mode === 'dark' ? <IconSun /> : <IconMoon />}
          </ThemeToggle>
          <SettingsLink to="/settings" title="Configuración">
            <IconSettings style={{ width: '1.25rem', height: '1.25rem' }} />
          </SettingsLink>
        </BottomActions>
      </Footer>
    </SidebarWrapper>
  );
};

export default Sidebar;
