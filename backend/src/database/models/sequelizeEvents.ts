import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
class SequelizeEvents extends Model<InferAttributes<SequelizeEvents>, 
InferCreationAttributes<SequelizeEvents>> {
  declare id: CreationOptional<number>;
  declare eventName: string;
  declare eventData: Date;
  declare eventTime: Date;
  declare eventType: string;
  declare description: string;
}

SequelizeEvents.init ({
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
    type: DataTypes.DATE,
    field: 'event_data',
    allowNull: false,
  },
  eventTime: {
    type: DataTypes.TIME,
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
}, {
  sequelize: db,
  modelName: 'events',
  timestamps: false,
  underscored: true,
});

export default SequelizeEvents;