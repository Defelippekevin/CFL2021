"use strict";
exports.__esModule = true;
var Secador = /** @class */ (function () {
    function Secador(marca, modelo, potencia) {
        this.marca = marca;
        this.modelo = modelo;
        this.potencia = potencia;
    }
    Secador.prototype.getMarca = function () {
        return this.marca;
    };
    Secador.prototype.getModelo = function () {
        return this.modelo;
    };
    Secador.prototype.getPotencia = function () {
        return this.potencia;
    };
    Secador.prototype.aumentarPotencia = function () {
        this.potencia = this.potencia + 10;
    };
    Secador.prototype.disminuirPotencia = function () {
        this.potencia = this.potencia - 10;
    };
    Secador.prototype.secar = function (secado) {
        if (secado = true) {
        }
        else {
        }
    };
    return Secador;
}());
exports["default"] = Secador;
