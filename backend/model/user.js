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
    email: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.ENUM('Admin', 'user')
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
})

module.exports = users;