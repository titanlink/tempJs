'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()
    await queryInterface.bulkInsert('Books', [
      {
        title: "A GIRL'S GUIDE TO MOVING ON",
        author: "Debbie Macomber",
        description: '',
        createdAt: date,
        updatedAt: date,
      },
      {
        title: "THE MARTIAN",
        author: "Andy Weir",
        description: '',
        createdAt: date,
        updatedAt: date,
      },
      {
        title: "LORD OF THE RINGS",
        author: "J. R. R. Tolkien",
        description: '',
        createdAt: date,
        updatedAt: date,
      }
    ], {});
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
