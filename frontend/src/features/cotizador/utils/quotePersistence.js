import {
  createDefaultLoad,
  defaultQuoteSettings,
  numberValue,
} from './cotizadorCalculations';

const hasValue = (value) => String(value ?? '').trim() !== '';

const firstDefined = (...values) => values.find(value => value !== undefined && value !== null);

const parseJson = (value, fallback) => {
  if (!value) return fallback;
  if (typeof value === 'object') return value;

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const normalizeLoadId = (quoteId, index) => `load-${quoteId || Date.now()}-${index + 1}`;

export const buildStoredCargas = (loads, quoteResult) => loads.map((load, index) => {
  const metrics = quoteResult?.loads?.find(item => item.id === load.id) || {};

  return {
    proveedor_carga: load.label || `Carga ${index + 1}`,
    fob_total: numberValue(load.fob),
    cantidad_cajas: numberValue(load.packages),
    cbm_total: numberValue(firstDefined(metrics.cbm, load.directCbm)),
    largo_caja: numberValue(load.lengthCm),
    ancho_caja: numberValue(load.widthCm),
    alto_caja: numberValue(load.heightCm),
    peso_total: numberValue(load.weightKg),
  };
});

export const buildBudgetPdfPayload = ({
  form,
  sellerForm,
  loads,
  settings,
  quoteResult,
  method,
}) => ({
  form,
  sellerForm,
  loads,
  settings,
  quote: quoteResult[method],
  quoteResult,
  method,
});

export const buildBudgetPersistencePayload = ({
  pdfPayload,
  loads,
  settings,
  quoteResult,
  status,
  pdfFile,
}) => {
  const method = pdfPayload.method || 'sea';
  const quote = pdfPayload.quote || quoteResult[method];
  const client = String(pdfPayload.form?.client || '').trim() || 'Borrador cotizador';

  return {
    razon_social_cliente: client,
    generation_date: new Date().toISOString(),
    amount: quote.grandTotal,
    status,
    method,
    budget_number: String(pdfPayload.form?.budgetNumber || '').trim() || null,
    pdf_base64: pdfFile?.base64,
    pdf_filename: pdfFile?.filename,
    payload: pdfPayload,
    cargas: buildStoredCargas(loads, quoteResult),
    trade_assurance: numberValue(settings.tradeAssuranceRate),
    flete_maritimo_aereo: numberValue(settings.seaFreightRate),
    seguro_de_carga: hasValue(settings.cargoInsurance)
      ? numberValue(settings.cargoInsurance)
      : numberValue(quoteResult.sea.cargoInsurance),
    gastos_de_origen: numberValue(settings.originExpenses),
    der: numberValue(settings.derRate),
    te: numberValue(settings.statisticRate),
    iva: numberValue(settings.vatRate),
    iva_adicional: numberValue(settings.additionalVatRate),
    iibb: numberValue(settings.grossIncomeRate),
    imp_ganancias: numberValue(settings.incomeTaxRate),
    deposito_fiscal: hasValue(settings.fiscalDepositOverride)
      ? numberValue(settings.fiscalDepositOverride)
      : numberValue(quoteResult.sea.fiscalDeposit),
    gastos_destino: numberValue(settings.destinationExpenses),
    carga_imo: settings.imoCargo || 'NO',
    despachante: numberValue(settings.customsBrokerRate),
    minimo_honorarios: numberValue(settings.customsBrokerMinimum),
    gestion_firma: numberValue(settings.managementFee),
    handling: numberValue(settings.handling),
    consolidado: numberValue(settings.consolidation),
    envio_terrestre: numberValue(settings.terrestrialFreight),
    ganancia: numberValue(settings.profitRate),
    tarifa_aerea: numberValue(settings.airRate),
    peso_cobrado: numberValue(quoteResult.totals.airChargeableKg),
    flete_aereo_total: hasValue(settings.airDeclaredFreight)
      ? numberValue(settings.airDeclaredFreight)
      : numberValue(quoteResult.air.freight),
  };
};

const restoreLoad = (load, index, quoteId) => {
  const defaultLoad = createDefaultLoad(index + 1);

  return {
    ...defaultLoad,
    id: load.id || normalizeLoadId(quoteId, index),
    label: firstDefined(load.label, load.proveedor_carga, defaultLoad.label),
    fob: firstDefined(load.fob, load.fob_total, defaultLoad.fob),
    packages: firstDefined(load.packages, load.cantidad_cajas, defaultLoad.packages),
    directCbm: firstDefined(load.directCbm, load.cbm_total, defaultLoad.directCbm),
    lengthCm: firstDefined(load.lengthCm, load.largo_caja, defaultLoad.lengthCm),
    widthCm: firstDefined(load.widthCm, load.ancho_caja, defaultLoad.widthCm),
    heightCm: firstDefined(load.heightCm, load.alto_caja, defaultLoad.heightCm),
    weightKg: firstDefined(load.weightKg, load.peso_total, defaultLoad.weightKg),
  };
};

export const restoreQuoteState = (quote) => {
  const payload = parseJson(quote?.payload, {});
  const storedLoads = Array.isArray(payload.loads)
    ? payload.loads
    : parseJson(quote?.cargas, []);
  const restoredLoads = (storedLoads.length ? storedLoads : [createDefaultLoad(1)])
    .map((load, index) => restoreLoad(load, index, quote?.id));
  const payloadSettings = payload.settings || {};
  const restoredSettings = {
    ...defaultQuoteSettings,
    ...payloadSettings,
    tradeAssuranceRate: firstDefined(payloadSettings.tradeAssuranceRate, quote?.trade_assurance, defaultQuoteSettings.tradeAssuranceRate),
    seaFreightRate: firstDefined(payloadSettings.seaFreightRate, quote?.flete_maritimo_aereo, defaultQuoteSettings.seaFreightRate),
    cargoInsurance: firstDefined(payloadSettings.cargoInsurance, quote?.seguro_de_carga, defaultQuoteSettings.cargoInsurance),
    originExpenses: firstDefined(payloadSettings.originExpenses, quote?.gastos_de_origen, defaultQuoteSettings.originExpenses),
    derRate: firstDefined(payloadSettings.derRate, quote?.der, defaultQuoteSettings.derRate),
    statisticRate: firstDefined(payloadSettings.statisticRate, quote?.te, defaultQuoteSettings.statisticRate),
    vatRate: firstDefined(payloadSettings.vatRate, quote?.iva, defaultQuoteSettings.vatRate),
    additionalVatRate: firstDefined(payloadSettings.additionalVatRate, quote?.iva_adicional, defaultQuoteSettings.additionalVatRate),
    grossIncomeRate: firstDefined(payloadSettings.grossIncomeRate, quote?.iibb, defaultQuoteSettings.grossIncomeRate),
    incomeTaxRate: firstDefined(payloadSettings.incomeTaxRate, quote?.imp_ganancias, defaultQuoteSettings.incomeTaxRate),
    fiscalDepositOverride: firstDefined(payloadSettings.fiscalDepositOverride, quote?.deposito_fiscal, defaultQuoteSettings.fiscalDepositOverride),
    destinationExpenses: firstDefined(payloadSettings.destinationExpenses, quote?.gastos_destino, defaultQuoteSettings.destinationExpenses),
    imoCargo: firstDefined(payloadSettings.imoCargo, quote?.carga_imo, defaultQuoteSettings.imoCargo),
    customsBrokerRate: firstDefined(payloadSettings.customsBrokerRate, quote?.despachante, defaultQuoteSettings.customsBrokerRate),
    customsBrokerMinimum: firstDefined(payloadSettings.customsBrokerMinimum, quote?.minimo_honorarios, defaultQuoteSettings.customsBrokerMinimum),
    managementFee: firstDefined(payloadSettings.managementFee, quote?.gestion_firma, defaultQuoteSettings.managementFee),
    handling: firstDefined(payloadSettings.handling, quote?.handling, defaultQuoteSettings.handling),
    consolidation: firstDefined(payloadSettings.consolidation, quote?.consolidado, defaultQuoteSettings.consolidation),
    terrestrialFreight: firstDefined(payloadSettings.terrestrialFreight, quote?.envio_terrestre, defaultQuoteSettings.terrestrialFreight),
    profitRate: firstDefined(payloadSettings.profitRate, quote?.ganancia, defaultQuoteSettings.profitRate),
    airRate: firstDefined(payloadSettings.airRate, quote?.tarifa_aerea, defaultQuoteSettings.airRate),
    airDeclaredFreight: firstDefined(payloadSettings.airDeclaredFreight, quote?.flete_aereo_total, defaultQuoteSettings.airDeclaredFreight),
  };

  return {
    loads: restoredLoads,
    settings: restoredSettings,
    budgetForm: {
      ...(payload.form || {}),
      client: firstDefined(payload.form?.client, quote?.razon_social_cliente, ''),
      budgetNumber: firstDefined(payload.form?.budgetNumber, quote?.budget_number, ''),
    },
    sellerForm: payload.sellerForm || {},
    method: payload.method || quote?.method || 'sea',
  };
};
