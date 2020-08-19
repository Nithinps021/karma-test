"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("book", {
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      bookname: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      price:{
        type:Sequelize.DataTypes.FLOAT,
        allowNull:false
      },
      author_id:{
        type:Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("book");
  },
};
