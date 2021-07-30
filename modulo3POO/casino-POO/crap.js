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
Object.defineProperty(exports, "__esModule", { value: true });
var RLS = __importStar(require("readline-sync"));
var fs = __importStar(require("fs"));
var Crap = /** @class */ (function () {
    function Crap() {
    }
    Crap.prototype.dadosAleatorios = function () {
        return Math.floor((Math.random() * 6) + 1);
    };
    Crap.prototype.tirarDados = function () {
        this.dado1 = this.dadosAleatorios();
        this.dado2 = this.dadosAleatorios();
        this.resultadoDados = this.dado1 + this.dado2;
        console.log("el resultado que salio al sumar lo que arrojaron los 2 dados fue " + this.resultadoDados);
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
        var txtFile = '';
        this.cuantoApuesta();
        var resultado = false;
        this.pedirNumeroAlApostador();
        this.tirarDados();
        var vApuesta = this.valorApuesta;
        if (this.resultadoDados == this.resultadoApostador) {
            resultado = true;
            console.log("felicitaciones, los numeros coincidieron usted  gano");
            this.GanoApuesta();
        }
        else {
            this.PerdioApuesta();
            console.log("no coincidieron los numeros, usted perdio");
        }
        txtFile = txtFile + 'juego Crap' + '\n' + 'usted aposto ' + vApuesta + '\n' + ' usted le aposto al numero ' + this.resultadoApostador + '\n' + 'el numero que salio en los dados  fue ' + this.resultadoDados + '\n' + 'usted gano? ' + resultado + '\n';
        fs.appendFile('resultadosCrap.txt', txtFile, function (err) {
            if (err)
                throw err;
        });
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
exports.default = Crap;
