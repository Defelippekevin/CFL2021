let readlineSync = require("readline-sync");
let precioUnitario= readlineSync.questionInt('ingrese el precio: ');
let cantidad= readlineSync.questionInt('ingrese la cantidad: ');
let mesIngresado= readlineSync.question('ingrese un mes: ');
let descuento= 15;
let divisorPorcentual=100;
let descuentoPorcentual= descuento/divisorPorcentual;
let precioTotal= precioUnitario*cantidad;

console.log("el precio total sin el descuento aplicado es "+precioTotal);

let precioFinal;
switch(mesIngresado){
   case 'octubre':
   precioFinal= (precioTotal-precioTotal*descuentoPorcentual);
    console.log("el precio final con el descuento aplicado es "+precioFinal);
    break;
    default : 
    console.log(" no le corresponde un descuento");
}