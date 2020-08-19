const { Sequelize, DataTypes } = require("sequelize");
const seque = require("../database/database");
const Books = require('../model/Books')
const Reviews = seque.define(
  "review",
  {
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
    book_Id: {
      type:DataTypes.INTEGER(11),
      allowNull:false,
    }
  },
  { freezeTableName: true }
);

module.exports=Reviews
