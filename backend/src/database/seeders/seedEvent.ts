import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInteface: QueryInterface) => {
    await queryInteface.bulkInsert(
      'events',
      [
        {
          event_name: 'Expo Quadros',
          event_data: '2023-07-21',
          event_type: 'free',
        },
        {
          event_name: 'Show Musical',
          event_data: '2023-07-21',
          event_type: 'registered',
        },
        {
          event_name: 'Churrasco',
          event_data: '2023-07-21',
          event_type: 'private',
        },
      ],
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('event', {});
  },
};
