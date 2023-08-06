
let express = require('express');
let router = express.Router();
let {calculateCalories,saveUserData } = require('../controllers/caloriesController');
let { validateJWT} = require('../middlewares/authMiddleware');
let { validateDocuments } = require('../middlewares/validate.documents');

router.post('/calculate',
    validateJWT,
calculateCalories);
router.post('/userdata', validateDocuments, saveUserData);

module.exports = router;
