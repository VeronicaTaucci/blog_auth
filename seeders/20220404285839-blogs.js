'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
    //sequelize model: generate--name blogs--attributes title: string, body: string, userID: integer, is_published: boolean
    await queryInterface.bulkInsert('blogs', [
      {
        title: 'blog name',
        body: "some text1",
        userID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        is_published: false
      },
      {
        title: 'blog name2',
        body: "some text2",
        userID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        is_published: false
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};