import { DataTypes, Model, QueryInterface } from 'sequelize';
import { IEvent } from '../../Interfaces/Events/IEvents';

export default {
  async up (queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IEvent>>('events', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      eventName: {
        type: DataTypes.STRING,
        field: 'event_name',
        allowNull: false,
      },
      eventData: {
        type: DataTypes.DATEONLY,
        field: 'event_data',
        allowNull: false,
      },
      eventTime: {
        type: DataTypes.TIME,
        field: 'event_time',
        allowNull: false,
      },
      eventType: {
        type: DataTypes.STRING,
        field: 'event_type',
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('events')
  }
}
