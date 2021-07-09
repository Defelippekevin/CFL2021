"use strict";
exports.__esModule = true;
var Auto_1 = require("./Auto");
var FS = require("fs");
var RLS = require("readline-sync");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
    }
    RegistroAutomotor.prototype.addAuto = function () {
        var patente = RLS.question('Ingrese la pantente: ');
        var marca = RLS.question('Ingrese la marca: ');
        var modelo = RLS.question('Ingrese la modelo: ');
        var año = RLS.questionInt('Ingrese el año: ');
        this.autos.push(new Auto_1["default"](patente, marca, modelo, año));
    };
    RegistroAutomotor.prototype.findAuto = function (patente) {
        for (var i = 0; i < this.autos.length; i++) {
            if (patente == this.autos[i].getPatente()) {
                return i;
            }
        }
        return -1;
    };
    RegistroAutomotor.prototype.deleteAuto = function (patente) {
        var posicion = this.findAuto(patente);
        if (posicion != -1) {
            this.autos.splice(posicion, 1);
        }
    };
    RegistroAutomotor.prototype.updateAuto = function (patenteVieja) {
        var patente = RLS.question('Ingrese la pantente nueva: ');
        var marca = RLS.question('Ingrese la marca nueva : ');
        var modelo = RLS.question('Ingrese la modelo nueva: ');
        var año = RLS.questionInt('Ingrese el año nueva: ');
        var posicion = this.findAuto(patenteVieja);
        if (posicion != -1) {
            this.autos[posicion] = new Auto_1["default"](patente, marca, modelo, año);
        }
        else {
            console.log("el auto no existe");
        }
    };
    RegistroAutomotor.prototype.mostrarAutos = function () {
        console.log(this.autos);
    };
    RegistroAutomotor.prototype.cargarAutos = function () {
        var _this = this;
        var autos = (FS.readFileSync('autos.txt', 'utf8')).split('\n');
        var propiedadesAuto = [];
        autos.forEach(function (autoString) {
            propiedadesAuto = autoString.split(";");
            _this.autos.push(new Auto_1["default"](propiedadesAuto[0], propiedadesAuto[1], propiedadesAuto[2], parseInt(propiedadesAuto[3])));
        });
    };
    return RegistroAutomotor;
}());
exports["default"] = RegistroAutomotor;
