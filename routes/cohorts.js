const { Router } = require("express");
const authenticateJWT = require('../middlewares/auth');
const cohortsController = require('../controllers/cohortsController');
const router = Router({ strict: true });

// Cohort Management
router.get('/', authenticateJWT, cohortsController.getAllCohorts);
router.get('/:id', authenticateJWT, cohortsController.getCohortById);
router.post('/', authenticateJWT, cohortsController.createCohort);
router.put('/:id', authenticateJWT, cohortsController.updateCohort);
router.delete('/:id', authenticateJWT, cohortsController.deleteCohort);

// Learner Management
router.get('/:id/learners', authenticateJWT, cohortsController.getLearners); //http://localhost:3000/api/cohorts/COH00001/learners
/*router.get('/:id/learners/:lid', authenticateJWT, cohortsController.getLearner);
router.post('/:id/learners', authenticateJWT, cohortsController.addLearner);
router.put('/:id/learners/:lid', authenticateJWT, cohortsController.updateLearnerInfo);
router.delete('/:id/learners/:lid', authenticateJWT, cohortsController.removeLearner);
*/

module.exports = router;