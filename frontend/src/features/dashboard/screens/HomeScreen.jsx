import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import {
  IconBell,
  IconBusiness,
  IconCalculator,
  IconCRM,
  IconDatabase,
  IconDownload,
  IconEye,
  IconMail,
  IconQuotes,
  IconRefresh,
  IconShield,
  IconWarning,
} from '../../../shared/components/Icons';
import { fetchQuotes } from '../../quotes/api/quotesApi';
import * as S from './HomeScreenStyled';

const moneyFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const compactMoneyFormatter = new Intl.NumberFormat('es-AR', {
  notation: 'compact',
  maximumFractionDigits: 1,
});

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

const parseAmount = (value) => {
  if (typeof value === 'number') return Number.isFinite(value) ? value : 0;
  if (!value) return 0;

  const normalized = String(value)
    .replace(/[^\d,.-]/g, '')
    .replace(/\./g, '')
    .replace(',', '.');

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeText = (value) => String(value || '').toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');

const getQuoteMode = (quote) => {
  const rawMode = normalizeText(quote?.type || quote?.transport_type || quote?.shipping_type || quote?.mode || quote?.quote_type);
  return rawMode.includes('aer') || rawMode === 'air' ? 'aereo' : 'maritimo';
};

const isCurrentMonth = (value) => {
  if (!value) return false;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;

  const now = new Date();
  return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
};

const statusMatches = (quote, needle) => normalizeText(quote?.status).includes(needle);

const commandAlerts = [
  {
    title: 'Presupuestos pendientes',
    description: 'Revisar propuestas que quedaron listas para enviar o retomar con cliente.',
    tone: 'warning',
  },
  {
    title: 'Caja para compras',
    description: 'Validar disponible antes de comprometer nuevas cargas consolidadas.',
    tone: 'accent',
  },
  {
    title: 'CRM multicanal',
    description: 'WhatsApp, Instagram y Facebook operan con reglas activas para no romper ventanas.',
    tone: 'success',
  },
];

const quickActions = [
  {
    title: 'Cotizar operación',
    hint: 'Marítimo, aéreo y comparación automática',
    path: '/cotizador',
    icon: IconCalculator,
  },
  {
    title: 'Presupuestos',
    hint: 'Ver, editar y descargar PDFs',
    path: '/quotes',
    icon: IconQuotes,
  },
  {
    title: 'CRM de chats',
    hint: 'Bandeja unificada por canal',
    path: '/crm',
    icon: IconCRM,
  },
  {
    title: 'Negocio',
    hint: 'Finanzas, marketing y reportes',
    path: '/business',
    icon: IconBusiness,
  },
];

const reportCards = [
  { title: 'Resumen comercial', meta: 'Ventas, margen y presupuestos', status: 'Listo', tone: 'success' },
  { title: 'Gasto marketing', meta: 'Canales, CPL y retorno estimado', status: 'Borrador', tone: 'warning' },
  { title: 'Caja disponible', meta: 'Capital para compra y operación', status: 'Pendiente', tone: 'accent' },
];

const integrationRows = [
  { name: 'WhatsApp Business', detail: 'Reglas 24h + templates', health: 'Blindado', tone: 'success' },
  { name: 'Instagram / Facebook', detail: 'Mensajería con ventana activa', health: 'Controlado', tone: 'success' },
  { name: 'Alibaba / 1688 / Made-in-China', detail: 'Integración diferida', health: 'En espera', tone: 'warning' },
  { name: 'Base presupuestos', detail: 'PDFs y borradores persistidos', health: 'Activa', tone: 'accent' },
];

const marketingRows = [
  { channel: 'Meta Ads', value: 68, spend: 'US$ 420', leads: 26 },
  { channel: 'Google', value: 48, spend: 'US$ 310', leads: 14 },
  { channel: 'Orgánico', value: 82, spend: 'US$ 0', leads: 19 },
];

export const HomeScreen = () => {
  const navigate = useNavigate();
  const {
    data: quotes = [],
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['quotes', 'dashboard'],
    queryFn: fetchQuotes,
    staleTime: 60000,
    retry: 1,
  });

  const currentDate = dateFormatter.format(new Date());

  const metrics = useMemo(() => {
    const currentMonthQuotes = quotes.filter(quote => isCurrentMonth(quote.generation_date || quote.created_at || quote.updated_at));
    const monthAmount = currentMonthQuotes.reduce((total, quote) => total + parseAmount(quote.amount), 0);
    const totalAmount = quotes.reduce((total, quote) => total + parseAmount(quote.amount), 0);
    const maritimeAmount = quotes
      .filter(quote => getQuoteMode(quote) === 'maritimo')
      .reduce((total, quote) => total + parseAmount(quote.amount), 0);
    const airAmount = quotes
      .filter(quote => getQuoteMode(quote) === 'aereo')
      .reduce((total, quote) => total + parseAmount(quote.amount), 0);

    const pending = quotes.filter(quote => statusMatches(quote, 'pendiente')).length;
    const drafts = quotes.filter(quote => statusMatches(quote, 'borrador')).length;
    const sent = quotes.filter(quote => statusMatches(quote, 'enviado')).length;
    const conversionBase = Math.max(sent + pending + drafts, 1);
    const sentRate = Math.round((sent / conversionBase) * 100);

    return {
      monthAmount,
      totalAmount,
      maritimeAmount,
      airAmount,
      pending,
      drafts,
      sent,
      sentRate,
      totalQuotes: quotes.length,
      currentMonthQuotes: currentMonthQuotes.length,
    };
  }, [quotes]);

  const pipelineRows = [
    { label: 'Presupuestos enviados', value: metrics.sentRate, detail: `${metrics.sent} enviados`, tone: 'success' },
    { label: 'Pendientes de envío', value: Math.min(metrics.pending * 18, 100), detail: `${metrics.pending} pendientes`, tone: 'warning' },
    { label: 'Marítimo acumulado', value: metrics.totalAmount ? Math.round((metrics.maritimeAmount / metrics.totalAmount) * 100) : 0, detail: moneyFormatter.format(metrics.maritimeAmount), tone: 'primary' },
    { label: 'Aéreo acumulado', value: metrics.totalAmount ? Math.round((metrics.airAmount / metrics.totalAmount) * 100) : 0, detail: moneyFormatter.format(metrics.airAmount), tone: 'accent' },
  ];

  const kpis = [
    {
      label: 'Presupuestos mes',
      value: metrics.monthAmount ? moneyFormatter.format(metrics.monthAmount) : 'US$ 0',
      helper: `${metrics.currentMonthQuotes} generados este mes`,
      icon: IconQuotes,
      tone: 'accent',
    },
    {
      label: 'Pendientes',
      value: String(metrics.pending),
      helper: `${metrics.drafts} borradores en preparación`,
      icon: IconBell,
      tone: 'warning',
    },
    {
      label: 'Marketing activo',
      value: 'US$ 730',
      helper: '59 leads estimados entre canales',
      icon: IconMail,
      tone: 'primary',
    },
    {
      label: 'Caja compras',
      value: 'US$ 18,4K',
      helper: 'Capital operativo disponible',
      icon: IconShield,
      tone: 'success',
    },
  ];

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.HeaderContent>
          <S.Eyebrow>
            <IconDashboardSignal />
            Centro de mando
          </S.Eyebrow>
          <S.MainTitle>Dashboard Imponect</S.MainTitle>
          <S.SubTitle>
            Torre de control para presupuestos, caja, marketing, chats y frentes operativos.
          </S.SubTitle>
        </S.HeaderContent>

        <S.HeaderPanel>
          <S.DateLabel>{currentDate}</S.DateLabel>
          <S.CommandStatus>
            <span />
            Sistema operativo
          </S.CommandStatus>
          <S.RefreshButton type="button" onClick={() => refetch()} disabled={isFetching}>
            <IconRefresh />
            {isFetching ? 'Actualizando' : 'Actualizar'}
          </S.RefreshButton>
        </S.HeaderPanel>
      </S.Header>

      {isError && (
        <S.ErrorBanner>
          <IconWarning />
          No se pudo sincronizar presupuestos. El resto del tablero queda disponible.
        </S.ErrorBanner>
      )}

      <S.KpiGrid>
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <S.KpiCard key={kpi.label} $tone={kpi.tone} $delay={`${index * 70}ms`}>
              <S.KpiIcon $tone={kpi.tone}>
                <Icon />
              </S.KpiIcon>
              <S.KpiLabel>{kpi.label}</S.KpiLabel>
              <S.KpiValue>{kpi.value}</S.KpiValue>
              <S.KpiHelper>{kpi.helper}</S.KpiHelper>
            </S.KpiCard>
          );
        })}
      </S.KpiGrid>

      <S.ControlGrid>
        <S.CommandPanel>
          <S.PanelHeader>
            <div>
              <S.PanelTitle>Prioridad táctica</S.PanelTitle>
              <S.PanelSubtitle>Frentes que conviene revisar primero</S.PanelSubtitle>
            </div>
            <S.PanelBadge>Hoy</S.PanelBadge>
          </S.PanelHeader>

          <S.AlertList>
            {commandAlerts.map(alert => (
              <S.AlertItem key={alert.title} $tone={alert.tone}>
                <S.AlertIcon $tone={alert.tone}>
                  <IconWarning />
                </S.AlertIcon>
                <div>
                  <strong>{alert.title}</strong>
                  <p>{alert.description}</p>
                </div>
              </S.AlertItem>
            ))}
          </S.AlertList>
        </S.CommandPanel>

        <S.CommandPanel>
          <S.PanelHeader>
            <div>
              <S.PanelTitle>Pipeline comercial</S.PanelTitle>
              <S.PanelSubtitle>Presupuestos y mix de transporte</S.PanelSubtitle>
            </div>
            <S.PanelMetric>
              {compactMoneyFormatter.format(metrics.totalAmount || 0)}
              <small>USD total</small>
            </S.PanelMetric>
          </S.PanelHeader>

          <S.ProgressList>
            {pipelineRows.map(row => (
              <S.ProgressItem key={row.label}>
                <S.ProgressTop>
                  <span>{row.label}</span>
                  <strong>{row.detail}</strong>
                </S.ProgressTop>
                <S.ProgressTrack>
                  <S.ProgressFill $value={row.value} $tone={row.tone} />
                </S.ProgressTrack>
              </S.ProgressItem>
            ))}
          </S.ProgressList>
        </S.CommandPanel>

        <S.ActionPanel>
          <S.PanelHeader>
            <div>
              <S.PanelTitle>Acciones rápidas</S.PanelTitle>
              <S.PanelSubtitle>Entradas directas a los flujos clave</S.PanelSubtitle>
            </div>
          </S.PanelHeader>

          <S.ActionGrid>
            {quickActions.map(action => {
              const Icon = action.icon;
              return (
                <S.QuickAction key={action.title} type="button" onClick={() => navigate(action.path)}>
                  <Icon />
                  <span>
                    <strong>{action.title}</strong>
                    <small>{action.hint}</small>
                  </span>
                </S.QuickAction>
              );
            })}
          </S.ActionGrid>
        </S.ActionPanel>

        <S.CommandPanel>
          <S.PanelHeader>
            <div>
              <S.PanelTitle>Reportes</S.PanelTitle>
              <S.PanelSubtitle>Base para guardar y descargar análisis</S.PanelSubtitle>
            </div>
            <S.PanelAction type="button" onClick={() => navigate('/business?module=reports')}>
              <IconEye />
              Ver módulo
            </S.PanelAction>
          </S.PanelHeader>

          <S.ReportList>
            {reportCards.map(report => (
              <S.ReportItem key={report.title}>
                <S.ReportState $tone={report.tone}>{report.status}</S.ReportState>
                <div>
                  <strong>{report.title}</strong>
                  <span>{report.meta}</span>
                </div>
                <S.IconButton type="button" title="Descargar reporte">
                  <IconDownload />
                </S.IconButton>
              </S.ReportItem>
            ))}
          </S.ReportList>
        </S.CommandPanel>

        <S.CommandPanel>
          <S.PanelHeader>
            <div>
              <S.PanelTitle>Marketing y demanda</S.PanelTitle>
              <S.PanelSubtitle>Lectura rápida de canales activos</S.PanelSubtitle>
            </div>
          </S.PanelHeader>

          <S.ChannelList>
            {marketingRows.map(row => (
              <S.ChannelItem key={row.channel}>
                <S.ChannelInfo>
                  <strong>{row.channel}</strong>
                  <span>{row.spend} invertidos · {row.leads} leads</span>
                </S.ChannelInfo>
                <S.ChannelGauge>
                  <S.ChannelNeedle $value={row.value} />
                </S.ChannelGauge>
              </S.ChannelItem>
            ))}
          </S.ChannelList>
        </S.CommandPanel>

        <S.CommandPanel>
          <S.PanelHeader>
            <div>
              <S.PanelTitle>Integraciones</S.PanelTitle>
              <S.PanelSubtitle>Estado de canales y datos críticos</S.PanelSubtitle>
            </div>
            <S.DatabaseIcon>
              <IconDatabase />
            </S.DatabaseIcon>
          </S.PanelHeader>

          <S.IntegrationList>
            {integrationRows.map(row => (
              <S.IntegrationItem key={row.name}>
                <div>
                  <strong>{row.name}</strong>
                  <span>{row.detail}</span>
                </div>
                <S.HealthPill $tone={row.tone}>{row.health}</S.HealthPill>
              </S.IntegrationItem>
            ))}
          </S.IntegrationList>
        </S.CommandPanel>
      </S.ControlGrid>
    </S.ScreenWrapper>
  );
};

const IconDashboardSignal = () => (
  <S.SignalIcon aria-hidden="true">
    <span />
    <span />
    <span />
  </S.SignalIcon>
);
