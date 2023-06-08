const { Sequelize } = require("sequelize");
const db = require("../database/client");

const { DataTypes } = Sequelize;

const Bookmark = db.define(
  "bookmarks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    place_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    long: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Bookmark;
