const { User } = require('../models');

const isLoginAndPasswordExist = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json(
      { message: 'Some required fields are missing' },
);
  } next();
};

const cantLoginUserExist = async (req, res, next) => {
  const { email, password } = req.body;
  const userLogin = await User.findOne({ where: { email, password } });
  if (!userLogin) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  } next();
};

const checkValidateDisplayName = async (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({ message: 
      '"displayName" length must be at least 8 characters long',
    });
  } next();
};

function validateEmail(email) {
  const validade = /\S+@\S+\.\S+/;
  return validade.test(email);
}

const checkValidateEmail = async (req, res, next) => {
  const { email } = req.body;
  const isEmailValid = validateEmail(email);
  if (!isEmailValid) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  } next();
};

const checkValidatePassword = async (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  } next();
};

const checkRegisterEmailExists = async (req, res, next) => {
  const { email } = req.body;
  const verifyEmail = await User.findOne({ where: { email } });
  if (verifyEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  } next();
};

module.exports = { isLoginAndPasswordExist,
  cantLoginUserExist,
  checkValidateDisplayName, 
  checkValidateEmail,
  checkValidatePassword, 
  checkRegisterEmailExists };