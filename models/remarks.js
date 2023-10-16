const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Remark = sequelize.define('Remark', {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  // Other fields...
});

module.exports = Remark;
