
let express = require('express');
let router = express.Router();
let {calculateCalories,saveUserData } = require('../controllers/caloriesController');
let { validateJWT} = require('../middlewares/authMiddleware');
const { validateDocuments } = require('../middlewares/validate.documents');

// Ruta para calcular las calorías
router.post('/calculate',
    validateJWT,
calculateCalories);
// Ruta para guardar los datos del usuario
router.post('/userdata', validateDocuments, saveUserData);

module.exports = router;
