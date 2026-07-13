const express = require('express');
const router = express.Router();
const db = require('../db');

const QUOTE_STATUSES = ['Borrador', 'Pendiente de envío', 'Enviado'];
const EDITABLE_STATUSES = ['Borrador', 'Pendiente de envío'];
const QUOTE_DETAIL_FIELDS = [
  { name: 'cargas', type: 'json', defaultValue: [] },
  { name: 'trade_assurance', type: 'number' },
  { name: 'flete_maritimo_aereo', type: 'number' },
  { name: 'seguro_de_carga', type: 'number' },
  { name: 'gastos_de_origen', type: 'number' },
  { name: 'der', type: 'number' },
  { name: 'te', type: 'number' },
  { name: 'iva', type: 'number' },
  { name: 'iva_adicional', type: 'number' },
  { name: 'iibb', type: 'number' },
  { name: 'imp_ganancias', type: 'number' },
  { name: 'deposito_fiscal', type: 'number' },
  { name: 'gastos_destino', type: 'number' },
  { name: 'carga_imo', type: 'text' },
  { name: 'despachante', type: 'number' },
  { name: 'minimo_honorarios', type: 'number' },
  { name: 'gestion_firma', type: 'number' },
  { name: 'handling', type: 'number' },
  { name: 'consolidado', type: 'number' },
  { name: 'envio_terrestre', type: 'number' },
  { name: 'ganancia', type: 'number' },
  { name: 'tarifa_aerea', type: 'number' },
  { name: 'peso_cobrado', type: 'number' },
  { name: 'flete_aereo_total', type: 'number' },
];
const NUMERIC_QUOTE_FIELDS = ['amount', ...QUOTE_DETAIL_FIELDS
  .filter(field => field.type === 'number')
  .map(field => field.name)];

const hasOwn = (object, key) => Object.prototype.hasOwnProperty.call(object || {}, key);

const normalizeStatus = (value) => {
  const status = String(value || '').trim().toLowerCase();

  if (status === 'borrador') return 'Borrador';
  if (status === 'pendiente' || status === 'pendiente de envio' || status === 'pendiente de envío') {
    return 'Pendiente de envío';
  }
  if (status === 'enviado') return 'Enviado';

  return null;
};

const normalizeMethod = (value) => (value === 'air' ? 'air' : 'sea');

const normalizeAmount = (value) => {
  const amount = Number(value);
  return Number.isFinite(amount) && amount >= 0 ? amount : null;
};

const normalizePdfBase64 = (value) => String(value || '').replace(/^data:application\/pdf;base64,/, '');

const serializeQuote = (quote) => ({
  ...quote,
  ...NUMERIC_QUOTE_FIELDS.reduce((fields, field) => ({
    ...fields,
    [field]: quote[field] === null || quote[field] === undefined ? null : Number(quote[field] || 0),
  }), {}),
});

const normalizeJsonValue = (value, fallback) => {
  if (value === undefined) return JSON.stringify(fallback ?? null);
  if (typeof value !== 'string') return JSON.stringify(value ?? fallback ?? null);

  try {
    return JSON.stringify(JSON.parse(value));
  } catch {
    return JSON.stringify(fallback ?? null);
  }
};

const normalizeNumberValue = (value, fallback = null) => {
  if (value === undefined) return fallback;
  if (value === null || value === '') return null;

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
};

const normalizeTextValue = (value, fallback = null) => {
  if (value === undefined) return fallback;
  if (value === null) return null;
  return String(value);
};

const normalizeDetailValue = (body, currentQuote, field) => {
  const fallback = currentQuote?.[field.name] ?? field.defaultValue ?? null;
  if (!hasOwn(body, field.name)) {
    return field.type === 'json' ? normalizeJsonValue(undefined, fallback) : fallback;
  }

  if (field.type === 'json') return normalizeJsonValue(body[field.name], fallback);
  if (field.type === 'number') return normalizeNumberValue(body[field.name], fallback);
  return normalizeTextValue(body[field.name], fallback);
};

const getDetailValues = (body, currentQuote) => (
  QUOTE_DETAIL_FIELDS.map(field => normalizeDetailValue(body, currentQuote, field))
);

const getQuoteById = async (id) => {
  const result = await db.query('SELECT * FROM presupuestos WHERE id = $1 AND user_id = 1', [id]);
  return result.rows[0] ? serializeQuote(result.rows[0]) : null;
};

router.get('/', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT
        id,
        razon_social_cliente,
        generation_date,
        amount,
        status,
        method,
        budget_number,
        pdf_filename,
        created_at,
        updated_at
      FROM presupuestos
      WHERE user_id = 1
      ORDER BY generation_date DESC, id DESC
    `);

    res.json(result.rows.map(serializeQuote));
  } catch (error) {
    console.error('Quotes list error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const quote = await getQuoteById(req.params.id);
    if (!quote) {
      res.status(404).json({ error: 'Presupuesto no encontrado.' });
      return;
    }

    res.json(quote);
  } catch (error) {
    console.error('Quote detail error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/', async (req, res) => {
  const razonSocial = String(req.body?.razon_social_cliente || '').trim();
  const amount = normalizeAmount(req.body?.amount);
  const status = normalizeStatus(req.body?.status || 'Pendiente de envío');

  if (!razonSocial) {
    res.status(400).json({ error: 'La razón social del cliente es obligatoria.' });
    return;
  }

  if (amount === null) {
    res.status(400).json({ error: 'El monto del presupuesto no es válido.' });
    return;
  }

  if (!status) {
    res.status(400).json({ error: 'El estado del presupuesto no es válido.' });
    return;
  }

  try {
    const columns = [
      'user_id',
      'razon_social_cliente',
      'generation_date',
      'amount',
      'status',
      'method',
      'budget_number',
      'pdf_base64',
      'pdf_filename',
      'payload',
      ...QUOTE_DETAIL_FIELDS.map(field => field.name),
    ];
    const values = [
      1,
      razonSocial,
      req.body?.generation_date || new Date().toISOString(),
      amount,
      status,
      normalizeMethod(req.body?.method),
      req.body?.budget_number || null,
      normalizePdfBase64(req.body?.pdf_base64),
      req.body?.pdf_filename || null,
      req.body?.payload || {},
      ...getDetailValues(req.body || {}),
    ];
    const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
    const result = await db.query(
      `INSERT INTO presupuestos (${columns.join(', ')})
      VALUES (${placeholders})
      RETURNING *`,
      values
    );

    res.status(201).json(serializeQuote(result.rows[0]));
  } catch (error) {
    console.error('Quote create error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const currentQuote = await getQuoteById(req.params.id);
    if (!currentQuote) {
      res.status(404).json({ error: 'Presupuesto no encontrado.' });
      return;
    }

    if (!EDITABLE_STATUSES.includes(currentQuote.status)) {
      res.status(403).json({ error: 'Solo se pueden editar presupuestos en Borrador o Pendiente de envío.' });
      return;
    }

    const nextStatus = req.body?.status === undefined
      ? currentQuote.status
      : normalizeStatus(req.body.status);
    const nextAmount = req.body?.amount === undefined
      ? currentQuote.amount
      : normalizeAmount(req.body.amount);
    const nextReason = req.body?.razon_social_cliente === undefined
      ? currentQuote.razon_social_cliente
      : String(req.body.razon_social_cliente || '').trim();

    if (!nextReason) {
      res.status(400).json({ error: 'La razón social del cliente es obligatoria.' });
      return;
    }

    if (nextAmount === null) {
      res.status(400).json({ error: 'El monto del presupuesto no es válido.' });
      return;
    }

    if (!nextStatus) {
      res.status(400).json({ error: 'El estado del presupuesto no es válido.' });
      return;
    }

    const updateFields = [
      'razon_social_cliente',
      'amount',
      'status',
      'method',
      'budget_number',
      'pdf_base64',
      'pdf_filename',
      'payload',
      ...QUOTE_DETAIL_FIELDS.map(field => field.name),
    ];
    const values = [
      nextReason,
      nextAmount,
      nextStatus,
      req.body?.method === undefined ? currentQuote.method : normalizeMethod(req.body.method),
      req.body?.budget_number === undefined ? currentQuote.budget_number : (req.body.budget_number || null),
      req.body?.pdf_base64 === undefined ? currentQuote.pdf_base64 : normalizePdfBase64(req.body.pdf_base64),
      req.body?.pdf_filename === undefined ? currentQuote.pdf_filename : (req.body.pdf_filename || null),
      req.body?.payload === undefined ? currentQuote.payload : (req.body.payload || {}),
      ...getDetailValues(req.body || {}, currentQuote),
      req.params.id,
    ];
    const setClause = updateFields.map((field, index) => `${field} = $${index + 1}`).join(',\n        ');
    const result = await db.query(
      `UPDATE presupuestos
      SET
        ${setClause},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $${values.length} AND user_id = 1
      RETURNING *`,
      values
    );

    res.json(serializeQuote(result.rows[0]));
  } catch (error) {
    console.error('Quote update error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
