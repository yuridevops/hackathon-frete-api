"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreightRouteController = void 0;
var getRoutes_service_1 = require("../services/freightRoutes/getRoutes.service");
var addRoute_service_1 = require("../services/freightRoutes/addRoute.service");
var FreightRouteController = /** @class */ (function () {
    function FreightRouteController() {
    }
    FreightRouteController.prototype.getRoutes = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, getRoutesService, result, err_1, status, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (!id) {
                            return [2 /*return*/, response.status(422).json({ message: '[id] is missing' })];
                        }
                        getRoutesService = new getRoutes_service_1.GetRoutesService();
                        return [4 /*yield*/, getRoutesService.execute({ personId: Number(id) })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, response.json(result)];
                    case 3:
                        err_1 = _a.sent();
                        status = err_1.status, message = err_1.message;
                        return [2 /*return*/, response.status(status).json({ message: message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FreightRouteController.prototype.addRoute = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, negotiated_amount, destiny_date, origin_date, origin, destiny, received_amount, advance_amount, addRoute, result, err_2, status, message;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, negotiated_amount = _a.negotiated_amount, destiny_date = _a.destiny_date, origin_date = _a.origin_date, origin = _a.origin, destiny = _a.destiny, received_amount = _a.received_amount, advance_amount = _a.advance_amount;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        addRoute = new addRoute_service_1.AddRouteService();
                        return [4 /*yield*/, addRoute.execute({
                                person_id: Number(id),
                                received_amount: received_amount,
                                advance_amount: advance_amount,
                                negotiated_amount: negotiated_amount,
                                destiny_date: destiny_date,
                                origin_date: origin_date,
                                origin: origin,
                                destiny: destiny,
                            })];
                    case 2:
                        result = _b.sent();
                        return [2 /*return*/, response.json(result)];
                    case 3:
                        err_2 = _b.sent();
                        status = err_2.status, message = err_2.message;
                        return [2 /*return*/, response.status(status).json({ message: message })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return FreightRouteController;
}());
exports.FreightRouteController = FreightRouteController;
//# sourceMappingURL=freightRouteController.js.map