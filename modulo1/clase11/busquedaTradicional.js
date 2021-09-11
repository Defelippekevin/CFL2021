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
        vector = vector + arreglo[i] + " " ;
    }
    console.log (vector); 
}

function cargarClientes(clientes, facturacion, cantidad) {
    let cliente, fact, numCliente; 
    let vector = new Array(cantidad);
    sinOrden(cantidad, vector);
    for (numCliente=0; numCliente<cantidad; numCliente++) { 
        //cliente = readlineSync.question("Cliente " + (numCliente + 1) + ": "); 
        //fact = readlineSync.questionInt("Facturacion " + (numCliente + 1) + ": "); 
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

function buscarTradicional (valorBuscado, a, lim) {
    let i;
    let posicion = -1;
    i = 0; 
    while (i < lim && posicion == -1) { 
        if (a[i] == valorBuscado) {
            posicion = i; 
        }
        i++; 
    }
    return posicion;
}


//Algoritmo Busqueda 
let cantidad = 10;
let posicion;
let clientes = new Array(cantidad);
let facturacion = new Array(cantidad); 
let readlineSync = require('readline-sync');
let buscado = readlineSync.question("Cliente ");
buscado = "Cliente " + buscado;

//Busqueda tradicional 
console.log("Busqueda tradicional");  
cargarClientes(clientes, facturacion, cantidad); 
escribirEnUnaLinea(clientes, facturacion, cantidad); 
posicion = buscarTradicional(buscado, clientes, cantidad); 
console.log(clientes);
console.log(facturacion);
imprimirCliente(posicion, buscado, clientes, facturacion);