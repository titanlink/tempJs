'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Page extends Model {

    static associate(models) {
      // define association here
      Page.belongsTo(models.Book, {
        foreignKey: 'bookId',
        onDelete: 'CASCADE',
      });
    }
  }
  Page.init({
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Page',
  });
  return Page;
};