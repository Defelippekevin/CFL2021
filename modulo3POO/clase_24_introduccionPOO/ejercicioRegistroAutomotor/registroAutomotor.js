"use strict";
exports.__esModule = true;
var fs = require("fs");
var registroAutomotor = /** @class */ (function () {
    function registroAutomotor() {
        var texto = fs.readFileSync('autos.txt', 'utf8');
        var arrAutos = texto.split(',');
        this.autos = arrAutos;
    }
    registroAutomotor.prototype.insertarAuto = function (auto) {
        this.autos.push(auto);
    };
    registroAutomotor.prototype.imprimirArr = function () {
        for (var i = 0; i < this.autos.length; i++) {
            console.log("la palabra " + this.autos[i] + " esta en la posicion " + i);
        }
    };
    registroAutomotor.prototype.buscarAuto = function (auto) {
        for (var i = 0; i < this.autos.length; i++) {
            if (this.autos[i] == auto) {
                console.log("vehiculo encontrado " + this.autos[i] + " posicion, " + i);
                return this.autos[i];
            }
        }
        return "no se encuentra";
    };
    registroAutomotor.prototype.eliminarAuto = function (auto) {
        var registroAEliminar = this.autos.indexOf(auto);
        if (registroAEliminar != -1) {
            this.autos.splice(registroAEliminar, 1);
        }
    };
    registroAutomotor.prototype.actualizarAuto = function (auto, posicion) {
        if (posicion > 0 && posicion < this.autos.length - 1) {
            this.autos[posicion] = auto;
            return;
        }
        console.log(" usted quiere remplazar en una posicion no valida");
    };
    //index of se queda con la 1ra ocurrencia(indice) o -1 si no lo encuentra
    registroAutomotor.prototype.actualizarPorNombre = function (auto, autoNuevo) {
        var registroAActualizar = this.autos.indexOf(auto);
        if (registroAActualizar != -1) {
            this.autos[registroAActualizar] = autoNuevo;
            return true;
        }
        return false;
    };
    return registroAutomotor;
}());
//for (let i: number = 0; i < arrAutos.length; i++) {
//}
/*
let comando: number = 0;
comando = ReadlineSync.questionInt(" Ingrese 1 para insertar una palabra "+
    " 2 para eliminar una palabra, 3 para buscar una palabra y 4 para actualizar, "+
    " 5 para imprimir el arreglo y 0 para salir ");

while (comando != 0) {
            
            if(comando==1){
                insertarAuto();
            }else if(comando==2){
                eliminarAuto();
            }else if(comando==3){
                buscarAuto();
            }else if(comando==4){
                actualizarAuto();
            }else if(comando==5){
                imprimirArr();
            }
        }
    comando = ReadlineSync.questionInt(" Ingrese 1 para insertar una palabra "+
    " 2 para eliminar una palabra, 3 para buscar una palabra y 4 para actualizar, "+
    " 5 para imprimir el arreglo y 0 para salir ");

*/
var auto1 = new registroAutomotor();
auto1.actualizarAuto("gol", 3);
console.log(auto1);
auto1.actualizarPorNombre("gol", "fiesta");
console.log(auto1);
