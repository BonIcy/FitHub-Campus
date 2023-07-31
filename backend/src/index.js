
let express = require('express');
let mongoose = require('mongoose');
let caloriesRoutes = require('./routes/calories'); 
let machineRoutes = require('./routes/machineRoutes'); 
require('dotenv').config();

// Configuración de Express y Mongoose
let app = express();
let port = process.env.PORT;
let uri = process.env.MONGODB_URI;

// Conexión con MongoDB
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error);
  });

app.use(express.json());

// Rutas de la API para la sección de calorías
app.use('/api/calories', caloriesRoutes);

// Rutas de la API para la sección de venta de máquinas
app.use('/api/machines', machineRoutes); 

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
