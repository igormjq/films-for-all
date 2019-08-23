'use strict';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('inventory', [
    { film_id: 1, amount: 5, rented: 0 },
    { film_id: 2, amount: 5, rented: 0 },
    { film_id: 3, amount: 5, rented: 0 },
    { film_id: 4, amount: 5, rented: 0 },
    { film_id: 5, amount: 5, rented: 0 },
    { film_id: 6, amount: 5, rented: 0 },
    { film_id: 7, amount: 5, rented: 0 },
    { film_id: 8, amount: 5, rented: 0 },
    { film_id: 9, amount: 5, rented: 0 },
    { film_id: 10, amount: 5, rented: 0 },
  ]),

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('inventory', null, {});
  }
};
