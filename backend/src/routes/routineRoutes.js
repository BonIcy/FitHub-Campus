let express = require('express');
let router = express.Router();
let routineController = require('../controllers/routineController');

router.get('/exercises', routineController.getAllExercises);
router.get('/exercises/:id', routineController.getExerciseById);
router.post('/exercises', routineController.createExercise);

router.get('/routines', routineController.getAllRoutines);
router.get('/routines/:id', routineController.getRoutineById);
router.post('/routines', routineController.createRoutine);

module.exports = router;
