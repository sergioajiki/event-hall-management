"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const validationsUser_1 = __importDefault(require("../midllewares/validationsUser"));
const userController = new user_controller_1.default();
const router = (0, express_1.Router)();
router.get('/login', (req, res) => userController.login(req, res));
router.post('/login/register', validationsUser_1.default.validateCreateUserFields, validationsUser_1.default.ValidatePasswordFormat, validationsUser_1.default.ValidateEmailFormat, (req, res) => userController.createUser(req, res));
router.get('/users', (req, res) => userController.getAllUsers(req, res));
exports.default = router;
