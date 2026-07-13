const A4_PAGE_SIZE_MM = [210, 297];
const PAGE_WIDTH = A4_PAGE_SIZE_MM[0];
const MARGIN = 4;
const CONTENT_WIDTH = PAGE_WIDTH - (MARGIN * 2);
const HEADER_HEIGHT = 43.4;

const COLORS = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  teal: [9, 62, 73],
  gold: [184, 124, 35],
  gray: [217, 217, 217],
  lightGray: [242, 242, 242],
  red: [235, 0, 0],
};

const formatMoney = (value) => new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
}).format(Number.isFinite(Number(value)) ? Number(value) : 0);

const formatNumber = (value, digits = 2) => new Intl.NumberFormat('es-AR', {
  maximumFractionDigits: digits,
  minimumFractionDigits: digits,
}).format(Number.isFinite(Number(value)) ? Number(value) : 0);

const formatDate = (date = new Date()) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${day}/${month}/${date.getFullYear()}`;
};

const safeText = (value, fallback = '-') => {
  const text = String(value ?? '').trim();
  return text || fallback;
};

const sanitizeFileName = (value) => safeText(value, 'cliente')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-zA-Z0-9_-]+/g, '-')
  .replace(/-+/g, '-')
  .replace(/^-|-$/g, '')
  .slice(0, 48) || 'cliente';

const setFillColor = (doc, color) => doc.setFillColor(color[0], color[1], color[2]);
const setDrawColor = (doc, color) => doc.setDrawColor(color[0], color[1], color[2]);
const setTextColor = (doc, color) => doc.setTextColor(color[0], color[1], color[2]);

const arrayBufferToBase64 = (buffer) => {
  const bufferConstructor = globalThis.Buffer;

  if (typeof bufferConstructor !== 'undefined') {
    return bufferConstructor.from(buffer).toString('base64');
  }

  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';

  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }

  return btoa(binary);
};

const fetchImageAsDataUrl = async (src) => {
  if (!src) return null;

  try {
    const response = await fetch(src);
    if (!response.ok) return null;
    const blob = await response.blob();
    const buffer = await blob.arrayBuffer();
    const base64 = arrayBufferToBase64(buffer);

    return `data:${blob.type || 'image/png'};base64,${base64}`;
  } catch {
    return null;
  }
};

const drawCell = (doc, {
  x,
  y,
  width,
  height,
  text = '',
  fill = COLORS.white,
  textColor = COLORS.black,
  border = COLORS.black,
  fontSize = 7,
  bold = false,
  align = 'left',
  valign = 'middle',
  padding = 1.2,
  maxLines,
  wrap = true,
  minFontSize = 6,
  centerBaseline = false,
}) => {
  setFillColor(doc, fill);
  setDrawColor(doc, border);
  doc.rect(x, y, width, height, 'FD');

  setTextColor(doc, textColor);
  doc.setFont('helvetica', bold ? 'bold' : 'normal');
  doc.setFontSize(fontSize);

  const content = String(text ?? '');
  const availableWidth = Math.max(width - (padding * 2), 1);
  let resolvedFontSize = fontSize;
  let lines = wrap ? doc.splitTextToSize(content, availableWidth) : [content];

  if (!wrap && content) {
    while (resolvedFontSize > minFontSize && doc.getTextWidth(content) > availableWidth) {
      resolvedFontSize -= 0.2;
      doc.setFontSize(resolvedFontSize);
    }
    lines = [content];
  }

  const visibleLines = maxLines ? lines.slice(0, maxLines) : lines;
  const lineHeight = resolvedFontSize * 0.39;
  const blockHeight = visibleLines.length * lineHeight;
  const textY = valign === 'top'
    ? y + padding + (resolvedFontSize * 0.33)
    : y + ((height - blockHeight) / 2) + (resolvedFontSize * 0.36);
  const textX = align === 'right'
    ? x + width - padding
    : align === 'center'
      ? x + (width / 2)
      : x + padding;

  if (centerBaseline && visibleLines.length === 1) {
    doc.text(visibleLines[0], textX, y + (height / 2), { align, baseline: 'middle' });
    return;
  }

  doc.text(visibleLines, textX, textY, { align });
};

const getWrappedLines = (doc, text, width, {
  fontSize,
  bold = false,
  padding = 1.2,
  maxLines,
}) => {
  doc.setFont('helvetica', bold ? 'bold' : 'normal');
  doc.setFontSize(fontSize);

  const availableWidth = Math.max(width - (padding * 2), 1);
  const lines = doc.splitTextToSize(String(text ?? ''), availableWidth);
  return maxLines ? lines.slice(0, maxLines) : lines;
};

const drawSectionBar = (doc, y, title, fill = COLORS.teal) => {
  const height = 8;

  setFillColor(doc, fill);
  setDrawColor(doc, fill);
  doc.rect(MARGIN, y, CONTENT_WIDTH, height, 'FD');
  setTextColor(doc, COLORS.white);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15.5);
  doc.text(title, PAGE_WIDTH / 2, y + (height / 2) + 1.7, { align: 'center' });
};

const drawFittedText = (doc, text, x, y, maxWidth, {
  fontSize = 8,
  minFontSize = 6,
  bold = false,
  align = 'left',
  color = COLORS.black,
} = {}) => {
  const content = String(text ?? '');
  let resolvedFontSize = fontSize;

  setTextColor(doc, color);
  doc.setFont('helvetica', bold ? 'bold' : 'normal');
  doc.setFontSize(resolvedFontSize);

  while (resolvedFontSize > minFontSize && doc.getTextWidth(content) > maxWidth) {
    resolvedFontSize -= 0.2;
    doc.setFontSize(resolvedFontSize);
  }

  doc.text(content, x, y, { align });
};

const drawHeader = (doc, title, headerDataUrl) => {
  if (headerDataUrl) {
    doc.addImage(headerDataUrl, 'PNG', 0, 0, PAGE_WIDTH, HEADER_HEIGHT);
  } else {
    setFillColor(doc, COLORS.teal);
    doc.rect(0, 0, PAGE_WIDTH, HEADER_HEIGHT, 'F');
    setTextColor(doc, COLORS.white);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('IMPONECT', PAGE_WIDTH / 2, 20, { align: 'center' });
    doc.setFontSize(10);
    doc.text('IMPORTACIONES ESTRATÉGICAS', PAGE_WIDTH / 2, 27, { align: 'center' });
  }

  drawSectionBar(doc, HEADER_HEIGHT + 2, title);
};

const drawImage = (doc, imageDataUrl, x, y, width, height, opacity = 1) => {
  if (!imageDataUrl) return;

  if (opacity < 1) {
    doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity }));
  }

  doc.addImage(imageDataUrl, 'PNG', x, y, width, height);

  if (opacity < 1) {
    doc.restoreGraphicsState();
  }
};

const drawClientInfo = (doc, form, quoteMethodLabel, dateText) => {
  const y = 63;
  const rowHeight = 8;
  const leftX = MARGIN;
  const tablePaddingX = 2.4;
  const halfWidth = CONTENT_WIDTH / 2;
  const labelWidth = 48;

  drawFittedText(doc, dateText, PAGE_WIDTH - MARGIN, 57.8, 42, {
    fontSize: 13.4,
    minFontSize: 9.8,
    bold: true,
    align: 'right',
  });

  const rows = [
    [
      ['RAZÓN SOCIAL / CLIENTE:', safeText(form.client)],
      ['DOMICILIO CLIENTE:', safeText(form.clientAddress)],
    ],
    [
      ['CUIT / DNI CLIENTE:', safeText(form.clientTaxId)],
      ['TELÉFONO / EMAIL:', safeText(form.clientContact)],
    ],
    [
      ['IVA:', safeText(form.clientVat)],
      ['NÚMERO DE PRESUPUESTO:', safeText(form.budgetNumber)],
    ],
    [
      ['TIPO DE PRESUPUESTO:', quoteMethodLabel],
      ['FECHA:', dateText],
    ],
  ];

  rows.forEach((row, rowIndex) => {
    const rowY = y + (rowIndex * rowHeight);
    row.forEach(([label, value], colIndex) => {
      const x = leftX + (colIndex * halfWidth) + tablePaddingX;
      const textY = rowY + 3.8;
      const valueWidth = halfWidth - labelWidth - tablePaddingX - 2;

      drawFittedText(doc, label, x + 1, textY, labelWidth - 2, {
        fontSize: 9.6,
        minFontSize: 6.8,
        bold: true,
      });
      drawFittedText(doc, value, x + labelWidth, textY, valueWidth, {
        fontSize: 9.2,
        minFontSize: 6.4,
      });
    });
  });

  setDrawColor(doc, COLORS.black);
  doc.rect(leftX, y - 4, CONTENT_WIDTH, 37);
  doc.line(leftX, y + 33, leftX + CONTENT_WIDTH, y + 33);
};

const buildServiceRows = (quote) => {
  const netBudgetTotal = Math.max((quote?.saleNet || 0) * Math.max(quote?.packageCount || 1, 1), 0);
  const merchandiseAndFreight = Math.min(
    Math.max((quote?.fobAdjusted || 0) + (quote?.freight || 0), 0),
    netBudgetTotal
  );
  const importService = Math.max(netBudgetTotal - merchandiseAndFreight, 0);

  return [
    {
      item: '1',
      description: 'Servicio de cotizacion (analisis de proveedores, negociacion, documentacion, flete, impuestos estimados)',
      quantity: 0,
      unitPrice: 50,
      subtotal: 0,
    },
    {
      item: '2',
      description: 'Compra de muestra para control de calidad + envio',
      quantity: 0,
      unitPrice: 0,
      subtotal: 0,
    },
    {
      item: '3',
      description: 'Control de calidad / fotos y videos / reunion en vivo',
      quantity: 0,
      unitPrice: 50,
      subtotal: 0,
    },
    {
      item: '4',
      description: 'Compra de mercaderia + envio',
      quantity: merchandiseAndFreight > 0 ? 1 : 0,
      unitPrice: merchandiseAndFreight,
      subtotal: merchandiseAndFreight,
    },
    {
      item: '5',
      description: 'Servicio de importacion (pickup, consolidacion, envio, tributacion, impuestos, nacionalizacion, despacho)',
      quantity: importService > 0 ? 1 : 0,
      unitPrice: importService,
      subtotal: importService,
    },
  ];
};

const drawServiceTable = (doc, quote) => {
  const startY = 107;
  const sectionHeight = 6.8;
  const headerHeight = 6.7;
  const rowHeight = 16;
  const columns = [
    { key: 'item', label: 'ITEM', width: 28, align: 'right' },
    { key: 'description', label: 'DESCRIPCIÓN', width: 70, align: 'left' },
    { key: 'quantity', label: 'CANTIDAD', width: 42, align: 'right' },
    { key: 'unitPrice', label: 'PRECIO UNITARIO', width: 31, align: 'right' },
    { key: 'subtotal', label: 'SUBTOTAL', width: 31, align: 'right' },
  ];

  drawCell(doc, {
    x: MARGIN,
    y: startY,
    width: CONTENT_WIDTH,
    height: sectionHeight,
    text: 'DETALLE DE SERVICIOS (COTIZACIÓN / IMPORTACIÓN) Y/O PRODUCTOS',
    fill: COLORS.gold,
    textColor: COLORS.white,
    fontSize: 9.1,
    bold: true,
    wrap: false,
    minFontSize: 7.2,
  });

  let x = MARGIN;
  columns.forEach((column) => {
    drawCell(doc, {
      x,
      y: startY + sectionHeight,
      width: column.width,
      height: headerHeight,
      text: column.label,
      fill: COLORS.teal,
      textColor: COLORS.white,
      fontSize: 9.1,
      bold: true,
      align: column.align === 'left' ? 'left' : 'center',
      wrap: false,
      minFontSize: 7,
    });
    x += column.width;
  });

  const rows = buildServiceRows(quote);
  rows.forEach((row, rowIndex) => {
    const y = startY + sectionHeight + headerHeight + (rowIndex * rowHeight);
    const fill = rowIndex % 2 === 0 ? COLORS.gray : COLORS.lightGray;
    x = MARGIN;

    columns.forEach((column) => {
      const value = column.key === 'unitPrice' || column.key === 'subtotal'
        ? formatMoney(row[column.key])
        : row[column.key];

      drawCell(doc, {
        x,
        y,
        width: column.width,
        height: rowHeight,
        text: value,
        fill,
        fontSize: column.key === 'description' ? 8.7 : 8.9,
        align: column.align,
        valign: 'middle',
        maxLines: column.key === 'description' ? 3 : 1,
        wrap: column.key === 'description',
        minFontSize: 6.8,
      });
      x += column.width;
    });
  });

  const subtotal = rows.reduce((total, row) => total + row.subtotal, 0);
  const iva = subtotal * 0.21;
  const total = subtotal + iva;

  return {
    bottomY: startY + sectionHeight + headerHeight + (rows.length * rowHeight),
    subtotal,
    iva,
    total,
  };
};

const drawTotals = (doc, y, totals) => {
  const leftWidth = 98;
  const totalColumnWidth = (CONTENT_WIDTH - leftWidth) / 3;
  drawCell(doc, {
    x: MARGIN,
    y,
    width: leftWidth,
    height: 10,
    text: 'Detalle de productos en Hoja 2',
    fill: COLORS.white,
    textColor: COLORS.red,
    border: COLORS.black,
    fontSize: 13.4,
    align: 'center',
    wrap: false,
    minFontSize: 10.2,
    centerBaseline: true,
  });

  const totalRows = [
    ['SUBTOTAL', totals.subtotal],
    ['IVA', totals.iva],
    ['TOTAL', totals.total],
  ];

  let x = MARGIN + leftWidth;
  totalRows.forEach(([label, value]) => {
    drawCell(doc, {
      x,
      y,
      width: totalColumnWidth,
      height: 5,
      text: label,
      fill: COLORS.teal,
      textColor: COLORS.white,
      fontSize: 9.3,
      bold: true,
      wrap: false,
    });
    drawCell(doc, {
      x,
      y: y + 5,
      width: totalColumnWidth,
      height: 5,
      text: formatMoney(value),
      fill: COLORS.gray,
      fontSize: 9.2,
      bold: true,
      align: 'right',
      wrap: false,
      minFontSize: 7,
    });
    x += totalColumnWidth;
  });
};

const drawSellerInfo = (doc, sellerForm, signatureStampDataUrl, sellerSignatureDataUrl) => {
  const x = MARGIN;
  const y = 236;
  const width = 140;
  const rowHeight = 5.6;
  const labelWidth = 35;

  drawCell(doc, {
    x,
    y,
    width,
    height: 6.6,
    text: 'INFO VENDEDOR',
    fill: COLORS.white,
    fontSize: 9.5,
    bold: true,
    align: 'center',
    wrap: false,
  });

  const rows = [
    ['CUIT:', safeText(sellerForm.taxId)],
    ['CONDICIÓN FISCAL:', safeText(sellerForm.fiscalCondition)],
    ['DOMICILIO FISCAL:', safeText(sellerForm.fiscalAddress)],
    ['TELÉFONO / EMAIL:', safeText(sellerForm.contact)],
    ['VALIDEZ POR:', safeText(sellerForm.validity)],
  ];

  rows.forEach(([label, value], index) => {
    const rowY = y + 6.6 + (index * rowHeight);
    drawCell(doc, {
      x,
      y: rowY,
      width: labelWidth,
      height: rowHeight,
      text: label,
      fill: COLORS.white,
      fontSize: 8.4,
      bold: true,
      wrap: false,
      minFontSize: 6.4,
    });
    drawCell(doc, {
      x: x + labelWidth,
      y: rowY,
      width: width - labelWidth,
      height: rowHeight,
      text: value,
      fill: COLORS.white,
      fontSize: 8.2,
      wrap: false,
      minFontSize: 6.4,
    });
  });

  drawImage(doc, signatureStampDataUrl, 158, 240, 36, 28.4);
  drawImage(doc, sellerSignatureDataUrl, 151, 238, 50, 26);

  if (!signatureStampDataUrl) {
    setDrawColor(doc, [95, 95, 95]);
    doc.line(160, 260, 192, 260);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    setTextColor(doc, [95, 95, 95]);
    doc.text('GERENTE COMERCIAL', 176, 266, { align: 'center' });
  }
};

const drawPageOne = ({
  doc,
  headerDataUrl,
  signatureStampDataUrl,
  sellerSignatureDataUrl,
  form,
  sellerForm,
  quote,
  methodLabel,
}) => {
  drawHeader(doc, 'PRESUPUESTO', headerDataUrl);
  drawClientInfo(doc, form, methodLabel, formatDate());

  setDrawColor(doc, COLORS.teal);
  doc.setLineWidth(0.4);
  doc.line(MARGIN, 98, PAGE_WIDTH - MARGIN, 98);
  doc.setLineWidth(0.2);

  const totals = drawServiceTable(doc, quote);
  drawTotals(doc, totals.bottomY + 15, totals);
  drawSellerInfo(doc, sellerForm, signatureStampDataUrl, sellerSignatureDataUrl);
};

const getLoadDetail = (load) => {
  const dimensions = `${formatNumber(load.lengthCm || 0, 0)} x ${formatNumber(load.widthCm || 0, 0)} x ${formatNumber(load.heightCm || 0, 0)} cm`;
  return `${dimensions}\n${formatNumber(load.cbm || 0, 2)} CBM / ${formatNumber(load.weightKg || 0, 2)} KG`;
};

const drawMerchandiseTable = (doc, loads) => {
  const y = 58;
  const headerHeight = 6.8;
  const minRowHeight = 11.5;
  const bodyFontSize = 9;
  const bodyLineHeight = bodyFontSize * 0.39;
  const columns = [
    { key: 'item', label: 'ITEM', width: 28, align: 'center' },
    { key: 'product', label: 'PRODUCTO', width: 70, align: 'center' },
    { key: 'quantity', label: 'CANTIDAD', width: 42, align: 'center' },
    { key: 'detail', label: 'DETALLE', width: 39, align: 'center' },
    { key: 'image', label: 'IMAGEN', width: 23, align: 'center' },
  ];

  let x = MARGIN;
  columns.forEach((column) => {
    drawCell(doc, {
      x,
      y,
      width: column.width,
      height: headerHeight,
      text: column.label,
      fill: COLORS.teal,
      textColor: COLORS.white,
      fontSize: 9.2,
      bold: true,
      align: 'center',
      wrap: false,
      minFontSize: 7.1,
    });
    x += column.width;
  });

  const normalizedLoads = loads.length ? loads : [{ label: 'Carga 1', packages: 0, cbm: 0, weightKg: 0 }];
  let currentY = y + headerHeight;

  normalizedLoads.slice(0, 8).forEach((load, index) => {
    const fill = index % 2 === 0 ? COLORS.gray : COLORS.lightGray;
    const row = {
      item: String(index + 1),
      product: safeText(load.label, `Carga ${index + 1}`),
      quantity: `${formatNumber(load.packages || 0, 0)} caja${Number(load.packages) === 1 ? '' : 's'}`,
      detail: getLoadDetail(load),
      image: 'Pendiente',
    };
    const productLines = getWrappedLines(doc, row.product, columns[1].width, {
      fontSize: bodyFontSize,
      maxLines: 2,
    });
    const detailLines = getWrappedLines(doc, row.detail, columns[3].width, {
      fontSize: bodyFontSize,
      maxLines: 3,
    });
    const rowHeight = Math.max(
      minRowHeight,
      (Math.max(productLines.length, detailLines.length) * bodyLineHeight) + 4.2
    );

    x = MARGIN;
    columns.forEach((column) => {
      const canWrap = column.key === 'product' || column.key === 'detail';
      drawCell(doc, {
        x,
        y: currentY,
        width: column.width,
        height: rowHeight,
        text: row[column.key],
        fill,
        fontSize: canWrap ? bodyFontSize : 8.9,
        align: column.align,
        valign: 'middle',
        maxLines: column.key === 'detail' ? 3 : column.key === 'product' ? 2 : 1,
        wrap: canWrap,
        minFontSize: 6.8,
      });
      x += column.width;
    });

    currentY += rowHeight;
  });

  const imageY = currentY + 8;
  drawCell(doc, {
    x: 22,
    y: imageY,
    width: 166,
    height: 64,
    text: 'Espacio reservado para imagenes de producto',
    fill: COLORS.white,
    border: COLORS.lightGray,
    textColor: [120, 120, 120],
    fontSize: 14,
    align: 'center',
    wrap: false,
    minFontSize: 10,
  });
};

const drawPageTwo = ({ doc, headerDataUrl, loads }) => {
  doc.addPage();
  drawHeader(doc, 'DETALLE DE MERCADERÍA', headerDataUrl);
  drawMerchandiseTable(doc, loads);
};

const getPdfBase64 = (doc) => {
  const dataUri = doc.output('datauristring');
  return dataUri.includes(',') ? dataUri.split(',')[1] : dataUri;
};

const buildBudgetPdf = async ({
  form,
  sellerForm,
  quote,
  quoteResult,
  method,
  headerSrc,
  signatureStampSrc,
  sellerSignatureSrc,
}) => {
  const [{ jsPDF }, headerDataUrl, signatureStampDataUrl, sellerSignatureDataUrl] = await Promise.all([
    import('jspdf'),
    fetchImageAsDataUrl(headerSrc),
    fetchImageAsDataUrl(signatureStampSrc),
    fetchImageAsDataUrl(sellerSignatureSrc),
  ]);
  const methodLabel = method === 'air' ? 'Aéreo' : 'Marítimo';
  const methodFileLabel = method === 'air' ? 'aereo' : 'maritimo';
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: A4_PAGE_SIZE_MM,
  });

  doc.setProperties({
    title: `Presupuesto ${methodLabel} - Imponect`,
    subject: 'Presupuesto de importacion',
    author: 'Imponect',
    creator: 'Imponect App',
  });

  drawPageOne({
    doc,
    headerDataUrl,
    signatureStampDataUrl,
    sellerSignatureDataUrl,
    form,
    sellerForm,
    quote,
    methodLabel,
  });

  drawPageTwo({
    doc,
    headerDataUrl,
    loads: quoteResult?.loads || [],
  });

  const budgetNumber = sanitizeFileName(form.budgetNumber || formatDate().replace(/\//g, '-'));
  const client = sanitizeFileName(form.client);
  const filename = `presupuesto-${methodFileLabel}-${budgetNumber}-${client}.pdf`;

  return { doc, filename };
};

export const createBudgetPdfFile = async (options) => {
  const { doc, filename } = await buildBudgetPdf(options);

  return {
    filename,
    base64: getPdfBase64(doc),
    blob: doc.output('blob'),
  };
};

export const downloadBudgetPdfFile = ({ blob, filename }) => {
  if (!blob) return;

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || 'presupuesto-imponect.pdf';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

export const generateBudgetPdf = async (options) => {
  const file = await createBudgetPdfFile(options);

  downloadBudgetPdfFile(file);

  return {
    filename: file.filename,
    base64: file.base64,
  };
};
