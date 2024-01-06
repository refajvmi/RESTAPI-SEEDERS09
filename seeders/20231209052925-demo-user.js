'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Alexander',
      email: 'alex@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()

    },{
      firstName: 'Nvn',
      lastName: 'Rmdhn',
      email: 'nvn@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    
    }], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
