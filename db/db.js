// Requiring pg module and destructuring out Pool
const { Pool } = require("pg")

const pool = new Pool({connectionString: process.env.POSTGRES_CONNECTION_URL,});
// What we’re making available to require into other files
module.exports = {
  query: (text, params) => {
    return pool.query(text, params);
  },
}