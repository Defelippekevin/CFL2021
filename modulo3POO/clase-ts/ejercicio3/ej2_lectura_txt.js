"use strict";
exports.__esModule = true;
var ReadlineSync = require("readline-sync");
var fs = require("fs");
var texto = fs.readFileSync('listado.txt', 'utf8');
var arrPalabras = texto.split(' ');
for (var i = 0; i < arrPalabras.length; i++) {
}
var comando = 0;
comando = ReadlineSync.questionInt(" Ingrese 1 para insertar una palabra " +
    " 2 para eliminar una palabra, 3 para buscar una palabra y 4 para actualizar, " +
    " 5 para imprimir el arreglo y 0 para salir ");
while (comando != 0) {
    ejecutarComando(comando);
    comando = ReadlineSync.questionInt(" Ingrese 1 para insertar una palabra " +
        " 2 para eliminar una palabra, 3 para buscar una palabra y 4 para actualizar, " +
        " 5 para imprimir el arreglo y 0 para salir ");
}
function ejecutarComando(comandoElegido) {
    switch (comandoElegido) {
        case 1:
            insertarPalabra();
            break;
        case 2:
            eliminarPalabra();
            break;
        case 3:
            buscarPalabra();
            break;
        case 4:
            actualizarPalabra();
            break;
        case 5:
            imprimirArr();
            break;
    }
}
function insertarPalabra() {
    var palabraNUeva;
    palabraNUeva = ReadlineSync.question(" Ingrese nueva palabra ");
    arrPalabras.push(palabraNUeva);
}
function eliminarPalabra() {
    var posicionABorrar;
    posicionABorrar = ReadlineSync.question(" ingrese la posicion que quiere eliminar ");
    delete arrPalabras[posicionABorrar];
}
function buscarPalabra() {
    var palabraABuscar;
    palabraABuscar = ReadlineSync.question("ingrese la palabra que esta deseando buscar ");
    console.log(palabraABuscar);
    for (var i = 0; i < arrPalabras.length; i++) {
        if (arrPalabras[i] == palabraABuscar) {
            console.log("la palabra buscada se encuentra en la posicion " + i + " del arreglo");
        }
        else {
            console.log("la palabra buscada no se encuentra en el arreglo");
        }
    }
}
function actualizarPalabra() {
    var posicionAInsertar;
    var palabraAInsertar;
    palabraAInsertar = ReadlineSync.question(" Ingrese palabra que desea actualizar ");
    posicionAInsertar = ReadlineSync.questionInt(" Ingrese posicion donde desea insertar la palabra nueva ");
    arrPalabras[posicionAInsertar] = palabraAInsertar;
}
function imprimirArr() {
    for (var i = 0; i < arrPalabras.length; i++) {
        console.log("la palabra " + arrPalabras[i] + " esta en la posicion " + i);
    }
}
