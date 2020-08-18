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
      authorId:Sequelize.DataTypes.INTEGER(11),
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("book");
  },
};
