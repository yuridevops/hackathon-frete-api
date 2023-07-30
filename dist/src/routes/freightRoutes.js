"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freightRoutes = void 0;
var express_1 = require("express");
var freightController_1 = require("../controllers/freightController");
var freightRoutes = (0, express_1.Router)();
exports.freightRoutes = freightRoutes;
var freightController = new freightController_1.FreightController();
freightRoutes.get('/list', freightController.listFreights);
freightRoutes.get('/trucker/:id', freightController.listFreightsByPerson);
freightRoutes.get('/trucker/:id/score', freightController.getFreightWithScore);
//# sourceMappingURL=freightRoutes.js.map