"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("plans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      name: {
        type: Sequelize.STRING(100),
      },
      amount: {
        type: Sequelize.BIGINT(20),
      },
      currency: {
        type: Sequelize.STRING(5),
      },
      description: {
        type: Sequelize.STRING,
      },
      status_plans: {
        type: Sequelize.STRING(10),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("plans");
  },
};
