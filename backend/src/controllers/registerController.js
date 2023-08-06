
let bcrypt = require('bcryptjs');
let RegisteredUser = require('../models/registerUser');

exports.registerUser = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    // Verificar si ya existe un usuario con el mismo correo electrónico
    let existingUser = await RegisteredUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado.' });
    }
    // Encriptar la contraseña antes de guardarla en la base de datos
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    // Crear un nuevo usuario
    let newUser = new RegisteredUser({
      username,
      email,
      password: hashedPassword,
    });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    // Responder con el usuario registrado
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
};
