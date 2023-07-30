"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initServer = void 0;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var _a = process.env.PORT, PORT = _a === void 0 ? 3333 : _a;
function initServer() {
    var app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use(routes_1.router);
    app.listen(PORT, function () { return "server running on port ".concat(PORT); });
}
exports.initServer = initServer;
//# sourceMappingURL=server.js.map