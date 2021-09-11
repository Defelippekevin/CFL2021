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
var RLS = __importStar(require("readline-sync"));
var listaReproduccion_1 = __importDefault(require("./listaReproduccion"));
var gestorListas_1 = __importDefault(require("./gestorListas"));
var listaPistasDisponibles;
listaPistasDisponibles = new listaReproduccion_1.default("canciones");
listaPistasDisponibles.cargarPistas('lista.txt', '\n');
var gestor;
gestor = new gestorListas_1.default();
imprimirMenu();
var opcion = RLS.question('Ingresa una opcion, X para finalizar: ').toUpperCase();
while (opcion != 'X') {
    switch (opcion) {
        case '1': {
            listaPistasDisponibles.mostrarLista();
            break;
        }
        case '2': {
            gestor.crearLista();
            break;
        }
        case '3': {
            gestor.AgregarPistaALista();
            break;
        }
        case '4': {
            gestor.BorrarPistaEnLista();
            break;
        }
        case '5': {
            console.log("La duracion de la lista completa es: " + gestor.duracionLista());
            console.log("La cantidad de temas es: " + gestor.cantidadDeTemasDeLista());
            break;
        }
    }
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}
function imprimirMenu() {
    console.log("A continuacion elegi una opcion: \n 1 - Ver temas disponibles \n 2 - Crear nueva lista de reproducción \n 3 - Agregar tema a lista \n 4 - Eliminar tema \n 5 - Caracteristicas de lista: \n");
}
