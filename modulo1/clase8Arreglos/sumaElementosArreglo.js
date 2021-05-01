let readlineSync = require("readline-sync");
let dimension;
dimension=readlineSync.questionInt("ingrese cantidad de elementos del arreglo ");
let elementos = new Array(dimension);
console.log("la suma de los elementos del arreglo es " + LlenarArreglo(elementos)); // muestro lo que retorno que es la suma del arreglo

function LlenarArreglo(array){
    let sumatoria=0;
    
    for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario

     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");  
     
     sumatoria=sumatoria+array[i]; // voy guardando la suma a medida que va recorriendo el array

    }
    return sumatoria;

}