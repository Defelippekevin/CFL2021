"use strict";
exports.__esModule = true;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (cel, msj) {
        console.log("este metodo se llama mandarMensaje y ejecuta desde la clase telefono");
        return true;
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("este metodo se llama hacerLlamada y ejecuta desde la clase telefono");
    };
    Telefono.prototype.prenderApagar = function () {
        console.log("este metodo se llama prenderApagar y ejecuta desde la clase telefono");
    };
    Telefono.prototype.verEstado = function () {
        console.log(this.estaPrendido);
    };
    Telefono.prototype.verBateriaActual = function () {
        return this.bateriaActual;
    };
    return Telefono;
}());
exports["default"] = Telefono;
