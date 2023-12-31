"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return queryInterface.createTable('events', {
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
                eventDate: {
                    type: sequelize_1.DataTypes.DATEONLY,
                    field: 'event_date',
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
            });
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            return queryInterface.dropTable('events');
        });
    }
};
