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
        MatchId: 1,
        PlayerId: 3,
        status: 'Goal'
      }, {
        MatchId: 1,
        PlayerId: 4,
        status: 'Goal'
      }, {
        MatchId: 1,
        PlayerId: 5,
        status: 'Goal'
      },
    ]
    return queryInterface.bulkInsert('MatchDetails', data, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('MatchDetails', null, {});

  }
};
