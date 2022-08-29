const { User } = require('../database/models');
const TokenHelper = require('../helpers/tokenHelper');

const login = async ({ email, password }) => {
  const userInfos = await User.findOne({ where: { email } });
  if (!userInfos || userInfos.dataValues.password !== password) {
    return { message: 'invalid fields' };
  }
  const { password: userPassword, ...userWithoutPassword } = userInfos.dataValues;
  // 1h:03min aula Pedro, tirar o password do objeto para criar o token sem ela.

  const token = TokenHelper.createToken(userWithoutPassword);

  return token;
};

const getAll = async () => {
  const result = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return result;
};

const getById = async ({ id }) => {
  const user = await User.findOne({
    where: {
      id,
    },
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return user;
};

module.exports = {
  login,
  getAll,
  getById,
};