let express = require('express');
let router = express.Router();
let {getAllSupplements, getSupplementById, createSupplement,updateSupplement,deleteSupplement} = require('../controllers/supplementController');
let { validateJWT } = require('../middlewares/authMiddleware');
let isAdminRole = require('../middlewares/isAdminRole'); 
let { validateDocuments } = require('../middlewares/validate.documents');

router.get('/', getAllSupplements);
router.get('/:id', [validateJWT, validateDocuments], getSupplementById);
router.post('/', [validateJWT, isAdminRole], createSupplement);
router.put('/:id', [validateJWT, isAdminRole, validateDocuments], updateSupplement);
router.delete('/:id', [validateJWT, isAdminRole, validateDocuments], deleteSupplement);

module.exports = router;
