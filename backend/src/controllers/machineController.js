let Machine = require('../models/machine');
exports.createMachine = async (req, res) => {
  try {
    let { name, description, price, stock, category } = req.body;

    // Crea un nuevo objeto de máquina con los datos recibidos en la solicitud
    let newMachine = new Machine({
      name,
      description,
      price,
      stock,
      category,
    });

    // Guarda la nueva máquina en la base de datos
    let savedMachine = await newMachine.save();

    res.status(200).json(savedMachine);
  } catch (error) {
    console.error('Error al guardar la máquina:', error);
    res.status(500).json({
      error: 'Error al guardar la máquina',
    });
  }
};

exports.getMachine = async (req, res) => {
  try {
    // Obtener el ID de la máquina desde los parámetros de la URL
    let machineId = req.params.id;

    // Buscar la máquina en la base de datos por su ID
    let machine = await Machine.findById(machineId);

    // Verificar si la máquina fue encontrada
    if (!machine) {
      return res.status(404).json({ error: 'Máquina no encontrada.' });
    }


    res.status(200).json(machine);
  } catch (error) {
    console.error('Error al obtener la máquina:', error);
    res.status(500).json({
      error: 'Error al obtener la máquina',
    });
  }
};

exports.updateMachine = async (req, res) => {
  try {
    // Obtener el ID de la máquina desde los parámetros de la URL
    let machineId = req.params.id;

    // Buscar la máquina en la base de datos por su ID
    let machine = await Machine.findById(machineId);

    // Verificar si la máquina fue encontrada
    if (!machine) {
      return res.status(404).json({ error: 'Máquina no encontrada.' });
    }

    // Actualizar los campos de la máquina con los datos recibidos en la solicitud
    let { name, description, price, stock, category } = req.body;
    machine.name = name;
    machine.description = description;
    machine.price = price;
    machine.stock = stock;
    machine.category = category;

    // Guardar los cambios en la base de datos
    let updatedMachine = await machine.save();

    res.status(200).json(updatedMachine);
  } catch (error) {
    console.error('Error al actualizar la máquina:', error);
    res.status(500).json({
      error: 'Error al actualizar la máquina',
    });
  }
};

exports.deleteMachine = async (req, res) => {
  try {
    // Obtener el ID de la máquina desde los parámetros de la URL
    let machineId = req.params.id;

    // Buscar la máquina en la base de datos por su ID
    let machine = await Machine.findById(machineId);

    // Verificar si la máquina fue encontrada
    if (!machine) {
      return res.status(404).json({ error: 'Máquina no encontrada.' });
    }

    // Eliminar la máquina de la base de datos
    await machine.remove();


    res.status(200).json({ message: 'Máquina eliminada exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar la máquina:', error);
    res.status(500).json({
      error: 'Error al eliminar la máquina',
    });
  }
};
