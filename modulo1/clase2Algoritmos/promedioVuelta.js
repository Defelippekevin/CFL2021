let readlineSync = require("readline-sync");

let vuelta1=  readlineSync.questionFloat(" ingrese el tiempo de vuelta 1 ");
let vuelta2=  readlineSync.questionFloat(" ingrese el tiempo de vuelta 2 ");
let vuelta3=  readlineSync.questionFloat(" ingrese el tiempo de vuelta 3 ");
let vuelta4=  readlineSync.questionFloat(" ingrese el tiempo de vuelta 4 ");

let totalTiempoVuelta =  vuelta1+vuelta2+vuelta3+vuelta4;

console.log(" el tiempo total es: " + totalTiempoVuelta );

let promedioVuelta = totalTiempoVuelta / 4;

console.log(" el promedio de vuelta fue : "+ promedioVuelta);