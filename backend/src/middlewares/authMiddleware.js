
let jwt = require('jsonwebtoken');
let RegisteredUser = require('../models/registerUser');

let validateJWT = async (req, res, next) => {
    let token = req.header('x-api-token-jwt');

    if (!token) {
      return res.status(401).json({
        error: 'No hay token en la petición'
      });
    }
  
    try {
      let { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
  
      console.log('uid del token:', uid);
  
      let user = await RegisteredUser.findById(uid);
  
      if (!user) {
        return res.status(401).json({
          error: 'Token no válido - usuario no existe en la base de datos'
        });
      }
  
      console.log('Usuario encontrado:', user);
  
      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        error: 'Token no válido'
      });
    }
};

module.exports = { validateJWT };
