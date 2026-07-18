const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../config/.env') });
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const { requireAppAuth } = require('./middleware/authMiddleware');
const parseCorsOrigins = (values) => values
  .split(',')
  .map(value => value.trim())
  .filter(Boolean)
  .map(value => {
    try {
      return new URL(value).origin;
    } catch {
      return value.replace(/\/+$/, '');
    }
  });
const allowedOrigins = Array.from(new Set(parseCorsOrigins(process.env.CORS_ORIGINS || process.env.FRONTEND_URL || '')));

console.log('Environment variables loaded:');
console.log('- PORT:', process.env.PORT);
console.log('- DB_NAME:', process.env.DB_NAME);
console.log('- DB_SCHEMA:', process.env.DB_SCHEMA);
console.log('- MICROSOFT_CLIENT_ID:', process.env.MICROSOFT_CLIENT_ID ? 'Loaded' : 'Not Loaded');

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked origin: ${origin}`));
  },
  credentials: true
}));
app.use(express.json({ limit: '70mb' }));

// Routes
app.use('/api/auth/google', require('./routes/auth/google'));
app.use('/api/webhooks/whatsapp', require('./routes/whatsappWebhook'));
app.use('/api', requireAppAuth);
app.use('/api/auth/microsoft', require('./routes/auth/microsoft'));
app.use('/api/auth/clickup', require('./routes/auth/clickup'));
app.use('/api/onedrive', require('./routes/onedrive'));
app.use('/api/clickup', require('./routes/clickup'));
app.use('/api/email', require('./routes/email'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/quotes', require('./routes/quotes'));
app.use('/api/crm', require('./routes/crm'));

app.get('/', (req, res) => {
  res.send('Imponect API Orchestrator is running');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'imponect-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/health/db', async (req, res) => {
  const db = require('./db');

  try {
    await db.query('SELECT 1');
    res.json({
      status: 'ok',
      service: 'imponect-api',
      database: 'ok',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      service: 'imponect-api',
      database: 'error',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Database Initialization
const initDb = async () => {
  const db = require('./db');
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE,
        name TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Ensure columns exist (migration for existing tables)
    await db.query(`
      ALTER TABLE users ADD COLUMN IF NOT EXISTS email TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS name TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS google_sub TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS picture TEXT;
      ALTER TABLE users ADD COLUMN IF NOT EXISTS last_login_at TIMESTAMP;
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS user_integrations (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        service_name TEXT,
        access_token TEXT,
        refresh_token TEXT,
        expires_at TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, service_name)
      );
    `);

    await db.query(`
      ALTER TABLE user_integrations ALTER COLUMN expires_at DROP NOT NULL;
      ALTER TABLE user_integrations ALTER COLUMN refresh_token DROP NOT NULL;
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS channel_integrations (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        channel TEXT NOT NULL,
        status TEXT DEFAULT 'needs_setup',
        phone_number TEXT,
        phone_number_id TEXT,
        business_account_id TEXT,
        access_token_encrypted TEXT,
        app_secret_encrypted TEXT,
        verify_token TEXT,
        metadata JSONB DEFAULT '{}',
        last_verified_at TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, channel)
      );
    `);

    await db.query(`
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS user_id INTEGER REFERENCES users(id);
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS channel TEXT;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'needs_setup';
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS phone_number TEXT;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS phone_number_id TEXT;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS business_account_id TEXT;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS access_token_encrypted TEXT;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS app_secret_encrypted TEXT;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS verify_token TEXT;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS metadata JSONB DEFAULT '{}';
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS last_verified_at TIMESTAMP;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
      ALTER TABLE channel_integrations ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS user_emails (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        imap_host TEXT DEFAULT 'imap.hostinger.com',
        imap_port INTEGER DEFAULT 993,
        smtp_host TEXT DEFAULT 'smtp.hostinger.com',
        smtp_port INTEGER DEFAULT 465,
        signature TEXT DEFAULT '',
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, email)
      );
    `);

    // Migration for signature column
    await db.query(`
      ALTER TABLE user_emails ADD COLUMN IF NOT EXISTS signature TEXT DEFAULT '';
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS ai_agents (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        name TEXT NOT NULL,
        description TEXT,
        type TEXT DEFAULT 'external',
        external_url TEXT,
        config JSONB DEFAULT '{}',
        icon_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS presupuestos (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        razon_social_cliente TEXT NOT NULL,
        generation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        amount NUMERIC(14, 2) DEFAULT 0,
        status TEXT DEFAULT 'Borrador',
        method TEXT DEFAULT 'sea',
        budget_number TEXT,
        pdf_base64 TEXT,
        pdf_filename TEXT,
        sent_channel TEXT,
        sent_at TIMESTAMP,
        payload JSONB DEFAULT '{}',
        cargas JSONB DEFAULT '[]',
        trade_assurance NUMERIC(14, 4),
        flete_maritimo_aereo NUMERIC(14, 2),
        seguro_de_carga NUMERIC(14, 2),
        gastos_de_origen NUMERIC(14, 2),
        der NUMERIC(8, 4),
        te NUMERIC(8, 4),
        iva NUMERIC(8, 4),
        iva_adicional NUMERIC(8, 4),
        iibb NUMERIC(8, 4),
        imp_ganancias NUMERIC(8, 4),
        deposito_fiscal NUMERIC(14, 2),
        gastos_destino NUMERIC(14, 2),
        carga_imo TEXT,
        despachante NUMERIC(8, 4),
        minimo_honorarios NUMERIC(14, 2),
        gestion_firma NUMERIC(14, 2),
        handling NUMERIC(14, 2),
        consolidado NUMERIC(14, 2),
        envio_terrestre NUMERIC(14, 2),
        ganancia NUMERIC(8, 4),
        tarifa_aerea NUMERIC(14, 2),
        peso_cobrado NUMERIC(14, 2),
        flete_aereo_total NUMERIC(14, 2),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS user_id INTEGER REFERENCES users(id);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS razon_social_cliente TEXT;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS generation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS amount NUMERIC(14, 2) DEFAULT 0;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'Borrador';
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS method TEXT DEFAULT 'sea';
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS budget_number TEXT;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS pdf_base64 TEXT;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS pdf_filename TEXT;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS sent_channel TEXT;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS sent_at TIMESTAMP;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS payload JSONB DEFAULT '{}';
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS cargas JSONB DEFAULT '[]';
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS trade_assurance NUMERIC(14, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS flete_maritimo_aereo NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS seguro_de_carga NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS gastos_de_origen NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS der NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS te NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS iva NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS iva_adicional NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS iibb NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS imp_ganancias NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS deposito_fiscal NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS gastos_destino NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS carga_imo TEXT;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS despachante NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS minimo_honorarios NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS gestion_firma NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS handling NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS consolidado NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS envio_terrestre NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS ganancia NUMERIC(8, 4);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS tarifa_aerea NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS peso_cobrado NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS flete_aereo_total NUMERIC(14, 2);
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
      ALTER TABLE presupuestos ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
    `);

    // Ensure user 1 exists
    const res = await db.query('SELECT * FROM users WHERE id = 1');
    if (res.rows.length === 0) {
      await db.query("INSERT INTO users (id, email, name) VALUES (1, 'admin@imponect.com', 'Admin User')");
      console.log('Default user created.');
    }

    await db.query(`
      SELECT setval(
        pg_get_serial_sequence('users', 'id'),
        COALESCE((SELECT MAX(id) FROM users), 1),
        true
      );
    `);
    console.log('Database tables verified.');
  } catch (err) {
    console.error('Database init error:', err);
  }
};
initDb().finally(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
