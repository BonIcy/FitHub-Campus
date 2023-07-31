
let express = require('express');
let router = express.Router();
let machineController = require('../controllers/machineController');

router.get('/machine/:id', machineController.getMachine);

router.post('/machine', machineController.createMachine);

router.put('/machine/:id', machineController.updateMachine);
router.delete('/machine/:id', machineController.deleteMachine);

module.exports = router;
