//const { Op } = require('sequelize');
const Cohort = require('../models/cohorts');
const CohortMember = require('../models/cohortMembers');
const User = require('../models/users');

// Get all cohorts (for admins only)
exports.getAllCohorts = async (req, res) => {
	try {
		// Get the user's role from the decoded token
		const { role } = req.user;

		// Check if the user is an admin (role ID 'R01')
		if (role === 'R01') {
			const cohorts = await Cohort.findAll();
			return res.json(cohorts);
		} else {
			return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

// Get cohort by ID (for learners only)
exports.getCohortById = async (req, res) => {
	try {
		// Get the user's role and ID from the decoded token
		const { role, id: userId } = req.user;
		const cohortId = req.params.id;

		if (role === 'R01') { // R01 - Admin
			const cohort = await Cohort.findByPk(cohortId);
			if (cohort) {
				return res.json(cohort);
			} else {
				return res.status(404).json({ message: 'Cohort not found' });
			}
			// Check if the user is a learner/trainer/guest admin (role ID R04, R03, R02)
		} else if (role === 'R04' || role === 'R03' || role === 'R02') {
			// Check if the user is a member of the requested cohort
			const cohortMember = await CohortMember.findOne({
				where: {
					cohort_id: cohortId,
					user_id: userId,
				},
			});

			if (cohortMember) {
				// If the user is a member, retrieve the cohort information
				const cohort = await Cohort.findByPk(cohortId);
				if (cohort) {
					return res.json(cohort);
				} else {
					return res.status(404).json({ message: 'Cohort not found' });
				}
			} else {
				return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
			}
		} else {
			return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error. Could not get cohort info.' });
	}
};

exports.createCohort = async (req, res) => {
	try {
		// Get the user's role and ID from the decoded token
		const { role, id: userId } = req.user;

		if (role === 'R01') { // R01 - Admin

		} else {
			return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.updateCohort = async (req, res) => {
	try {
		// Get the user's role and ID from the decoded token
		const { role, id: userId } = req.user;

		if (role === 'R01') { // R01 - Admin

		} else {
			return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

exports.deleteCohort = async (req, res) => {
	try {
		// Get the user's role and ID from the decoded token
		const { role, id: userId } = req.user;

		if (role === 'R01') { // R01 - Admin

		} else {
			return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

// Get learners of a specific cohort
exports.getLearners = async (req, res) => {
	try {
		const cohortId = req.params.id;

		// Find the cohort by ID
		const cohort = await Cohort.findByPk(cohortId);

		if (!cohort) {
			return res.status(404).json({ message: 'Cohort not found' });
		}

		// Check if the user is an admin (role ID 'R01')
		if (req.user.role === 'R01') {
			// If the user is an admin, retrieve all learners associated with the cohort
			const cohortMembers = await CohortMember.findAll({
				where: { cohort_id: cohortId },
				attributes: ['user_id'], // Get only the userIds
			});

			const userIds = cohortMembers.map((cohortMember) => cohortMember.user_id);

			// Retrieve learner information based on the userIds
			const learners = await User.findAll({
				where: { id: userIds },
				attributes: ['id', 'username', 'email', 'mobile'],
			});

			return res.json(learners);
		}

		// Check if the user is a learner (role ID 'R04')
		if (req.user.role === 'R04') {
			// If the user is a learner, check if they belong to the requested cohort
			const learnerInCohort = await CohortMember.findOne({
				where: {
					cohort_id: cohortId,
					user_id: req.user.id,
				},
			});

			if (learnerInCohort) {
				// If the user belongs to the cohort, retrieve their own details
				const learner = await User.findByPk(req.user.id, {
					attributes: ['id', 'username', 'email', 'mobile'],
				});

				return res.json(learner);
			} else {
				return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
			}
		}

		return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource.' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};
