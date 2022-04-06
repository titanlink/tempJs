// Import Page Model
const Page = require('../models').Page;
 
module.exports = {
  // Get all pages
  async getAll(req,res) {
    try {
      const page = await Page.findAll();
      res.send(page);
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },
  // Get page by id
  async getById(req,res) {
    try {
      const page = await Page.findAll({
        where: {
          id: req.params.id
        }
      });
      if (page.length > 0){
        res.send(page[0]);
      }else{
        res.status(404).send(e)
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(e)
    }
  },
}

 