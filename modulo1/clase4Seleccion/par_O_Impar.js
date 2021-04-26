let readlineSync = require("readline-sync");

let numeroIngresado= readlineSync.questionInt('ingrese un numero: ');
console.log(" el numero que ingreso fue: "+numeroIngresado);

/*
switch(numeroIngresado){
    case numeroIngresado==0:
    console.log(" el numero que ingreso "+numeroIngresado+ " es 0");
    break;
    case numeroIngresado%2==0:
    console.log(" el numero que ingreso "+numeroIngresado+ " es par");
    break;
    default:
        console.log("el numero que ingreso es "+ numeroIngresado+" es impar");
}
*/


if(numeroIngresado%2!==0){
    console.log(" el numero que ingreso "+numeroIngresado+" es impar");

}

  

if(numeroIngresado==0){
    console.log(" el numero que ingreso "+ numeroIngresado +" es 0");
}
else if(numeroIngresado!==0 && numeroIngresado%2==0){
    console.log(" el numero que ingreso "+numeroIngresado+" es par");
}

    

