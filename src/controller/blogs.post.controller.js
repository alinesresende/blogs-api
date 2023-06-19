const PostService = require('../service/blogs.post.service');
const UserService = require('../service/user.service');

const createNewBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const user = await UserService.getUserByEmail(req.user.email);
  const create = await PostService.createNewPost({ title, content, categoryIds, userId: user.id });
  return res.status(201).json(create);
};

const getAllPost = async (req, res) => {
  const posts = await PostService.getAllPost();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await PostService.getPostById(id);
  return res.status(200).json(post);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const update = await PostService.updatePost({ title, content, id });
  return res.status(200).json(update);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await PostService.deletePost({ id });
  return res.status(204).json({});
};

const searchAllPost = async (req, res) => {
  const { q } = req.query;
  const search = await PostService.searchAllPost(q);
  return res.status(200).json(search);
};

module.exports = { createNewBlogPost, 
getAllPost,
getPostById,
updatePost,
deletePost,
searchAllPost };