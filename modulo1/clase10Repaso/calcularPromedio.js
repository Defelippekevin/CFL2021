/*
• El DT de los infantiles del equipo de futbol desea
saber el promedio de la edad de los chicos
• La edad de los chicos va de 3 a 7 años. Las 
edades son cargadas al azar (use la función
aleatorio(menorValor,mayorValor), es decir
aleatorio(3,7))
• Muestre todas las edades y el promedio de las
mismas
*/

let readlineSync = require("readline-sync");
let edadMinima = 3;
let edadMaxima = 7;
let dimension;
dimension= readlineSync.questionInt("ingrese cantidad de jugadores ");
let jugadores = new Array(dimension);
let suma;


function numeroAleatorio(edadMin, edadMax, array, dimension){
    for(let i=0; i<dimension;i++){

        array[i]= Math.floor(Math.random()*(edadMax-edadMin))+edadMin;
    }
    return array;

}

function mostrarArreglo(array){
    for(let i=0; i<array.length; i++){ // recorro el arreglo y voy mostrando los numeros
    
        console.log(array[i]);
    }
}

function sumaTotal(array,dimension){

    let suma =0;

        for(let i = 0; i<dimension; i++){

            suma=suma+array[i];
        }

    return suma
}


numeroAleatorio(edadMinima,edadMaxima,jugadores,dimension);
mostrarArreglo(jugadores);
 suma= sumaTotal(jugadores,dimension);

let promedio = (suma/dimension);

console.log(" el promedio de edad de los jugadores es"+promedio);