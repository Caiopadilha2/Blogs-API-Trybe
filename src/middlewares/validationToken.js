const verificaToken = require('../helpers/tokenHelper');

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
    const valid = verificaToken.verifyToken(authorization);
  
    if (!valid) return res.status(401).json({ message: 'Expired or invalid token' });

    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateToken;