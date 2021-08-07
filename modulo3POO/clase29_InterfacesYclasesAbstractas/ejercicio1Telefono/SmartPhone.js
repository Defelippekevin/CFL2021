"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        else {
            this.estaPrendido = false;
        }
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        if (this.estaPrendido == false) {
            console.log("el telefono esta apagado");
        }
        else {
            console.log("llamando al numero " + numero);
        }
    };
    SmartPhone.prototype.sacarFoto = function () {
        if (this.estaPrendido == true) {
            console.log("sacando foto");
        }
        else {
            console.log("el telefono esta  apagado");
        }
    };
    return SmartPhone;
}());
exports["default"] = SmartPhone;
