
let express = require('express');
let router = express.Router();
let machineController = require('../controllers/machineController');

router.get('/all/:id', machineController.getMachine);
router.post('/add', machineController.createMachine);
router.put('/upd/:id', machineController.updateMachine);
router.delete('/del/:id', machineController.deleteMachine);

module.exports = router;
