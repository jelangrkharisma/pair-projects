'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class MatchDetail extends Model { }

  MatchDetail.init({
    MatchId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, { sequelize })


  MatchDetail.associate = function (models) {
    // associations can be defined here
    MatchDetail.belongsTo(models.Match)
  };
  return MatchDetail;
};