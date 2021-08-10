"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Vehiculo_1 = require("./Vehiculo");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, patente, anio) {
        var _this = _super.call(this, marca, anio, patente) || this;
        _this.dobleCabina = false;
        _this.largo = 2;
        return _this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidad += 40;
    };
    Camioneta.prototype.getLargo = function () {
        return this.largo;
    };
    Camioneta.prototype.setLargo = function (largo) {
        this.largo = largo;
    };
    Camioneta.prototype.getDobleCabina = function () {
        return this.dobleCabina;
    };
    Camioneta.prototype.setDobleCabina = function (dobleCabina) {
        this.dobleCabina = dobleCabina;
    };
    return Camioneta;
}(Vehiculo_1.Vehiculo));
exports["default"] = Camioneta;
