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
exports.default = {
    up: (queryInteface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInteface.bulkInsert('events', [
            {
                eventName: 'Expo Quadros',
                eventData: '2023-07-21',
                eventTime: '08:00:00',
                eventType: 'free',
                description: 'Exposição de Quadros'
            },
            {
                eventName: 'Show Musical',
                eventData: '2023-07-21',
                eventTime: '20:00:00',
                eventType: 'registered',
                description: 'Apresentação musical'
            },
            {
                eventName: 'Churrasco',
                eventData: '2023-07-21',
                eventTime: '12:00:00',
                eventType: 'private',
                description: 'Almoço'
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('event', {});
    }),
};
