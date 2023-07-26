import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
//   Association,
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
// SequelizeUsers.belongsToMany(SequelizeEvents, {
//   through: SequelizeEventUser,
// //   as: 'events',
//   foreignKey: 'id_user',
//   otherKey: 'id_event'
// });

// SequelizeEvents.belongsToMany(SequelizeUsers, {
// //   as: 'users',
//   through: SequelizeEventUser,
//   foreignKey: 'id_event',
//   otherKey: 'id_user',
// });
export default SequelizeEventUser;



