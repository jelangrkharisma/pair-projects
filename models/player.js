'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Player extends Model { }
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    password: DataTypes.STRING,
    ClubId: DataTypes.INTEGER
  }, { sequelize })

  Player.associate = function (models) {
    // associations can be defined here
    Player.belongsTo(models.Club)
  };
  return Player;
};