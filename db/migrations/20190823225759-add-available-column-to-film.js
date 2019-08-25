module.exports = {
  up: queryInterface =>
    queryInterface.sequelize.query('ALTER TABLE films' +
      ' ADD COLUMN available INTEGER ' +
      ' GENERATED ALWAYS' +
      ' AS (copies - rented)' +
      ' NOT NULL;'),
  down: queryInterface => queryInterface.removeColumn('available', 'films'),
};
