let { Router } = require('express');
let { check } = require('express-validator');

let { validateDocuments } = require('../middlewares/validate.documents');
let { uploadFile } = require('../controllers/uploadController.js');


let router = Router();

router.post( '/', uploadFile );

module.exports = router;