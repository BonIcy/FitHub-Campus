let {validationResult} = require('express-validator');

let validateDocuments = (req, res, next) =>{
    let errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}

module.exports = {
    validateDocuments
}