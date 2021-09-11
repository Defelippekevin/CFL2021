function Azar(numero) {
    return Math.floor((Math.random() * numero) + 1);
}

function sinOrden(numero, vector) {
    let aleatorio;
    let indice = 0;
    let hay = 0;
    let i = 0;
    for (indice=0;indice<cantidad;indice++) {vector[indice] = -1};
    aleatorio = Math.floor((Math.random() * numero) + 1);
    indice = 0;
    while (indice<numero) {
        hay = 0;
        for (i=0; i<numero; i++) { 
            if (vector[i] == aleatorio) {
                hay = 1;
            };
        };
        if (hay == 0) {
            vector[indice] = aleatorio;
            indice++;
        };
        aleatorio = Math.floor((Math.random() * numero) + 1);
    }
}


function escribirEnUnaLinea(arreglo, cantidad) { 
    let i;
    let vector = "";
    for (i = 0 ; i<cantidad; i++) {
        vector = vector + "[" + arreglo[i] + " ("+ (i+1) + ")]" ;
    }
    console.log (vector); 
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

function cargarClientes(clientes, facturacion, cantidad) {
    let cliente, fact, numCliente; 
    let vector = new Array(cantidad);
    sinOrden(cantidad, vector);
    for (numCliente=0; numCliente<cantidad; numCliente++) { 
        //cliente = readlineSync.question("Cliente " + numCliente + 1 + ": "); 
        //fact = readlineSync.questionInt("Facturacion " + numCliente + 1 + ": "); 
        //cliente = "Cliente " + (numCliente + 1);
        cliente = "Cliente " + vector[numCliente];
        fact = Azar(1000);
        clientes[numCliente] = cliente; 
        facturacion[numCliente] = fact; 
    }
}

function imprimirCliente (posicion, buscado, clientes, facturacion) {
    if (posicion == -1) {
        console.log("El cliente " + buscado + " no pudo ser encontrado");
    } else {
        console.log ("El cliente " + clientes[posicion] +
                           " con facturacion " + facturacion[posicion] +
                           " esta en la posicion " + (posicion + 1));
    }
}

function buscarBinarioRecursivo(valorBuscado, arreglo, izq, der) {
    let posicion; 
    if (izq <= der) {
        let medio;
        medio = Math.floor ((izq + der) / 2); 
        if (valorBuscado == arreglo[medio]) { 
            posicion = medio; 
        } else if (valorBuscado < arreglo[medio]) {
            posicion = buscarBinarioRecursivo(valorBuscado, arreglo, izq, medio - 1); 
        } else {
            posicion = buscarBinarioRecursivo(valorBuscado, arreglo, medio + 1, der); 
        }
    } else {
        posicion = -1 
    }
    return posicion; 
}
    

function intercambiar(arreglo, i, j) { 
    let aux; 
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function burbuja(arreglo, arr_relativo, cantidad) { 
    let i, j;
    for (i = 2; i < cantidad; i++) { 
        for (j = 0; j < (cantidad - 1); j++) { 
            if (comparar(arreglo, j, j+1) == 1) { 
                intercambiar(arreglo, j, j+1); 
                intercambiar(arr_relativo, j, j+1); 
            }
        }
    }
}
    

//Algoritmo Busqueda 
let cantidad = 10;
let posicion;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad); 

let readlineSync = require('readline-sync');

console.log("Cargo los clientes en forma aleatoria"); 
cargarClientes(clientes, facturacion, cantidad); 
escribirEnUnaLinea(clientes,cantidad );
escribirEnUnaLinea(facturacion,cantidad );

let cont1 = readlineSync.question("continuar.... ");
console.log("----------------------------------------------");
// ordento los clientes de acuerdo al nombre
burbuja(clientes, facturacion, cantidad); 
console.log("Ahora los clientes están ordenados de acuerdo al nombre"); 
escribirEnUnaLinea(clientes,cantidad );
escribirEnUnaLinea(facturacion,cantidad );

// ahora busco un cliente y veo en que posición está y que facturación tiene
let buscado = readlineSync.question("Ingresar numero de Cliente a buscar: ");
buscado = "Cliente " + buscado;

posicion = buscarBinarioRecursivo(buscado, clientes, 0, cantidad-1);
imprimirCliente(posicion, buscado, clientes, facturacion);

let cont2 = readlineSync.question("continuar.... ");
console.log("----------------------------------------------");
// ordeno los clientes de acuerdo a la facturación
burbuja(facturacion,clientes, cantidad); 
console.log("Ahora los clientes están ordenados de acuerdo a la facturación"); 
escribirEnUnaLinea(clientes,cantidad );
escribirEnUnaLinea(facturacion,cantidad );

// ahora busco un monto y veo en que posición y que cliente lo tiene
let montoBuscado = readlineSync.questionInt("Ingresar monto de facturacion a Buecar: ");

posicion = buscarBinarioRecursivo(montoBuscado, facturacion, 0, cantidad-1);
imprimirCliente(posicion, montoBuscado, clientes, facturacion); 