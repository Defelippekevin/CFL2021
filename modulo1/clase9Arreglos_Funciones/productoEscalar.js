/*
Cargue  dos  arreglos  de  dimensión  N  números (la cantidad es ingresada por el usuario)
Calcule el producto escalar entre los dos arreglos:
*/

let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");
let primerArreglo = new Array(dimension);
let segundoArreglo = new Array(dimension);


function LlenarArreglo(array){
    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }

}

function multiplicarArreglo(arreglo1,arreglo2,dimension){
    let resultado=0;
    let suma=0;
    let i=0;

        for(i;i<dimension;i++){
            resultado= arreglo1[i]*arreglo2[i];

            suma= suma+resultado;

        }
        return suma;

 }


 

LlenarArreglo(primerArreglo);
LlenarArreglo(segundoArreglo);
multiplicarArreglo(primerArreglo,segundoArreglo,dimension);

let productoEscalar=multiplicarArreglo(primerArreglo,segundoArreglo,dimension);


console.log("el producto escalar de los dos arreglos es "+ productoEscalar);