let readlineSync = require("readline-sync");

let numero1= readlineSync.questionInt('ingrese el 1er numero: ');
console.log(" el numero que ingreso fue: "+numero1);

let numero2= readlineSync.questionInt('ingrese el 2do numero: ');
console.log(" el numero que ingreso fue: "+numero2);

let numero3= readlineSync.questionInt('ingrese el 3er numero: ');
console.log(" el numero que ingreso fue: "+numero3);

if((numero1>numero2) && (numero1>numero3)){
    console.log(" el numero mayor entre los 3 que usted ingreso es "+ numero1);

}

if((numero2>numero1) && (numero2>numero3)){
    console.log(" el numero mayor entre los 3 que usted ingreso es "+ numero2);

}

if((numero3>numero1) && (numero3>numero2)){
    console.log(" el numero mayor entre los 3 que usted ingreso es "+ numero3);

}