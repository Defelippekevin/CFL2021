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
var listaReproduccion_1 = __importDefault(require("./listaReproduccion"));
var RLS = __importStar(require("readline-sync"));
var gestorListas = /** @class */ (function () {
    function gestorListas() {
        this.arreglolistas = [];
    }
    gestorListas.prototype.buscarLista = function (nombre) {
        for (var i = 0; i < this.arreglolistas.length; i++) {
            if (nombre == this.arreglolistas[i].getNombre()) {
                return i;
            }
        }
        return -1;
    };
    gestorListas.prototype.mostrarListas = function () {
        console.log(this.arreglolistas);
    };
    gestorListas.prototype.crearLista = function () {
        var nombre = RLS.question("Ingrese nombre de la nueva lista: ");
        this.arreglolistas.push(new listaReproduccion_1.default(nombre));
    };
    gestorListas.prototype.borrarLista = function () {
        this.mostrarListas();
        var listaABorrar = RLS.question("Ingrese el nombre de la lista a borrar: ");
        var posicion = this.buscarLista(listaABorrar);
        if (posicion != -1) {
            this.arreglolistas.splice(posicion, 1);
        }
        else {
            console.log("La lista no existe");
        }
    };
    gestorListas.prototype.AgregarPistaALista = function () {
        var lista = RLS.question("Ingrese el nombre de la lista: ");
        var posicion = this.buscarLista(lista);
        if (posicion != -1) {
            var nombre = RLS.question("Ingrese el nombre del tema: ");
            var duracion = RLS.questionInt("Ingrese la duracion en segundos: ");
            var interprete = RLS.question("Ingrese el interprete: ");
            this.arreglolistas[posicion].agregarPista(nombre, duracion, interprete);
        }
        else {
            console.log("La lista no existe");
        }
    };
    gestorListas.prototype.BorrarPistaEnLista = function () {
        var lista = RLS.question("Ingrese el nombre de la lista: ");
        var posicion = this.buscarLista(lista);
        if (posicion != -1) {
            this.arreglolistas.splice(posicion, 1);
        }
        else {
            console.log("La lista no existe");
        }
    };
    gestorListas.prototype.duracionLista = function () {
        var lista = RLS.question("Ingrese el nombre de la lista: ");
        var posicion = this.buscarLista(lista);
        if (posicion != -1) {
            this.arreglolistas[posicion].getDuracionTotal();
        }
        else {
            console.log("La lista no existe");
        }
    };
    gestorListas.prototype.cantidadDeTemasDeLista = function () {
        var lista = RLS.question("Ingrese el nombre de la lista: ");
        var posicion = this.buscarLista(lista);
        if (posicion != -1) {
            this.arreglolistas[posicion].cantidadDeTemas();
        }
        else {
            console.log("La lista no existe");
        }
    };
    return gestorListas;
}());
exports.default = gestorListas;
