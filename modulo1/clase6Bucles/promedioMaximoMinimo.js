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
let max;
let min;

let contador=0;
let suma=0;


while(numero!=0){ // mientras ingrese un numero distinto de 0

    numero= readlineSync.questionInt('ingrese un numero ');
    console.log("el numero que ingreso fue "+ numero);
    
    contador++
    if(max == undefined && min == undefined){
        max = numero;
        min = numero;
       }
    
    if(numero>max && numero!=0){
        max=numero;
    }
    
    if(numero<min && numero!=0){
        min=numero;
    }
  suma=suma+numero;

  
}
contador--;

let promedio= suma/contador;

console.log("el numero maximo fue "+ max);
console.log("el numero minimo fue "+ min);
console.log("la cantidad de numeros ingresados fueron "+ contador);
console.log("la media de todos los numeros ingresados fue "+ promedio);
