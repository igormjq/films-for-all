'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rental = sequelize.define('Rental', {
    rental_date: {
      type: DataTypes.DATEONLY,
    },
    return_date: {
      type: DataTypes.DATEONLY,
    }
  }, {
    tableName: 'rentals',
    defaultScope: {
      include: {
        all: true,
      }
    }
  });
  Rental.associate = function({ User, Film }) {
    this.belongsTo(User, { foreignKey: 'customer_id', as: 'customer' });
    this.belongsTo(Film, { foreignKey: 'film_id', as: 'film' });
  };
  return Rental;
};