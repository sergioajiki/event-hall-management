"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller_1 = __importDefault(require("../controller/event.controller"));
const eventController = new event_controller_1.default();
const router = (0, express_1.Router)();
router.get('/event', (req, res) => res.json({ message: 'Preparando endpoint de Eventos' }));
router.get('/event/open', (req, res) => eventController.getOpenvents(req, res));
router.get('/event/private', (req, res) => eventController.getAllEvents(req, res));
router.get('/eventi/:id', (req, res) => eventController.getEventsById(req, res));
exports.default = router;
