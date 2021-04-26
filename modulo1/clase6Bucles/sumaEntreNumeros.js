/*
• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

let readlineSync = require('readline-sync');

let numero1= readlineSync.questionInt('ingrese una numero ');
let numero2= readlineSync.questionInt('ingrese una numero mayor que el 1er numero ingresado');
suma=0;

let contador= numero1;
for(contador;contador<=numero2;contador++){
    suma= contador+suma;
}

console.log("la suma de entre los numeros "+numero1+" y "+numero2+" es "+suma );