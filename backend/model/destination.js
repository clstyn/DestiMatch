const { Sequelize } = require('sequelize');
const db = require('../database/client');
const detail = require('./address')

const { DataTypes } = Sequelize;

const destination = db.define('destinations', {
    name: {
        type: DataTypes.STRING
    },
    alamat: {
        type: DataTypes.STRING,
        references: {
            model: detail,
            key: 'provinsi'
        }
    },
    harga: {
        type: DataTypes.STRING
    },
    tipe: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

module.exports = destination;