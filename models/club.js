'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Club extends Model { }

  Club.init({
    name: DataTypes.STRING
  }, { sequelize })

  Club.associate = function (models) {
    // associations can be defined here
    Club.hasMany(models.Player)
    Club.belongsToMany(models.Club, { through: models.Match, foreignKey: 'ChallengerId', otherKey: 'ReceiverId' })
  };
  return Club;
};