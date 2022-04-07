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
    index: DataTypes.INTEGER,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Page',
  });
  return Page;
};