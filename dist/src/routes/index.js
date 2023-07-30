"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var serasaRoutes_1 = require("./serasaRoutes");
var freightRoutes_1 = require("./freightRoutes");
var freightRouteRoutes_1 = require("./freightRouteRoutes");
var router = (0, express_1.Router)();
exports.router = router;
router.get('/', function (req, res) {
    res.json({ message: 'Hello Hackathon' });
});
router.use('/serasa', serasaRoutes_1.serasaRoutes);
router.use('/freight', freightRoutes_1.freightRoutes);
router.use('/freight-route', freightRouteRoutes_1.freightRouteRoutes);
//# sourceMappingURL=index.js.map