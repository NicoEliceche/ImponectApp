import React, { useMemo, useState } from 'react';
import {
  IconBell,
  IconBusiness,
  IconCRM,
  IconDashboard,
  IconMail,
  IconQuotes,
  IconSearch,
  IconSettings,
} from '../../../shared/components/Icons';
import * as S from './BusinessScreenStyled';

const modules = [
  { id: 'dashboard', label: 'Dashboard', icon: IconDashboard, subtitle: 'Resumen ejecutivo' },
  { id: 'sourcing', label: 'Sourcing', icon: IconBusiness, subtitle: 'Proveedores y compras' },
  { id: 'logistics', label: 'Logística', icon: IconQuotes, subtitle: 'Despachos y tránsito' },
  { id: 'inventory', label: 'Inventario', icon: IconMail, subtitle: 'Stock y costos' },
  { id: 'clients', label: 'Clientes', icon: IconCRM, subtitle: 'CRM básico' },
];

const kpiCards = [
  { label: 'Costos reducidos', value: '18.4%', trend: '+3.2%', direction: 'up', tone: 'success' },
  { label: 'Operaciones en tránsito', value: '24', trend: '+5', direction: 'up', tone: 'primary' },
  { label: 'Sourcing abiertas', value: '12', trend: '-2', direction: 'down', tone: 'warning' },
  { label: 'Alertas críticas', value: '4', trend: '+1', direction: 'up', tone: 'danger' },
];

const monthlySeries = [
  { month: 'Ene', value: 54 },
  { month: 'Feb', value: 58 },
  { month: 'Mar', value: 63 },
  { month: 'Abr', value: 61 },
  { month: 'May', value: 68 },
  { month: 'Jun', value: 74 },
];

const statusBreakdown = [
  { label: 'Alta mar', value: 50, tone: 'primary' },
  { label: 'Aduana', value: 30, tone: 'accent' },
  { label: 'Entregado', value: 20, tone: 'success' },
];

const operations = [
  { id: 'OP-402', client: 'Breen', stage: 'Alta mar', owner: 'Nico', status: 'En tránsito', due: '2 días', priority: 'Alta' },
  { id: 'OP-389', client: 'Mayra Design', stage: 'Aduana', owner: 'Alan', status: 'Revisión aduanera', due: 'Hoy', priority: 'Crítica' },
  { id: 'OP-384', client: 'Shenzhen Bright Packing', stage: 'Sourcing', owner: 'Sofi', status: 'Cotización pendiente', due: '4 días', priority: 'Media' },
  { id: 'OP-377', client: 'Transportes Sur', stage: 'Entregado', owner: 'Nico', status: 'Cerrado', due: 'Ayer', priority: 'Baja' },
  { id: 'OP-364', client: 'IMPONECT Founders', stage: 'Inventario', owner: 'Alan', status: 'Stock ajustado', due: '7 días', priority: 'Media' },
];

const statusOptions = ['Todas', 'En tránsito', 'Revisión aduanera', 'Cotización pendiente', 'Cerrado', 'Stock ajustado'];

const quickCards = [
  { title: 'Sourcing', value: '8 proveedores', hint: '3 con validación completa' },
  { title: 'Logística', value: '14 envíos', hint: '6 con ETA en 72 hs' },
  { title: 'Inventario', value: '92% cobertura', hint: 'Rotación saludable' },
  { title: 'Clientes', value: '31 cuentas', hint: '12 activas este mes' },
];

const getTrendIcon = (direction) => (direction === 'up' ? '↗' : '↘');

export const BusinessScreen = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todas');

  const activeModuleMeta = modules.find(module => module.id === activeModule) || modules[0];

  const filteredOperations = useMemo(() => {
    const query = search.toLowerCase().trim();

    return operations.filter(operation => {
      const matchesSearch = !query || [
        operation.id,
        operation.client,
        operation.stage,
        operation.owner,
        operation.status,
      ].some(value => value.toLowerCase().includes(query));

      const matchesStatus = statusFilter === 'Todas' || operation.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const chartMax = Math.max(...monthlySeries.map(point => point.value));
  return (
    <S.ScreenWrapper $collapsed={collapsed}>
      <S.InternalSidebar $collapsed={collapsed}>
        <S.SidebarTop>
          <S.BrandMark>
            <S.BrandIcon>
              <IconBusiness />
            </S.BrandIcon>
            {!collapsed && (
              <div>
                <S.BrandName>IMPONECT</S.BrandName>
                <S.BrandSubtitle>Business Control</S.BrandSubtitle>
              </div>
            )}
          </S.BrandMark>
        </S.SidebarTop>

        <S.SidebarNav>
          {modules.map(module => {
            const Icon = module.icon;
            const active = activeModule === module.id;

            return (
              <S.SidebarItem
                key={module.id}
                type="button"
                $active={active}
                onClick={() => setActiveModule(module.id)}
                title={module.label}
              >
                <Icon />
                {!collapsed && (
                  <span>
                    <strong>{module.label}</strong>
                    <small>{module.subtitle}</small>
                  </span>
                )}
              </S.SidebarItem>
            );
          })}
        </S.SidebarNav>

        <S.SidebarFooter>
          <S.SidebarItem type="button" title="Configuración">
            <IconSettings />
            {!collapsed && <span><strong>Configuración</strong><small>Sistema y soporte</small></span>}
          </S.SidebarItem>
          <S.SidebarItem type="button" title="Soporte">
            <IconBell />
            {!collapsed && <span><strong>Soporte</strong><small>Alertas y ayuda</small></span>}
          </S.SidebarItem>
          <S.CollapseButton type="button" onClick={() => setCollapsed(current => !current)}>
            <span>{collapsed ? '›' : '‹'}</span>
          </S.CollapseButton>
        </S.SidebarFooter>
      </S.InternalSidebar>

      <S.MainArea>
        <S.TopBar>
          <S.Breadcrumbs>
            <span>Negocio</span>
            <span>•</span>
            <strong>{activeModuleMeta.label}</strong>
          </S.Breadcrumbs>

          <S.SearchBox>
            <IconSearch />
            <input
              type="search"
              placeholder="Buscar tracking, cliente o proveedor"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </S.SearchBox>

          <S.TopActions>
            <S.IconAction type="button" title="Notificaciones">
              <IconBell />
              <S.ActionBadge>3</S.ActionBadge>
            </S.IconAction>
            <S.ProfileButton type="button" title="Perfil">
              NE
            </S.ProfileButton>
          </S.TopActions>
        </S.TopBar>

        <S.PageHeader>
          <div>
            <S.PageTitle>Gestión de Negocio</S.PageTitle>
            <S.PageDescription>
              Control de sourcing, logística, inventario y cartera de clientes en un solo centro de mando.
            </S.PageDescription>
          </div>
          <S.PageMeta>
            <strong>{activeModuleMeta.label}</strong>
            <span>{activeModuleMeta.subtitle}</span>
          </S.PageMeta>
        </S.PageHeader>

        <S.KpiGrid>
          {kpiCards.map(card => (
            <S.KpiCard key={card.label}>
              <S.KpiLabel>{card.label}</S.KpiLabel>
              <S.KpiValue>{card.value}</S.KpiValue>
              <S.KpiTrend $tone={card.tone}>
                <span>{getTrendIcon(card.direction)}</span>
                {card.trend} vs. mes anterior
              </S.KpiTrend>
            </S.KpiCard>
          ))}
        </S.KpiGrid>

        <S.ModuleStrip>
          {quickCards.map(card => (
            <S.ModuleCard key={card.title}>
              <S.ModuleLabel>{card.title}</S.ModuleLabel>
              <S.ModuleValue>{card.value}</S.ModuleValue>
              <S.ModuleHint>{card.hint}</S.ModuleHint>
            </S.ModuleCard>
          ))}
        </S.ModuleStrip>

        <S.ChartGrid>
          <S.ChartPanel>
            <S.PanelHeader>
              <div>
                <S.PanelTitle>Tendencia operativa</S.PanelTitle>
                <S.PanelSubtitle>Últimos 6 meses de evolución</S.PanelSubtitle>
              </div>
              <S.PanelChip>Actualizado hace 5 min</S.PanelChip>
            </S.PanelHeader>

            <S.LineChart aria-label="Evolución de operaciones">
              <S.LineChartGrid>
                {[80, 60, 40, 20, 0].map(level => (
                  <span key={level}>{level}%</span>
                ))}
              </S.LineChartGrid>

              <S.LineChartArea>
                {monthlySeries.map((point, index) => (
                  <S.LinePoint
                    key={point.month}
                    $height={Math.max((point.value / chartMax) * 100, 22)}
                    $delay={`${index * 90}ms`}
                  >
                    <span>{point.value}</span>
                    <strong />
                    <small>{point.month}</small>
                  </S.LinePoint>
                ))}
              </S.LineChartArea>
            </S.LineChart>
          </S.ChartPanel>

          <S.SideChartPanel>
            <S.PanelHeader>
              <div>
                <S.PanelTitle>Estado de envíos</S.PanelTitle>
                <S.PanelSubtitle>Distribución actual de la cartera</S.PanelSubtitle>
              </div>
            </S.PanelHeader>

            <S.DonutWrap>
              <S.DonutChart $accentA={statusBreakdown[0].value} $accentB={statusBreakdown[1].value} $accentC={statusBreakdown[2].value}>
                <div>
                  <strong>100%</strong>
                  <span>operaciones</span>
                </div>
              </S.DonutChart>
            </S.DonutWrap>

            <S.BreakdownList>
              {statusBreakdown.map(item => (
                <S.BreakdownItem key={item.label}>
                  <span>
                    <S.Dot $tone={item.tone} />
                    {item.label}
                  </span>
                  <strong>{item.value}%</strong>
                </S.BreakdownItem>
              ))}
            </S.BreakdownList>
          </S.SideChartPanel>
        </S.ChartGrid>

        <S.TablePanel>
          <S.PanelHeader>
            <div>
              <S.PanelTitle>Gestiones recientes</S.PanelTitle>
              <S.PanelSubtitle>Operaciones que requieren revisión o acción inmediata</S.PanelSubtitle>
            </div>

            <S.FiltersRow>
              {statusOptions.map(option => (
                <S.FilterButton
                  key={option}
                  type="button"
                  $active={statusFilter === option}
                  onClick={() => setStatusFilter(option)}
                >
                  {option}
                </S.FilterButton>
              ))}
            </S.FiltersRow>
          </S.PanelHeader>

          <S.TableSearch>
            <IconSearch />
            <input
              type="search"
              placeholder="Filtrar por operación, cliente, estado o responsable"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </S.TableSearch>

          <S.DataTable>
            <thead>
              <tr>
                <th>Orden</th>
                <th>Cliente / Proveedor</th>
                <th>Etapa</th>
                <th>Responsable</th>
                <th>Estado</th>
                <th>Vencimiento</th>
                <th>Prioridad</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {filteredOperations.map(operation => (
                <tr key={operation.id}>
                  <td>{operation.id}</td>
                  <td>
                    <strong>{operation.client}</strong>
                  </td>
                  <td>{operation.stage}</td>
                  <td>{operation.owner}</td>
                  <td>
                    <S.StatusBadge>{operation.status}</S.StatusBadge>
                  </td>
                  <td>{operation.due}</td>
                  <td>
                    <S.PriorityBadge $priority={operation.priority}>
                      {operation.priority}
                    </S.PriorityBadge>
                  </td>
                  <td>
                    <S.RowActions>
                      <S.ActionLink type="button">Ver detalles</S.ActionLink>
                      <S.ActionLink type="button">Contactar</S.ActionLink>
                    </S.RowActions>
                  </td>
                </tr>
              ))}
            </tbody>
          </S.DataTable>
        </S.TablePanel>
      </S.MainArea>
    </S.ScreenWrapper>
  );
};
