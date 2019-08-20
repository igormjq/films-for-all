module.exports = {
  up: queryInterface => queryInterface.bulkInsert('directors', [
    { id: 1, name: 'Martin Scorsese' },
    { id: 2, name: 'Steven Spielberg' },
    { id: 3, name: 'Stanley Kubrick' },
    { id: 4, name: 'Francis Ford Coppola' },
  ]),
  down: queryInterface => queryInterface.bulkDelete('directors', null, {})
};
