"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Person_1 = __importDefault(require("./Person"));
var freight_route = /** @class */ (function () {
    function freight_route() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], freight_route.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'integer' }),
        __metadata("design:type", Number)
    ], freight_route.prototype, "person_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'boolean' }),
        __metadata("design:type", Boolean)
    ], freight_route.prototype, "received", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], freight_route.prototype, "origin", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], freight_route.prototype, "destiny", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", Date)
    ], freight_route.prototype, "origin_date", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'date' }),
        __metadata("design:type", Date)
    ], freight_route.prototype, "destiny_date", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_route.prototype, "negotiated_amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_route.prototype, "advance_amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_route.prototype, "received_amount", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Person_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'person_id' }),
        __metadata("design:type", Person_1.default)
    ], freight_route.prototype, "person", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], freight_route.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], freight_route.prototype, "updated_at", void 0);
    freight_route = __decorate([
        (0, typeorm_1.Entity)()
    ], freight_route);
    return freight_route;
}());
exports.default = freight_route;
//# sourceMappingURL=FreightRoute.js.map