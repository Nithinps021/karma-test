"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("review", {
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      review: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      book_Id: {
        type:Sequelize.DataTypes.INTEGER(11),
        allowNull:false,
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("review");
  },
};
