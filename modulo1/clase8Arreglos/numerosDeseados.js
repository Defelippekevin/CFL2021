let numerosDeseados = new Array(5);
 
function LlenarArreglo(array){
    let readlineSync = require("readline-sync");

    for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario
    
     array[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : ");   

    }

}

function mostrarArreglo(array){
    for(let i=0; i<array.length; i++){ // recorro el arreglo y voy mostrando los numeros
    
        console.log("el dato elegido por el usuario en la posicion "+ i + " fue " + array[i]);
    }
}

LlenarArreglo(numerosDeseados);
mostrarArreglo(numerosDeseados);



