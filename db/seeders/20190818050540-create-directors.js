module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Directors', [
    { id: 1, name: 'Martin Scorsese' },
    { id: 2, name: 'Steven Spielberg' },
    { id: 3, name: 'Stanley Kubrick' },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Directors', null, {})
};