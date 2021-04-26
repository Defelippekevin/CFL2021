let readlineSync = require("readline-sync");
let numero1 = readlineSync.questionInt(" ingrese el 1er numero que quiera sumar ");
console.log("el 1er numero que ingreso fue: "+ numero1);
let numero2 = readlineSync.questionInt(" ingrese el 2do numeor que quiera sumar  ");
console.log("el 2do numero que ingreso fue: "+ numero2);
let resultado= numero1 + numero2;




console.log( "el resultado de sumar "+numero1 +"+"+numero2+" es:"+ resultado);