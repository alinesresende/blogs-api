const { generateToken } = require('../utils/token');
const { User } = require('../models');

const login = async (email, password) => {
  const token = generateToken(email, password);

  return { token };
};

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  const token = generateToken(email, password);
  return { token };
};

const getAllUser = async () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const deleteUser = async ({ id }) => {
  const userToDelete = await User.destroy({ where: { id } });
  return userToDelete;
};

module.exports = { login, 
  createUser, 
  getAllUser, 
  getUserById,
  generateToken,
  getUserByEmail,
  deleteUser,
};