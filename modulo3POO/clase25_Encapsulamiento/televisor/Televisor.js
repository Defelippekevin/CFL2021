"use strict";
exports.__esModule = true;
var Decodificador_1 = require("./Decodificador");
var Televisor = /** @class */ (function () {
    function Televisor(prendido, decoder) {
        this.estaPrendido = prendido;
        this.decodificador = decoder;
    }
    //mostramos el si esta prendido o no
    Televisor.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Televisor.prototype.setEstaPrendido = function (estado) {
        this.estaPrendido = estado;
    };
    //
    Televisor.prototype.getCanalActual = function () {
        if (this.estaPrendido != false) {
            return this.decodificador.getCanal();
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    Televisor.prototype.setNuevoCanal = function (nuevoCanal) {
        if (this.estaPrendido != false) {
            this.decodificador.setCanal(nuevoCanal);
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    Televisor.prototype.incrementarCanal = function () {
        if (this.estaPrendido != false) {
            this.decodificador.subirCanal();
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido != false) {
            this.decodificador.bajarCanal();
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    Televisor.prototype.getVolumenActual = function () {
        if (this.estaPrendido != false) {
            return this.decodificador.getVolumen();
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    Televisor.prototype.setNuevoVolumen = function (nuevoVolumen) {
        if (this.estaPrendido != false) {
            this.decodificador.setVolumen(nuevoVolumen);
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    Televisor.prototype.incrementarVolumen = function () {
        if (this.estaPrendido != false) {
            this.decodificador.subirVolumen();
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido != false) {
            this.decodificador.bajarVolumen();
        }
        else {
            console.log("la tele esta apagada");
        }
    };
    return Televisor;
}());
var decoder = new Decodificador_1["default"](10, 24);
var tv1 = new Televisor(true, decoder);
console.log("el canal inicial es " + tv1.getCanalActual());
tv1.bajarVolumen();
console.log("el volumen despues de bajarlo 1 es " + tv1.getVolumenActual());
tv1.incrementarCanal();
console.log(" despues de subir un canal, el canal actual es " + tv1.getCanalActual());
tv1.bajarCanal();
console.log("despues de bajar un canal, el canal actual es " + tv1.getCanalActual());
tv1.setNuevoCanal(33);
console.log("despues de haber cambiado varios canales, el canal actual es " + tv1.getCanalActual());
tv1.setNuevoVolumen(15);
console.log("despues de subir varios volumenes, el volumen actual es" + tv1.getVolumenActual());
