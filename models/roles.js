const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Role = sequelize.define('Role', {
  id: {
    type: DataTypes.STRING(3),
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

module.exports = Role;
