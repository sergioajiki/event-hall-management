import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  // Association,
} from 'sequelize';
import db from '.';
import SequelizeUsers from './sequelizeUsers';
import SequelizeEventUser from './sequelizeEventUser';

class SequelizeEvents extends Model<InferAttributes<SequelizeEvents>, 
InferCreationAttributes<SequelizeEvents>> {
  declare id: CreationOptional<number>;
  declare eventName: string;
  declare eventDate: Date;
  declare eventTime: Date;
  declare eventType: string;
  declare description: string;

  // public static associations: {
  //   events: Association<SequelizeEvents, SequelizeUsers>;
  // }
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
  eventDate: {
    type: DataTypes.DATE,
    field: 'event_date',
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
}, {
  sequelize: db,
  modelName: 'events',
  timestamps: false,
  underscored: true,
});

SequelizeUsers.belongsToMany(SequelizeEvents, {
  through: SequelizeEventUser,
//   as: 'events',
  foreignKey: 'id_user',
  otherKey: 'id_event'
});

SequelizeEvents.belongsToMany(SequelizeUsers, {
//   as: 'users',
  through: SequelizeEventUser,
  foreignKey: 'id_event',
  otherKey: 'id_user',
});
export default SequelizeEvents;