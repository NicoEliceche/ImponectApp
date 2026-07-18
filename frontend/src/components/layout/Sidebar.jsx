import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useThemeStore } from '../../app/stores/themeStore';
import { publicAsset } from '../../shared/utils/urls';
import { preloadRoute } from '../../shared/utils/routePreload';
import { 
  IconDashboard, 
  IconCRM, 
  IconQuotes, 
  IconCalculator,
  IconBusiness, 
  IconCatalog,
  IconSettings,
  IconMail,
  IconFolder,
  IconSun,
  IconMoon,
  IconDoubleChevronLeft,
  IconDoubleChevronRight
} from '../../shared/components/Icons';

const sidebarSweep = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

const SidebarWrapper = styled.aside`
  position: sticky;
  width: ${({ $collapsed, theme }) => ($collapsed ? '5rem' : theme.layout.sidebarWidth)};
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(180deg, rgba(198, 137, 63, 0.14) 1px, transparent 1px),
    linear-gradient(180deg, ${({ theme }) => theme.color.primaryDark} 0%, ${({ theme }) => theme.color.primary} 100%);
  background-size: 100% 100%, 100% 42px, 100% 100%;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0;
  box-shadow: 8px 0 30px rgba(0, 0, 0, 0.18);
  z-index: 100;
  overflow: hidden;
  transition: width 0.24s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, transparent, rgba(198, 137, 63, 0.2), transparent);
    animation: ${sidebarSweep} 7s ease-in-out infinite;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  padding: ${({ $collapsed, theme }) => (
    $collapsed
      ? `${theme.spacing[5]} ${theme.spacing[3]} ${theme.spacing[3]}`
      : `${theme.spacing[5]} ${theme.spacing[4]} ${theme.spacing[4]}`
  )};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ $collapsed, theme }) => ($collapsed ? theme.spacing[2] : theme.spacing[3])};
  flex-shrink: 0;
  transition: padding 0.24s ease, gap 0.24s ease;
`;

const LogoImage = styled.img`
  width: ${({ $collapsed }) => ($collapsed ? '2.75rem' : '86px')};
  height: ${({ $collapsed }) => ($collapsed ? '2.75rem' : '86px')};
  border-radius: ${({ theme }) => theme.radius.md};
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.color.accent};
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22), 0 0 18px rgba(198, 137, 63, 0.22);
  transition: width 0.24s ease, height 0.24s ease;
`;

const LogoText = styled.span`
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline')};
  font-size: ${({ theme }) => theme.typography.size.lg};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  color: ${({ theme }) => theme.color.textInverse};
  letter-spacing: 0.12em;
  margin-top: 0.25rem;
`;

const CollapseButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(180deg, ${({ theme }) => theme.color.primary} 0%, ${({ theme }) => theme.color.primaryDark} 100%);
  color: ${({ theme }) => theme.color.textInverse};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: linear-gradient(180deg, ${({ theme }) => theme.color.primaryLight} 0%, ${({ theme }) => theme.color.primary} 100%);
    border-color: ${({ theme }) => theme.color.accent};
    transform: scale(1.05);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const HeaderCollapseButton = styled(CollapseButton)`
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline-flex')};
  position: absolute;
  top: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[3]};
  z-index: 1;
`;

const Nav = styled.nav`
  flex: 1;
  padding: ${({ $collapsed, theme }) => ($collapsed ? `${theme.spacing[3]} ${theme.spacing[2]}` : theme.spacing[3])};
  display: flex;
  flex-direction: column;
  align-items: ${({ $collapsed }) => ($collapsed ? 'center' : 'stretch')};
  gap: ${({ theme }) => theme.spacing[2]};
  min-height: 0;
  overflow-y: auto;
  transition: padding 0.24s ease;
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  text-align: left;
  padding: ${({ $collapsed, theme }) => ($collapsed ? 0 : theme.spacing[3])};
  color: rgba(255, 255, 255, 0.72);
  text-decoration: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: ${({ theme }) => theme.typography.weight.extrabold};
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  font-size: ${({ theme }) => theme.typography.size.sm};
  gap: ${({ theme }) => theme.spacing[3]};
  letter-spacing: 0.08em;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, ${({ theme }) => theme.color.primary} 0%, ${({ theme }) => theme.color.primaryDark} 100%);
  margin: 0;
  min-height: 3.1rem;
  width: ${({ $collapsed }) => ($collapsed ? '3.1rem' : '100%')};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(198, 137, 63, 0.18), transparent);
    transform: translateX(-120%);
    transition: transform 0.32s ease;
  }

  &:hover {
    background: linear-gradient(180deg, ${({ theme }) => theme.color.primaryLight} 0%, ${({ theme }) => theme.color.primary} 100%);
    color: ${({ theme }) => theme.color.textInverse};
    transform: translateY(-1px);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      transform: translateX(120%);
    }
  }

  &.active {
    background: linear-gradient(135deg, ${({ theme }) => theme.color.accent} 0%, ${({ theme }) => theme.color.accentLight} 100%);
    color: ${({ theme }) => theme.color.textInverse};
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.18), 0 0 18px rgba(198, 137, 63, 0.25);
    border-color: transparent;
  }

  svg { 
    width: 1.35rem !important; 
    height: 1.35rem !important;
    flex-shrink: 0;
  }
`;

const NavLabel = styled.span`
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline')};
  min-width: 0;
  white-space: nowrap;
`;

const NavTextIcon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  flex: 0 0 1.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  font-size: 1.05rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1;
`;

const SplitNavLabel = styled.span`
  display: ${({ $collapsed }) => ($collapsed ? 'none' : 'inline-flex')};
  align-items: center;
  min-width: 0;
`;

const SplitNavText = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.08rem;
  min-width: 0;
  line-height: 1.05;

  span {
    white-space: nowrap;
  }
`;

const Footer = styled.div`
  padding: ${({ $collapsed, theme }) => ($collapsed ? `${theme.spacing[3]} ${theme.spacing[2]}` : theme.spacing[4])};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
  transition: padding 0.24s ease;
`;

const BottomActions = styled.div`
  display: grid;
  grid-template-columns: ${({ $collapsed }) => ($collapsed ? '1fr' : 'repeat(3, 2.5rem)')};
  align-items: center;
  justify-items: center;
  justify-content: center;
  padding: ${({ $collapsed, theme }) => ($collapsed ? 0 : `0 ${theme.spacing[1]}`)};
  gap: ${({ $collapsed, theme }) => ($collapsed ? theme.spacing[2] : theme.spacing[3])};
  transition: gap 0.24s ease, padding 0.24s ease;
`;

const ThemeToggle = styled.button`
  background: linear-gradient(180deg, ${({ theme }) => theme.color.primary} 0%, ${({ theme }) => theme.color.primaryDark} 100%);
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
    background: linear-gradient(180deg, ${({ theme }) => theme.color.primaryLight} 0%, ${({ theme }) => theme.color.primary} 100%);
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
  background: linear-gradient(180deg, ${({ theme }) => theme.color.primary} 0%, ${({ theme }) => theme.color.primaryDark} 100%);
  &.active {
    box-shadow: none;
  }

  svg {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
`;

const navItems = [
  { name: 'DASHBOARD', path: '/', icon: IconDashboard },
  { name: 'CHATS', path: '/crm', icon: IconCRM },
  { name: 'EMAIL', path: '/email', icon: IconMail },
  { name: 'COTIZADOR', path: '/cotizador', icon: IconCalculator },
  { name: 'PRESUPUESTOS', path: '/quotes', icon: IconQuotes },
  { name: 'DOCUMENTOS', path: '/documents', icon: IconFolder },
  {
    name: 'AGENTES / ASISTENTES',
    path: '/ai-hub',
    textIcon: 'IA',
    labelRows: ['AGENTES', 'ASISTENTES'],
  },
  { name: 'NEGOCIO', path: '/business', icon: IconBusiness },
  { name: 'CATÁLOGO', path: '/catalog', icon: IconCatalog },
];

const warmRoute = (path) => {
  preloadRoute(path).catch(() => undefined);
};

const Sidebar = () => {
  const { mode, toggleTheme } = useThemeStore();
  const [isCollapsed, setIsCollapsed] = useState(() => localStorage.getItem('sidebar-collapsed') === 'true');
  const ToggleIcon = isCollapsed ? IconDoubleChevronRight : IconDoubleChevronLeft;

  const toggleSidebar = () => {
    setIsCollapsed((current) => {
      const next = !current;
      localStorage.setItem('sidebar-collapsed', String(next));
      return next;
    });
  };

  return (
    <SidebarWrapper $collapsed={isCollapsed}>
      <LogoContainer $collapsed={isCollapsed}>
        <HeaderCollapseButton
          type="button"
          onClick={toggleSidebar}
          $collapsed={isCollapsed}
          title={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
          aria-label={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
        >
          <ToggleIcon />
        </HeaderCollapseButton>
        <LogoImage $collapsed={isCollapsed} src={publicAsset('assets/imponect_logo_white.jpg')} alt="Imponect Logo" />
        <LogoText $collapsed={isCollapsed}>IMPONECT</LogoText>
      </LogoContainer>
      
      <Nav $collapsed={isCollapsed}>
        {navItems.map((item) => (
          <StyledNavLink
            key={item.name}
            to={item.path}
            $collapsed={isCollapsed}
            title={isCollapsed ? item.name : undefined}
            aria-label={item.name}
            onMouseEnter={() => warmRoute(item.path)}
            onFocus={() => warmRoute(item.path)}
            onTouchStart={() => warmRoute(item.path)}
          >
            {item.textIcon ? <NavTextIcon>{item.textIcon}</NavTextIcon> : <item.icon />}
            {item.labelRows ? (
              <SplitNavLabel $collapsed={isCollapsed}>
                <SplitNavText>
                  {item.labelRows.map(row => <span key={row}>{row}</span>)}
                </SplitNavText>
              </SplitNavLabel>
            ) : (
              <NavLabel $collapsed={isCollapsed}>{item.name}</NavLabel>
            )}
          </StyledNavLink>
        ))}
      </Nav>
      
      <Footer $collapsed={isCollapsed}>
        <BottomActions $collapsed={isCollapsed}>
          <ThemeToggle onClick={toggleTheme} title={mode === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}>
            {mode === 'dark' ? <IconSun /> : <IconMoon />}
          </ThemeToggle>
          <SettingsLink to="/settings" title="Configuración" $collapsed={isCollapsed} aria-label="Configuración">
            <IconSettings />
          </SettingsLink>
          <CollapseButton
            type="button"
            onClick={toggleSidebar}
            title={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
            aria-label={isCollapsed ? 'Expandir menú' : 'Colapsar menú'}
          >
            <ToggleIcon />
          </CollapseButton>
        </BottomActions>
      </Footer>
    </SidebarWrapper>
  );
};

export default Sidebar;
