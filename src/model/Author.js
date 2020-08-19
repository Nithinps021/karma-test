const { Sequelize, DataTypes } = require("sequelize");
const seque = require("../database/database");

module.exports = seque.define(
  "author",
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    
  },
  { freezeTableName: true }
);
