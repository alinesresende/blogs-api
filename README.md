# API de Blogs! 🚀

### Developed an API and a database to produce content for a blog!

<details>
  <summary><strong>👨‍💻 Skills </strong></summary>

  1. NodeJS

  2. Sequelize; 

  3. Authentication using JWT (JSON Web Token).

<br />
</details>

<details>
  <summary><strong>🐋 Docker</strong></summary>

  > :information_source: Run the `node` and `db` services with the command `docker-compose up -d --build`.

  - Remember to stop `mysql` if you are using it locally on the default port (`3306`), or adapt it, if you want to use the application in containers;

  - These services will initialize a container named `blogs_api` and another named `blogs_api_db`;

  - From here you can run the `blogs_api` container via CLI or open it in VS Code;

  > :information_source: Use the `docker exec -it blogs_api bash` command.

  - It will give you access to the interactive terminal of the container created by compose, which is running in the background.


  <br />
  </details>


# Challenges

### 1 - Created migrations for `users`, `categories`, `blog_posts`, `posts_categories` tables

---


### 2 - Created `User` model in `src/models/User.js` with correct properties

---

### 3 - Created o endpoint POST `/login`

---

### 4 - Created endpoint POST `/user`

---

### 5 - Created endpoint GET `/user`

---

### 6 - Created endpoint GET `/user/:id`

---

### 7 - Created `Category` model in `src/models/Category.js` with correct properties

---

### 8 - Created endpoint POST `/categories`

---

### 9 - Created endpoint GET `/categories`

---

### 10 - Created `BlogPost` model in `src/models/BlogPost.js` with correct properties and associationsas 

---

### 11 - Created the `PostCategory` model in `src/models/PostCategory.js` with the correct properties and associations

---

### 12 - Created endpoint POST `/post`

---

### 13 - Created endpoint GET `/post`

---

### 14 - Created endpoint GET `/post/:id`

---

### 15 - Created endpoint PUT `/post/:id`

---

### 16 - Created endpoint DELETE `/post/:id`

---

### 17 - Created endpoint DELETE `/user/me`

---

### 18 - Created GET `/post/search?q=:searchTerm`

