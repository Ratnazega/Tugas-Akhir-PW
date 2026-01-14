'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  }
};