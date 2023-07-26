"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const validations_1 = __importDefault(require("../midllewares/validations"));
const userController = new user_controller_1.default();
const router = (0, express_1.Router)();
router.get('/login', (req, res) => res.json({ message: 'Preparando endpoint Login' }));
router.post('/login/register', validations_1.default.validateCreateUserFields, validations_1.default.ValidatePasswordFormat, validations_1.default.ValidateEmailFormat, (req, res) => userController.createUser(req, res));
exports.default = router;
