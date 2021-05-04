/*
Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
•Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay
*/

let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");

let positivos=0;
let negativos=0;
let ceros=0;

let arregloN  = new Array(dimension);


    for(let i=0; i<arregloN.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario
    
        arregloN[i]=readlineSync.questionInt("ingrese numero deseado para la posicion " + i + " : "); 
     
     if(arregloN[i]>0){
         positivos++;
     }
     
     else{
         if(arregloN[i]<0){
             negativos++;
     }
    else{
         
             ceros++;
         }
     }
}
console.log("cantidad de positivos " +positivos);
console.log("cantidad de negativos " +negativos);
console.log("cantidad de ceros " +ceros);
    


