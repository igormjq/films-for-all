const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('users', [
    {
      email: 'igormjq@gmail.com',
      password: bcrypt.hashSync('12345', 10),
      name: 'Igor Quevedo'
    },
    { 
      email: 'films_lover@gmail.com',
      password: bcrypt.hashSync('films4all', 10),
      name: 'Films Lover',
    },
    { 
      email: 'joao_da_silva@hotmail.com',
      password: bcrypt.hashSync('films4all', 10),
      name: 'João da Silva', 
    },
    { 
      email: 'chico_pereira@gmail.com',
      password: bcrypt.hashSync('films4all', 10),
      name: 'Francisco Pereira', 
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('users', null, {})
};
