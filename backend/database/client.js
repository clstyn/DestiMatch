const { Client } = require('pg')
const { Sequelize } = require('sequelize')

const db = new Sequelize(process.env.POSTGRES_DB, 'postgres', 'atA_251201', {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres'
});

module.exports = db;