let express = require('express');
let router = express.Router();
let {getAllExercises,getExerciseById, createExercise, deleteExercise,editExercise,getAllRoutines, getRoutineById, createRoutine,editRoutine, deleteRoutine } = require('../controllers/routineController');
let { validateJWT } = require('../middlewares/authMiddleware');
const { validateDocuments } = require('../middlewares/validate.documents');

router.get('/', [validateJWT,
validateDocuments], getAllExercises);
router.get('/:id', [validateJWT,
validateDocuments], getExerciseById);
router.post('/', [validateJWT,
validateDocuments], createExercise);
router.delete('/:id', [validateJWT,
validateDocuments], deleteExercise);
router.put('/:id', [validateJWT,
validateDocuments], editExercise);

router.get('/', [validateJWT,
validateDocuments], getAllRoutines);
router.get('/:id', [validateJWT,
validateDocuments], getRoutineById);
router.post('/', [validateJWT,
validateDocuments], createRoutine);
router.put('/:id', [validateJWT,
validateDocuments], editRoutine);
router.delete('/:id', [validateJWT,
validateDocuments], deleteRoutine);

module.exports = router;
