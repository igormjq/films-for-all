'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING
  }, {});
  Film.associate = function({ Director }) {
    this.belongsTo(Director);
  };
  return Film;
};