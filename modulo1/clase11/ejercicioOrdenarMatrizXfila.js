function Azar(numero) {
    return Math.floor((Math.random() * numero) + 1);
}

function cargar(matriz, f, c, numAzar) {
    let fil, col;
    for (fil = 0; fil < f; fil++) {
        for (col = 0; col < c; col++) {
            matriz[fil][col] = Azar(numAzar); 
        }
    } 
}

function mostrarMatriz(matriz, f, c) { 
    let fil, col, cadena;
    for (fil = 0; fil < f; fil++) {
        cadena = " ";
        for (col = 0; col < c; col++) {
            cadena = cadena + " [" + String(matriz[fil][col]) + "]";
        }
        //console.log(cadena);
        console.log(cadena + " = " + calcularSumaFila(matriz, fil, c));
    }
}

function calcularSumaFila(matriz, f, c) {

    let suma = 0; // variable para sumar los elementos de las columnas
    let col; //indice para recorrer las columnas
    for (col=0;col<c;col++) {
        suma = suma + matriz[f][col]  // acumulo en suma las columnas por el indice "col"
    }
    return suma; // devuelvo la suma de los elementos de la fila
}

function compararFila(matriz,f, fs, c) {
    let sumafilaf;
    let sumafilafs;
    let comparacion; // valor a retornar de la función comparar
    sumafilaf = calcularSumaFila(matriz, f, c); // en sumafilaf tengo la suma de todas las columnas de la fila f
    sumafilafs = calcularSumaFila(matriz, fs, c); // en sumafilafs tengo la suma de todas las columnas de la fila fs (siguiente)

    if (sumafilaf == sumafilafs) {  // las sumas coinciden, no hago nada
        comparacion = 0;
    } else if (sumafilaf < sumafilafs) { // el anterior es menor que el siguiente => intercambio en descendente
        comparacion = -1; 
    } else {
        comparacion = 1; //el anterior es mayor que el siguiente => intercambio en ascendente
    };
    return comparacion;
}

function intercambiarfilacompleta(matriz, f, fs, c) {
    let aux = new Array(c);

    aux[0] = matriz[f];
    matriz[f] = matriz[fs];
    matriz[fs] = aux[0];
}

function burbuja(matriz, f, c, cambio) {
    let i;
    let j;
    for (i=1;i<f;i++) {                                     // recorro todos las filas de la matriz
        for(j=0;j<= (f-i-1);j++) {                          // recorro todos los elementos que no están ordenados desde 0 hasta i (desde i hasta el final están ordenados)
            if (compararFila(matriz, j, j+1, c)== cambio) { //comparación de los elementos inicial y siguiente
                intercambiarfilacompleta(matriz, j, j+1, c); // intercambio el elemento que está desordenado con el siguiente
            }
        }
    }
}


let readlineSync = require('readline-sync'); // acá habilito paquete para pedir datos por consola
let f = 4; //acá defino la cantidad de filas de la matriz
let c = 2; // acá defino la cantidad de columnas de la matriz
let indice; //indice para recorrer las filas

let matriz = new Array(f); // defino un array de filas en "matriz"
for (indice = 0; indice < f; indice++) {
    matriz[indice] = new Array(c); // defino el array de columnas por cada elemento "matriz[indice]"
};

cargar(matriz, f, c, 100);

mostrarMatriz(matriz, f, c);
console.log("----------------------------------------------");

let cambio = readlineSync.question("asncendente (1) o descendente (-1)?");

burbuja(matriz, f, c, cambio);

mostrarMatriz(matriz, f, c);