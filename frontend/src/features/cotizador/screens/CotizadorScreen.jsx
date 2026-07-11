import React, { useMemo, useState } from 'react';
import {
  IconCalculator,
  IconCheck,
  IconForward,
  IconPlane,
  IconPlus,
  IconRefresh,
  IconShip,
  IconTrash,
} from '../../../shared/components/Icons';
import {
  calculateQuote,
  createDefaultLoad,
  defaultQuoteSettings,
} from '../utils/cotizadorCalculations';
import * as S from './CotizadorScreenStyled';

const buildInitialLoads = () => [
  {
    ...createDefaultLoad(1),
    id: 'load-1',
  },
];

const fiscalDepositRows = [
  ['0 a 1 TON/CBM', 'USD 750'],
  ['1.01 a 2.99 TON/CBM', 'USD 800'],
  ['3 a 4.99 TON/CBM', 'USD 850'],
  ['5 a 7.99 TON/CBM', 'USD 855'],
  ['8 a 10 TON/CBM', 'USD 875'],
  ['Superior a 10 TON/CBM', 'USD 875 + USD 25 por excedente'],
];

const formatMoney = (value) => new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
}).format(value);

const formatNumber = (value, digits = 2) => new Intl.NumberFormat('es-AR', {
  maximumFractionDigits: digits,
  minimumFractionDigits: digits,
}).format(value);

const NumberField = ({ label, unit, value, onChange, step = '0.01', muted = false, placeholder }) => (
  <S.Field $muted={muted}>
    <label>{label}</label>
    <S.InputUnit>
      <span>{unit}</span>
      <input
        type="number"
        step={step}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
      />
    </S.InputUnit>
  </S.Field>
);

const TextField = ({ label, value, onChange }) => (
  <S.Field>
    <label>{label}</label>
    <S.TextInput
      type="text"
      value={value}
      onChange={event => onChange(event.target.value)}
    />
  </S.Field>
);

const SelectField = ({ label, unit, value, onChange, children }) => (
  <S.Field>
    <label>{label}</label>
    <S.SelectUnit>
      <span>{unit}</span>
      <select value={value} onChange={event => onChange(event.target.value)}>
        {children}
      </select>
    </S.SelectUnit>
  </S.Field>
);

const MetricCard = ({ label, value }) => (
  <S.MetricCard>
    <span>{label}</span>
    <strong>{value}</strong>
  </S.MetricCard>
);

const ResultRow = ({ label, value, emphasis = false }) => (
  <S.ResultRow $emphasis={emphasis}>
    <span>{label}</span>
    <strong>{formatMoney(value)}</strong>
  </S.ResultRow>
);

const QuoteGroup = ({ title, tone, rows }) => (
  <S.BreakdownGroup $tone={tone}>
    <S.GroupTitle>{title}</S.GroupTitle>
    <S.ResultRows>
      {rows.map(row => (
        <ResultRow key={row.label} {...row} />
      ))}
    </S.ResultRows>
  </S.BreakdownGroup>
);

const MethodCard = ({ icon, title, quote, winner }) => (
  <S.MethodCard $winner={winner}>
    <S.MethodHeader>
      <S.MethodIcon>{icon}</S.MethodIcon>
      <div>
        <S.MethodTitle>{title}</S.MethodTitle>
        <S.MethodMeta>{formatMoney(quote.freight)} de flete</S.MethodMeta>
      </div>
      {winner && (
        <S.WinnerBadge>
          <IconCheck />
          Mejor
        </S.WinnerBadge>
      )}
    </S.MethodHeader>
    <S.MethodRows>
      <ResultRow label="CIF" value={quote.cif} />
      <ResultRow label="Impuestos + gastos" value={quote.taxesCostsAndVat} />
      <ResultRow label="Envio terrestre c/IVA" value={quote.terrestrialFreightWithVat} />
      <ResultRow label="Total general" value={quote.grandTotal} emphasis />
    </S.MethodRows>
  </S.MethodCard>
);

const buildSeaGroups = (quote) => [
  {
    title: 'FOB, FLETE Y CIF',
    tone: 'base',
    rows: [
      { label: 'Valor FOB + Trade Assurance', value: quote.fobAdjusted },
      { label: 'Flete marítimo', value: quote.freight },
      { label: 'Seguro de carga', value: quote.cargoInsurance },
      { label: 'CIF', value: quote.cif, emphasis: true },
      { label: 'Gastos de origen', value: quote.originExpenses },
    ],
  },
  {
    title: 'IMPUESTOS',
    tone: 'tax',
    rows: [
      { label: 'Derecho de importación (DER)', value: quote.der },
      { label: 'Tasa estadística (TE)', value: quote.statisticRate },
      { label: 'IVA', value: quote.vat },
      { label: 'IVA adicional', value: quote.additionalVat },
      { label: 'Ingresos brutos (IIBB)', value: quote.grossIncome },
      { label: 'Impuesto a las ganancias', value: quote.incomeTax },
    ],
  },
  {
    title: 'GASTOS EN DESTINO',
    tone: 'destination',
    rows: [
      { label: 'Gastos en destino', value: quote.destinationExpenses },
      { label: 'Depósito fiscal', value: quote.fiscalDeposit },
      { label: 'Carga IMO', value: quote.imoCharge },
      { label: 'Honorarios despachante', value: quote.customsBroker },
      { label: 'Gestión COMEX y firma importadora', value: quote.managementFee },
      { label: 'Handling', value: quote.handling },
      { label: 'Consolidado', value: quote.consolidation },
    ],
  },
  {
    title: 'TOTALES',
    tone: 'total',
    rows: [
      { label: 'Total impuestos + gastos', value: quote.taxesAndCosts },
      { label: 'IVA de gastos', value: quote.destinationVat },
      { label: 'Total impuestos + IVA', value: quote.taxesCostsAndVat, emphasis: true },
      { label: 'Total final', value: quote.finalBeforeDelivery, emphasis: true },
      { label: 'Recuperable estimado', value: quote.recoverable },
      { label: 'Envío terrestre', value: quote.terrestrialFreight },
      { label: 'Envío terrestre c/IVA', value: quote.terrestrialFreightWithVat },
      { label: 'Total general', value: quote.grandTotal, emphasis: true },
    ],
  },
];

export const CotizadorScreen = () => {
  const [loads, setLoads] = useState(buildInitialLoads);
  const [settings, setSettings] = useState({ ...defaultQuoteSettings });
  const [activeTab, setActiveTab] = useState('maritime');
  const draftQuote = useMemo(() => calculateQuote({ loads, settings }), [loads, settings]);
  const [quoteResult, setQuoteResult] = useState(() => calculateQuote({
    loads: buildInitialLoads(),
    settings: defaultQuoteSettings,
  }));

  const updateLoad = (id, field, value) => {
    setLoads(currentLoads => currentLoads.map(load => (
      load.id === id ? { ...load, [field]: value } : load
    )));
  };

  const addLoad = () => {
    setLoads(currentLoads => [
      ...currentLoads,
      {
        ...createDefaultLoad(currentLoads.length + 1),
        id: `load-${Date.now()}`,
      },
    ]);
  };

  const removeLoad = (id) => {
    setLoads(currentLoads => (
      currentLoads.length === 1 ? currentLoads : currentLoads.filter(load => load.id !== id)
    ));
  };

  const updateSetting = (field, value) => {
    setSettings(currentSettings => ({ ...currentSettings, [field]: value }));
  };

  const runQuote = () => {
    setQuoteResult(draftQuote);
    setActiveTab('comparison');
  };

  const resetQuote = () => {
    const resetLoads = buildInitialLoads();
    const resetSettings = { ...defaultQuoteSettings };
    setLoads(resetLoads);
    setSettings(resetSettings);
    setQuoteResult(calculateQuote({ loads: resetLoads, settings: resetSettings }));
    setActiveTab('maritime');
  };

  const renderLoad = (load, index) => {
    const metrics = draftQuote.loads.find(item => item.id === load.id);
    const usesDirectCbm = Boolean(metrics?.usesDirectCbm);

    return (
      <S.LoadCard key={load.id}>
        <S.LoadHeader>
          <S.LoadTitle>
            <strong>{load.label || `Carga ${index + 1}`}</strong>
            <span>{formatNumber(metrics?.cbm || 0, 3)} CBM · {formatNumber(metrics?.weightTon || 0, 3)} TON</span>
          </S.LoadTitle>
          <S.IconButton
            type="button"
            onClick={() => removeLoad(load.id)}
            disabled={loads.length === 1}
            title="Eliminar carga"
          >
            <IconTrash />
          </S.IconButton>
        </S.LoadHeader>

        <S.LoadGrid>
          <TextField
            label="Proveedor / carga"
            value={load.label}
            onChange={value => updateLoad(load.id, 'label', value)}
          />
          <NumberField
            label="FOB total"
            unit="USD"
            value={load.fob}
            onChange={value => updateLoad(load.id, 'fob', value)}
          />
          <NumberField
            label="Cantidad cajas"
            unit="CJ"
            step="1"
            value={load.packages}
            onChange={value => updateLoad(load.id, 'packages', value)}
          />
          <NumberField
            label="CBM manual total"
            unit="CBM"
            value={load.directCbm}
            onChange={value => updateLoad(load.id, 'directCbm', value)}
          />
          <NumberField
            label="Largo caja"
            unit="CM"
            muted={usesDirectCbm}
            value={load.lengthCm}
            onChange={value => updateLoad(load.id, 'lengthCm', value)}
          />
          <NumberField
            label="Ancho caja"
            unit="CM"
            muted={usesDirectCbm}
            value={load.widthCm}
            onChange={value => updateLoad(load.id, 'widthCm', value)}
          />
          <NumberField
            label="Alto caja"
            unit="CM"
            muted={usesDirectCbm}
            value={load.heightCm}
            onChange={value => updateLoad(load.id, 'heightCm', value)}
          />
          <NumberField
            label="Peso total"
            unit="KG"
            value={load.weightKg}
            onChange={value => updateLoad(load.id, 'weightKg', value)}
          />
        </S.LoadGrid>
      </S.LoadCard>
    );
  };

  const seaGroups = buildSeaGroups(activeTab === 'comparison' ? quoteResult.sea : draftQuote.sea);
  const displayedQuote = activeTab === 'comparison' ? quoteResult : draftQuote;

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.TitleBlock>
          <S.Eyebrow>Cotizador</S.Eyebrow>
          <S.Title>Importación marítima y comparación automática</S.Title>
        </S.TitleBlock>
        <S.HeaderSummary>
          <S.SummaryLabel>Total general marítimo</S.SummaryLabel>
          <S.SummaryValue>{formatMoney(displayedQuote.sea.grandTotal)}</S.SummaryValue>
          <S.SummaryMeta>{formatMoney(displayedQuote.sea.unitCost)} neto por caja</S.SummaryMeta>
        </S.HeaderSummary>
      </S.Header>

      <S.TabBar>
        <S.TabButton
          type="button"
          $active={activeTab === 'maritime'}
          onClick={() => setActiveTab('maritime')}
        >
          <IconShip />
          Marítimo +70kg
        </S.TabButton>
        <S.TabButton
          type="button"
          $active={activeTab === 'comparison'}
          onClick={() => setActiveTab('comparison')}
        >
          <IconCalculator />
          Comparación
        </S.TabButton>
      </S.TabBar>

      {activeTab === 'maritime' ? (
        <S.WorkspaceGrid>
          <S.MainColumn>
            <S.SectionHeader>
              <div>
                <S.PanelTitle>Cargas consolidadas</S.PanelTitle>
                <S.PanelMeta>{loads.length} carga{loads.length === 1 ? '' : 's'} en el mismo envío</S.PanelMeta>
              </div>
              <S.SecondaryButton type="button" onClick={addLoad}>
                <IconPlus />
                Agregar carga
              </S.SecondaryButton>
            </S.SectionHeader>
            <S.LoadsList>
              {loads.map(renderLoad)}
            </S.LoadsList>

            <S.SettingsGrid>
              <S.SettingsPanel>
                <S.PanelTitle>Base marítima</S.PanelTitle>
                <S.SettingsFields>
                  <NumberField label="Trade Assurance" unit="%" value={settings.tradeAssuranceRate} onChange={value => updateSetting('tradeAssuranceRate', value)} />
                  <NumberField label="Flete marítimo" unit="USD" value={settings.seaFreightRate} onChange={value => updateSetting('seaFreightRate', value)} />
                  <NumberField label="Seguro de carga" unit="USD" placeholder="Auto 1%" value={settings.cargoInsurance} onChange={value => updateSetting('cargoInsurance', value)} />
                  <NumberField label="Gastos de origen" unit="USD" value={settings.originExpenses} onChange={value => updateSetting('originExpenses', value)} />
                </S.SettingsFields>
              </S.SettingsPanel>

              <S.SettingsPanel>
                <S.PanelTitle>Impuestos</S.PanelTitle>
                <S.SettingsFields>
                  <NumberField label="DER" unit="%" value={settings.derRate} onChange={value => updateSetting('derRate', value)} />
                  <NumberField label="TE" unit="%" value={settings.statisticRate} onChange={value => updateSetting('statisticRate', value)} />
                  <NumberField label="IVA" unit="%" value={settings.vatRate} onChange={value => updateSetting('vatRate', value)} />
                  <NumberField label="IVA adicional" unit="%" value={settings.additionalVatRate} onChange={value => updateSetting('additionalVatRate', value)} />
                  <NumberField label="IIBB" unit="%" value={settings.grossIncomeRate} onChange={value => updateSetting('grossIncomeRate', value)} />
                  <NumberField label="Ganancias" unit="%" value={settings.incomeTaxRate} onChange={value => updateSetting('incomeTaxRate', value)} />
                </S.SettingsFields>
              </S.SettingsPanel>

              <S.SettingsPanel>
                <S.PanelTitle>Destino y presupuesto</S.PanelTitle>
                <S.SettingsFields>
                  <NumberField label="Gastos destino" unit="USD" value={settings.destinationExpenses} onChange={value => updateSetting('destinationExpenses', value)} />
                  <NumberField label="Depósito fiscal" unit="USD" placeholder="Auto tabla" value={settings.fiscalDepositOverride} onChange={value => updateSetting('fiscalDepositOverride', value)} />
                  <SelectField label="Carga IMO" unit="IMO" value={settings.imoCargo} onChange={value => updateSetting('imoCargo', value)}>
                    <option value="NO">NO</option>
                    <option value="SI">SÍ</option>
                  </SelectField>
                  <NumberField label="Despachante" unit="%" value={settings.customsBrokerRate} onChange={value => updateSetting('customsBrokerRate', value)} />
                  <NumberField label="Mínimo desp." unit="USD" value={settings.customsBrokerMinimum} onChange={value => updateSetting('customsBrokerMinimum', value)} />
                  <NumberField label="Gestión/firma" unit="USD" value={settings.managementFee} onChange={value => updateSetting('managementFee', value)} />
                  <NumberField label="Handling" unit="USD" value={settings.handling} onChange={value => updateSetting('handling', value)} />
                  <NumberField label="Consolidado" unit="USD" value={settings.consolidation} onChange={value => updateSetting('consolidation', value)} />
                  <NumberField label="Envío terrestre" unit="USD" value={settings.terrestrialFreight} onChange={value => updateSetting('terrestrialFreight', value)} />
                  <NumberField label="Ganancia" unit="%" value={settings.profitRate} onChange={value => updateSetting('profitRate', value)} />
                </S.SettingsFields>
                <S.FiscalScale>
                  {fiscalDepositRows.map(([range, amount]) => (
                    <S.FiscalScaleRow key={range}>
                      <span>{range}</span>
                      <strong>{amount}</strong>
                    </S.FiscalScaleRow>
                  ))}
                </S.FiscalScale>
              </S.SettingsPanel>

              <S.SettingsPanel>
                <S.PanelTitle>Aéreo estimado</S.PanelTitle>
                <S.SettingsFields>
                  <NumberField label="Tarifa aérea" unit="USD/KG" value={settings.airRate} onChange={value => updateSetting('airRate', value)} />
                  <NumberField label="Divisor volumen" unit="CM3" value={settings.airVolumeDivisor} onChange={value => updateSetting('airVolumeDivisor', value)} />
                  <NumberField label="Flete aéreo manual" unit="USD" value={settings.airDeclaredFreight} onChange={value => updateSetting('airDeclaredFreight', value)} />
                </S.SettingsFields>
              </S.SettingsPanel>
            </S.SettingsGrid>
          </S.MainColumn>

          <S.SideColumn>
            <S.MetricGrid>
              <MetricCard label="CBM total" value={`${formatNumber(draftQuote.totals.cbm, 3)} CBM`} />
              <MetricCard label="Peso total" value={`${formatNumber(draftQuote.totals.weightKg, 2)} KG`} />
              <MetricCard label="Toneladas" value={`${formatNumber(draftQuote.totals.weightTon, 3)} TON`} />
              <MetricCard label="Base W/M" value={formatNumber(draftQuote.totals.seaChargeableMeasure, 3)} />
            </S.MetricGrid>
            <S.ActionPanel>
              <S.PrimaryButton type="button" onClick={runQuote}>
                <IconCalculator />
                Cotizar
              </S.PrimaryButton>
              <S.SecondaryButton type="button" onClick={resetQuote}>
                <IconRefresh />
                Restaurar
              </S.SecondaryButton>
            </S.ActionPanel>
            <S.BreakdownPanel>
              <S.PanelTitle>Vista previa marítima</S.PanelTitle>
              {seaGroups.map(group => (
                <QuoteGroup key={group.title} {...group} />
              ))}
            </S.BreakdownPanel>
          </S.SideColumn>
        </S.WorkspaceGrid>
      ) : (
        <S.ComparisonLayout>
          <S.ComparisonGrid>
            <MethodCard
              icon={<IconShip />}
              title="Marítimo"
              quote={quoteResult.sea}
              winner={quoteResult.winner === 'sea'}
            />
            <MethodCard
              icon={<IconPlane />}
              title="Aéreo estimado"
              quote={quoteResult.air}
              winner={quoteResult.winner === 'air'}
            />
          </S.ComparisonGrid>

          <S.ChartPanel>
            <S.PanelTitle>Comparación visual</S.PanelTitle>
            <S.BarGroup>
              <S.BarHeader>
                <span>Marítimo</span>
                <strong>{formatMoney(quoteResult.sea.grandTotal)}</strong>
              </S.BarHeader>
              <S.BarTrack>
                <S.BarFill $variant="sea" $width={quoteResult.seaWidth} />
              </S.BarTrack>
            </S.BarGroup>
            <S.BarGroup>
              <S.BarHeader>
                <span>Aéreo</span>
                <strong>{formatMoney(quoteResult.air.grandTotal)}</strong>
              </S.BarHeader>
              <S.BarTrack>
                <S.BarFill $variant="air" $width={quoteResult.airWidth} />
              </S.BarTrack>
            </S.BarGroup>
          </S.ChartPanel>

          <S.SummaryBand>
            <MetricCard label="Cajas" value={formatNumber(quoteResult.totals.packages, 0)} />
            <MetricCard label="Flete marítimo" value={formatMoney(quoteResult.sea.freight)} />
            <MetricCard label="Flete aéreo" value={formatMoney(quoteResult.air.freight)} />
            <MetricCard label="Recuperable" value={formatMoney(quoteResult.sea.recoverable)} />
            <MetricCard label="Precio venta neto/caja" value={formatMoney(quoteResult.sea.saleNet)} />
            <MetricCard label="Ganancia/caja" value={formatMoney(quoteResult.sea.unitProfit)} />
          </S.SummaryBand>

          <S.BreakdownPanel>
            <S.PanelHeader>
              <S.PanelTitle>Detalle marítimo</S.PanelTitle>
              <S.SecondaryButton type="button" onClick={() => setActiveTab('maritime')}>
                Editar datos
                <IconForward />
              </S.SecondaryButton>
            </S.PanelHeader>
            {seaGroups.map(group => (
              <QuoteGroup key={group.title} {...group} />
            ))}
          </S.BreakdownPanel>
        </S.ComparisonLayout>
      )}
    </S.ScreenWrapper>
  );
};
