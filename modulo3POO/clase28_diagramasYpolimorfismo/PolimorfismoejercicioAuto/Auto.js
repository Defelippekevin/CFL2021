"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadActual = 0;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    Auto.prototype.mejorarModelo = function () {
        this.modelo = this.modelo + 20;
    };
    return Auto;
}());
exports["default"] = Auto;
