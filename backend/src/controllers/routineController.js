let Exercise = require('../models/exercise');
let Routine = require('../models/routine');

exports.getAllExercises = async (req, res) => {
  try {
    let exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    console.error('Error al obtener los ejercicios:', error);
    res.status(500).json({
      error: 'Error al obtener los ejercicios',
    });
  }
};

exports.getExerciseById = async (req, res) => {
  try {
    let exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }
    res.status(200).json(exercise);
  } catch (error) {
    console.error('Error al obtener el ejercicio:', error);
    res.status(500).json({
      error: 'Error al obtener el ejercicio',
    });
  }
};

exports.createExercise = async (req, res) => {
  try {
    let { name, muscleGroup } = req.body;
    let newExercise = new Exercise({ name, muscleGroup });
    let savedExercise = await newExercise.save();
    res.status(201).json(savedExercise);
  } catch (error) {
    console.error('Error al crear el ejercicio:', error);
    res.status(500).json({
      error: 'Error al crear el ejercicio',
    });
  }
};

exports.getAllRoutines = async (req, res) => {
  try {
    let routines = await Routine.find().populate('days.exercises');
    res.status(200).json(routines);
  } catch (error) {
    console.error('Error al obtener las rutinas:', error);
    res.status(500).json({
      error: 'Error al obtener las rutinas',
    });
  }
};

exports.getRoutineById = async (req, res) => {
  try {
    let routine = await Routine.findById(req.params.id).populate('days.exercises');
    if (!routine) {
      return res.status(404).json({ error: 'Rutina no encontrada' });
    }
    res.status(200).json(routine);
  } catch (error) {
    console.error('Error al obtener la rutina:', error);
    res.status(500).json({
      error: 'Error al obtener la rutina',
    });
  }
};

exports.createRoutine = async (req, res) => {
  try {
    let { name, days } = req.body;
    let newRoutine = new Routine({ name, days });
    let savedRoutine = await newRoutine.save();
    res.status(201).json(savedRoutine);
  } catch (error) {
    console.error('Error al crear la rutina:', error);
    res.status(500).json({
      error: 'Error al crear la rutina',
    });
  }
};
