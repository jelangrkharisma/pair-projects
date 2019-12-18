'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const data = [
      {
        name: "Anto Antonio",
        position: "Forward",
        ClubId: null,
        password: 123456
      }, {
        name: "Budi Budianto",
        position: "Winger",
        ClubId: null,
        password: 123456
      }, {
        name: "Cahyo Cahyono",
        position: "Winger",
        ClubId: null,
        password: 123456
      }, {
        name: "Deni Deniati",
        position: "Defender",
        ClubId: null,
        password: 123456
      }, {
        name: "Elok Elianto",
        position: "Goal Keeper",
        ClubId: null,
        password: 123456
      },
    ]
    return queryInterface.bulkInsert('Players', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Players', null, {});
  }
};
