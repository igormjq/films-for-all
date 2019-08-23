module.exports = {
  up: queryInterface =>
    queryInterface.sequelize.query('ALTER TABLE inventory' +
      ' ADD COLUMN available INTEGER ' +
      ' GENERATED ALWAYS' +
      ' AS (amount - rented)' +
      ' NOT NULL;'),
  down: queryInterface => queryInterface.removeColumn('available', 'inventory'),
};
