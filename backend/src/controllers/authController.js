
let jwt = require('jsonwebtoken');
let RegisteredUser = require('../models/registerUser');
let bcrypt = require('bcryptjs')

exports.loginUser = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await RegisteredUser.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    let token = jwt.sign({ uid: user._id }, process.env.SECRET_OR_PRIVATE_KEY, {
      expiresIn: '5h', 
    });
    console.log('Token generado:', token);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
