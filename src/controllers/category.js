const categoryServices = require('../services/category');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await categoryServices.create({ name });
  
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  return res.status(201).json(category);
};

const getAll = async (req, res, next) => {
  try {
    const categories = await categoryServices.getAll();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};