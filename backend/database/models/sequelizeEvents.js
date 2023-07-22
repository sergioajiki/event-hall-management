"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
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
    eventType: {
        type: sequelize_1.DataTypes.STRING,
        field: 'event_type',
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'events',
    timestamps: false,
    underscored: true,
});
exports.default = SequelizeEvents;
