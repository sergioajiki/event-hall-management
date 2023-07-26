import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
         username: 'Sergio',
         email: 'teste@teste.com',
         password: '123456',
         role: 'admin',
         activation_code: 'colocar o codigo para ativar',
         status: 1, 
        },
        {
          username: 'UserOne',
          email: 'userOne@teste.com',
          password: '654321',
          role: 'guest',
          activation_code: 'colocar o codigo para ativar',
          status: 0, 
         },
         {
          username: 'UserTwo',
          email: 'userTwo@teste.com',
          password: 'qwerty',
          role: 'guest',
          activation_code: 'colocar o codigo para ativar',
          status: 0, 
         },
      ],
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};