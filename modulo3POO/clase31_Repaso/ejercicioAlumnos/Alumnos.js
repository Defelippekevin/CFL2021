"use strict";
exports.__esModule = true;
var Alumno = /** @class */ (function () {
    function Alumno(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.arregloNotas = [];
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.getId = function () {
        return this.id;
    };
    Alumno.prototype.getArregloNotas = function () {
        return this.arregloNotas.length;
    };
    Alumno.prototype.getPromedio = function () {
        var sumaNotas = 0;
        var promedio = 0;
        for (var i = 0; i < this.arregloNotas.length; i++) {
            sumaNotas += this.arregloNotas[i];
        }
        promedio = (sumaNotas / this.arregloNotas.length);
        console.log("promedio " + promedio);
        return promedio;
    };
    Alumno.prototype.addNota = function (nota) {
        this.arregloNotas.push(nota);
    };
    Alumno.prototype.setNotas = function (notas) {
        this.arregloNotas = notas;
    };
    Alumno.prototype.getNota = function (pos) {
        return this.arregloNotas[pos];
    };
    Alumno.prototype.tengoNotas = function () {
        return this.arregloNotas.length > 0;
    };
    return Alumno;
}());
exports["default"] = Alumno;
