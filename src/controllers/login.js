const loginServices = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginServices.login({ email, password });

  if (response.message) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token: response });
};

module.exports = { login };