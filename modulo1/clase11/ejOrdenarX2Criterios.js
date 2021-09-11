/*
• Dados un arreglo de texto y dos
arreglos de enteros de tamaño n:
• nombres Como Texto
• años Como Entero y altura Como Entero
• Ordénelos los tres vectores a la vez
según los años, y en caso que haya
un empate, utilice la altura para
desempatar
• Tener en cuenta que los intercambios
tienen que cambiar los elementos de
los tres vectores a la vez
*/
function completarArrNombre(nombres){
    for(let i=0; i<nombres.length; i++){

        nombres[i]=readlineSync.question(" Ingrese nombre ");
    }
}

function completarArrAltura(array){
    
    for(let i=0; i<array.length; i++){
    
         array[i] = (Math.floor(Math.random()*100)+100);    

        }
}


function completarArrEdad(array){
    
    for(let i=0; i<array.length; i++){
    
         array[i] = (Math.floor(Math.random(70)*100)); 
         //array[i] = readlineSync.questionInt(" ingrese una edad ");
            
        }
}

function mostrarVectorExtendido(v) {
    let i;
    let vector = "";
    for (i = 0; i < v.length; i++) {
        vector += "[ " +v[i] + " ] " ;
    }
    console.log(vector);
}



function ordenarPorEdad(altura,nombre,edades){
for (i = 0; i<edades.length; i++ ) { 
   let edad = edades[i];
   let alt = altura[i]; 
   let name = nombre[i]; 
   let j = 0;
    // acá busco la posición donde encajar la edad
    while (j < i && edades[j] > edad) { 
        j++; 
    };
    // en caso de empate en la edad;
    if(edades[j]== edad){
        while (j < i && altura[j] > alt) { // pregunto por la altura
            j++; 
        };
      
    }
    // en este loop corro los elementos a una posición mas a la derecha (de dercha a izquierda en el array)
    for (k= i; k > j; k--) {
        edades[k] = edades[k-1];
        altura[k] = altura[k-1];
        nombre[k] = nombre[k-1];
    };
    
    // asigno el elemento en la posición encontrada
    nombre[j] = name ;
    altura[j] = alt ;
    edades[j] = edad ;
    // comprobación 
    //for (posicion = 0; posicion <= cantrank - 1; posicion++) {
    //    console.log ("(",posicion,") ",clientes[posicion], ": Facturación = [",facturacion[posicion],"] ");
    //}
    }
}



let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension de los arreglos ");

let nombres = new Array(dimension);

let altura = new Array(dimension);

let edades = new Array(dimension);


//cargo los arreglos
completarArrNombre(nombres);
completarArrAltura(altura);
completarArrEdad(edades);

//muestros los arreglos desordenados
console.log(" muestro el arreglo de altura");
mostrarVectorExtendido(altura);
console.log(" muestro el arreglo de edad");
mostrarVectorExtendido(edades);
console.log(" muestro el arreglo de nombres");
mostrarVectorExtendido(nombres);

// ordeno los arreglos por edad
console.log(" ordena los arreglos");
ordenarPorEdad(altura,nombres,edades);


// muestro los 3 arreglos ordenados
console.log(" muestro el arreglo de nombres ordenado ");
mostrarVectorExtendido(nombres);
console.log(" muestro el arreglo de altura ordenado");
mostrarVectorExtendido(altura);
console.log("muestro el arreglo de edad ordenado");
mostrarVectorExtendido(edades);

