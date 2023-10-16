const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize');
const Cohort = require('./cohorts');
const User = require('./users');

class CohortMember extends Model {}

CohortMember.init(
  {
    cohort_id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      references: {
        model: Cohort, // This references the 'cohorts' table
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      references: {
        model: User, // This references the 'users' table
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'CohortMember',
    timestamps: false, // Set this to false if you don't need createdAt and updatedAt fields
    // Use the unique constraint for the combination of cohort_id and user_id
    indexes: [
      {
        unique: true,
        fields: ['cohort_id', 'user_id'],
        name: 'unique_cohort_user',
      },
    ],
  }
);

module.exports = CohortMember;
