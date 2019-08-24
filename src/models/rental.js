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
  Rental.associate = function({ User, Inventory }) {
    this.belongsTo(User, { foreignKey: 'customer_id', as: 'customer' });
    this.belongsTo(Inventory, { foreignKey: 'inventory_id', as: 'filmInventory' });
  };
  return Rental;
};