// Algoritmo secuencial
function imprimirArregloSec(arreglo,largo) {
    let indice;

    for (indice=0; indice<=largo; indice++) {
        console.log("posicion ", indice, " tiene:", arreglo[indice]);
    }
}



// Algoritmo recursivo
function imprimirArregloRec(arreglo,indice, largo) {
    if (indice<=largo) {
        console.log("posicion ", indice, " tiene:", imprimirArregloRec(arreglo,indice+1,largo));
    };
    return arreglo[indice-1];
}


//---> llamado a algoritmos
let readlineSync = require('readline-sync');
let n = readlineSync.questionInt("cantidad de elementos del arreglo: ");
let arreglo = new Array(n);
let indice;

for (indice=0; indice<=n; indice++) {
    arreglo[indice] = indice*2;
};
console.log("Como se imprime un arreglo secuencialmente");
imprimirArregloSec(arreglo, n);
let cont2 = readlineSync.question("continuar.... ");
console.log("-----------------------------");
console.log("Como se imprime un arreglo recursivamente");
imprimirArregloRec(arreglo, 0, n);