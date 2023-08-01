"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const event_controller_1 = __importDefault(require("../controller/event.controller"));
const validationsEvent_1 = __importDefault(require("../midllewares/validationsEvent"));
const eventController = new event_controller_1.default();
const router = (0, express_1.Router)();
router.get('/event', (req, res) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        eventController.getOpenvents(req, res);
});
router.get('/event/private', (req, res) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        eventController.getAllEvents(req, res);
});
router.post('/event', validationsEvent_1.default.validateCreateEventFields, validationsEvent_1.default.validateEventType, (req, res) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        eventController.createEvent(req, res);
});
router.get('/event/:id', (req, res) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        eventController.getEventsById(req, res);
});
router.patch('/event/:id', validationsEvent_1.default.validateCreateEventFields, validationsEvent_1.default.validateEventType, (req, res) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        eventController.updateEventById(req, res);
});
router.delete('/event/:id', (req, res) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        eventController.deleteEventById(req, res);
});
exports.default = router;
