const Pool = require("pg").Pool
require('dotenv').config()

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
});

module.exports = pool;