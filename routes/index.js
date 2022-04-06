const bookController = require('../controllers').book;
module.exports = (app) => {
  app.get('/books',bookController.getAll);
  app.get('/book/:id',bookController.getById);
  app.get('/book/:id/pages',bookController.getPages);
  app.get('/book/:id/page/:pageId',bookController.getPageById);
}