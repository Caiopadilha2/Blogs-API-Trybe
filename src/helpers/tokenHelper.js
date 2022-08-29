const jwt = require('jsonwebtoken');

const JWT_CONFIG = { algorithm: 'HS256' };

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, JWT_CONFIG);
  return token;
};

const verifyToken = (token) => {
  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET, JWT_CONFIG);
    return dados;
  } catch (error) {
    return null;
  }
};

module.exports = { createToken, verifyToken };