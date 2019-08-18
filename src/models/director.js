'use strict';
module.exports = (sequelize, DataTypes) => {
  const Director = sequelize.define('Director', {
    name: DataTypes.STRING
  }, {});
  Director.associate = function(models) {
    // associations can be defined here
  };
  return Director;
};