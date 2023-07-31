let mongoose = require('mongoose');
require('dotenv').config();

let connectDB = async () => {
  try {
    // Establecer conexión con la base de datos
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;