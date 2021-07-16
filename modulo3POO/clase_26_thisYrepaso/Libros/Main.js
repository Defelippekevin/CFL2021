"use strict";
exports.__esModule = true;
var RLS = require("readline-sync");
var GestorLibros_1 = require("./GestorLibros");
var gestor = new GestorLibros_1["default"]();
gestor.cargarLibros('libro.txt', '\n');
gestor.mostrarLibros();
//menu de opciones CRUD
var opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
var titulo;
while (opcion != 'X') {
    switch (opcion) {
        case 'C': {
            gestor.addLibro();
            break;
        }
        case 'R': {
            titulo = RLS.question('Ingrese la titulo a buscar: ');
            console.log("Encontre la titulo en la posicion " + gestor.findLibro(titulo) + ".");
            break;
        }
        case 'U': {
            titulo = RLS.question('Ingrese la palabra a buscar y reemplazar: ');
            gestor.updateLibro(titulo);
            break;
        }
        case 'D': {
            titulo = RLS.question('Ingrese la titulo a eliminar: ');
            gestor.deleteLibro(titulo);
            break;
        }
    }
    gestor.mostrarLibros();
    opcion = RLS.question('Ingrese una opcion, X para finalizar: ').toUpperCase();
}
