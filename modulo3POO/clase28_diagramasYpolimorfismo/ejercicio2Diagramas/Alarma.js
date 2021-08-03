"use strict";
exports.__esModule = true;
var Timbre_1 = require("./Timbre");
var Alarma = /** @class */ (function () {
    function Alarma() {
        this.puerta_ventana = false;
        this.rompioVidrio = false;
        this.movimiento = false;
        this.timbre = new Timbre_1["default"]();
    }
    Alarma.prototype.isRompioVidrio = function () {
        return this.rompioVidrio;
    };
    Alarma.prototype.setRompioVidrio = function (vidrioRoto) {
        this.rompioVidrio = vidrioRoto;
    };
    Alarma.prototype.isPuerta_Ventana = function () {
        return this.puerta_ventana;
    };
    Alarma.prototype.setPuerta_Ventana = function (puertaOventana) {
        this.puerta_ventana = puertaOventana;
    };
    Alarma.prototype.isMovimiento = function () {
        return this.movimiento;
    };
    Alarma.prototype.setMovimiento = function (mov) {
        this.movimiento = mov;
    };
    Alarma.prototype.comprobar = function () {
        if ((!this.rompioVidrio) && (!this.puerta_ventana) && (!this.movimiento)) {
            return false;
        }
        else {
            this.timbre.hacerSonar();
            console.log("estan robando");
            return true;
        }
    };
    return Alarma;
}());
exports["default"] = Alarma;
