import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'events_users',
      [
        {
          id_event: 1,
          id_user: 1
        },
        {
          id_event: 2,
          id_user: 1
        },
        {
          id_event: 3,
          id_user: 1
        },
        {
          id_event: 3,
          id_user: 2
        },
        {
          id_event: 3,
          id_user: 3
        },
        {
          id_event: 2,
          id_user: 3
        },
      ], 
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('events_users', {})
  },
};