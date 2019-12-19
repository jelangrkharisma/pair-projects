'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Player extends Model { }
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    password: DataTypes.STRING,
    ClubId: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date(),
    username: DataTypes.STRING
  }, { 
    sequelize 
  })

  Player.associate = function (models) {
    // associations can be defined here
    Player.belongsTo(models.Club)
    Player.hasMany(models.MatchDetail)
  };
  return Player;
};