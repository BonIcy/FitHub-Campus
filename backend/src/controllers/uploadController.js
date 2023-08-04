const path = require('path');
const mime = require('mime-types');

const uploadFile = async (req, res = response) => {
  if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
    return res.status(400).send('No files were uploaded.');
  }

  const { file } = req.files;
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

  // Verificar si el archivo es una imagen
  if (!allowedMimeTypes.includes(mime.lookup(file.name))) {
    return res.status(400).json({ error: 'El archivo debe ser una imagen (JPEG, PNG o GIF).' });
  }

  // Si es una imagen, procedemos a guardarla
  let uploadPath = path.join(__dirname, '../uploads/', file.name);
  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    
    res.json({ msg: 'Archivo subido: ' + uploadPath });
  });
};

module.exports = {
  uploadFile,
};
