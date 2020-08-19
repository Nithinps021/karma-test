const { Sequelize, DataTypes } = require("sequelize");
const seque = require("../database/database");
const Author=require('../model/Author')

const Books = seque.define(
  "book",
  {
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    author_id:{
      type:DataTypes.INTEGER(11),
      allowNull: false,
    }
  },
  { freezeTableName: true }
);

module.exports = Books;
