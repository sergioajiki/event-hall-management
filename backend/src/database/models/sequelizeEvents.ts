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
  declare eventData: string;
  declare eventType: string;
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
    allowNull: false,
  },
  eventData: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  eventType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'events',
  timestamps: false,
  underscored: true,
});

export default SequelizeEvents;