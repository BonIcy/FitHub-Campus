let express = require('express');
let router = express.Router();
let supplementController = require('../controllers/supplementController');

router.get('/all', supplementController.getAllSupplements);
router.get('/one/:id', supplementController.getSupplementById);
router.post('/add', supplementController.createSupplement);
router.put('/upd/:id', supplementController.updateSupplement);
router.delete('/del/:id', supplementController.deleteSupplement);

module.exports = router;
