// user.js
let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ['masculino', 'femenino'],
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  intensity: {
    type: String,
    required: true,
    enum: ['bajo', 'medio', 'alto'],
  },
});

module.exports = mongoose.model('User', userSchema);
