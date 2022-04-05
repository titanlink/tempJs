const bookController = require('../controllers').book;
module.exports = (app) => {
    app.get('/books',bookController.getAll);
    app.get('/book/:id',bookController.getById);
}