/*

Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total

*/
let readlineSync = require('readline-sync');

let numero;
let contadorTotal=0;
let positivo=0;
let promedio=0;


while(numero!=0){ // mientras ingrese un numero distinto de 0

    numero= readlineSync.questionInt('ingrese un numero ');
    console.log("el numero que ingreso fue "+ numero);
   
    contadorTotal++; // se incrementa la cantidad de numeros ingresados

    if(numero>0){
       positivo++; // si el numero ingresado es positivo se incrementa la variable
    }
    if(numero==0){ // para que no me cuente el 0 que ingreso como ultimo numero, le resto 1 al contador total
        contadorTotal--;
    }
}
promedio=(positivo*100)/contadorTotal; // hago el calculo de numeros positivos ingresados

console.log("la cantidad de numeros positivos fue "+positivo); // muestro cuantos positivos ingreso
console.log("el promedio de numeros positivos fue "+promedio); // muestro cuanto fue el promedio de numeros positivos ingresados
