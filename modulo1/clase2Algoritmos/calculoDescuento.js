let readlineSync = require("readline-sync");

let precioProducto= readlineSync.questionFloat('defina el precio inicial del producto: ');
console.log(precioProducto);

let descuento=readlineSync.questionFloat('defina el valor absoluto del descuento: ');
let divisorPorcentual=100;
let descuentoPorcentual =  descuento/divisorPorcentual;

console.log("el descuento a realizar es de $ "+descuentoPorcentual);

let precioFinal= (precioProducto-precioProducto*descuentoPorcentual);
console.log("el precio final del producto con el "+ descuentoPorcentual+" descuento aplicado es: " + precioFinal);
