const { Sequelize } = require('sequelize');
const db = require('../database/client');

const { DataTypes } = Sequelize;

const address = db.define('address', {
    provinsi: {
        type: DataTypes.STRING
    },
    kota: {
        type: DataTypes.STRING
    },
    kecamatan: {
        type: DataTypes.STRING
    },
    jalan: {
        type: DataTypes.STRING
    },
    kodepos: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

module.exports = address;