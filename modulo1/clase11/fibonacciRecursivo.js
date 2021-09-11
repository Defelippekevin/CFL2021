// algoritmo recursivo
function calcularFibonacciRec(n) {
    let resultado = 0;
    if (n>1) {
        resultado = calcularFibonacciRec(n-1)+calcularFibonacciRec(n-2);
    } else {
        resultado = n;
    };
    return resultado;
}

// algoritmo Secuencial
function calcularFibonacciSec(n) {
    let resultado = 0;
    let indice, aux1, aux2;
    aux1 = 1;
    for (indice=1; indice <=n; indice++) {
        aux2=resultado;
        resultado=aux1;
        aux1=aux2+aux1;
    };

    return resultado;
}

//---> llamado a algoritmos
let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("numero: ");

console.log("El fibonacci de ", n, " es igual a:", calcularFibonacciRec(n));
console.log("-----------------------------");
console.log("El fibonacci de ", n, " es igual a:", calcularFibonacciSec(n));