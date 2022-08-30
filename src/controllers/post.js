const postServices = require('../services/post');

const getAll = async (req, res, next) => {
  try {
    const posts = await postServices.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };