import { QueryInterface } from 'sequelize';
import { password } from '../config/database';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
         username: 'Sergio',
         email: 'teste@teste.com',
         password: '$2b$10$4ESD17XkJSrbDX/qNZbjJOmb4iGGLMYjUmQpP7RJCog/WwrKsxcve',
         role: 'admin',
         activation_code: 'c495df9f2aaa6ba9243b263469be22cd',
         status: 1, 
        },
        // password: secret_word
        {
          username: 'UserOne',
          email: 'userOne@teste.com',
          password: '$2b$10$PWXOUGmr5Eyc2pn9EaReseRvy7Xryl8fQL3SKSBVYPT4FKgRckeOu',
          role: 'guest',
          activation_code: '',
          status: 0, 
         },
         // password: 123456
         {
          username: 'UserTwo',
          email: 'userTwo@teste.com',
          password: 'r56zUEUb3cokkEBBNYtTeOkZxdDrw3qVYgA5BjuwSt1XeT2gMwce',
          role: 'client',
          activation_code: 'colocar o codigo para ativar',
          status: 0, 
         },
         // password: qwerty
      ],
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};