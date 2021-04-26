/*
Cree un algoritmo que visualice los números que son múltiplos de 2 o de 3 que hay entre 1 y 100
• Tener en cuenta que hay números que son múltiplos de 2 y de 3 al mismo tiempo
• En dichos casos, solamente indique el número una vez
*/


let readlineSync = require('readline-sync');

contador=0;

for(contador=0;contador<=100;contador++){//  itera del 1 al 100

    if((contador%2==0) || (contador%3==0)){ // verifico si es multiplo de 2 o 3
        console.log(contador);
    }
}