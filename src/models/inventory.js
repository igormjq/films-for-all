'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    amount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {
    tableName: 'inventory'
  });
  Inventory.associate = function({ Film }) {
    this.belongsTo(Film, { foreignKey: 'film_id', as: 'film' });
  };
  return Inventory;
};