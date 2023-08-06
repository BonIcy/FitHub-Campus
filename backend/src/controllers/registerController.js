
let bcrypt = require('bcryptjs');
let RegisteredUser = require('../models/registerUser');

exports.registerUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let existingUser = await RegisteredUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado.' });
    }
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    let newUser = new RegisteredUser({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};
