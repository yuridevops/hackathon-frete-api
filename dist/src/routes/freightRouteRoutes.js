"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.freightRouteRoutes = void 0;
var express_1 = require("express");
var freightRouteController_1 = require("../controllers/freightRouteController");
var freightRouteRoutes = (0, express_1.Router)();
exports.freightRouteRoutes = freightRouteRoutes;
var freightRouteController = new freightRouteController_1.FreightRouteController();
freightRouteRoutes.get('/trucker/:id', freightRouteController.getRoutes);
freightRouteRoutes.post('/trucker/:id', freightRouteController.addRoute);
//# sourceMappingURL=freightRouteRoutes.js.map