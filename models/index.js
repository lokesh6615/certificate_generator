const User = require('../models/users');
const Role = require('../models/roles');
const Cohort = require('../models/cohorts');
const Remark = require('../models/remarks');
const CohortMember = require('./cohortMembers');

// Export all models
module.exports = {
    Role,
    User,
    Cohort,
    Remark,
    CohortMember, // Add the CohortMember model here
};