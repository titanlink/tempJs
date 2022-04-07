const bookController = require('../controllers').book;
module.exports = (app) => {
  app.get('/book',bookController.getAll);
  app.get('/book/:id',bookController.getById);
  app.get('/book/:id/page',bookController.getPages);
  app.get('/book/:id/page/:pageIndex',bookController.getPageByIndex);
  app.get('/book/:id/page/:pageIndex/:format',bookController.getPageByIndexWithFormat);
}