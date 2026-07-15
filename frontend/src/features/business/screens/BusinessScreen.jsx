import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  IconBell,
  IconBusiness,
  IconCalculator,
  IconCRM,
  IconDashboard,
  IconDatabase,
  IconDownload,
  IconEye,
  IconMail,
  IconPlus,
  IconQuotes,
  IconSearch,
  IconShield,
  IconWarning,
} from '../../../shared/components/Icons';
import * as S from './BusinessScreenStyled';

const modules = [
  { id: 'overview', label: 'Comando', icon: IconDashboard, subtitle: 'Visión ejecutiva' },
  { id: 'finance', label: 'Finanzas', icon: IconBusiness, subtitle: 'Caja y presupuesto' },
  { id: 'marketing', label: 'Marketing', icon: IconMail, subtitle: 'Gasto y demanda' },
  { id: 'purchases', label: 'Compras', icon: IconCalculator, subtitle: 'Capital y proveedores' },
  { id: 'reports', label: 'Reportes', icon: IconDatabase, subtitle: 'Informes guardados' },
];

const commandKpis = [
  { label: 'Disponible compra', value: 'US$ 18.400', helper: 'Capital operativo', tone: 'success' },
  { label: 'Marketing mes', value: 'US$ 730', helper: 'Meta + Google', tone: 'accent' },
  { label: 'Presupuestos activos', value: '17', helper: '5 pendientes', tone: 'primary' },
  { label: 'Alertas negocio', value: '3', helper: '2 de prioridad alta', tone: 'warning' },
];

const commandRows = [
  { area: 'Presupuestos', owner: 'Nico', objective: 'Convertir propuestas pendientes', status: 'En curso', priority: 'Alta' },
  { area: 'Marketing', owner: 'Diego', objective: 'Controlar CPL y leads calificados', status: 'Controlado', priority: 'Media' },
  { area: 'Compras', owner: 'Alan', objective: 'Reservar caja para carga consolidada', status: 'Riesgo bajo', priority: 'Alta' },
  { area: 'CRM', owner: 'Equipo', objective: 'Responder ventanas activas por canal', status: 'Operativo', priority: 'Media' },
];

const financeCards = [
  { label: 'Caja disponible', value: 'US$ 18.400', detail: 'Saldo operativo para compras', valueTone: 'success' },
  { label: 'Comprometido', value: 'US$ 9.850', detail: 'Pagos y despachos previstos', valueTone: 'warning' },
  { label: 'Libre estimado', value: 'US$ 8.550', detail: 'Después de compromisos', valueTone: 'accent' },
];

const financeRows = [
  { concept: 'Capital para compra', amount: 'US$ 12.000', owner: 'Founders', status: 'Aprobado', due: 'Semana actual' },
  { concept: 'Marketing performance', amount: 'US$ 730', owner: 'Comercial', status: 'En control', due: 'Mensual' },
  { concept: 'Despachos / aduana', amount: 'US$ 2.150', owner: 'Operaciones', status: 'Pendiente', due: '7 días' },
  { concept: 'Reserva táctica', amount: 'US$ 3.520', owner: 'Dirección', status: 'Bloqueado', due: 'Disponible' },
];

const marketingRows = [
  { channel: 'Meta Ads', budget: 'US$ 420', leads: '26', cpl: 'US$ 16,15', quality: 74, status: 'Escalar' },
  { channel: 'Google Search', budget: 'US$ 310', leads: '14', cpl: 'US$ 22,14', quality: 58, status: 'Optimizar' },
  { channel: 'Orgánico', budget: 'US$ 0', leads: '19', cpl: 'US$ 0', quality: 86, status: 'Sostener' },
  { channel: 'Referidos', budget: 'US$ 0', leads: '7', cpl: 'US$ 0', quality: 92, status: 'Priorizar' },
];

const purchaseRows = [
  { supplier: 'Shenzhen Bright Packing', load: 'Cajas térmicas', cbm: '6,40', capital: 'US$ 4.860', status: 'Cotizando' },
  { supplier: 'Yiwu General Trade', load: 'Accesorios varios', cbm: '3,20', capital: 'US$ 2.180', status: 'Pendiente FOB' },
  { supplier: 'Ningbo Metal Works', load: 'Herramientas', cbm: '5,10', capital: 'US$ 6.300', status: 'Validación' },
  { supplier: 'Guangzhou Textile Co.', load: 'Textil liviano', cbm: '2,75', capital: 'US$ 1.920', status: 'Listo' },
];

const reportRows = [
  { name: 'Resumen comercial semanal', type: 'Ventas', owner: 'Nico', date: '14/07/2026', status: 'Listo' },
  { name: 'Marketing y demanda', type: 'Marketing', owner: 'Diego', date: '13/07/2026', status: 'Borrador' },
  { name: 'Caja para compras', type: 'Finanzas', owner: 'Alan', date: '12/07/2026', status: 'Pendiente' },
  { name: 'Operaciones críticas', type: 'Operación', owner: 'Equipo', date: '10/07/2026', status: 'Listo' },
];

const reportTypes = ['Comercial', 'Marketing', 'Finanzas', 'Compras'];

const normalize = value => String(value || '').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const filterRows = (rows, query) => {
  const normalizedQuery = normalize(query).trim();
  if (!normalizedQuery) return rows;

  return rows.filter(row => normalize(Object.values(row).join(' ')).includes(normalizedQuery));
};

export const BusinessScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const moduleParam = searchParams.get('module') || 'overview';
  const activeModule = modules.some(module => module.id === moduleParam) ? moduleParam : 'overview';
  const activeMeta = modules.find(module => module.id === activeModule) || modules[0];

  const filteredCommandRows = useMemo(() => filterRows(commandRows, search), [search]);
  const filteredFinanceRows = useMemo(() => filterRows(financeRows, search), [search]);
  const filteredMarketingRows = useMemo(() => filterRows(marketingRows, search), [search]);
  const filteredPurchaseRows = useMemo(() => filterRows(purchaseRows, search), [search]);
  const filteredReportRows = useMemo(() => filterRows(reportRows, search), [search]);

  const handleModuleChange = (moduleId) => {
    if (moduleId === 'overview') {
      setSearchParams({});
      return;
    }

    setSearchParams({ module: moduleId });
  };

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.HeaderText>
          <S.Eyebrow>
            <IconShield />
            Unidad de negocio
          </S.Eyebrow>
          <S.PageTitle>Negocio Imponect</S.PageTitle>
          <S.PageDescription>
            Área profunda para analizar caja, marketing, compras y reportes sin mezclarlo con la torre de control diaria.
          </S.PageDescription>
        </S.HeaderText>

        <S.HeaderActions>
          <S.SearchBox>
            <IconSearch />
            <input
              type="search"
              placeholder="Buscar en negocio"
              value={search}
              onChange={event => setSearch(event.target.value)}
            />
          </S.SearchBox>
          <S.CommandButton type="button">
            <IconPlus />
            Nuevo reporte
          </S.CommandButton>
        </S.HeaderActions>
      </S.Header>

      <S.ModuleRail>
        {modules.map(module => {
          const Icon = module.icon;
          const active = activeModule === module.id;

          return (
            <S.ModuleButton
              key={module.id}
              type="button"
              $active={active}
              onClick={() => handleModuleChange(module.id)}
            >
              <Icon />
              <span>
                <strong>{module.label}</strong>
                <small>{module.subtitle}</small>
              </span>
            </S.ModuleButton>
          );
        })}
      </S.ModuleRail>

      <S.ActiveModuleHeader>
        <div>
          <S.ActiveLabel>{activeMeta.label}</S.ActiveLabel>
          <S.ActiveTitle>{getModuleTitle(activeModule)}</S.ActiveTitle>
        </div>
        <S.LivePill>
          <span />
          Datos operativos
        </S.LivePill>
      </S.ActiveModuleHeader>

      {activeModule === 'overview' && <OverviewModule rows={filteredCommandRows} />}
      {activeModule === 'finance' && <FinanceModule rows={filteredFinanceRows} />}
      {activeModule === 'marketing' && <MarketingModule rows={filteredMarketingRows} />}
      {activeModule === 'purchases' && <PurchasesModule rows={filteredPurchaseRows} />}
      {activeModule === 'reports' && <ReportsModule rows={filteredReportRows} />}
    </S.ScreenWrapper>
  );
};

const getModuleTitle = (moduleId) => {
  if (moduleId === 'finance') return 'Caja, presupuesto y compromisos';
  if (moduleId === 'marketing') return 'Demanda, canales y retorno';
  if (moduleId === 'purchases') return 'Compras, proveedores y capital';
  if (moduleId === 'reports') return 'Reportes guardados y generación';
  return 'Lectura ejecutiva del negocio';
};

const OverviewModule = ({ rows }) => (
  <>
    <S.KpiGrid>
      {commandKpis.map(card => (
        <S.KpiCard key={card.label} $tone={card.tone}>
          <S.KpiLabel>{card.label}</S.KpiLabel>
          <S.KpiValue $tone={card.tone}>{card.value}</S.KpiValue>
          <S.KpiHelper>{card.helper}</S.KpiHelper>
        </S.KpiCard>
      ))}
    </S.KpiGrid>

    <S.ContentGrid>
      <S.Panel>
        <S.PanelHeader>
          <div>
            <S.PanelTitle>Frentes activos</S.PanelTitle>
            <S.PanelSubtitle>Responsables, objetivo y prioridad por área</S.PanelSubtitle>
          </div>
          <S.PanelChip>4 áreas</S.PanelChip>
        </S.PanelHeader>

        <S.TableWrap>
          <S.DataTable>
            <thead>
              <tr>
                <th>Área</th>
                <th>Responsable</th>
                <th>Objetivo</th>
                <th>Estado</th>
                <th>Prioridad</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={`${row.area}-${row.owner}`}>
                  <td>{row.area}</td>
                  <td>{row.owner}</td>
                  <td>{row.objective}</td>
                  <td><S.StatusBadge $status={row.status}>{row.status}</S.StatusBadge></td>
                  <td><S.PriorityBadge $priority={row.priority}>{row.priority}</S.PriorityBadge></td>
                </tr>
              ))}
            </tbody>
          </S.DataTable>
        </S.TableWrap>
      </S.Panel>

      <S.Panel>
        <S.PanelHeader>
          <div>
            <S.PanelTitle>Mapa de capacidad</S.PanelTitle>
            <S.PanelSubtitle>Lectura compacta para decidir en minutos</S.PanelSubtitle>
          </div>
        </S.PanelHeader>

        <S.ReadinessGrid>
          <S.ReadinessCard $tone="success">
            <IconShield />
            <strong>Operación controlada</strong>
            <span>CRM y presupuestos con reglas activas.</span>
          </S.ReadinessCard>
          <S.ReadinessCard $tone="accent">
            <IconQuotes />
            <strong>Conversión a vigilar</strong>
            <span>Empujar propuestas pendientes de envío.</span>
          </S.ReadinessCard>
          <S.ReadinessCard $tone="warning">
            <IconWarning />
            <strong>Caja sensible</strong>
            <span>Validar compras antes de comprometer carga.</span>
          </S.ReadinessCard>
        </S.ReadinessGrid>
      </S.Panel>
    </S.ContentGrid>
  </>
);

const FinanceModule = ({ rows }) => (
  <S.ContentStack>
    <S.FinanceGrid>
      {financeCards.map(card => (
        <S.FinanceCard key={card.label}>
          <span>{card.label}</span>
          <strong>{card.value}</strong>
          <small>{card.detail}</small>
        </S.FinanceCard>
      ))}
    </S.FinanceGrid>

    <S.ContentGrid>
      <S.Panel>
        <S.PanelHeader>
          <div>
            <S.PanelTitle>Distribución de caja</S.PanelTitle>
            <S.PanelSubtitle>Uso estimado para compras, operación y reserva</S.PanelSubtitle>
          </div>
          <S.PanelChip>USD</S.PanelChip>
        </S.PanelHeader>

        <S.AllocationList>
          <Allocation label="Compra" value={65} amount="US$ 12.000" tone="success" />
          <Allocation label="Operación" value={18} amount="US$ 3.330" tone="warning" />
          <Allocation label="Reserva" value={17} amount="US$ 3.070" tone="accent" />
        </S.AllocationList>
      </S.Panel>

      <S.Panel>
        <S.PanelHeader>
          <div>
            <S.PanelTitle>Compromisos</S.PanelTitle>
            <S.PanelSubtitle>Partidas financieras de corto plazo</S.PanelSubtitle>
          </div>
        </S.PanelHeader>

        <S.TableWrap>
          <S.DataTable>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Monto</th>
                <th>Responsable</th>
                <th>Estado</th>
                <th>Vence</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={`${row.concept}-${row.amount}`}>
                  <td>{row.concept}</td>
                  <td><strong>{row.amount}</strong></td>
                  <td>{row.owner}</td>
                  <td><S.StatusBadge $status={row.status}>{row.status}</S.StatusBadge></td>
                  <td>{row.due}</td>
                </tr>
              ))}
            </tbody>
          </S.DataTable>
        </S.TableWrap>
      </S.Panel>
    </S.ContentGrid>
  </S.ContentStack>
);

const MarketingModule = ({ rows }) => (
  <S.ContentStack>
    <S.Panel>
      <S.PanelHeader>
        <div>
          <S.PanelTitle>Canales de demanda</S.PanelTitle>
          <S.PanelSubtitle>Gasto, leads, CPL y calidad de cada fuente</S.PanelSubtitle>
        </div>
        <S.PanelAction type="button">
          <IconEye />
          Ver campañas
        </S.PanelAction>
      </S.PanelHeader>

      <S.ChannelGrid>
        {rows.map(row => (
          <S.ChannelCard key={row.channel}>
            <S.ChannelTop>
              <strong>{row.channel}</strong>
              <S.StatusBadge $status={row.status}>{row.status}</S.StatusBadge>
            </S.ChannelTop>
            <S.ChannelMetrics>
              <span>{row.budget}<small>Presupuesto</small></span>
              <span>{row.leads}<small>Leads</small></span>
              <span>{row.cpl}<small>CPL</small></span>
            </S.ChannelMetrics>
            <S.ProgressTrack>
              <S.ProgressFill $value={row.quality} $tone={row.quality > 80 ? 'success' : row.quality > 65 ? 'accent' : 'warning'} />
            </S.ProgressTrack>
          </S.ChannelCard>
        ))}
      </S.ChannelGrid>
    </S.Panel>
  </S.ContentStack>
);

const PurchasesModule = ({ rows }) => (
  <S.ContentGrid>
    <S.Panel>
      <S.PanelHeader>
        <div>
          <S.PanelTitle>Compras en análisis</S.PanelTitle>
          <S.PanelSubtitle>Proveedor, carga, CBM y capital requerido</S.PanelSubtitle>
        </div>
        <S.PanelAction type="button">
          <IconCalculator />
          Cotizar
        </S.PanelAction>
      </S.PanelHeader>

      <S.TableWrap>
        <S.DataTable>
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Carga</th>
              <th>CBM</th>
              <th>Capital</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={`${row.supplier}-${row.load}`}>
                <td>{row.supplier}</td>
                <td>{row.load}</td>
                <td>{row.cbm}</td>
                <td><strong>{row.capital}</strong></td>
                <td><S.StatusBadge $status={row.status}>{row.status}</S.StatusBadge></td>
              </tr>
            ))}
          </tbody>
        </S.DataTable>
      </S.TableWrap>
    </S.Panel>

    <S.Panel>
      <S.PanelHeader>
        <div>
          <S.PanelTitle>Riesgo de compra</S.PanelTitle>
          <S.PanelSubtitle>Checklist antes de confirmar proveedor</S.PanelSubtitle>
        </div>
      </S.PanelHeader>

      <S.CheckList>
        <S.CheckItem $done>
          <IconShield />
          <span>Proveedor validado comercialmente</span>
        </S.CheckItem>
        <S.CheckItem $done>
          <IconQuotes />
          <span>Costeo con marítimo y aéreo comparado</span>
        </S.CheckItem>
        <S.CheckItem>
          <IconBell />
          <span>Confirmar plazo de producción y entrega</span>
        </S.CheckItem>
        <S.CheckItem>
          <IconCRM />
          <span>Definir responsable de seguimiento</span>
        </S.CheckItem>
      </S.CheckList>
    </S.Panel>
  </S.ContentGrid>
);

const ReportsModule = ({ rows }) => (
  <S.ContentGrid>
    <S.Panel>
      <S.PanelHeader>
        <div>
          <S.PanelTitle>Generador de reportes</S.PanelTitle>
          <S.PanelSubtitle>Preparado para guardar análisis y descargarlos en PDF</S.PanelSubtitle>
        </div>
      </S.PanelHeader>

      <S.ReportBuilder>
        <S.BuilderGroup>
          <strong>Tipo de reporte</strong>
          <S.TypeGrid>
            {reportTypes.map(type => (
              <S.TypeButton key={type} type="button">
                {type}
              </S.TypeButton>
            ))}
          </S.TypeGrid>
        </S.BuilderGroup>
        <S.BuilderGroup>
          <strong>Contenido</strong>
          <S.BuilderPreview>
            <IconDatabase />
            <span>Presupuestos, marketing, caja y compras quedan listos para persistencia.</span>
          </S.BuilderPreview>
        </S.BuilderGroup>
        <S.CommandButton type="button">
          <IconPlus />
          Guardar reporte
        </S.CommandButton>
      </S.ReportBuilder>
    </S.Panel>

    <S.Panel>
      <S.PanelHeader>
        <div>
          <S.PanelTitle>Reportes guardados</S.PanelTitle>
          <S.PanelSubtitle>Historial para consulta y descarga</S.PanelSubtitle>
        </div>
      </S.PanelHeader>

      <S.TableWrap>
        <S.DataTable>
          <thead>
            <tr>
              <th>Reporte</th>
              <th>Tipo</th>
              <th>Responsable</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={`${row.name}-${row.date}`}>
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td>{row.owner}</td>
                <td>{row.date}</td>
                <td><S.StatusBadge $status={row.status}>{row.status}</S.StatusBadge></td>
                <td>
                  <S.RowActions>
                    <S.IconAction type="button" title="Ver reporte">
                      <IconEye />
                    </S.IconAction>
                    <S.IconAction type="button" title="Descargar reporte">
                      <IconDownload />
                    </S.IconAction>
                  </S.RowActions>
                </td>
              </tr>
            ))}
          </tbody>
        </S.DataTable>
      </S.TableWrap>
    </S.Panel>
  </S.ContentGrid>
);

const Allocation = ({ label, value, amount, tone }) => (
  <S.AllocationItem>
    <S.AllocationTop>
      <span>{label}</span>
      <strong>{amount}</strong>
    </S.AllocationTop>
    <S.ProgressTrack>
      <S.ProgressFill $value={value} $tone={tone} />
    </S.ProgressTrack>
  </S.AllocationItem>
);
