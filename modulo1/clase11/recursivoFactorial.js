// algoritmo recursivo
function calcularFactorialRec(n){
    let resultado = 1;
    if (n == 0) {
        resultado = 1;
    } else {
        resultado = n * calcularFactorialRec(n-1);
    };
    //console.log(resultado);
    return resultado;
}

// algoritmo Secuencial
function calcularFactorialSec(n){
    let resultado = 1;
    let indice = 1;

    for(indice = 1;indice <= n; indice++) {
        resultado = resultado * indice;
        //console.log(resultado);
    };
    return resultado;
}

//---> llamado a algoritmos
let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("numero: ");

console.log("El factorial de ", n, " es igual a:", calcularFactorialRec(n));
console.log("-----------------------------");
console.log("El factorial de ", n, " es igual a:", calcularFactorialSec(n));