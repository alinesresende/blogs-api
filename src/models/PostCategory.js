//
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      }},
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        }
  }},{
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  })

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostCategory', 
      foreignKey: 'category_id', 
      otherKey: 'post_id' 
    });

    models.BlogPost.belongsToMany(models.Category, {
      through: 'PostCategory', 
      foreignKey: 'post_id', 
      otherKey: 'category_id'
    });
  }

  return PostCategory;
}