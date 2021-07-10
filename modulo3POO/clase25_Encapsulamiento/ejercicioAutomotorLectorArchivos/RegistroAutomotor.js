"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = __importDefault(require("./Auto"));
var LectorArchivos_1 = __importDefault(require("./LectorArchivos"));
var RLS = __importStar(require("readline-sync"));
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.autos = [];
        this.archivotxt = new LectorArchivos_1.default();
    }
    RegistroAutomotor.prototype.addAuto = function () {
        var patente = RLS.question('Ingrese la pantente: ');
        var marca = RLS.question('Ingrese la marca: ');
        var modelo = RLS.question('Ingrese la modelo: ');
        var año = RLS.questionInt('Ingrese el año: ');
        this.autos.push(new Auto_1.default(patente, marca, modelo, año));
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
            this.autos[posicion] = new Auto_1.default(patente, marca, modelo, año);
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
        var autos = this.archivotxt.leerArchivo('autos.txt', '\n');
        var propiedadesAuto = [];
        autos.forEach(function (autoString) {
            propiedadesAuto = autoString.split(";");
            _this.autos.push(new Auto_1.default(propiedadesAuto[0], propiedadesAuto[1], propiedadesAuto[2], parseInt(propiedadesAuto[3])));
        });
    };
    return RegistroAutomotor;
}());
exports.default = RegistroAutomotor;
