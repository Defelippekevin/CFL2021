"use strict";
exports.__esModule = true;
var Televisor = /** @class */ (function () {
    function Televisor() {
        this.canalActual = 0;
        this.volumenActual = 10;
        this.estaPrendido = false;
    }
    Televisor.prototype.cambiarCanal = function (canal) {
        this.canalActual = canal;
    };
    Televisor.prototype.cambiarVolumen = function (volumen) {
        this.volumenActual = volumen;
    };
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    return Televisor;
}());
exports["default"] = Televisor;
