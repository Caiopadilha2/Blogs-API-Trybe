const jwt = require('jsonwebtoken');

const JWT_CONFIG = { algorithm: 'HS256' };

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  const dados = jwt.verify(token, process.env.JWT_SECRET);
  return dados;
};

module.exports = { createToken, verifyToken };