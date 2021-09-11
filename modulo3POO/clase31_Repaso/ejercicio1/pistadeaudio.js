"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pistadeaudio = /** @class */ (function () {
    function pistadeaudio(/* id:number, */ titulo, duracion, interprete) {
        this.id = 1;
        this.titulo = titulo;
        this.duracion = duracion;
        this.interprete = interprete;
    }
    pistadeaudio.prototype.getID = function () {
        return this.id;
    };
    pistadeaudio.prototype.getTitulo = function () {
        return this.titulo;
    };
    pistadeaudio.prototype.getDuracion = function () {
        return this.duracion;
    };
    pistadeaudio.prototype.getInterprete = function () {
        return this.interprete;
    };
    pistadeaudio.prototype.numeroRandom = function (menorValor, mayorValor) {
        var numero;
        return numero = Math.floor(Math.random() * ((mayorValor + 1) - menorValor)) + menorValor;
    };
    return pistadeaudio;
}());
exports.default = pistadeaudio;
