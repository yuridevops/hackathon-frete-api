"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serasaRoutes = void 0;
var express_1 = require("express");
var serasaController_1 = require("../controllers/serasaController");
var serasaRoutes = (0, express_1.Router)();
exports.serasaRoutes = serasaRoutes;
var serasaController = new serasaController_1.SerasaController();
serasaRoutes.post('/consult-cpf', serasaController.getScore);
//# sourceMappingURL=serasaRoutes.js.map