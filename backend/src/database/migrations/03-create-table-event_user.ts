import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IEventUser } from '../../Interfaces/EventsUsers/IEventUser';

export default {
  async up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IEventUser>>('events_users', {
      idEvent: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_event',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idUser : {
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id_user',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
  });
  },
  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('events_users')
  }  
}
