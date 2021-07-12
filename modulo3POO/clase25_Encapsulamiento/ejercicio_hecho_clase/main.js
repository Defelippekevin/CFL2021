"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
var registro = new RegistroAutomotor_1["default"]();
registro.cargarAutos();
registro.mostrarAutos();
//menu de opciones CRUD
var opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
var patente;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            registro.addAuto();
            break;
        }
        case 'R': {
            patente = RLS.question('Ingrese la patente a buscar: ');
            console.log("Encontre la patente en la posicion " + registro.findAuto(patente) + ".");
            break;
        }
        case 'U': {
            patente = RLS.question('Ingrese la palabra a buscar y reemplazar: ');
            registro.updateAuto(patente);
            break;
        }
        case 'D': {
            patente = RLS.question('Ingrese la patente a eliminar: ');
            registro.deleteAuto(patente);
            break;
        }
    }
    registro.mostrarAutos();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}
