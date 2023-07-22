"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/event', (req, res) => res.json({ message: 'Preparando endpoint de Eventos' }));
exports.default = router;
