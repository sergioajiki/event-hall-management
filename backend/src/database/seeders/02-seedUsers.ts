import { QueryInterface } from 'sequelize';
import { password } from '../config/database';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
         username: 'Admin',
         email: 'admin@teste.com',
         password: '$2b$10$4ESD17XkJSrbDX/qNZbjJOmb4iGGLMYjUmQpP7RJCog/WwrKsxcve',
         role: 'admin',
         activation_code: 'c495df9f2aaa6ba9243b263469be22cd',
         status: 1, 
        },
        // password: secret_word
        {
          username: 'Convidado',
          email: 'convidado@teste.com',
          password: '$2b$10$nw/Mo0DVa2KssAHmZKKR..V7AT6/u4ps0LxfcuzSWA1LJNd/7tS/e',
          role: 'guest',
          activation_code: '',
          status: 1, 
         },
         // password: mypass
         {
          username: 'UserTwo',
          email: 'userTwo@teste.com',
          password: 'r56zUEUb3cokkEBBNYtTeOkZxdDrw3qVYgA5BjuwSt1XeT2gMwce',
          role: 'client',
          activation_code: 'colocar o codigo para ativar',
          status: 1, 
         },
         // password: qwerty
         {
          username: 'NewUser03',
          email: 'newUser03@teste.com',
          password: '$2b$10$CAZk6HABo9JlKzS7CLYe/uBqc/EFRBpkL5B59IbmqlrMUn9E7Qvy2',
          role: 'client',
          activation_code: '0ea49170eb3b1993f990db7e23db5972',
          status: 1, 
         },
         {
          username: 'newUser04',
          email: 'newUser04@teste.com',
          password: '$2b$10$iYki97FWljTz7TknWUforeQguGFR1bkXXbX7aDjp3TlcMc/YTZ5ZS',
          role: 'guest',
          activation_code: 'd65fc832a71629eaa4f1f79892164a7c',
          status: 1, 
         },
                  {
          username: 'newUser05',
          email: 'newUser05@teste.com',
          password: '$2b$10$TOCpLZISLbio4HL98WTqzOJJGWm7SbkSTj8v3hBm.OSVrhcTK7Qpy',
          role: 'client',
          activation_code: '2de39cafe228cd40712da795a8a1bf6d',
          status: 1, 
         },
      ],
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};