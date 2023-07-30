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
var freight_register = /** @class */ (function () {
    function freight_register() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], freight_register.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('integer'),
        __metadata("design:type", Number)
    ], freight_register.prototype, "person_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "capacity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "body_type", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "type_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "category", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "is_articulated", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "capacity_measurement_unit", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "localizador", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "tracker", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "Carroceria", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "permissionado", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "lat", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "lng", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "cidade_capital", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "portuaria", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "score_transacional", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "score_documental", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "score_motorista", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "verificado", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "dependencia", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "tipo_usuario", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'decimal' }),
        __metadata("design:type", Number)
    ], freight_register.prototype, "resposta", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Person_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'person_id' }),
        __metadata("design:type", Person_1.default)
    ], freight_register.prototype, "person", void 0);
    freight_register = __decorate([
        (0, typeorm_1.Entity)()
    ], freight_register);
    return freight_register;
}());
exports.default = freight_register;
//# sourceMappingURL=Freight.js.map