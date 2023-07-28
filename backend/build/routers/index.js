"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_router_1 = __importDefault(require("./auth.router"));
const event_router_1 = __importDefault(require("./event.router"));
const eventUser_router_1 = __importDefault(require("./eventUser.router"));
const router = (0, express_1.Router)();
router.use(auth_router_1.default);
router.use(event_router_1.default);
router.use(eventUser_router_1.default);
exports.default = router;
