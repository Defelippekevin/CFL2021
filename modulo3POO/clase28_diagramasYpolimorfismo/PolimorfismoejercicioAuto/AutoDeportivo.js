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
var Auto_1 = require("./Auto");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo) {
        return _super.call(this, marca, modelo) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoDeportivo.prototype.mejorarModelo = function () {
        this.modelo = this.modelo + 50;
    };
    return AutoDeportivo;
}(Auto_1["default"]));
exports["default"] = AutoDeportivo;
