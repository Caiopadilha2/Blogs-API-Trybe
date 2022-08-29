const { User } = require('../models');
const tokenHelper = require('../../helpers/tokenHelper');

const login = async ({ email, password }) => {
  const userInfos = await User.findOne({ where: { email } });
  if (!userInfos || userInfos.dataValues.password !== password) {
    return { message: 'invalid fields' };
  }
  const { password: userPassword, ...userWithoutPassword } = userInfos.dataValues;
  // 1h:03min aula Pedro, tirar o password do objeto para criar o token sem ela.

  const token = tokenHelper.createToken(userWithoutPassword);

  return token;
};

module.exports = { login };