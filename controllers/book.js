// Import Book Model
const Book = require('../models').Book;
const Page = require('../models').Page;
const DataFormater = require('../utils/data-formater.js');

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
  // Get page by index
  async getPageByIndex(req,res) {
    try {
      const pages = await Page.findAll({
        where: {
          index: req.params.pageIndex,
          bookId: req.params.id,
        }
      });
      if (pages.length > 0) {
        res.send(pages[0]);
      }else{
        res.status(404).send({});
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },
  // Get page by index with format
  async getPageByIndexWithFormat(req,res) {
    try {
      const pages = await Page.findAll({
        where: {
          index: req.params.pageIndex,
          bookId: req.params.id,
        }
      });
      if (pages.length > 0) {
        formater = new DataFormater();
        res.send(formater.runConvert( req.params.format, pages[0].content ) );
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

