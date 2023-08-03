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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const routers_1 = __importDefault(require("./routers"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        // this.config();
        this.app.get('/', (_req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).json({ message: 'Yeeeiiiii' });
        }));
        this.routers();
    }
    routers() {
        this.app.use(routers_1.default);
    }
    // private config(): void {
    //     const accessControl: express.RequestHandler = (_req, res, next) => {
    //       res.header('Access-Control-Allow-Origin', '*');
    //       res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    //       res.header('Access-Control-Allow-Headers', '*');
    //       next();
    //     };
    //     this.app.use(express.json());
    //     this.app.use(accessControl);
    //   }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`backend de EventHall up and running on PORT ${PORT} 🚀`));
    }
}
exports.App = App;
