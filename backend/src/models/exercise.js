let mongoose = require('mongoose');

let exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  muscleGroup: {
    type: String,
    required: true,
  },
});

let Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
