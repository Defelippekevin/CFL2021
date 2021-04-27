/*
Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/


let readlineSync = require('readline-sync');

let base= readlineSync.questionInt('ingrese una numero ');
let exponente= readlineSync.questionInt('ingrese el exponente ');


while(exponente<0){
    exponente= readlineSync.questionInt('ingrese el exponente, para que sea valido tiene que ser ');
}

let resultado=calcularPotencia(base,exponente);
console.log(" el resultado es "+resultado);

function calcularPotencia(num1,num2){
    return num1**num2;
}