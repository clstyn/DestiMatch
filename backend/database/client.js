const { Client } = require("pg");
const { Sequelize } = require("sequelize");

const db = new Sequelize("destimatch", "postgres", "postgres", {
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
});

module.exports = db;
