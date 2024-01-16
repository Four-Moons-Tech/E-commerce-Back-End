// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreign_key: 'category_id',
}),
// Categories have many Products
Category.hasMany(Product, {
  foreign_key: 'category_id', 
}),
// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Tag, {
  through:{
    model: ProductTag,
    foreignKey: 'product_id',
  }
}),
// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(Product, {
  through:{
    model: ProductTag,
    foreignKey: 'tag_id',
  }
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};