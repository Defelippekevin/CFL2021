/*
•Almacene en un arreglo de tamaño N los números ingresados por el usuario
•La dimensión N también es ingresada por el usuario
•Muestre los números del arreglo pero del último al primero
*/



let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");

let arreglo = new Array(dimension);


function LlenarArreglo(array){
    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }
}

function mostrarArregloInverso(array){
    for(let i=array.length-1; i>=0; i--){ // recorro el arreglo y voy mostrando los numeros
    
        console.log("el dato elegido por el usuario en la posicion "+ i + " fue " + array[i]);
    }
}


LlenarArreglo(arreglo);
mostrarArregloInverso(arreglo);