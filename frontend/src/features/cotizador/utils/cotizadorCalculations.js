export const createDefaultLoad = (index = 1) => ({
  id: `load-${Date.now()}-${index}`,
  label: `Carga ${index}`,
  fob: 3900,
  packages: 1,
  lengthCm: 200,
  widthCm: 250,
  heightCm: 100,
  directCbm: '',
  weightKg: 1800,
});

export const defaultQuoteSettings = {
  tradeAssuranceRate: 3,
  seaFreightRate: 200,
  cargoInsurance: '',
  originExpenses: 0,
  derRate: 35,
  statisticRate: 3,
  vatRate: 21,
  additionalVatRate: 20,
  grossIncomeRate: 2.5,
  incomeTaxRate: 6,
  destinationExpenses: 500,
  fiscalDepositOverride: '',
  customsBrokerRate: 2,
  customsBrokerMinimum: 300,
  managementFee: 1000,
  handling: 50,
  consolidation: 200,
  terrestrialFreight: 500,
  profitRate: 30,
  airRate: 12,
  airVolumeDivisor: 6000,
  airDeclaredFreight: '',
  imoCargo: 'NO',
};

export const numberValue = (value) => {
  const parsed = Number.parseFloat(String(value ?? '').replace(',', '.'));
  return Number.isFinite(parsed) ? parsed : 0;
};

const positiveNumber = (value) => Math.max(numberValue(value), 0);

const rateValue = (value) => positiveNumber(value) / 100;

const hasManualValue = (value) => String(value ?? '').trim() !== '';

const calculateFiscalDeposit = (chargeableMeasure) => {
  if (chargeableMeasure < 1) return 750;
  if (chargeableMeasure < 3) return 800;
  if (chargeableMeasure < 5) return 850;
  if (chargeableMeasure < 8) return 855;
  if (chargeableMeasure < 10) return 875;
  return 875 + ((chargeableMeasure - 10) * 25);
};

export const calculateLoadMetrics = (load, settings = defaultQuoteSettings) => {
  const packages = positiveNumber(load.packages);
  const lengthCm = positiveNumber(load.lengthCm);
  const widthCm = positiveNumber(load.widthCm);
  const heightCm = positiveNumber(load.heightCm);
  const directCbm = positiveNumber(load.directCbm);
  const cbmByDimensions = (lengthCm * widthCm * heightCm * packages) / 1000000;
  const cbm = directCbm > 0 ? directCbm : cbmByDimensions;
  const weightKg = positiveNumber(load.weightKg);
  const weightTon = weightKg / 1000;
  const airVolumeDivisor = Math.max(positiveNumber(settings.airVolumeDivisor), 1);
  const airVolumetricKg = (cbm * 1000000) / airVolumeDivisor;

  return {
    ...load,
    fob: positiveNumber(load.fob),
    packages,
    lengthCm,
    widthCm,
    heightCm,
    directCbm,
    usesDirectCbm: directCbm > 0,
    cbmByDimensions,
    cbm,
    weightKg,
    weightTon,
    airVolumetricKg,
  };
};

const sumBy = (items, selector) => items.reduce((total, item) => total + selector(item), 0);

const calculateCustomsTotal = ({ totals, settings, freight, chargeableMeasure, method }) => {
  const vatRate = rateValue(settings.vatRate);
  const fobAdjusted = totals.fob * (1 + rateValue(settings.tradeAssuranceRate));
  const cargoInsurance = hasManualValue(settings.cargoInsurance)
    ? positiveNumber(settings.cargoInsurance)
    : (fobAdjusted + freight) * 0.01;
  const originExpenses = positiveNumber(settings.originExpenses);
  const cif = fobAdjusted + freight + cargoInsurance + originExpenses;
  const der = cif * rateValue(settings.derRate);
  const statisticRate = cif * rateValue(settings.statisticRate);
  const taxableBase = cif + der + statisticRate;
  const vat = taxableBase * vatRate;
  const additionalVat = taxableBase * rateValue(settings.additionalVatRate);
  const grossIncome = taxableBase * rateValue(settings.grossIncomeRate);
  const incomeTax = taxableBase * rateValue(settings.incomeTaxRate);
  const destinationExpenses = positiveNumber(settings.destinationExpenses);
  const fiscalDepositOverride = positiveNumber(settings.fiscalDepositOverride);
  const fiscalDeposit = fiscalDepositOverride > 0
    ? fiscalDepositOverride
    : calculateFiscalDeposit(chargeableMeasure);
  const customsBrokerBase = Math.max(
    cif * rateValue(settings.customsBrokerRate),
    positiveNumber(settings.customsBrokerMinimum)
  );
  const customsBroker = customsBrokerBase * (1 + vatRate);
  const managementFee = positiveNumber(settings.managementFee);
  const handling = positiveNumber(settings.handling);
  const consolidation = positiveNumber(settings.consolidation);
  const imoCharge = 0;
  const taxableDestinationCosts = destinationExpenses + fiscalDeposit + customsBroker + managementFee + consolidation;
  const destinationVat = taxableDestinationCosts * vatRate;
  const taxSubtotal = der + statisticRate + vat + additionalVat + grossIncome + incomeTax;
  const destinationSubtotal = destinationExpenses + fiscalDeposit + customsBroker + managementFee + handling + consolidation + imoCharge;
  const taxesAndCosts = taxSubtotal + destinationSubtotal;
  const taxesCostsAndVat = taxesAndCosts + destinationVat;
  const finalBeforeDelivery = cif + taxesCostsAndVat;
  const recoverable = additionalVat + grossIncome + incomeTax + destinationVat;
  const terrestrialFreight = positiveNumber(settings.terrestrialFreight);
  const terrestrialFreightWithVat = terrestrialFreight * (1 + vatRate);
  const grandTotal = finalBeforeDelivery + terrestrialFreightWithVat;
  const netCost = vatRate > 0 ? grandTotal / (1 + vatRate) : grandTotal;
  const packageCount = Math.max(totals.packages, 1);
  const unitCost = netCost / packageCount;
  const saleNet = unitCost * (1 + rateValue(settings.profitRate));
  const unitProfit = saleNet - unitCost;

  return {
    method,
    chargeableMeasure,
    fobAdjusted,
    freight,
    cargoInsurance,
    originExpenses,
    cif,
    der,
    statisticRate,
    taxableBase,
    vat,
    additionalVat,
    grossIncome,
    incomeTax,
    destinationExpenses,
    fiscalDeposit,
    customsBroker,
    managementFee,
    handling,
    consolidation,
    imoCharge,
    destinationVat,
    taxSubtotal,
    destinationSubtotal,
    taxesAndCosts,
    taxesCostsAndVat,
    finalBeforeDelivery,
    recoverable,
    terrestrialFreight,
    terrestrialFreightWithVat,
    grandTotal,
    netCost,
    packageCount,
    unitCost,
    saleNet,
    unitProfit,
  };
};

export const calculateQuote = ({ loads, settings }) => {
  const loadMetrics = loads.map(load => calculateLoadMetrics(load, settings));
  const totals = {
    fob: sumBy(loadMetrics, load => load.fob),
    packages: sumBy(loadMetrics, load => load.packages),
    cbm: sumBy(loadMetrics, load => load.cbm),
    weightKg: sumBy(loadMetrics, load => load.weightKg),
    weightTon: sumBy(loadMetrics, load => load.weightTon),
    airVolumetricKg: sumBy(loadMetrics, load => load.airVolumetricKg),
  };
  const seaChargeableMeasure = Math.max(totals.cbm, totals.weightTon);
  const seaFreight = positiveNumber(settings.seaFreightRate) * seaChargeableMeasure;
  const airChargeableKg = Math.max(totals.weightKg, totals.airVolumetricKg);
  const declaredAirFreight = positiveNumber(settings.airDeclaredFreight);
  const airFreight = declaredAirFreight > 0
    ? declaredAirFreight
    : positiveNumber(settings.airRate) * airChargeableKg;
  const sea = calculateCustomsTotal({
    totals,
    settings,
    freight: seaFreight,
    chargeableMeasure: seaChargeableMeasure,
    method: 'Maritimo',
  });
  const air = calculateCustomsTotal({
    totals,
    settings,
    freight: airFreight,
    chargeableMeasure: seaChargeableMeasure,
    method: 'Aereo',
  });
  const maxTotal = Math.max(sea.grandTotal, air.grandTotal, 1);

  return {
    loads: loadMetrics,
    totals: {
      ...totals,
      seaChargeableMeasure,
      airChargeableKg,
    },
    sea,
    air,
    winner: sea.grandTotal <= air.grandTotal ? 'sea' : 'air',
    seaWidth: `${Math.max((sea.grandTotal / maxTotal) * 100, 6)}%`,
    airWidth: `${Math.max((air.grandTotal / maxTotal) * 100, 6)}%`,
  };
};
