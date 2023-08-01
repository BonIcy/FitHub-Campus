let express = require('express');
let router = express.Router();
let supplementController = require('../controllers/supplementController');

router.get('/supplements', supplementController.getAllSupplements);
router.get('/supplements/:id', supplementController.getSupplementById);
router.post('/supplements', supplementController.createSupplement);
router.put('/supplements/:id', supplementController.updateSupplement);
router.delete('/supplements/:id', supplementController.deleteSupplement);

module.exports = router;
