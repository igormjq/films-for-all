module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [
    { 
      email: 'films_lover@gmail.com',
      password: 'films4all' ,
      name: 'Films Lover',
    },
    { 
      email: 'joao_da_silva@hotmail.com',
      password: 'films4all' ,
      name: 'João da Silva', 
    },
    { 
      email: 'chico_pereira@gmail.com',
      password: 'films4all' ,
      name: 'Francisco Pereira', 
    },
  ]),
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
