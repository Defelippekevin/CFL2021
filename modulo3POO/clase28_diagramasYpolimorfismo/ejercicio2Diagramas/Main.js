"use strict";
exports.__esModule = true;
var Alarma_1 = require("./Alarma");
var AlarmaLuminosa_1 = require("./AlarmaLuminosa");
var Luz_1 = require("./Luz");
var Timbre_1 = require("./Timbre");
var alarma = new Alarma_1["default"]();
var alarmaLuz = new AlarmaLuminosa_1["default"]();
var timbre = new Timbre_1["default"]();
var luz = new Luz_1["default"]();
/*
console.log(alarma);
alarma.setMovimiento(true);
console.log(alarma);


console.log(alarmaLuz);
console.log(timbre);
timbre.setTimbre(true);
console.log(timbre);
*/
alarma.setMovimiento(true);
alarma.setPuerta_Ventana(true);
alarma.setRompioVidrio(true);
alarma.comprobar();
alarmaLuz.setMovimiento(true);
alarmaLuz.setRompioVidrio(true);
alarmaLuz.setPuerta_Ventana(true);
alarmaLuz.comprobar();
