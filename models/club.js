'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Club extends Model { }

  Club.init({
    name: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, { sequelize })

  Club.associate = function (models) {
    // associations can be defined here
    Club.hasMany(models.Player)
    Club.belongsToMany(models.Club, { as:'challenger', through: models.Match, foreignKey: 'ChallengerId', otherKey: 'ReceiverId' })
  };
  return Club;
};