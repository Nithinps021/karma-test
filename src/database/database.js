const Sequelize = require("sequelize");
const { Model } = require("sequelize");

const sequlize = new Sequelize("karma", "root", "Mydatabase@123", {
  host: "localhost",
  dialect:'mysql'
});

module.exports=sequlize;
