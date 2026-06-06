const { Pool } = require('pg');

console.log('Initializing DB Pool with:');
console.log('- Host:', process.env.DB_HOST);
console.log('- Database:', process.env.DB_NAME);
console.log('- User:', process.env.DB_USER);
console.log('- Port:', process.env.DB_PORT);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  // Add schema support via search_path
  options: process.env.DB_SCHEMA ? `-c search_path=${process.env.DB_SCHEMA}` : undefined
});

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
