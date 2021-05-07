/*
Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay 
Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada
*/
let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");
let arregloButacas= new Array(dimension);
let butacasvacias=0;


function LlenarArreglo(array){
    for(let i=0; i<array.length;i++){
    array[i] = ((Math.random()));  
        if(array[i]<0.5){
         array[i]=true;
     }
       else{
           array[i]=false;
       }
    }
}


function revisarButacas(array,cantidadVacias){
    for(let i=0; i<array.length;i++){
        if(array[i]==false){
            cantidadVacias++;
        }      
    }
    return cantidadVacias;
}

function mostrarArreglo(array1){
    for(let i=0; i<array1.length; i++){ // recorro el arreglo y voy mostrando los numeros
    
        console.log(array1[i]);
    }
}


LlenarArreglo(arregloButacas);
mostrarArreglo(arregloButacas);

let cantidadButacasVacias= revisarButacas(arregloButacas,butacasvacias);

console.log("la cantidad de butacas vacias en el cine son "+ cantidadButacasVacias);