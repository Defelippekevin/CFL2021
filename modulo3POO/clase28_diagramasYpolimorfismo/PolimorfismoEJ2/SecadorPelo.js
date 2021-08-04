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
var SecadorPelo = /** @class */ (function (_super) {
    __extends(SecadorPelo, _super);
    function SecadorPelo(marca, modelo, potencia) {
        return _super.call(this, marca, modelo, potencia) || this;
    }
    SecadorPelo.prototype.aumentarPotencia = function () {
        this.potencia = this.potencia + 30;
    };
    SecadorPelo.prototype.disminuirPotencia = function () {
        this.potencia = this.potencia - 30;
    };
    SecadorPelo.prototype.secar = function (secado) {
        if (secado == true) {
            console.log("estas usando el secador de pelo");
        }
        else {
            console.log("no estas usando el secador de pelo");
        }
    };
    return SecadorPelo;
}(Secador_1["default"]));
exports["default"] = SecadorPelo;
