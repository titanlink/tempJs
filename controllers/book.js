// Import Book Model
const Book = require('../models').Book;
 
module.exports = {
  // Get all books
  async getAll(req,res) {
    try {
      const book = await Book.findAll();
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
      res.send(book[0]);
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },
}

 