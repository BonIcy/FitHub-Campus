
let express = require('express');
let router = express.Router();
let {registerUser} = require('../controllers/registerController');
let { validateDocuments } = require('../middlewares/validate.documents');

router.post('/register', validateDocuments, registerUser);

module.exports = router;
