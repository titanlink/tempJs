'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    
    static associate(models) {
      Book.hasMany(models.Page, {
        foreignKey: 'bookId',
      });
        
    }
  }
  Book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    totalPage: DataTypes.INTEGER,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};