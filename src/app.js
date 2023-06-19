const express = require('express');
const UserController = require('./controller/user.controller');
const CategoryController = require('./controller/category.controller');
const PostController = require('./controller/blogs.post.controller');
const { 
  isLoginAndPasswordExist, 
  cantLoginUserExist,
  checkValidateDisplayName,
  checkRegisterEmailExists,
  checkValidateEmail,
  checkValidatePassword,
} = require('./middleware/user.validate');

const { checkNameCatetory } = require('./middleware/category.validate');

const { checkValidateToken } = require('./middleware/token.validate');
const { 
  checkFieldsPostExists,
  checkValidadeCategory, 
  checkUserValidate, 
  checkFieldsPutPost, 
  checkPostExist } = require('./middleware/post.validate');
// 

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.get('/user', checkValidateToken, UserController.getAllUser);
app.get('/user/:id', checkValidateToken, UserController.getUserById);
app.get('/categories', checkValidateToken, CategoryController.getAllCategories);
app.get('/post', checkValidateToken, PostController.getAllPost);
app.get('/post/search', checkValidateToken, PostController.searchAllPost);
app.get('/post/:id', checkValidateToken, checkPostExist, PostController.getPostById);

app.post(
  '/login', 
  isLoginAndPasswordExist, 
  cantLoginUserExist,
  UserController.login,
);

app.post(
  '/user', 
  checkValidateDisplayName,
  checkValidateEmail, 
  checkValidatePassword,
  checkRegisterEmailExists,
  UserController.createUser,
);

app.post('/categories', checkValidateToken, checkNameCatetory, CategoryController.createCategory);
app.post(
  '/post', 
  checkValidateToken,
  checkFieldsPostExists, 
  checkValidadeCategory, 
  PostController.createNewBlogPost,
);

app.put(
  '/post/:id', 
  checkValidateToken,
  checkFieldsPutPost, 
  checkUserValidate, 
  PostController.updatePost,
);

app.delete(
  '/post/:id', 
  checkValidateToken,
  checkPostExist, 
  checkUserValidate, 
  PostController.deletePost,
);

app.delete('/user/me', checkValidateToken, UserController.deleteUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
