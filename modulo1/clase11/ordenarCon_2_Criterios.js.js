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

let readlineSync = require("readline-sync");

let dimension = readlineSync.questionInt("ingrese la dimension de los arreglos ");

let nombres = new Array(dimension);

let edades = new Array(dimension);

let altura = new Array(dimension);


//cargo los arreglos
cargarNom_Alt_y_edad(nombres, edades, altura );
// completarArrNombres(nombres);
// completarArrEdades(edades);
// completarArrAltura(altura);

//muestros los arreglos desordenados
console.log(" muestro el arreglo de nombres");
mostrarVectorExtendido(nombres);
console.log(" muestro el arreglo de edad");
mostrarVectorExtendido(edades);
console.log(" muestro el arreglo de altura");
mostrarVectorExtendido(altura);

// ordeno los arreglos por edad
console.log(" ordena los arreglos");
ordenarPorEdad(nombres, edades, altura);

// muestro los 3 arreglos ordenados
console.log(" muestro el arreglo de nombres ordenado ");
mostrarVectorExtendido(nombres);
console.log("muestro el arreglo de edad ordenado");
mostrarVectorExtendido(edades);
console.log(" muestro el arreglo de altura ordenado");
mostrarVectorExtendido(altura);

// function completarArrNombres(nombres) {
//   for (let i = 0; i < nombres.length; i++) {
//     nombres[i] = readlineSync.question(" Ingrese nombre ");
//   }
// }

// function completarArrAltura(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = getRandomInt(150, 201);
//   }
// }

// function completarArrEdades(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] = getRandomInt(1, 100);
//     //array[i] = readlineSync.questionInt(" ingrese una edad ");
//   }
// }

function cargarNom_Alt_y_edad(nombres, edades, altura) {
  for (let i = 0; i < nombres.length; i++) {
    nombres[i] = readlineSync.question(" Ingrese nombre ");
    edades[i] = getRandomInt(1, 100);
    altura[i] = getRandomInt(150, 201);
  }
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function mostrarVectorExtendido(v) {
  let i;
  let vector = "";
  for (i = 0; i < v.length; i++) {
    vector += "[ " + v[i] + " ] ";
  }
  console.log(vector);
}

function ordenarPorEdad(nombres, edades, altura) {
  for (i = 0; i < edades.length; i++) {
    let name = nombres[i];
    let edad = edades[i];
    let alt = altura[i];
    // acá busco la posición donde encajar la edad
    let j = 0;
    while (j < i && edades[j] > edad) {
      j++;
    }
    // en caso de empate en la edad;
    if (edades[j] == edad) {
      while (j < i && altura[j] > alt) {
        // pregunto por la altura
        j++;
      }
    }
    // en este loop corro los elementos a una posición mas a la derecha (de dercha a izquierda en el array)
    for (let pos = i; pos > j; pos--) {
      edades[pos] = edades[pos - 1];
      altura[pos] = altura[pos - 1];
      nombres[pos] = nombres[pos - 1];
    }

    // asigno el elemento en la posición encontrada
    nombres[j] = name;
    edades[j] = edad;
    altura[j] = alt;
    // comprobación
    //for (posicion = 0; posicion <= cantrank - 1; posicion++) {
    //    console.log ("(",posicion,") ",clientes[posicion], ": Facturación = [",facturacion[posicion],"] ");
    //}
  }
}
