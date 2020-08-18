const { Sequelize, DataTypes } = require("sequelize");
const seque = require("../database/database");

module.exports = seque.define("reviews", {
  id: {
    type: DataTypes.INTEGER(11),
    unique: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  review: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  boookId: DataTypes.INTEGER(11),
});
