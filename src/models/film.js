'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING
  }, {
    tableName: 'films'
  });
  Film.associate = function({ Director, Inventory }) {
    this.belongsTo(Director, { as: 'director', foreignKey: 'director_id' });
    this.hasOne(Inventory, { as: 'inventory', foreignKey: 'film_id' })
  };
  return Film;
};