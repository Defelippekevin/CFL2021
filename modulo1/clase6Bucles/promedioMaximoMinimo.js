/*
Diseñar un algoritmo que lea números enteros hasta teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
números ingresados
• Pensar cuidadosamente
cómo debemos inicializar
las variables

*/

let readlineSync = require('readline-sync');

let numero;
let max=0;
let min=0;
let media=0;
let contador=0;


while(numero!=0){ // mientras ingrese un numero distinto de 0

    numero= readlineSync.questionInt('ingrese un numero ');
    console.log("el numero que ingreso fue "+ numero);
    
    contador++
    
    if(numero>max){
        max=numero;
    }
    
    if(numero<min){
        min=numero;
    }
   let suma=suma+numero;

    if(numero==0){ // para que no me cuente el 0 que ingreso como ultimo numero, le resto 1 al contador total
        contador--;
    }
}

let promedio= suma/contador;

console.log("el numero maximo fue "+ max);
console.log("el numero minimo fue "+ min);
console.log("la cantidad de numeros ingresados fueron "+ contador);
console.log("la media de todos los numeros ingresados fue "+ promedio);
