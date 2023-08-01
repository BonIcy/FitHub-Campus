let express = require('express');
let router = express.Router();
let routineController = require('../controllers/routineController');

router.get('/all', routineController.getAllExercises);
router.get('/one/:id', routineController.getExerciseById);
router.post('/add', routineController.createExercise);
router.delete('/del/:id', routineController.deleteExercise);
router.put('/upd/:id', routineController.editExercise);

router.get('/all', routineController.getAllRoutines);
router.get('/one/:id', routineController.getRoutineById);
router.post('/add', routineController.createRoutine);
router.put('/upd/:id', routineController.editRoutine);
router.delete('/del/:id', routineController.deleteRoutine);

module.exports = router;
