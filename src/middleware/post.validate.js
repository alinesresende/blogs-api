const { Category, BlogPost } = require('../models');
const UserService = require('../service/user.service');
const PostService = require('../service/blogs.post.service');

const checkFieldsPostExists = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  } next();
};
 
const checkValidadeCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const categoryExist = await Category.findAll({ where: { id: categoryIds } });
  if (categoryExist.length !== categoryIds.length) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }
  next();
};

const checkPostExist = async (req, res, next) => {
  const { id } = req.params;
  const postIdExist = await BlogPost.findByPk(id);
  if (!postIdExist) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  } next();
};

const checkUserValidate = async (req, res, next) => {
  const { id } = req.params;
  // user logged
  const { id: userLoggedId } = await UserService.getUserByEmail(req.user.email);

  // user post
  const { userId } = await PostService.getPostById(id);
  if (userLoggedId !== userId) {
    return res.status(401).json({
      message: 'Unauthorized user',
    });
  } next();
};

const checkFieldsPutPost = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  } next();
};

module.exports = { checkFieldsPostExists, 
  checkValidadeCategory,
checkPostExist,
checkUserValidate, 
checkFieldsPutPost };