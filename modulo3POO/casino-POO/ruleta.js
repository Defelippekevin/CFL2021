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
var Ruleta = /** @class */ (function () {
    function Ruleta() {
    }
    Ruleta.prototype.pedirNumeroAlApostador = function () {
        this.numeroDelApostador = RLS.questionInt("ingrese el numero al que desea apostar ");
        console.log("el numero por el que apuesta es " + this.numeroDelApostador);
        return this.numeroDelApostador;
    };
    Ruleta.prototype.generarNumeroAleatorio = function () {
        this.numeroAleatorio = Math.floor((Math.random() * 37) + 1);
        console.log("el numero que salio entre 1 y 37 fue " + this.numeroAleatorio);
        return this.numeroAleatorio;
    };
    Ruleta.prototype.cuantoApuesta = function () {
        this.valorApuesta = RLS.questionInt("ingrese el MONTO que desea apostar ");
        console.log("el MONTO que ustesd apuesta es " + this.valorApuesta);
        return this.valorApuesta;
    };
    Ruleta.prototype.jugar = function () {
        var txtFile = '';
        this.cuantoApuesta();
        var resultado = false;
        this.pedirNumeroAlApostador();
        this.generarNumeroAleatorio();
        var vApuesta = this.valorApuesta;
        if (this.numeroAleatorio == this.numeroDelApostador) {
            resultado = true;
            console.log("felicitaciones, los numeros coincidieron usted  gano");
            this.GanoApuesta();
            console.log(" su nuevo dinero es " + this.getValorApuestaActual());
        }
        else {
            this.PerdioApuesta();
            console.log("no coincidieron los numeros, usted perdio");
            console.log(" su nuevo dinero es " + this.getValorApuestaActual());
        }
        txtFile = txtFile + 'juego ruleta' + '\n' + 'usted aposto ' + vApuesta + '\n' + ' usted le aposto al numero ' + this.numeroDelApostador + '\n' + 'el numero que salio en la ruleta fue ' + this.numeroAleatorio + '\n' + 'usted gano? ' + resultado + '\n';
        fs.appendFile('resultadosRuleta.txt', txtFile, function (err) {
            if (err)
                throw err;
        });
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
exports.default = Ruleta;
