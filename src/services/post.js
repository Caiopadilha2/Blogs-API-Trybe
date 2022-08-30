const { BlogPost, Category, User } = require('../database/models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
     ],
  });
   return posts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
      where: {
        id,
      },
      include: [
          { model: Category,
            as: 'categories',
            through: { attributes: [] },
          },
          { model: User,
            as: 'user',
            attributes: { exclude: ['password'] },
          },
         ],
    });
    return post;
};

module.exports = {
  getAll,
  getById,
};