"use strict";
exports.__esModule = true;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, aceleracion, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.aceleracion = aceleracion;
        this.motor = motor;
    }
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getAceleracion = function () {
        return this.aceleracion;
    };
    Vehiculo.prototype.getMotor = function () {
        return this.motor;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.setAceleracion = function (aceleracion) {
        this.aceleracion = aceleracion;
    };
    Vehiculo.prototype.setMotor = function (motor) {
        this.motor = motor;
    };
    Vehiculo.prototype.acelerar = function () {
        this.aceleracion += 10;
    };
    Vehiculo.prototype.desacelerar = function () {
        this.aceleracion -= 10;
    };
    return Vehiculo;
}());
exports["default"] = Vehiculo;
