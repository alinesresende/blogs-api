const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const create = await Category.create({ name });
  return {
    id: create.id,
    name: create.name,
  };
};

const getAllCategories = async () => {
  const getAll = await Category.findAll();
  return getAll;
};

module.exports = { createCategory, getAllCategories };