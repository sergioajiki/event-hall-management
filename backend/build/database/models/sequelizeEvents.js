"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelizeUsers_1 = __importDefault(require("./sequelizeUsers"));
const sequelizeEventUser_1 = __importDefault(require("./sequelizeEventUser"));
class SequelizeEvents extends sequelize_1.Model {
}
SequelizeEvents.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    eventName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'event_name',
        allowNull: false,
    },
    eventData: {
        type: sequelize_1.DataTypes.DATE,
        field: 'event_data',
        allowNull: false,
    },
    eventTime: {
        type: sequelize_1.DataTypes.TIME,
        field: 'event_time',
        allowNull: false,
    },
    eventType: {
        type: sequelize_1.DataTypes.STRING,
        field: 'event_type',
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: _1.default,
    modelName: 'events',
    timestamps: false,
    underscored: true,
});
sequelizeUsers_1.default.belongsToMany(SequelizeEvents, {
    through: sequelizeEventUser_1.default,
    //   as: 'events',
    foreignKey: 'id_user',
    otherKey: 'id_event'
});
SequelizeEvents.belongsToMany(sequelizeUsers_1.default, {
    //   as: 'users',
    through: sequelizeEventUser_1.default,
    foreignKey: 'id_event',
    otherKey: 'id_user',
});
exports.default = SequelizeEvents;
