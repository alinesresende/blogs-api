const CategoryService = require('../service/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const create = await CategoryService.createCategory({ name });
  return res.status(201).json(create);
};

const getAllCategories = async (req, res) => {
  const getAll = await CategoryService.getAllCategories();
  return res.status(200).json(getAll);
};

module.exports = {
  createCategory,
  getAllCategories,
};