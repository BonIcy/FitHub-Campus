
let express = require('express');
let router = express.Router();
let {getMachine, createMachine, updateMachine, deleteMachine} = require('../controllers/machineController');
let {validateJWT} = require('../middlewares/authMiddleware')
let isAdminRole = require('../middlewares/isAdminRole');
let { validateDocuments } = require('../middlewares/validate.documents');

router.get('/:id', [validateJWT, validateDocuments], getMachine);
router.post('/', [validateJWT, isAdminRole, validateDocuments], createMachine);
router.put('/:id',[validateJWT, isAdminRole, validateDocuments], updateMachine);
router.delete('/:id',[validateJWT, isAdminRole, validateDocuments], deleteMachine);

module.exports = router;
