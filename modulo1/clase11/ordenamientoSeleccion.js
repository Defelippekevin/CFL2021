function Azar(numero) {
    return Math.floor((Math.random() * numero) + 1);
}

function cargar(arreglo, cantidad, numAzar) {
    let i;
    for (i = 0 ; i<cantidad; i++ ) {
        arreglo[i] = Azar(numAzar);
    }
}

function escribirEnUnaLinea(arreglo, cantidad) { 
    let i;
    let vector = "";
    for (i = 0 ; i<cantidad; i++) {
        vector = vector + arreglo[i] + " " ;
    }
    console.log (vector); 
}

function intercambiar(arreglo, i, j) { 
    let aux; 
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function comparar(arreglo, i, j) {
    let comparacion;
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
    return comparacion;
}
/*
• Dos bucles (con índices i y j)
• El primero itera por la cantidad de elementos en el
arreglo, y el índice i denota la posición que se está
buscando ordenar
• El segundo delimita las posiciones que todavía no han
sido ordenadas
• Se busca el mínimo/máximo valor en el arreglo en el
rango del segundo bucle (índice j)
• Al terminar el segundo bucle, intercambiamos lo que
haya en la índice i con lo que haya en la posición con
el valor mínimo/máximo
*/

function seleccion(arreglo, cantidad) {
    let i, j, posicion; 
    for (i = 0; i < (cantidad-1); i++) { // Desde 0 hasta n-2 (el ultimo elemento queda ordenado al final del ciclo)
        posicion = i; 
        for (j = i + 1; j < cantidad; j++) {
            if (comparar(arreglo, posicion, j) == 1) {
                posicion = j; 
            } 
        }
        intercambiar(arreglo, i, posicion); 
    }
}

//Algoritmo Orden 
let lim = 10;
let a = new Array(lim);  
cargar(a, lim, 100); 
console.log(a); 
//seleccion 
seleccion(a, lim); 
console.log(a);