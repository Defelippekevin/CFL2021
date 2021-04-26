/*
Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor
• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por al usuario)
10

*/


let readlineSync = require('readline-sync');

let cantDados=readlineSync.questionInt("ingrese cantidad de dados  a tirar en numeros positivos ");;

while(cantDados<=0){// si el usuario no ingresa un numero mayor a 0 se le vuelve a pedir que ingrese un numero

    cantDados=readlineSync.questionInt("ingrese cantidad de dados  a tirar en numeros positivos ");
    
}
        
  let probabilidad = (1/(6**cantDados));
    
   console.log("la probabilidad de que salgan todos los dados con el numero 6 es "+ probabilidad+ " %");