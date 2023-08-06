let isAdminRole = (req, res, next) => {
    let user = req.user; 
    if (user.role !== 'ADMIN') {
      return res.status(403).json({ error: 'Acceso no autorizado' });
    }
    next();
  };
  
  module.exports = isAdminRole;
  