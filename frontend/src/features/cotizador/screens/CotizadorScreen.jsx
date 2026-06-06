import React, { useMemo, useState } from 'react';
import { IconCheck, IconForward, IconPlane, IconQuotes, IconShip } from '../../../shared/components/Icons';
import * as S from './CotizadorScreenStyled';

const initialValues = {
  exwPrice: 18,
  unitWeight: 1.2,
  length: 32,
  width: 24,
  height: 18,
  units: 100,
  airRate: 12,
  airDeclaredFreight: 0,
  seaRate: 185,
  insuranceRate: 1,
  importRate: 70,
};

const numberValue = (value) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatMoney = (value) => new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
}).format(value);

const formatNumber = (value, digits = 2) => new Intl.NumberFormat('es-AR', {
  maximumFractionDigits: digits,
  minimumFractionDigits: digits,
}).format(value);

const buildResult = ({ exwPrice, freight, insuranceRate, importRate }) => {
  const insurance = (exwPrice + freight) * (insuranceRate / 100);
  const cif = exwPrice + freight + insurance;
  const taxes = cif * (importRate / 100);
  const total = cif + taxes;

  return { cif, freight, insurance, taxes, total };
};

const ResultCard = ({ icon, method, result, winner }) => (
  <S.ResultCard $winner={winner}>
    <S.ResultHeader>
      <S.ResultIcon>{icon}</S.ResultIcon>
      <div>
        <S.ResultMethod>{method}</S.ResultMethod>
        <S.ResultHint>{winner ? 'Más conveniente' : 'Alternativa disponible'}</S.ResultHint>
      </div>
      {winner && (
        <S.WinnerBadge>
          <IconCheck />
          Mejor
        </S.WinnerBadge>
      )}
    </S.ResultHeader>

    <S.ResultRows>
      <S.ResultRow><span>Precio EXW</span><strong>{formatMoney(result.exwPrice)}</strong></S.ResultRow>
      <S.ResultRow><span>Costo de envío</span><strong>{formatMoney(result.freight)}</strong></S.ResultRow>
      <S.ResultRow><span>Seguro</span><strong>{formatMoney(result.insurance)}</strong></S.ResultRow>
      <S.Divider />
      <S.ResultRow><span>CIF</span><strong>{formatMoney(result.cif)}</strong></S.ResultRow>
      <S.ResultRow><span>Impuestos + CFI</span><strong>{formatMoney(result.taxes)}</strong></S.ResultRow>
      <S.TotalRow><span>Total / unidad</span><strong>{formatMoney(result.total)}</strong></S.TotalRow>
    </S.ResultRows>
  </S.ResultCard>
);

export const CotizadorScreen = () => {
  const [values, setValues] = useState(initialValues);

  const updateValue = (field, value) => {
    setValues(currentValues => ({ ...currentValues, [field]: value }));
  };

  const computed = useMemo(() => {
    const exwPrice = numberValue(values.exwPrice);
    const unitWeight = numberValue(values.unitWeight);
    const length = numberValue(values.length);
    const width = numberValue(values.width);
    const height = numberValue(values.height);
    const units = Math.max(numberValue(values.units), 1);
    const airRate = numberValue(values.airRate);
    const airDeclaredFreight = numberValue(values.airDeclaredFreight);
    const seaRate = numberValue(values.seaRate);
    const insuranceRate = numberValue(values.insuranceRate);
    const importRate = numberValue(values.importRate);

    const unitVolume = (length * width * height) / 1000000;
    const volumetricWeight = (length * width * height) / 6000;
    const chargeableWeight = Math.max(unitWeight, volumetricWeight);
    const airFreightByWeight = chargeableWeight * airRate;
    const airFreight = airDeclaredFreight > 0 ? airDeclaredFreight : airFreightByWeight;
    const seaFreight = (unitVolume * seaRate);
    const totalVolume = unitVolume * units;

    const air = buildResult({ exwPrice, freight: airFreight, insuranceRate, importRate });
    const sea = buildResult({ exwPrice, freight: seaFreight, insuranceRate, importRate });
    const maxTotal = Math.max(air.total, sea.total, 1);

    return {
      unitVolume,
      totalVolume,
      volumetricWeight,
      chargeableWeight,
      air: { ...air, exwPrice },
      sea: { ...sea, exwPrice },
      airWidth: `${Math.max((air.total / maxTotal) * 100, 8)}%`,
      seaWidth: `${Math.max((sea.total / maxTotal) * 100, 8)}%`,
      winner: air.total <= sea.total ? 'air' : 'sea',
    };
  }, [values]);

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.TitleBlock>
          <S.Eyebrow>Cotizador logístico</S.Eyebrow>
          <S.Title>Comparador Avión vs Barco</S.Title>
          <S.Description>
            Calcula una vista rápida de importación por método de envío con branding Imponect.
          </S.Description>
        </S.TitleBlock>
        <S.HeaderSummary>
          <S.SummaryLabel>Mejor opción</S.SummaryLabel>
          <S.SummaryValue>{computed.winner === 'air' ? 'Avión' : 'Barco'}</S.SummaryValue>
          <S.SummaryMeta>{formatMoney(Math.min(computed.air.total, computed.sea.total))} por unidad</S.SummaryMeta>
        </S.HeaderSummary>
      </S.Header>

      <S.CalculatorGrid>
        <S.FormPanel>
          <S.PanelTitle>Datos del producto</S.PanelTitle>
          <S.InputGrid>
            <S.Field>
              <label>Precio EXW</label>
              <S.InputUnit>
                <span>USD</span>
                <input type="number" value={values.exwPrice} onChange={event => updateValue('exwPrice', event.target.value)} />
              </S.InputUnit>
            </S.Field>
            <S.Field>
              <label>Peso unitario</label>
              <S.InputUnit>
                <span>KG</span>
                <input type="number" value={values.unitWeight} onChange={event => updateValue('unitWeight', event.target.value)} />
              </S.InputUnit>
            </S.Field>
            <S.Field>
              <label>Cantidad</label>
              <S.InputUnit>
                <span>UN</span>
                <input type="number" value={values.units} onChange={event => updateValue('units', event.target.value)} />
              </S.InputUnit>
            </S.Field>
          </S.InputGrid>

          <S.PanelTitle>Medidas del producto</S.PanelTitle>
          <S.InputGrid>
            <S.Field>
              <label>Largo</label>
              <S.InputUnit>
                <span>CM</span>
                <input type="number" value={values.length} onChange={event => updateValue('length', event.target.value)} />
              </S.InputUnit>
            </S.Field>
            <S.Field>
              <label>Ancho</label>
              <S.InputUnit>
                <span>CM</span>
                <input type="number" value={values.width} onChange={event => updateValue('width', event.target.value)} />
              </S.InputUnit>
            </S.Field>
            <S.Field>
              <label>Alto</label>
              <S.InputUnit>
                <span>CM</span>
                <input type="number" value={values.height} onChange={event => updateValue('height', event.target.value)} />
              </S.InputUnit>
            </S.Field>
          </S.InputGrid>

          <S.TransportGrid>
            <S.TransportBox>
              <S.TransportTitle><IconPlane /> Avión</S.TransportTitle>
              <S.Field>
                <label>Costo por kg</label>
                <S.InputUnit>
                  <span>USD/KG</span>
                  <input type="number" value={values.airRate} onChange={event => updateValue('airRate', event.target.value)} />
                </S.InputUnit>
              </S.Field>
              <S.Field>
                <label>Flete declarado</label>
                <S.InputUnit>
                  <span>USD</span>
                  <input type="number" value={values.airDeclaredFreight} onChange={event => updateValue('airDeclaredFreight', event.target.value)} />
                </S.InputUnit>
              </S.Field>
            </S.TransportBox>

            <S.TransportBox>
              <S.TransportTitle><IconShip /> Barco</S.TransportTitle>
              <S.Field>
                <label>Costo por CBM</label>
                <S.InputUnit>
                  <span>USD/CBM</span>
                  <input type="number" value={values.seaRate} onChange={event => updateValue('seaRate', event.target.value)} />
                </S.InputUnit>
              </S.Field>
              <S.FormNote>El valor se calcula por volumen unitario y se muestra por unidad.</S.FormNote>
            </S.TransportBox>
          </S.TransportGrid>

          <S.AdvancedRow>
            <S.Field>
              <label>Seguro</label>
              <S.InputUnit>
                <span>%</span>
                <input type="number" value={values.insuranceRate} onChange={event => updateValue('insuranceRate', event.target.value)} />
              </S.InputUnit>
            </S.Field>
            <S.Field>
              <label>Impuestos + CFI</label>
              <S.InputUnit>
                <span>%</span>
                <input type="number" value={values.importRate} onChange={event => updateValue('importRate', event.target.value)} />
              </S.InputUnit>
            </S.Field>
          </S.AdvancedRow>
        </S.FormPanel>

        <S.OutputPanel>
          <S.MetricGrid>
            <S.MetricCard>
              <span>Peso volumétrico</span>
              <strong>{formatNumber(computed.volumetricWeight)} kg</strong>
            </S.MetricCard>
            <S.MetricCard>
              <span>Peso tomado</span>
              <strong>{formatNumber(computed.chargeableWeight)} kg</strong>
            </S.MetricCard>
            <S.MetricCard>
              <span>Volumen unitario</span>
              <strong>{formatNumber(computed.unitVolume, 4)} CBM</strong>
            </S.MetricCard>
            <S.MetricCard>
              <span>Volumen total</span>
              <strong>{formatNumber(computed.totalVolume, 3)} CBM</strong>
            </S.MetricCard>
          </S.MetricGrid>

          <S.ResultsGrid>
            <ResultCard icon={<IconPlane />} method="Avión" result={computed.air} winner={computed.winner === 'air'} />
            <ResultCard icon={<IconShip />} method="Barco" result={computed.sea} winner={computed.winner === 'sea'} />
          </S.ResultsGrid>
        </S.OutputPanel>
      </S.CalculatorGrid>

      <S.ComparisonPanel>
        <S.PanelTitle>Comparación visual</S.PanelTitle>
        <S.BarGroup>
          <S.BarHeader>
            <span>Avión</span>
            <strong>{formatMoney(computed.air.total)}</strong>
          </S.BarHeader>
          <S.BarTrack>
            <S.BarFill $variant="air" $width={computed.airWidth} />
          </S.BarTrack>
        </S.BarGroup>
        <S.BarGroup>
          <S.BarHeader>
            <span>Barco</span>
            <strong>{formatMoney(computed.sea.total)}</strong>
          </S.BarHeader>
          <S.BarTrack>
            <S.BarFill $variant="sea" $width={computed.seaWidth} />
          </S.BarTrack>
        </S.BarGroup>
        <S.FooterNote>
          <IconQuotes />
          Calculadora de uso estimativo. Las fórmulas se van a ajustar con las reglas operativas reales de Imponect.
          <IconForward />
        </S.FooterNote>
      </S.ComparisonPanel>
    </S.ScreenWrapper>
  );
};
