let express = require('express');
let router = express.Router();
let {getAllSupplements, getSupplementById, createSupplement,updateSupplement,deleteSupplement} = require('../controllers/supplementController');
let { validateJWT } = require('../middlewares/authMiddleware');
let isAdminRole = require('../middlewares/isAdminRole'); 
const { validateDocuments } = require('../middlewares/validate.documents');

router.get('/', [validateJWT, validateDocuments], getAllSupplements);
router.get('/:id', [validateJWT, validateDocuments], getSupplementById);
router.post('/', [validateJWT, isAdminRole, validateDocuments], createSupplement);
router.put('/:id', [validateJWT, isAdminRole, validateDocuments], updateSupplement);
router.delete('/:id', [validateJWT, isAdminRole, validateDocuments], deleteSupplement);

module.exports = router;
