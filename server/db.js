const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "maplearms11",
    host: "localhost",
    port: 5432,
    database: "cuteanimalsdb"
});

module.exports = pool;