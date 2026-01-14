const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Item = require('./item')(sequelize, Sequelize.DataTypes);

module.exports = {
  sequelize,
  User,
  Item
};