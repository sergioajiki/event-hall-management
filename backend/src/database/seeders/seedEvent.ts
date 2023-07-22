import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInteface: QueryInterface) => {
    await queryInteface.bulkInsert(
      'events',
      [
        {
          eventName: 'Expo Quadros',
          eventData: '2023-07-21',
          eventTime: '08:00:00',
          eventType: 'free',
          description: 'Exposição de Quadros'          
        },
        {
          eventName: 'Show Musical',
          eventData: '2023-07-21',
          eventTime: '20:00:00',
          eventType: 'registered',
          description: 'Apresentação musical'
        },
        {
          eventName: 'Churrasco',
          eventData: '2023-07-21',
          eventTime: '12:00:00',
          eventType: 'private',
          description: 'Almoço'
        },
      ],
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('event', {});
  },
};
