import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInteface: QueryInterface) => {
    await queryInteface.bulkInsert(
      'events',
      [
        {
          event_Name: 'Expo Quadros',
          event_Date: '2023-08-21',
          event_Time: '08:00:00',
          event_Type: 'free',
          description: 'Exposição de Quadros'          
        },
        {
          event_Name: 'Show Musical',
          event_Date: '2023-08-22',
          event_Time: '20:00:00',
          event_Type: 'registered',
          description: 'Apresentação musical'
        },
        {
          event_Name: 'Churrasco',
          event_Date: '2023-08-25',
          event_Time: '12:00:00',
          event_Type: 'private',
          description: 'Almoço'
        },
        {
          event_Name: 'Jantar',
          event_Date: '2023-08-29',
          event_Time: '12:00:00',
          event_Type: 'private',
          description: 'Jantar só para convidados'
        },
        {
          event_Name: 'Expo Plantas',
          event_Date: '2023-08-30',
          event_Time: '08:00:00',
          event_Type: 'free',
          description: 'Exposição de Plantas'
        },
        {
          event_Name: 'Show Acústico',
          event_Date: '2023-09-08',
          event_Time: '21:00:00',
          event_Type: 'registered',
          description: 'Apresentação musical'
        },
        {
          event_Name: 'Aniversário',
          event_Date: '2023-09-08',
          event_Time: '21:00:00',
          event_Type: 'private',
          description: 'Só para convidados'
        },
      ],
      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('event', {});
  },
};
