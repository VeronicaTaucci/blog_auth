'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  //sequelize model: generate--name users--attributes firstName: string, lastName: string, email: string, is_published: boolean
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'first',
        lastName: "last",
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'myemail@gmail.com',
        is_published: false
      },
      {
        firstName: 'first2',
        lastName: "last2",
        createdAt: new Date(),
        updatedAt: new Date(),
        email: 'myemail2@gmail.com',
        is_published: false
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
