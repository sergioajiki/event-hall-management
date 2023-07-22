"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.APP_PORT || 3001;
app_1.default.listen(PORT, () => {
    console.log(`backend de EventHall up and running on PORT ${PORT} 🚀`);
});
