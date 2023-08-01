let mongoose = require('mongoose');

let routineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  days: [{
    dayOfWeek: {
      type: String,
      required: true,
    },
    exercises: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Exercise',
    }],
  }],
});

let Routine = mongoose.model('Routine', routineSchema);

module.exports = Routine;
