'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Match extends Model { }
  Match.init({
    ChallengerId: DataTypes.INTEGER,
    ReceiverId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    venue: DataTypes.STRING
  }, { sequelize })

  Match.associate = function (models) {
    // associations can be defined here
    Match.hasMany(models.MatchDetail)
  };
  return Match;
};