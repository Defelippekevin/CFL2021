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
var Secador_1 = require("./Secador");
var SecadorPiso = /** @class */ (function (_super) {
    __extends(SecadorPiso, _super);
    function SecadorPiso(marca, modelo, potencia) {
        return _super.call(this, marca, modelo, potencia) || this;
    }
    SecadorPiso.prototype.aumentarPotencia = function () {
        this.potencia = this.potencia + 60;
    };
    SecadorPiso.prototype.disminuirPotencia = function () {
        this.potencia = this.potencia - 60;
    };
    SecadorPiso.prototype.secar = function (secado) {
        if (secado == true) {
            console.log("estas usando la maquina que seca el piso");
        }
        else {
            console.log("no estas usando la maquina que seca el piso");
        }
    };
    return SecadorPiso;
}(Secador_1["default"]));
exports["default"] = SecadorPiso;
