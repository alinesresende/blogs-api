const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const objectConfig = {
  expiresIn: '7d',
};

const generateToken = (email, password) => {
  const payload = {
   email, 
   password,
  };
  const token = jwt.sign(payload, JWT_SECRET, objectConfig);
  return token;
};

module.exports = { generateToken };