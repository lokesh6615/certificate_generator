const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING(8),
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  RoleId: {
    type: DataTypes.STRING(3), // This field will store the Role ID (e.g., 'R01', 'R04')
    allowNull: false,
  },
  // Other fields...
});

module.exports = User;
