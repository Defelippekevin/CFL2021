/*
Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor

*/
let readlineSync = require('readline-sync');

let numeroAMultiplicar= readlineSync.questionInt('ingrese el numero que quiere multiplicar ');

let indice= readlineSync.questionInt('ingrese hasta que valor desea multiplicarlo ');

let contador=0;

for(contador; contador<=indice;contador++){
    console.log("el resultado de multiplicar "+numeroAMultiplicar * contador);
    

}