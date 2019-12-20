'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Club extends Model { }

  Club.init({
    name: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date(),
    isOpen: 1
  }, { sequelize })

  Club.associate = function (models) {
    // associations can be defined here
    // Club.belongsToMany(models.Club, { as:'opponent', through: models.Match, foreignKey: 'ChallengerId', otherKey: 'ReceiverId' })
    Club.belongsToMany(models.Club, { as:'challenger', through: models.Challenge, foreignKey: 'ChallengerId', otherKey: 'ReceiverId' })
    Club.hasMany(models.Player)
  };
  return Club;
};