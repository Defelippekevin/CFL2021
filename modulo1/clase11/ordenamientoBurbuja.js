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

// algoritmo Burbuja

/*
Como se codifica:
• Dos bucles (con índices i y j)
• El primero itera la cantidad de veces que tenemos que
burbujear
• El segundo delimita desde donde empieza y donde
termina el burbujeo
• El burbujeo consiste en comparar a[j] y a[j + 1] y darlos
vuelta si corresponde
• Tener en cuenta a medida que burbujeamos los
elementos al final del arreglo empiezan a estar
ordenados
*/
function burbuja(arreglo, cantidad) {
    let i, j;
    for (i = 0 ; i < cantidad; i++) {// Desde 0 hasta n
        for (j = 0 ; j < (cantidad - i - 1); j++) { // Desde 0 hasta (n - i - 1) (vamos achicando el rango a medida que se ubican los valores al final del arreglo)
            if (comparar(arreglo, j, j+1) == 1 ) { //  Si los adyacentes j y j + 1 no están ordenados, intercambiarlos      retorna 1 si lo que hay en i es mayor a lo que esta en j
                intercambiar(arreglo, j, j+1) ;
            }
        }
    }
}

//Ordenamiento Burbuja
let lim = 10; 
let a = new Array(lim);
cargar(a, lim, 100);
escribirEnUnaLinea(a, lim);
burbuja(a, lim);
escribirEnUnaLinea(a, lim);