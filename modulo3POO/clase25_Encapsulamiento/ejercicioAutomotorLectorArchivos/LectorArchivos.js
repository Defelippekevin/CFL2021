"use strict";
exports.__esModule = true;
var fs = require("fs");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos() {
    }
    LectorArchivos.prototype.leerArchivo = function (archivo, separador) {
        return (fs.readFileSync(archivo, 'utf8')).split(separador);
    };
    return LectorArchivos;
}());
exports["default"] = LectorArchivos;
