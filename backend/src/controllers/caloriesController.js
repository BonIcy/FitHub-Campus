
let User = require('../models/user');

exports.calculateCalories = async (req, res) => {
  try {
    let { age, gender, weight, height, intensity, goal } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!age || !gender || !weight || !height || !intensity || !goal) {
      return res.status(400).json({ error: 'Todos los campos son requeridos.' });
    }
    // Realizar los cálculos aquí (según la fórmula  de calculo Basal Methabolic Rate)
    let basalMetabolicRate;
    if (gender === 'masculino') {
      basalMetabolicRate = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'femenino') {
      basalMetabolicRate = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
      return res.status(400).json({ error: 'El género debe ser "masculino" o "femenino".' });
    }

    // Aplicar el factor de actividad según el nivel de intensidad del entrenamiento
    let activityFactor;
    switch (intensity) {
      case 'bajo':
        activityFactor = 1.2;
        break;
      case 'medio':
        activityFactor = 1.55;
        break;
      case 'alto':
        activityFactor = 1.9;
        break;
      default:
        return res.status(400).json({ error: 'El nivel de intensidad debe ser "bajo", "medio" o "alto".' });
    }

    // Calcular las calorías necesarias para mantener el peso actual
    let calculatedCalories = Math.round(basalMetabolicRate * activityFactor);

    // Ajustar las calorías según el objetivo seleccionado
    switch (goal) {
      case 'mantener':
        // No se hace ningún ajuste, se mantienen las calorías calculadas para mantener el peso actual.
        break;
      case 'ganar':
        // Incrementar las calorías en 12.5% para ganar masa muscular
        calculatedCalories = Math.round(calculatedCalories * 1.125);
        break;
      case 'bajar':
        // Decrementar las calorías en 12.5% para bajar de peso
        calculatedCalories = Math.round(calculatedCalories * 0.875);
        break;
      default:
        return res.status(400).json({ error: 'El objetivo debe ser "mantener", "ganar" o "bajar".' });
    }

    res.status(200).json({
      calories: calculatedCalories,
    });
  } catch (error) {
    console.error('Error al calcular las calorías:', error);
    res.status(500).json({
      error: 'Error al calcular las calorías',
    });
  }
};

exports.saveUserData = async (req, res) => {
  try {
    let { age, gender, weight, height, intensity, goal } = req.body;

    // Crear un nuevo objeto de usuario con los datos del cuerpo de la solicitud
    let newUser = new User({
      age,
      gender,
      weight,
      height,
      intensity,
      goal,
      calculatedCalories,
    });
    // Guardar el nuevo usuario en la base de datos
    let savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (error) {
    console.error('Error al guardar los datos del usuario:', error);
    res.status(500).json({
      error: 'Error al guardar los datos del usuario',
    });
  }
};