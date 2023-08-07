let express = require('express');
let router = express.Router();
let { check, validationResult } = require('express-validator');
let { registerUser } = require('../controllers/registerController');
let { validateDocuments } = require('../middlewares/validate.documents');

router.post('/register',
  [
    check('email').isEmail().withMessage('El correo electrónico no es válido'),
    check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validateDocuments
  ],
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },registerUser
);

module.exports = router;
