let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");

let primerArreglo = new Array(dimension);
let segundoArreglo = new Array(dimension);
let arregloResultado= new Array(dimension);

function LlenarArreglo(array){
    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con  numeros al azar
     array[i]=Math.floor(Math.random()*10);

    }

}

function mostrarArreglo(array){
    for(let i=0; i<array.length; i++){ // recorro el arreglo y voy mostrando los numeros
    
        console.log(array[i]);
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
console.log(" vista del primer arreglo cargado");
mostrarArreglo(primerArreglo);
console.log(" vista del segundo arreglo cargado");
mostrarArreglo(segundoArreglo);
sumarArreglo(primerArreglo,segundoArreglo,arregloResultado,dimension);