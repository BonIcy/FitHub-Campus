
let express = require('express');
let mongoose = require('mongoose');
let caloriesRoutes = require('./routes/caloriesRoutes'); 
let machineRoutes = require('./routes/machineRoutes'); 
let supplementRoutes = require('./routes/supplementRoutes');
let routineRoutes = require('./routes/routineRoutes');
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

app.use('/api/calories', caloriesRoutes);
app.use('/api/machines', machineRoutes); 
app.use('/api/supplements', supplementRoutes);
app.use('/api/routines', routineRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
