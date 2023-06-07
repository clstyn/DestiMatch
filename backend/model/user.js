const { Sequelize } = require('sequelize');
const db = require('../database/client');

const { DataTypes } = Sequelize;

const users = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = users;