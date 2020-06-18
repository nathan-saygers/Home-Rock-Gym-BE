const knex = require("knex")("development");

require("dotenv").config();

const config = require("../knexfile.js");

const dbEnv = process.env.DB_ENV;

module.exports = knex(config[dbEnv]);