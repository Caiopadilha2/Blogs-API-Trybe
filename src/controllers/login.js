const userServices = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await userServices.login({ email, password });

  if (response.message) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  return res.status(200).json({ token: response });
};

const getAll = async (req, res, next) => {
  try {
    const users = await userServices.getAll();
    if (!users) {
      return res.status(400).end();
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userServices.getById({ id });
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    // const { password, ...userWithoutPassword } = user;
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  try {
    const user = await userServices.findUserByEmail({ email });
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const created = await userServices.createUser({ displayName, email, password, image });
    return res.status(201).json({ token: created });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  getAll,
  getById,
  createUser,
};