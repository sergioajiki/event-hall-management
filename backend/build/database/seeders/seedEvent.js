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
                event_Name: 'Expo Quadros',
                event_Data: '2023-07-21',
                event_Time: '08:00:00',
                event_Type: 'free',
                description: 'Exposição de Quadros'
            },
            {
                event_Name: 'Show Musical',
                event_Data: '2023-07-21',
                event_Time: '20:00:00',
                event_Type: 'registered',
                description: 'Apresentação musical'
            },
            {
                event_Name: 'Churrasco',
                event_Data: '2023-07-21',
                event_Time: '12:00:00',
                event_Type: 'private',
                description: 'Almoço'
            },
        ], {});
    }),
    down: (queryInterface) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('event', {});
    }),
};
