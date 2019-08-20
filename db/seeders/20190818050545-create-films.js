module.exports = {
  up: queryInterface => queryInterface.bulkInsert('films', [
    { title: 'Taxi Driver', director_id: 1, },
    { title: 'Goodfellas', director_id: 1, },
    { title: 'Raging Bull', director_id: 1, },
    { title: 'Cape Fear', director_id: 1, },
    { title: 'Jaws', director_id: 2, },
    { title: 'Saving Private Ryan', director_id: 2, },
    { title: "Schindler's List", director_id: 2, },
    { title: 'The Shining', director_id: 3, },
    { title: 'Full Metal Jacket', director_id: 3, },
    { title: '2001: A Space Odyssey', director_id: 3, },
  ]),
  down: queryInterface => queryInterface.bulkDelete('films', null, {})
};
