const UserService = require('../service/user.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await UserService.login(email, password);
    return res.status(200).json(result);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await UserService.createUser({ displayName, email, password, image });
  return res.status(201).json(result);
};

const getAllUser = async (req, res) => {
  const users = await UserService.getAllUser();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getUserById(id);
  if (!user) {
    return res.status(404).json({
      message: 'User does not exist',
    });
  } 
    return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const user = await UserService.getUserByEmail(req.user.email);
  await UserService.deleteUser({ id: user.id });
  return res.status(204).json({});
};

module.exports = { login, createUser, getAllUser, getUserById, deleteUser };