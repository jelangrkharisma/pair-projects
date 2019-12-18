'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model
  class Challenge extends Model {}
  Challenge.init({
    accepted: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date(),
    ChallengerId: DataTypes.INTEGER,
    ReceiverId: DataTypes.INTEGER
  }, {
    sequelize
  });
  Challenge.associate = function(models) {
    // associations can be defined here
  };
  return Challenge;
};