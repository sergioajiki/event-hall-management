import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInteface: QueryInterface) => {
    await queryInteface.bulkInsert(
      'events',
      [
        {
          event_Name: 'Expo Quadros',
          event_Date: '2023-07-21',
          event_Time: '08:00:00',
          event_Type: 'free',
          description: 'Exposição de Quadros'          
        },
        {
          event_Name: 'Show Musical',
          event_Date: '2023-07-21',
          event_Time: '20:00:00',
          event_Type: 'registered',
          description: 'Apresentação musical'
        },
        {
          event_Name: 'Churrasco',
          event_Date: '2023-07-21',
          event_Time: '12:00:00',
          event_Type: 'private',
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
