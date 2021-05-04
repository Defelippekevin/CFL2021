/*
• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario
*/


let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");

let primerArreglo = new Array(dimension);
let segundoArreglo = new Array(dimension);
let arregloResultado= new Array(dimension);

function LlenarArreglo(array){
    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }

}

function sumarArreglo(arreglo1,arreglo2,sumarArreglo,dimension){

    let i=0;

        for(i;i<dimension;i++){
            sumarArreglo[i]= arreglo1[i]+arreglo2[i];
            console.log("la suma de la posicion "+i+" del arreglo 1 y 2 es "+sumarArreglo[i]);
        }

 }
    
LlenarArreglo(primerArreglo);
LlenarArreglo(segundoArreglo);
sumarArreglo(primerArreglo,segundoArreglo,arregloResultado,dimension);


