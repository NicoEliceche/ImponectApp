import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  IconCalculator,
  IconCheck,
  IconClose,
  IconDrafts,
  IconForward,
  IconPlane,
  IconPlus,
  IconQuotes,
  IconRefresh,
  IconShip,
  IconTrash,
} from '../../../shared/components/Icons';
import { publicAsset } from '../../../shared/utils/urls';
import {
  calculateQuote,
  createDefaultLoad,
  defaultQuoteSettings,
} from '../utils/cotizadorCalculations';
import {
  buildBudgetPdfPayload,
  buildBudgetPersistencePayload,
  restoreQuoteState,
} from '../utils/quotePersistence';
import { createBudgetPdfFile, downloadBudgetPdfFile } from '../utils/budgetPdf';
import { createQuote, fetchQuote, updateQuote } from '../../quotes/api/quotesApi';
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

const budgetHeaderSrc = publicAsset('assets/presupuesto-encabezado-v2.png');
const budgetSignatureStampSrc = publicAsset('assets/presupuesto-espacio-firma.png');
const budgetSellerSignatureSrc = publicAsset('assets/firma_sin_fondo.png');

const initialBudgetForm = {
  client: '',
  clientTaxId: '',
  clientVat: '',
  clientAddress: '',
  clientContact: '',
  budgetNumber: '',
};

const methodLabels = {
  sea: 'Marítimo',
  air: 'Aéreo',
};

const clientVatOptions = [
  'IVA Responsable Inscripto',
  'IVA Sujeto Exento',
  'Consumidor Final',
  'Responsable Monotributo',
  'Sujeto No Categorizado',
  'Proveedor del Exterior',
  'Cliente del Exterior',
  'IVA Liberado - Ley N° 19.640',
  'Monotributista Social',
  'IVA No Alcanzado',
  'Monotributista Trabajador Independiente Promovido',
];

const sellerValidityOptions = [
  '1 día',
  '2 días',
  '3 días',
  '7 días',
  '14 días',
  '15 días',
  '1 mes',
];

const formatTaxId = (value) => {
  const digits = String(value ?? '').replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 10) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
  return `${digits.slice(0, 2)}-${digits.slice(2, 10)}-${digits.slice(10)}`;
};

const initialSellerBudgetForm = {
  taxId: formatTaxId('23319766359'),
  fiscalCondition: 'IVA Responsable Inscripto',
  fiscalAddress: 'Av. General Paz 685 - La Francia, Córdoba',
  contact: '(+54) 9 3564-369474',
  validity: '15 días',
};

const sellerBudgetFields = [
  ['taxId', 'CUIT'],
  ['fiscalCondition', 'Condición Fiscal'],
  ['fiscalAddress', 'Domicilio Fiscal'],
  ['contact', 'Teléfono / Email'],
  ['validity', 'Validez por'],
];

const MAX_BUDGET_IMAGES = 10;
const MAX_BUDGET_IMAGE_SIZE = 1200;
const BUDGET_IMAGE_QUALITY = 0.82;

const formatMoney = (value) => new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
}).format(value);

const formatNumber = (value, digits = 2) => new Intl.NumberFormat('es-AR', {
  maximumFractionDigits: digits,
  minimumFractionDigits: digits,
}).format(value);

const formatInputNumber = (value, digits = 2) => {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return '';
  if (numericValue <= 0) return '0';
  return numericValue.toFixed(digits);
};

const hasPositiveValue = (value) => {
  const parsed = Number.parseFloat(String(value ?? '').replace(',', '.'));
  return Number.isFinite(parsed) && parsed > 0;
};

const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(String(reader.result || ''));
  reader.onerror = () => reject(new Error(`No se pudo leer ${file.name}.`));
  reader.readAsDataURL(file);
});

const optimizeImageDataUrl = (dataUrl) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => {
    const scale = Math.min(1, MAX_BUDGET_IMAGE_SIZE / Math.max(image.width, image.height));
    const width = Math.max(Math.round(image.width * scale), 1);
    const height = Math.max(Math.round(image.height * scale), 1);

    if (scale === 1 && dataUrl.startsWith('data:image/jpeg')) {
      resolve(dataUrl);
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, width, height);
    resolve(canvas.toDataURL('image/jpeg', BUDGET_IMAGE_QUALITY));
  };
  image.onerror = () => reject(new Error('No se pudo procesar una imagen seleccionada.'));
  image.src = dataUrl;
});

const fileToBudgetImage = async (file) => {
  const dataUrl = await readFileAsDataUrl(file);
  const optimizedDataUrl = await optimizeImageDataUrl(dataUrl);

  return {
    id: `image-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name: file.name,
    src: optimizedDataUrl,
  };
};

const NumberField = ({ label, unit, value, onChange, step = '0.01', placeholder }) => (
  <S.Field>
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

const ReadOnlyField = ({ label, unit, value }) => (
  <S.Field>
    <label>{label}</label>
    <S.ReadOnlyUnit>
      <span>{unit}</span>
      <strong>{value}</strong>
    </S.ReadOnlyUnit>
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

const BudgetFormField = ({ label, value, onChange, placeholder }) => (
  <S.BudgetFormField>
    <label>{label}</label>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={event => onChange(event.target.value)}
    />
  </S.BudgetFormField>
);

const BudgetFormSelect = ({ label, value, onChange, options, placeholder }) => (
  <S.BudgetFormField>
    <label>{label}</label>
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option value="" disabled>{placeholder}</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </S.BudgetFormField>
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

const BudgetSummary = ({ quote }) => (
  <S.BudgetPanel>
    <S.PanelTitle>Presupuesto</S.PanelTitle>
    <S.BudgetTable>
      <S.BudgetCell>
        <span>Total unidades</span>
        <strong>{formatNumber(quote.packageCount, 0)}</strong>
      </S.BudgetCell>
      <S.BudgetCell>
        <span>Costo total</span>
        <strong>{formatMoney(quote.netCost)}</strong>
      </S.BudgetCell>
      <S.BudgetCell>
        <span>Precio costo unitario</span>
        <strong>{formatMoney(quote.unitCost)}</strong>
      </S.BudgetCell>
      <S.BudgetCell>
        <span>Precio venta neto</span>
        <strong>{formatMoney(quote.saleNet)}</strong>
      </S.BudgetCell>
      <S.BudgetCell>
        <span>Ganancia unitaria</span>
        <strong>{formatMoney(quote.unitProfit)}</strong>
      </S.BudgetCell>
    </S.BudgetTable>
  </S.BudgetPanel>
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

const MethodCard = ({ icon, title, quote, winner, selected, onSelect }) => (
  <S.MethodCard type="button" $winner={winner} $selected={selected} onClick={onSelect} aria-pressed={selected}>
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

const BudgetModal = ({
  form,
  sellerForm,
  quote,
  method,
  productImages = [],
  onChange,
  onSellerChange,
  onMethodChange,
  onImagesSelected,
  onImageRemove,
  onClose,
  onSubmit,
  isGenerating,
  canSubmit,
}) => {
  const imageInputRef = useRef(null);
  const canAddImages = productImages.length < MAX_BUDGET_IMAGES;

  const handleFileInputChange = (event) => {
    onImagesSelected(event.target.files);
    event.target.value = '';
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (canAddImages) onImagesSelected(event.dataTransfer.files);
  };

  return (
    <S.ModalOverlay>
      <S.BudgetModal role="dialog" aria-modal="true" aria-labelledby="budget-modal-title">
        <S.BudgetHeaderImage src={budgetHeaderSrc} alt="Imponect Importaciones Estratégicas" />
        <S.ModalHeader>
          <div>
            <S.ModalKicker>Presupuesto {methodLabels[method].toLowerCase()}</S.ModalKicker>
            <S.ModalTitle id="budget-modal-title">Datos del cliente</S.ModalTitle>
          </div>
          <S.ModalHeaderControls>
            <S.BudgetMethodSelect value={method} onChange={event => onMethodChange(event.target.value)} aria-label="Tipo de presupuesto">
              <option value="sea">Marítimo</option>
              <option value="air">Aéreo</option>
            </S.BudgetMethodSelect>
            <S.IconOnlyButton type="button" aria-label="Cerrar" onClick={onClose}>
              <IconClose />
            </S.IconOnlyButton>
          </S.ModalHeaderControls>
        </S.ModalHeader>

        <S.BudgetForm onSubmit={onSubmit}>
          <S.BudgetFormGrid>
            <BudgetFormField label="Razón social / cliente" value={form.client} onChange={value => onChange('client', value)} />
            <BudgetFormField label="CUIT / DNI Cliente" value={form.clientTaxId} onChange={value => onChange('clientTaxId', value)} placeholder="XX-XXXXXXXX-X" />
            <BudgetFormSelect
              label="IVA"
              value={form.clientVat}
              onChange={value => onChange('clientVat', value)}
              options={clientVatOptions}
              placeholder="Seleccionar IVA"
            />
            <BudgetFormField label="Domicilio Cliente" value={form.clientAddress} onChange={value => onChange('clientAddress', value)} />
            <BudgetFormField label="Teléfono / Email" value={form.clientContact} onChange={value => onChange('clientContact', value)} />
            <BudgetFormField label="Número de Presupuesto" value={form.budgetNumber} onChange={value => onChange('budgetNumber', value)} />
          </S.BudgetFormGrid>

          <S.BudgetSectionTitle>Info vendedor</S.BudgetSectionTitle>
          <S.BudgetFormGrid>
            {sellerBudgetFields.map(([field, label]) => (
              field === 'validity' ? (
                <BudgetFormSelect
                  key={field}
                  label={label}
                  value={sellerForm[field]}
                  onChange={value => onSellerChange(field, value)}
                  options={sellerValidityOptions}
                  placeholder="Seleccionar validez"
                />
              ) : (
                <BudgetFormField
                  key={field}
                  label={label}
                  value={sellerForm[field]}
                  onChange={value => onSellerChange(field, value)}
                />
              )
            ))}
          </S.BudgetFormGrid>

          <S.BudgetSectionTitle>Imágenes de producto</S.BudgetSectionTitle>
          <S.BudgetImageDropZone
            onDragOver={event => event.preventDefault()}
            onDrop={handleDrop}
            $disabled={!canAddImages}
          >
            <S.HiddenFileInput
              ref={imageInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileInputChange}
            />
            <S.BudgetImageGrid>
              {productImages.map(image => (
                <S.BudgetImageTile key={image.id}>
                  <img src={image.src} alt={image.name || 'Imagen de producto'} />
                  <S.BudgetImageRemoveButton
                    type="button"
                    onClick={() => onImageRemove(image.id)}
                    aria-label="Quitar imagen"
                  >
                    <IconClose />
                  </S.BudgetImageRemoveButton>
                </S.BudgetImageTile>
              ))}
              {canAddImages && (
                <S.BudgetImageAddButton
                  type="button"
                  onClick={() => imageInputRef.current?.click()}
                  aria-label="Agregar imagen"
                >
                  <IconPlus />
                </S.BudgetImageAddButton>
              )}
            </S.BudgetImageGrid>
            <S.BudgetImageCounter>{productImages.length}/{MAX_BUDGET_IMAGES}</S.BudgetImageCounter>
          </S.BudgetImageDropZone>

          <S.BudgetModalSummary>
            <span>Total general {methodLabels[method].toLowerCase()}</span>
            <strong>{formatMoney(quote.grandTotal)}</strong>
          </S.BudgetModalSummary>

          <S.ModalActions>
            <S.SecondaryButton type="button" onClick={onClose}>
              Cancelar
            </S.SecondaryButton>
            <S.PrimaryButton type="submit" disabled={isGenerating || !canSubmit}>
              <IconQuotes />
              {isGenerating ? 'Generando...' : 'GENERAR PRESUPUESTO'}
            </S.PrimaryButton>
          </S.ModalActions>
        </S.BudgetForm>
      </S.BudgetModal>
    </S.ModalOverlay>
  );
};

const buildSeaGroups = (quote, methodLabel = 'Marítimo') => [
  {
    title: 'FOB, FLETE Y CIF',
    tone: 'base',
    rows: [
      { label: 'Valor FOB + Trade Assurance', value: quote.fobAdjusted },
      { label: `Flete ${methodLabel.toLowerCase()}`, value: quote.freight },
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
  const [searchParams, setSearchParams] = useSearchParams();
  const quoteIdParam = searchParams.get('id');
  const [loads, setLoads] = useState(buildInitialLoads);
  const [settings, setSettings] = useState({ ...defaultQuoteSettings });
  const [activeTab, setActiveTab] = useState('maritime');
  const [selectedQuoteMethod, setSelectedQuoteMethod] = useState('sea');
  const [isBudgetModalOpen, setIsBudgetModalOpen] = useState(false);
  const [budgetMethod, setBudgetMethod] = useState('sea');
  const [budgetForm, setBudgetForm] = useState({ ...initialBudgetForm });
  const [sellerBudgetForm, setSellerBudgetForm] = useState({ ...initialSellerBudgetForm });
  const [isGeneratingBudget, setIsGeneratingBudget] = useState(false);
  const [isSavingDraft, setIsSavingDraft] = useState(false);
  const [isLoadingSavedQuote, setIsLoadingSavedQuote] = useState(false);
  const [currentQuoteId, setCurrentQuoteId] = useState(null);
  const [budgetImages, setBudgetImages] = useState([]);
  const draftQuote = useMemo(() => calculateQuote({ loads, settings }), [loads, settings]);
  const [quoteResult, setQuoteResult] = useState(() => calculateQuote({
    loads: buildInitialLoads(),
    settings: defaultQuoteSettings,
  }));
  const hasRequiredBudgetFields = budgetForm.client.trim() !== '' && budgetForm.clientVat.trim() !== '';

  useEffect(() => {
    let isCurrent = true;

    const loadSavedQuote = async () => {
      if (!quoteIdParam) {
        setCurrentQuoteId(null);
        return;
      }

      setIsLoadingSavedQuote(true);

      try {
        const savedQuote = await fetchQuote(quoteIdParam);
        if (!isCurrent) return;

        const restored = restoreQuoteState(savedQuote);
        const restoredLoads = restored.loads.length ? restored.loads : buildInitialLoads();
        const restoredSettings = { ...defaultQuoteSettings, ...restored.settings };
        const restoredQuoteResult = calculateQuote({
          loads: restoredLoads,
          settings: restoredSettings,
        });
        const restoredMethod = restored.method === 'air' ? 'air' : 'sea';

        setLoads(restoredLoads);
        setSettings(restoredSettings);
        setQuoteResult(restoredQuoteResult);
        setBudgetForm({ ...initialBudgetForm, ...restored.budgetForm });
        setSellerBudgetForm({ ...initialSellerBudgetForm, ...restored.sellerForm });
        setBudgetImages(restored.productImages || []);
        setSelectedQuoteMethod(restoredMethod);
        setBudgetMethod(restoredMethod);
        setCurrentQuoteId(savedQuote.id);
        setActiveTab('maritime');
      } catch (error) {
        console.error('No se pudo cargar el presupuesto para editar', error);
        window.alert('No se pudo cargar el presupuesto seleccionado. Volvé a intentarlo desde Presupuestos.');
      } finally {
        if (isCurrent) setIsLoadingSavedQuote(false);
      }
    };

    loadSavedQuote();

    return () => {
      isCurrent = false;
    };
  }, [quoteIdParam]);

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

  const updateBudgetForm = (field, value) => {
    setBudgetForm(currentForm => ({
      ...currentForm,
      [field]: field === 'clientTaxId' ? formatTaxId(value) : value,
    }));
  };

  const updateSellerBudgetForm = (field, value) => {
    setSellerBudgetForm(currentForm => ({
      ...currentForm,
      [field]: field === 'taxId' ? formatTaxId(value) : value,
    }));
  };

  const addBudgetImages = async (fileList) => {
    const imageFiles = Array.from(fileList || []).filter(file => file.type.startsWith('image/'));
    if (!imageFiles.length) return;

    const remainingSlots = MAX_BUDGET_IMAGES - budgetImages.length;
    if (remainingSlots <= 0) {
      window.alert(`Podés cargar hasta ${MAX_BUDGET_IMAGES} imágenes.`);
      return;
    }

    const filesToAdd = imageFiles.slice(0, remainingSlots);
    if (imageFiles.length > remainingSlots) {
      window.alert(`Se cargaron ${remainingSlots} imágenes. El máximo es ${MAX_BUDGET_IMAGES}.`);
    }

    try {
      const nextImages = await Promise.all(filesToAdd.map(fileToBudgetImage));
      setBudgetImages(currentImages => [...currentImages, ...nextImages].slice(0, MAX_BUDGET_IMAGES));
    } catch (error) {
      console.error('No se pudieron procesar las imágenes del presupuesto', error);
      window.alert('No se pudieron procesar una o más imágenes. Probá con archivos JPG o PNG.');
    }
  };

  const removeBudgetImage = (imageId) => {
    setBudgetImages(currentImages => currentImages.filter(image => image.id !== imageId));
  };

  const openBudgetModal = () => {
    setBudgetMethod(selectedQuoteMethod);
    setIsBudgetModalOpen(true);
  };

  const persistQuote = async (payload) => {
    const savedQuote = currentQuoteId
      ? await updateQuote(currentQuoteId, payload)
      : await createQuote(payload);

    setCurrentQuoteId(savedQuote.id);
    setSearchParams({ id: String(savedQuote.id) }, { replace: true });

    return savedQuote;
  };

  const submitBudgetForm = async (event) => {
    event.preventDefault();

    if (isGeneratingBudget || !hasRequiredBudgetFields) return;

    setIsGeneratingBudget(true);

    try {
      const pdfPayload = buildBudgetPdfPayload({
        form: budgetForm,
        sellerForm: sellerBudgetForm,
        productImages: budgetImages,
        loads,
        settings,
        quoteResult,
        method: budgetMethod,
      });
      const pdfFile = await createBudgetPdfFile({
        ...pdfPayload,
        headerSrc: budgetHeaderSrc,
        signatureStampSrc: budgetSignatureStampSrc,
        sellerSignatureSrc: budgetSellerSignatureSrc,
      });

      await persistQuote(buildBudgetPersistencePayload({
        pdfPayload,
        loads,
        settings,
        quoteResult,
        status: 'Pendiente de envío',
        pdfFile,
      }));

      downloadBudgetPdfFile(pdfFile);
      setIsBudgetModalOpen(false);
    } catch (error) {
      console.error('No se pudo generar el presupuesto PDF', error);
      window.alert('No se pudo generar o guardar el presupuesto. Revisá los datos e intentá nuevamente.');
    } finally {
      setIsGeneratingBudget(false);
    }
  };

  const runQuote = () => {
    setQuoteResult(draftQuote);
    setActiveTab('comparison');
  };

  const saveDraftQuote = async () => {
    if (isSavingDraft) return;

    setIsSavingDraft(true);

    try {
      const draftForm = {
        ...budgetForm,
        client: budgetForm.client.trim() || 'Borrador cotizador',
      };
      const pdfPayload = buildBudgetPdfPayload({
        form: draftForm,
        sellerForm: sellerBudgetForm,
        productImages: budgetImages,
        loads,
        settings,
        quoteResult: draftQuote,
        method: 'sea',
      });
      const pdfFile = await createBudgetPdfFile({
        ...pdfPayload,
        headerSrc: budgetHeaderSrc,
        signatureStampSrc: budgetSignatureStampSrc,
        sellerSignatureSrc: budgetSellerSignatureSrc,
      });

      await persistQuote(buildBudgetPersistencePayload({
        pdfPayload,
        loads,
        settings,
        quoteResult: draftQuote,
        status: 'Borrador',
        pdfFile,
      }));

      window.alert('Borrador guardado correctamente.');
    } catch (error) {
      console.error('No se pudo guardar el borrador del presupuesto', error);
      window.alert('No se pudo guardar el borrador. Revisá la conexión con el servidor e intentá nuevamente.');
    } finally {
      setIsSavingDraft(false);
    }
  };

  const resetQuote = () => {
    const resetLoads = buildInitialLoads();
    const resetSettings = { ...defaultQuoteSettings };
    setLoads(resetLoads);
    setSettings(resetSettings);
    setQuoteResult(calculateQuote({ loads: resetLoads, settings: resetSettings }));
    setBudgetForm({ ...initialBudgetForm });
    setSellerBudgetForm({ ...initialSellerBudgetForm });
    setBudgetImages([]);
    setSelectedQuoteMethod('sea');
    setBudgetMethod('sea');
    setIsGeneratingBudget(false);
    setIsSavingDraft(false);
    setCurrentQuoteId(null);
    setSearchParams({}, { replace: true });
    setIsBudgetModalOpen(false);
    setActiveTab('maritime');
  };

  const renderLoad = (load, index) => {
    const metrics = draftQuote.loads.find(item => item.id === load.id);
    const cbmInputValue = hasPositiveValue(load.directCbm)
      ? load.directCbm
      : formatInputNumber(metrics?.cbmByDimensions || 0);

    return (
      <S.LoadCard key={load.id}>
        <S.LoadHeader>
          <S.LoadTitle>
            <strong>{load.label || `Carga ${index + 1}`}</strong>
            <span>{formatNumber(metrics?.cbm || 0, 2)} CBM · {formatNumber(metrics?.weightTon || 0, 2)} TON</span>
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
            label="CBM total"
            unit="CBM"
            value={cbmInputValue}
            onChange={value => updateLoad(load.id, 'directCbm', value)}
          />
          <NumberField
            label="Largo caja"
            unit="CM"
            value={load.lengthCm}
            onChange={value => updateLoad(load.id, 'lengthCm', value)}
          />
          <NumberField
            label="Ancho caja"
            unit="CM"
            value={load.widthCm}
            onChange={value => updateLoad(load.id, 'widthCm', value)}
          />
          <NumberField
            label="Alto caja"
            unit="CM"
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

  const selectedQuote = quoteResult[selectedQuoteMethod];
  const selectedMethodLabel = methodLabels[selectedQuoteMethod];
  const selectedGroups = buildSeaGroups(
    activeTab === 'comparison' ? selectedQuote : draftQuote.sea,
    activeTab === 'comparison' ? selectedMethodLabel : methodLabels.sea
  );
  const displayedQuote = activeTab === 'comparison' ? quoteResult : draftQuote;
  const bestQuoteMethod = displayedQuote.winner === 'air' ? 'air' : 'sea';
  const bestQuote = displayedQuote[bestQuoteMethod];
  const bestQuoteLabel = methodLabels[bestQuoteMethod].toLowerCase();

  return (
    <S.ScreenWrapper>
      <S.Header>
        <S.TitleBlock>
          <S.Eyebrow>
            <IconCalculator />
            Motor de cotización
          </S.Eyebrow>
          <S.Title>Cotizador Imponect</S.Title>
          <S.Subtitle>
            Calculá importaciones marítimas, compará contra aéreo y prepará presupuestos con costos, impuestos y ganancia.
          </S.Subtitle>
        </S.TitleBlock>
        <S.HeaderSummaryRow>
          <S.HeaderSummary>
            <S.SummaryLabel>Total general {bestQuoteLabel}</S.SummaryLabel>
            <S.SummaryValueRow>
              <S.SummaryValue>{formatMoney(bestQuote.grandTotal)}</S.SummaryValue>
              <S.SummaryBadge>Precio más bajo</S.SummaryBadge>
            </S.SummaryValueRow>
            <S.SummaryMeta>{formatMoney(bestQuote.unitCost)} neto por caja</S.SummaryMeta>
          </S.HeaderSummary>
        </S.HeaderSummaryRow>
      </S.Header>

      <S.TabBar>
        <S.TabButton
          type="button"
          $active={activeTab === 'maritime'}
          onClick={() => setActiveTab('maritime')}
        >
          <IconShip />
          Cotizar
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
                <S.SettingsFields $columns={4}>
                  <NumberField label="Trade Assurance" unit="%" value={settings.tradeAssuranceRate} onChange={value => updateSetting('tradeAssuranceRate', value)} />
                  <NumberField label="Flete marítimo" unit="USD" value={settings.seaFreightRate} onChange={value => updateSetting('seaFreightRate', value)} />
                  <NumberField label="Seguro de carga" unit="USD" placeholder="Auto 1%" value={settings.cargoInsurance} onChange={value => updateSetting('cargoInsurance', value)} />
                  <NumberField label="Gastos de origen" unit="USD" value={settings.originExpenses} onChange={value => updateSetting('originExpenses', value)} />
                </S.SettingsFields>
              </S.SettingsPanel>

              <S.SettingsPanel>
                <S.PanelTitle>Impuestos</S.PanelTitle>
                <S.SettingsFields $columns={3}>
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
                <S.DestinationFields>
                  <S.DestinationRow $columns={4}>
                    <S.FiscalDepositAnchor>
                      <NumberField label="Depósito fiscal" unit="USD" placeholder="Auto tabla" value={settings.fiscalDepositOverride} onChange={value => updateSetting('fiscalDepositOverride', value)} />
                    </S.FiscalDepositAnchor>
                    <NumberField label="Gastos destino" unit="USD" value={settings.destinationExpenses} onChange={value => updateSetting('destinationExpenses', value)} />
                    <SelectField label="Carga IMO" unit="IMO" value={settings.imoCargo} onChange={value => updateSetting('imoCargo', value)}>
                      <option value="NO">NO</option>
                      <option value="SI">SÍ</option>
                    </SelectField>
                    <NumberField label="Despachante" unit="%" value={settings.customsBrokerRate} onChange={value => updateSetting('customsBrokerRate', value)} />
                  </S.DestinationRow>
                  <S.DestinationRow $columns={3}>
                    <NumberField label="Mínimo honorarios" unit="USD" value={settings.customsBrokerMinimum} onChange={value => updateSetting('customsBrokerMinimum', value)} />
                    <NumberField label="Gestión/firma" unit="USD" value={settings.managementFee} onChange={value => updateSetting('managementFee', value)} />
                    <NumberField label="Handling" unit="USD" value={settings.handling} onChange={value => updateSetting('handling', value)} />
                  </S.DestinationRow>
                  <S.DestinationRow $columns={3}>
                    <NumberField label="Consolidado" unit="USD" value={settings.consolidation} onChange={value => updateSetting('consolidation', value)} />
                    <NumberField label="Envío terrestre" unit="USD" value={settings.terrestrialFreight} onChange={value => updateSetting('terrestrialFreight', value)} />
                    <NumberField label="Ganancia" unit="%" value={settings.profitRate} onChange={value => updateSetting('profitRate', value)} />
                  </S.DestinationRow>
                </S.DestinationFields>
              </S.SettingsPanel>

              <S.SettingsPanel>
                <S.PanelTitle>Aéreo estimado</S.PanelTitle>
                <S.SettingsFields $columns={4}>
                  <NumberField label="Tarifa aérea" unit="USD/KG" value={settings.airRate} onChange={value => updateSetting('airRate', value)} />
                  <ReadOnlyField label="CBM total" unit="CBM" value={formatNumber(draftQuote.totals.cbm, 2)} />
                  <ReadOnlyField label="Peso cobrado" unit="KG" value={formatNumber(draftQuote.totals.airChargeableKg, 2)} />
                  <NumberField label="Flete aéreo total" unit="USD" placeholder="Auto tarifa" value={settings.airDeclaredFreight} onChange={value => updateSetting('airDeclaredFreight', value)} />
                </S.SettingsFields>
              </S.SettingsPanel>

              <S.FiscalScalePanel>
                <S.FiscalConnector>
                  <span>Depósito fiscal</span>
                </S.FiscalConnector>
                <S.FiscalScale>
                  {fiscalDepositRows.map(([range, amount]) => (
                    <S.FiscalScaleRow key={range}>
                      <span>{range}</span>
                      <strong>{amount}</strong>
                    </S.FiscalScaleRow>
                  ))}
                </S.FiscalScale>
              </S.FiscalScalePanel>
            </S.SettingsGrid>
          </S.MainColumn>

          <S.SideColumn>
            <S.MetricGrid>
              <MetricCard label="CBM total" value={`${formatNumber(draftQuote.totals.cbm, 2)} CBM`} />
              <MetricCard label="Peso total" value={`${formatNumber(draftQuote.totals.weightKg, 2)} KG`} />
              <MetricCard label="Toneladas" value={`${formatNumber(draftQuote.totals.weightTon, 2)} TON`} />
              <MetricCard label="Base W/M" value={formatNumber(draftQuote.totals.seaChargeableMeasure, 3)} />
            </S.MetricGrid>
            <BudgetSummary quote={draftQuote.sea} />
            <S.ActionPanel>
              <S.PrimaryButton type="button" onClick={runQuote} disabled={isLoadingSavedQuote}>
                <IconCalculator />
                Cotizar
              </S.PrimaryButton>
              <S.GoldOutlineButton type="button" onClick={saveDraftQuote} disabled={isSavingDraft || isLoadingSavedQuote}>
                <IconDrafts />
                {isSavingDraft ? 'Guardando...' : 'Guardar como borrador'}
              </S.GoldOutlineButton>
              <S.SecondaryButton type="button" onClick={resetQuote} disabled={isLoadingSavedQuote}>
                <IconRefresh />
                Restaurar
              </S.SecondaryButton>
            </S.ActionPanel>
            <S.BreakdownPanel>
              <S.PanelTitle>Vista previa marítima</S.PanelTitle>
              {selectedGroups.map(group => (
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
              selected={selectedQuoteMethod === 'sea'}
              onSelect={() => setSelectedQuoteMethod('sea')}
            />
            <MethodCard
              icon={<IconPlane />}
              title="Aéreo"
              quote={quoteResult.air}
              winner={quoteResult.winner === 'air'}
              selected={selectedQuoteMethod === 'air'}
              onSelect={() => setSelectedQuoteMethod('air')}
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

          <BudgetSummary quote={selectedQuote} />

          <S.SummaryBand>
            <MetricCard label="Cajas" value={formatNumber(quoteResult.totals.packages, 0)} />
            <MetricCard label={`Flete ${selectedMethodLabel.toLowerCase()}`} value={formatMoney(selectedQuote.freight)} />
            <MetricCard label="Recuperable" value={formatMoney(selectedQuote.recoverable)} />
            <MetricCard label="Precio venta neto/caja" value={formatMoney(selectedQuote.saleNet)} />
            <MetricCard label="Ganancia/caja" value={formatMoney(selectedQuote.unitProfit)} />
          </S.SummaryBand>

          <S.BreakdownPanel>
            <S.PanelHeader>
              <S.PanelTitle>Detalle {selectedMethodLabel.toLowerCase()}</S.PanelTitle>
              <S.PanelActions>
                <S.PrimaryButton type="button" onClick={openBudgetModal}>
                  <IconQuotes />
                  GENERAR PRESUPUESTO
                </S.PrimaryButton>
                <S.SecondaryButton type="button" onClick={() => setActiveTab('maritime')}>
                  Editar datos
                  <IconForward />
                </S.SecondaryButton>
              </S.PanelActions>
            </S.PanelHeader>
            {selectedGroups.map(group => (
              <QuoteGroup key={group.title} {...group} />
            ))}
          </S.BreakdownPanel>
        </S.ComparisonLayout>
      )}

      {isBudgetModalOpen && (
        <BudgetModal
          form={budgetForm}
          sellerForm={sellerBudgetForm}
          productImages={budgetImages}
          quote={quoteResult[budgetMethod]}
          method={budgetMethod}
          onChange={updateBudgetForm}
          onSellerChange={updateSellerBudgetForm}
          onMethodChange={setBudgetMethod}
          onImagesSelected={addBudgetImages}
          onImageRemove={removeBudgetImage}
          onClose={() => setIsBudgetModalOpen(false)}
          onSubmit={submitBudgetForm}
          isGenerating={isGeneratingBudget}
          canSubmit={hasRequiredBudgetFields}
        />
      )}
    </S.ScreenWrapper>
  );
};
