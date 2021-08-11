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
var Colectivo = /** @class */ (function (_super) {
    __extends(Colectivo, _super);
    function Colectivo(marca, modelo, aceleracion, motor) {
        return _super.call(this, marca, modelo, aceleracion, motor) || this;
    }
    Colectivo.prototype.acelerar = function () {
        this.aceleracion += 25;
    };
    Colectivo.prototype.desacelerar = function () {
        this.aceleracion -= 25;
    };
    return Colectivo;
}(Vehiculo_1["default"]));
exports["default"] = Colectivo;