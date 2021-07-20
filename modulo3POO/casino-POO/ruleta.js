"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var Ruleta = /** @class */ (function () {
    /*
    constructor(valorApuesta:number,probalidadGanar:number){
        this.valorApuesta=valorApuesta;
        this.probalidadGanar=probalidadGanar;
    }
    */
    function Ruleta() {
    }
    Ruleta.prototype.pedirNumeroAlApostador = function () {
        this.numeroDelApostador = RLS.questionInt("ingrese el numero al que desea apostar ");
        console.log("el numero por el que apuesta es " + this.numeroDelApostador);
        return this.numeroDelApostador;
    };
    Ruleta.prototype.generarNumeroAleatorio = function () {
        this.numeroAleatorio = Math.floor((Math.random() * 37) + 1);
        console.log("el numero que salio entre 1 y 36 fue " + this.numeroAleatorio);
        return this.numeroAleatorio;
    };
    Ruleta.prototype.cuantoApuesta = function () {
        this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
        console.log("el MONTO que ustesd apuesta es " + this.valorApuesta);
        return this.valorApuesta;
    };
    Ruleta.prototype.jugar = function () {
        var resultado = false;
        if (this.numeroAleatorio == this.numeroDelApostador) {
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
    Ruleta.prototype.GanoApuesta = function () {
        this.valorApuesta = this.valorApuesta * 2;
    };
    Ruleta.prototype.PerdioApuesta = function () {
        this.valorApuesta = this.valorApuesta / 2;
    };
    Ruleta.prototype.getValorApuestaActual = function () {
        return this.valorApuesta;
    };
    return Ruleta;
}());
//let ruletita:Ruleta = new Ruleta(14,5);
var ruletita = new Ruleta();
ruletita.cuantoApuesta();
ruletita.pedirNumeroAlApostador();
ruletita.generarNumeroAleatorio();
ruletita.jugar();
console.log(ruletita.getValorApuestaActual());
/*
ruletita.generarNumeroAleatorio();
ruletita.jugar();
console.log(ruletita.getValorApuestaActual());
ruletita.generarNumeroAleatorio();
ruletita.jugar();
console.log(ruletita.getValorApuestaActual());
ruletita.generarNumeroAleatorio();
ruletita.jugar();
console.log(ruletita.getValorApuestaActual());


*/
