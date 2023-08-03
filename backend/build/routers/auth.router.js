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
router.post('/login', validationsUser_1.default.validateLoginFields, validationsUser_1.default.ValidateEmailFormat, (req, res) => {
    res.header('Access-Control-Allow-Headers', 'X-Custom-Header, Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        userController.login(req, res);
});
router.post('/login/register', validationsUser_1.default.validateCreateUserFields, validationsUser_1.default.ValidatePasswordFormat, validationsUser_1.default.ValidateEmailFormat, (req, res) => {
    res.header('Access-Control-Allow-Headers', 'X-Custom-Header, Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        userController.createUser(req, res);
});
router.post('/login/role', validationsUser_1.default.validateLoginFields, validationsUser_1.default.ValidateEmailFormat, (req, res) => {
    res.header('Access-Control-Allow-Headers', 'X-Custom-Header, Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        userController.getRoleUserByEmail(req, res);
});
router.get('/activate/:userId/:activationCode', (req, res) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT'),
        userController.activateUser(req, res);
});
exports.default = router;
