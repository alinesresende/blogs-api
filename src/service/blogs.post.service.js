const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const createNewPost = async ({ title, content, userId, categoryIds }) => {
  const newPost = await BlogPost.create({ title, content, userId });
  categoryIds.map(async (id) => { 
    await PostCategory.create({ postId: newPost.id, categoryId: id });
   });
  return newPost;
};

const getAllPost = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
   { model: Category, as: 'categories', through: { attributes: [] } },
  ],  
    attributes: { exclude: ['user_id'] },
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
   { model: Category, as: 'categories', through: { attributes: [] } },
  ],
  attributes: { exclude: ['user_id'] },
  });
  return post;
};

const updatePost = async ({ title, content, id }) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const post = await getPostById(id);
  return post;
};

const deletePost = async ({ id }) => {
  const deleteBlogPost = await BlogPost.destroy({ where: { id } });
  return deleteBlogPost;
};

const searchAllPost = async (q) => {
  const search = await BlogPost.findAll({
    where: {
      [Op.or]: [{
        title: { [Op.like]: `%${q}%` },
      },
      { 
        content: { [Op.like]: `${q}` }, 
      }],
    }, 
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories', through: { attributes: [] } },
   ],
    });
  return search;
};

module.exports = { createNewPost, getAllPost, getPostById, updatePost, deletePost, searchAllPost };
