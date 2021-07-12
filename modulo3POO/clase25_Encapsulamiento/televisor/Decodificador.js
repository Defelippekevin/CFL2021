"use strict";
exports.__esModule = true;
var Decodificador = /** @class */ (function () {
    function Decodificador(volume, canal) {
        this.volumenActual = volume;
        this.canalActual = canal;
    }
    //mostramos el canal 
    Decodificador.prototype.getCanal = function () {
        return this.canalActual;
    };
    Decodificador.prototype.setCanal = function (actalCanal) {
        this.canalActual = actalCanal;
    };
    //mostramos el volumen 
    Decodificador.prototype.getVolumen = function () {
        return this.volumenActual;
    };
    Decodificador.prototype.setVolumen = function (actualVolumen) {
        this.volumenActual = actualVolumen;
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Decodificador.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    return Decodificador;
}());
exports["default"] = Decodificador;
