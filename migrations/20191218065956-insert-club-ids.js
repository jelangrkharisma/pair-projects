'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return Promise.all([
      queryInterface.addColumn('Challenges', 'ChallengerId', Sequelize.INTEGER),
      queryInterface.addColumn('Challenges', 'ReceiverId', Sequelize.INTEGER),
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn('ChallengerId'),
      queryInterface.removeColumn('ReceiverId')
    ])
  }
};
