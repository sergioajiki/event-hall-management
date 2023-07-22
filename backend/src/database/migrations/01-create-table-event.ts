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
        allowNull: false,
      },
      eventData: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      eventType: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },
  async down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('events')
  }
}
