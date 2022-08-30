const postServices = require('../services/post');

const getAll = async (req, res, next) => {
  try {
    const posts = await postServices.getAll();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await postServices.getById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
};