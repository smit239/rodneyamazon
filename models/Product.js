'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    product_name: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
  const Department = sequelize.define('Department', {
    Department_name: DataTypes.STRING
  }, {});
 Department.associate = function(models) {
    // associations can be defined here
  };
  return Department;
};