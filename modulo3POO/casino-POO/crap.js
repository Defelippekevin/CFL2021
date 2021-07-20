"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var Crap = /** @class */ (function () {
    function Crap() {
    }
    Crap.prototype.dadosAleatorios = function () {
        return Math.floor((Math.random() * 2) + 1);
    };
    Crap.prototype.tirarDados = function () {
        this.dado1 = this.dadosAleatorios();
        this.dado2 = this.dadosAleatorios();
        this.resultadoDados = this.dado1 + this.dado2;
        return this.resultadoDados;
    };
    Crap.prototype.pedirNumeroAlApostador = function () {
        this.resultadoApostador = RLS.questionInt("ingrese el resultado al que desea apostar entre 1 y 12 ");
        while ((this.resultadoApostador < 1) || (this.resultadoApostador > 12)) {
            this.resultadoApostador = RLS.questionInt("ingrese el resultado al que desea apostar entre 1 y 12 ");
        }
        console.log("el resultado por el que apuesta es " + this.resultadoApostador);
        return this.resultadoApostador;
    };
    Crap.prototype.cuantoApuesta = function () {
        this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
        console.log("el MONTO que ustesd apuesta es " + this.valorApuesta);
        return this.valorApuesta;
    };
    Crap.prototype.jugar = function () {
        var resultado = false;
        if (this.resultadoDados == this.resultadoApostador) {
            resultado = true;
            console.log("felicitaciones, los numeros coincidieron usted  gano");
            this.GanoApuesta();
        }
        else {
            this.PerdioApuesta();
            console.log("no coincidieron los numeros, usted perdio");
        }
        return resultado;
    };
    Crap.prototype.GanoApuesta = function () {
        this.valorApuesta = this.valorApuesta * 2;
    };
    Crap.prototype.PerdioApuesta = function () {
        this.valorApuesta = this.valorApuesta / 2;
    };
    Crap.prototype.getValorApuestaActual = function () {
        return this.valorApuesta;
    };
    return Crap;
}());
var dado = new Crap();
dado.cuantoApuesta();
dado.pedirNumeroAlApostador();
dado.tirarDados();
dado.jugar();
console.log(dado.getValorApuestaActual());
