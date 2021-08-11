"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(patente, marca, modelo, año) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = año;
        this.velocidadActual = 0;
    }
    Auto.prototype.acelerar = function (velocidad) {
        this.velocidadActual = this.velocidadActual + velocidad;
    };
    Auto.prototype.getVelocidadActual = function () {
        return this.velocidadActual;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getAño = function () {
        return this.anio;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Auto;
}());
exports["default"] = Auto;
