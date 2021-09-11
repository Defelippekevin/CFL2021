/*
• Desarrollar un programa que permita ordenar un arreglo “a” de
tamaño “n” sin modificarlo, es decir, sin hacer los intercambios sobre la
estructura “a”
• Utilizar un arreglo auxiliar “aux” cargado con los índices del arreglo “a”
(de 0 a n)
• El ordenamiento tiene que hacerse mirando los valores de “a” pero
haciendo los intercambios en “aux”
• Crear un método que permita imprimir ordenado que reciba como
parámetros “a”, “aux” y “n”
*/

let readlineSync = require("readline-sync");

let dimension=readlineSync.questionInt("ingrese dimension de los arreglos ");

let a = new Array(dimension);
let aux = new Array(dimension);
completarArr(a,aux);
console.log(" muestro el arreglo a ");
mostrarVectorExtendido(a);
console.log(" muestro el arreglo auxiliar cargado con los mismos valores en las mismas posiciones ");
mostrarVectorExtendido(aux);




function completarArr(a, aux){
    
    for(let i=0; i<a.length; i++){
        a[i] = readlineSync.questionInt(" ingrese un numero para llenar el arreglo ");
    }
        for(let j=0;j<a.length;j++){
                aux[j]= j;
    }
}

function ordenarArrAux(a,aux){
    for(let i=0; aux.length;i++){
       
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



