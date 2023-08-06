let Machine = require('../models/machine');
exports.createMachine = async (req, res) => {
  try {
    let { name, description, price, stock, category } = req.body;
    let newMachine = new Machine({
      name,
      description,
      price,
      stock,
      category,
    });
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
    let machineId = req.params.id;
    let machine = await Machine.findById(machineId);
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
    let machineId = req.params.id;
    let machine = await Machine.findById(machineId);
    if (!machine) {
      return res.status(404).json({ error: 'Máquina no encontrada.' });
    }
    let { name, description, price, stock, category } = req.body;
    machine.name = name;
    machine.description = description;
    machine.price = price;
    machine.stock = stock;
    machine.category = category;

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
    let machineId = req.params.id;
    let machine = await Machine.findById(machineId);
    if (!machine) {
      return res.status(404).json({ error: 'Máquina no encontrada.' });
    }
    await machine.remove();


    res.status(200).json({ message: 'Máquina eliminada exitosamente.' });
  } catch (error) {
    console.error('Error al eliminar la máquina:', error);
    res.status(500).json({
      error: 'Error al eliminar la máquina',
    });
  }
};
