import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInteface: QueryInterface) => {
    await queryInteface.bulkInsert(
      'events',
      [
        {
          eventName: 'Expo Quadros',
          eventData: '2023-07-21',
          eventType: 'free',
        },
        {
          eventName: 'Show Musical',
          eventData: '2023-07-21',
          eventType: 'registered',
        },
        {
          eventName: 'Churrasco',
          eventData: '2023-07-21',
          eventType: 'private',
        },
      ],
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('event', {});
  },
};
