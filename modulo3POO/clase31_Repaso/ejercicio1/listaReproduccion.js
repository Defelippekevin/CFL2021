"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pistadeaudio_1 = __importDefault(require("./pistadeaudio"));
var gestorArchivos_1 = __importDefault(require("./gestorArchivos"));
var gestorPistas = /** @class */ (function () {
    function gestorPistas(nombre) {
        this.listaPistas = [];
        this.filetxt = new gestorArchivos_1.default();
        this.nombreLista = (nombre);
    }
    gestorPistas.prototype.agregarPista = function (titulo, duracion, interprete) {
        this.listaPistas.push(new pistadeaudio_1.default(/* this.setID (), */ titulo, duracion, interprete));
    };
    gestorPistas.prototype.borrarCancion = function (id) {
        this.listaPistas.splice(id, 1);
    };
    gestorPistas.prototype.setID = function () {
        return this.listaPistas[this.listaPistas.length].getID();
    };
    gestorPistas.prototype.cargarPistas = function (rutaArchivo, separador) {
        var _this = this;
        var pistas = this.filetxt.LeerArchivo(rutaArchivo, separador);
        var propiedadesPista = [];
        pistas.forEach(function (pistasString) {
            propiedadesPista = pistasString.split(";");
            _this.listaPistas.push(new pistadeaudio_1.default(propiedadesPista[0], parseInt(propiedadesPista[1]), propiedadesPista[2]));
        });
        /* let autos:string[] = this.filetxt.LeerArchivo(rutaArchivo, separador);
        let propiedadesAuto:string[] = [];
        autos.forEach(autoString => {
            propiedadesAuto = autoString.split(";")
            this.autos.push(new Auto(propiedadesAuto[0],propiedadesAuto[1],propiedadesAuto[2],parseInt(propiedadesAuto[3])))
        }); */
    };
    gestorPistas.prototype.buscarTema = function (titulo) {
        var id;
        id = -1;
        for (var i = 0; i < this.listaPistas.length; i++) {
            if (this.listaPistas[i].getTitulo() == titulo) {
                id = this.listaPistas[i].getID();
            }
        }
        return id;
    };
    gestorPistas.prototype.getNombre = function () {
        return this.nombreLista;
    };
    gestorPistas.prototype.getDuracionTotal = function () {
        var duracionTotal = 0;
        for (var i = 0; i < this.listaPistas.length; i++) {
            duracionTotal += this.listaPistas[i].getDuracion();
        }
        return duracionTotal;
    };
    gestorPistas.prototype.cantidadDeTemas = function () {
        return this.listaPistas.length;
    };
    gestorPistas.prototype.mostrarLista = function () {
        console.log(this.listaPistas);
    };
    return gestorPistas;
}());
exports.default = gestorPistas;
