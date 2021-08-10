"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, anio, patente) {
        this.velocidad = 0;
        this.marca = marca;
        this.anio = anio;
        this.patente = patente;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.getVelocidadActual = function () {
        return this.velocidad;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    Vehiculo.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
