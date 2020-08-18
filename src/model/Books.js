const { Sequelize, DataTypes } = require("sequelize");
const seque = require("../database/database");

module.exports = seque.define("books", {
  id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  bookname: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
});
