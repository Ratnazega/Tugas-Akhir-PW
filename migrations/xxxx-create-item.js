'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      item_name: Sequelize.STRING,
      category: Sequelize.STRING,
      price: Sequelize.INTEGER,
      stock_qty: Sequelize.INTEGER,
      min_stock: Sequelize.INTEGER,
      storage_location: Sequelize.STRING,
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      created_by: Sequelize.STRING,
      updated_by: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('Items');
  }
};