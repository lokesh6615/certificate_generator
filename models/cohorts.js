const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Cohort = sequelize.define('Cohort', {
  id: {
    type: DataTypes.STRING(8),
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  mode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  institute: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Other fields...
});

module.exports = Cohort;
