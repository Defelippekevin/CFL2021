"use strict";
exports.__esModule = true;
var Alumnos_1 = require("./Alumnos");
var RLS = require("readline-sync");
var Validar_1 = require("./Validar");
var GestorArchivos_1 = require("./GestorArchivos");
var GestorAlumnos = /** @class */ (function () {
    function GestorAlumnos() {
        this.arrAlumnos = [];
        this.arrAlumnos = [];
        this.txtFile = new GestorArchivos_1["default"]();
    }
    GestorAlumnos.prototype.getCantidadArrAlumnos = function () {
        return this.arrAlumnos.length;
    };
    GestorAlumnos.prototype.mostrarArreglo = function () {
        console.log(this.arrAlumnos);
    };
    GestorAlumnos.prototype.getPromedioAlumno = function (id) {
        for (var i = 0; i < this.arrAlumnos.length; i++) {
            if (this.arrAlumnos[i].getId() == id) {
                return this.arrAlumnos[i].getPromedio();
            }
        }
        console.log("el alumno buscado por ese id no se encuentra");
        return 0;
    };
    GestorAlumnos.prototype.getTodosLosPromedios = function () {
        var sumatotal = 0;
        for (var i = 0; i < this.arrAlumnos.length; i++) {
            if (this.arrAlumnos[i].tengoNotas())
                sumatotal += this.arrAlumnos[i].getPromedio();
        }
        return sumatotal;
    };
    GestorAlumnos.prototype.cargarAlumno = function () {
        var i = 0;
        var alum;
        var nombre = RLS.question("ingrese el nombre del alumno ");
        var id = Validar_1["default"].checkNumero(RLS.question('Ingrese el id: '));
        var cantNotas = RLS.questionInt(" ingrese la cantidad de  notas a cargar");
        alum = new Alumnos_1["default"](id, nombre);
        while (i < cantNotas) {
            var nota = RLS.questionInt(" ingrese una nota ");
            alum.addNota(nota);
            i++;
        }
        this.arrAlumnos.push(alum);
    };
    GestorAlumnos.prototype.cargarAlumnoTxt = function (rutaArchivo, separador) {
        var _this = this;
        var alumno = this.txtFile.LeerArchivo(rutaArchivo, separador);
        var propiedadesAlumno = [];
        var notasAlumnos = [];
        var alum;
        alumno.forEach(function (AlumnoString) {
            propiedadesAlumno = AlumnoString.split(";");
            alum = new Alumnos_1["default"](parseInt(propiedadesAlumno[0]), (propiedadesAlumno[1]));
            if (propiedadesAlumno[2]) {
                notasAlumnos = propiedadesAlumno[2].split(",").map(function (nota) { return parseInt(nota); });
                alum.setNotas(notasAlumnos);
            }
            _this.arrAlumnos.push(alum);
        });
    };
    GestorAlumnos.prototype.cargarAlumnoSecuencial = function (alumno1) {
        this.arrAlumnos.push(alumno1);
    };
    return GestorAlumnos;
}());
exports["default"] = GestorAlumnos;
