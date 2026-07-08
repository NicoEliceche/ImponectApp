const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';
const hasDatabaseUrl = Boolean(process.env.DATABASE_URL);
const dbConfig = hasDatabaseUrl
  ? {
      connectionString: process.env.DATABASE_URL,
      ssl: isProduction ? { rejectUnauthorized: false } : undefined
    }
  : {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      options: process.env.DB_SCHEMA ? `-c search_path=${process.env.DB_SCHEMA}` : undefined
    };

console.log('Initializing DB Pool with:');
console.log('- Mode:', hasDatabaseUrl ? 'DATABASE_URL' : 'discrete env vars');
console.log('- Host:', hasDatabaseUrl ? 'from DATABASE_URL' : process.env.DB_HOST);
console.log('- Database:', hasDatabaseUrl ? 'from DATABASE_URL' : process.env.DB_NAME);
console.log('- User:', hasDatabaseUrl ? 'from DATABASE_URL' : process.env.DB_USER);
console.log('- Port:', hasDatabaseUrl ? 'from DATABASE_URL' : process.env.DB_PORT);

const pool = new Pool(dbConfig);

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

module.exports = {
  query: (text, params) => {
    // console.log('Executing query:', text, params);
    return pool.query(text, params);
  },
  pool // Export pool if needed for other operations
};
