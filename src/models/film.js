'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    copies: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    rented: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    available: {
      type: new DataTypes.VIRTUAL(DataTypes.INTEGER),
      get() {
        return this.copies - this.rented;
      }
    }
  }, {
    tableName: 'films'
  });
  Film.associate = function({ Director }) {
    this.belongsTo(Director, { as: 'director', foreignKey: 'director_id' });
  };
  return Film;
};