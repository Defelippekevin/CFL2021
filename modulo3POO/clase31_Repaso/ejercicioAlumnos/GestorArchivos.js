"use strict";
exports.__esModule = true;
var fs = require("fs");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos() {
    }
    LectorArchivos.prototype.LeerArchivo = function (archivo, separador) {
        return (fs.readFileSync(archivo, 'utf-8')).split(separador);
    };
    LectorArchivos.prototype.EscribirArchivo = function (archivo, texto) {
        fs.appendFileSync(archivo, ("\n" + texto));
    };
    return LectorArchivos;
}());
exports["default"] = LectorArchivos;
