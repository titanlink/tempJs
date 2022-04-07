'use strict';
const date = new Date();
const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";
const seedBooks = [
  { bookInfo:{ id:1, totalPage:100 ,title: "A GIRL'S GUIDE TO MOVING ON", author: "Debbie Macomber", description: '', createdAt: date, updatedAt: date }, pages: [] },
  { bookInfo:{ id:2, totalPage:200 ,title: "THE MARTIAN", author: "Andy Weir", description: '', createdAt: date, updatedAt: date }, pages: [] },
  { bookInfo:{ id:3, totalPage:300 ,title: "LORD OF THE RINGS", author: "J. R. R. Tolkien", description: '', createdAt: date, updatedAt: date }, pages: []  }
];


module.exports = {
  async up (queryInterface, Sequelize) {
    for (let index = 0; index < seedBooks.length; index++) {
      let item = seedBooks[index];
      for (let pageIndex = 0; pageIndex < item.bookInfo.totalPage; pageIndex++) {
        item.pages.push({ index:pageIndex ,bookId: item.bookInfo.id, content: content, createdAt: date, updatedAt: date  });
      }
      await queryInterface.bulkInsert('Books', [
        item.bookInfo,
      ], {});
      await queryInterface.bulkInsert('Pages', 
        item.pages,
      {});
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
