const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../config/.env') });
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

console.log('Environment variables loaded:');
console.log('- PORT:', process.env.PORT);
console.log('- DB_NAME:', process.env.DB_NAME);
console.log('- DB_SCHEMA:', process.env.DB_SCHEMA);
console.log('- MICROSOFT_CLIENT_ID:', process.env.MICROSOFT_CLIENT_ID ? 'Loaded' : 'Not Loaded');

app.use(cors());
app.use(express.json({ limit: '25mb' }));

// Routes
app.use('/api/auth/microsoft', require('./routes/auth/microsoft'));
app.use('/api/auth/clickup', require('./routes/auth/clickup'));
app.use('/api/onedrive', require('./routes/onedrive'));
app.use('/api/clickup', require('./routes/clickup'));
app.use('/api/email', require('./routes/email'));
app.use('/api/ai', require('./routes/ai'));

app.get('/', (req, res) => {
  res.send('Imponect API Orchestrator is running');
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

    // Ensure user 1 exists
    const res = await db.query('SELECT * FROM users WHERE id = 1');
    if (res.rows.length === 0) {
      await db.query("INSERT INTO users (id, email, name) VALUES (1, 'admin@imponect.com', 'Admin User')");
      console.log('Default user created.');
    }
    console.log('Database tables verified.');
  } catch (err) {
    console.error('Database init error:', err);
  }
};
initDb();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
