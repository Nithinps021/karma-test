"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("author", {
      id: {
        type: Sequelize.DataTypes.INTEGER(11),
        allowNull: false,
        autoincrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false,
      },
      createdAt:Sequelize.DataTypes.DATE,
      updatedAt:Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('author')
  },
};
