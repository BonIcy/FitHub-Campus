let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let caloriesRoutes = require('./routes/caloriesRoutes'); 
let machineRoutes = require('./routes/machineRoutes'); 
let supplementRoutes = require('./routes/supplementRoutes');
let routineRoutes = require('./routes/routineRoutes');
let uploadRoutes = require('./routes/upload.Routes');
let registerUserRoutes = require('./routes/registerUserRoutes');
let authRoutes = require('./routes/authRoutes');
let fileUpload = require('express-fileupload');
let { validateJWT } = require('./middlewares/authMiddleware');

require('dotenv').config();

// Configuración de Express y Mongoose
let app = express();
let port = process.env.PORT;
let uri = process.env.MONGODB_URI;

// Conexión con MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar con MongoDB:', error);
  });

app.use(express.json());
app.use(cors());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/api/calories', validateJWT, caloriesRoutes);
app.use('/api/machines', validateJWT, machineRoutes); 
app.use('/api/supplements', validateJWT, supplementRoutes);
app.use('/api/routines', validateJWT, routineRoutes);
app.use('/api/uploads', validateJWT, uploadRoutes);
app.use('/api', registerUserRoutes); 
app.use('/api/auth', authRoutes);
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
