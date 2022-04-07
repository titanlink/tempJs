// Import Book Model
const Book = require('../models').Book;
const Page = require('../models').Page;

module.exports = {
  // Get all books
  async getAll(req,res) {
    try {
      const book = await Book.findAll({include:Page});
      if (book.length > 0) {
      }else{
        res.status(404).send({});
      }
      res.send(book);
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },
  // Get book by id
  async getById(req,res) {
    try {
      console.log("pasando")
      const book = await Book.findAll({
        where: {
          id: req.params.id
        }
      });
      if (book.length > 0) {
        res.send(book[0]);
      }else{
        res.status(404).send({});
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },
  // Get page by id
  async getPageById(req,res) {
    try {
      const book = await Page.findAll({
        where: {
          id: req.params.pageId,
          bookId: req.params.id,
        }
      });
      if (book.length > 0) {
        res.send(book[0]);
      }else{
        res.status(404).send({});
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },

  // Get pages
  async getPages(req,res) {
    try {
      const book = await Page.findAll({
        where: {
          bookId: req.params.id,
        }
      });
      res.send(book);
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },
}

