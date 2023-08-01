
let express = require('express');
let router = express.Router();
let caloriesController = require('../controllers/caloriesController');

// Ruta para calcular las calorías
router.post('/calculate', caloriesController.calculateCalories);
// Ruta para guardar los datos del usuario
router.post('/userdata', caloriesController.saveUserData);

module.exports = router;
