import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from './index';

class SequelizeEventUser extends Model<InferAttributes<SequelizeEventUser>,
InferCreationAttributes<SequelizeEventUser>> {
  declare idEvent: CreationOptional<number>;
  declare idUser: CreationOptional<number>;
}

SequelizeEventUser.init({
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
}, {
  sequelize: db,
  modelName: 'events_users',
  timestamps: false,
  underscored: true,
});
export default SequelizeEventUser;



