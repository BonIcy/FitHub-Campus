let Supplement = require('../models/supplement');

exports.getAllSupplements = async (req, res) => {
  try {
    let supplements = await Supplement.find();
    res.status(200).json(supplements);
  } catch (error) {
    console.error('Error al obtener los suplementos:', error);
    res.status(500).json({
      error: 'Error al obtener los suplementos',
    });
  }
};

exports.getSupplementById = async (req, res) => {
  try {
    let supplement = await Supplement.findById(req.params.id);
    if (!supplement) {
      return res.status(404).json({ error: 'Suplemento no encontrado' });
    }
    res.status(200).json(supplement);
  } catch (error) {
    console.error('Error al obtener el suplemento:', error);
    res.status(500).json({
      error: 'Error al obtener el suplemento',
    });
  }
};

exports.createSupplement = async (req, res) => {
  try {
    let { name, description, price, category } = req.body;
    let newSupplement = new Supplement({ name, description, price, category });
    let savedSupplement = await newSupplement.save();
    res.status(201).json(savedSupplement);
  } catch (error) {
    console.error('Error al crear el suplemento:', error);
    res.status(500).json({
      error: 'Error al crear el suplemento',
    });
  }
};

exports.updateSupplement = async (req, res) => {
  try {
    let { name, description, price, category } = req.body;
    let updatedSupplement = await Supplement.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category },
      { new: true }
    );
    if (!updatedSupplement) {
      return res.status(404).json({ error: 'Suplemento no encontrado' });
    }
    res.status(200).json(updatedSupplement);
  } catch (error) {
    console.error('Error al actualizar el suplemento:', error);
    res.status(500).json({
      error: 'Error al actualizar el suplemento',
    });
  }
};

exports.deleteSupplement = async (req, res) => {
  try {
    let deletedSupplement = await Supplement.findByIdAndRemove(req.params.id);
    if (!deletedSupplement) {
      return res.status(404).json({ error: 'Suplemento no encontrado' });
    }
    res.status(200).json(deletedSupplement);
  } catch (error) {
    console.error('Error al eliminar el suplemento:', error);
    res.status(500).json({
      error: 'Error al eliminar el suplemento',
    });
  }
};
