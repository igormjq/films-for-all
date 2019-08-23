'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    amount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    rented: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    available: {
      type: new DataTypes.VIRTUAL(DataTypes.INTEGER),
      get() {
        return this.amount - this.rented;
      }
    },
  }, {
    tableName: 'inventory'
  });
  Inventory.associate = function({ Film }) {
    this.belongsTo(Film, { foreignKey: 'film_id', as: 'film' });
  };
  return Inventory;
};