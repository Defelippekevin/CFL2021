/*
Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo

*/

let readlineSync = require('readline-sync');

let numero;
let max=0;
let min=0;

while(numero!=0){

    numero= readlineSync.questionInt('ingrese un numero ');
    console.log("el numero que ingreso fue "+ numero);
    
    if(numero>max){
        max=numero;
    }
    
    if(numero<min){
        min=numero;
    }

}

console.log("el numero maximo fue "+ max);
console.log("el numero minimo fue "+ min);