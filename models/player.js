'use strict';
const bcrypt = require('bcryptjs')


module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Player extends Model { 
    validPassword(input) {
      return bcrypt.compareSync(input, this.password);
    }
  }
  Player.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    password: DataTypes.STRING,
    ClubId: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date(),
    username: DataTypes.STRING
  }, { 
    sequelize,
    hooks: {
      beforeCreate: (user, options) => {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
      }
    }
  })

  Player.associate = function (models) {
    // associations can be defined here
    Player.belongsTo(models.Club)
    Player.hasMany(models.MatchDetail)
  };
  return Player;
};