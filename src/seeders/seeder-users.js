'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // email: DataTypes.STRING,
  // password:DataTypes.STRING,
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // address: DataTypes.STRING,
  // gender: DataTypes.BOOLEAN,
  // roleId: DataTypes.STRING,
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email:'admin@gmail.com',
        password:'200103',
        firstName: 'Sinh',
        lastName: 'Nguyen',
        address: 'Da Nang',
        gender: 1,
        typeRole:'ROLE',
        keyRole: 'R1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
