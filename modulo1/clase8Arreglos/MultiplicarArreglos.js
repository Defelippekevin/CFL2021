let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");

let primerArreglo = new Array(dimension);
let segundoArreglo = new Array(dimension);
let tercerArreglo= new Array(dimension);
let cuartoArreglo= new Array(dimension);
let resultadoArreglo1y2= new Array(dimension);
let resultadoArreglo3y4= new Array(dimension);
let resultadoArreglo=new Array(dimension);






function multiplicarArreglo(arreglo1,arreglo2,resultadoArreglo,dimension){

    let i=0;

        for(i;i<dimension;i++){
            resultadoArreglo[i]= arreglo1[i]*arreglo2[i];

            console.log("la multiplicacion de la posicion "+i+" del arreglo 1 y 2  es "+resultadoArreglo[i]);
        }

 }

 function LlenarArreglo(array){
    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }

}

LlenarArreglo(primerArreglo);
LlenarArreglo(segundoArreglo);
LlenarArreglo(tercerArreglo);
LlenarArreglo(cuartoArreglo);
multiplicarArreglo(primerArreglo,segundoArreglo,resultadoArreglo1y2,dimension);
multiplicarArreglo(tercerArreglo,cuartoArreglo,resultadoArreglo3y4,dimension);
multiplicarArreglo(resultadoArreglo1y2,resultadoArreglo3y4,resultadoArreglo,dimension);