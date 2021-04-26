/*
• Escribir un algoritmo que nos pida
una clave y verifique que sea la
correcta
• Tenga en cuenta que la clave es la
palabra “eureka”
• Solo tenemos 3 intentos para
acertar, si fallamos los 3 intentos
el sistema mostrará un mensaje
indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos
directamente del programa

*/

let readlineSync = require('readline-sync');

let palabraClave= 'eureka';
let contador=0;

let clave;

while((clave!=palabraClave) && (contador<3)){

    clave= readlineSync.question('ingrese una clave ');

    contador++;
}
    if(clave == palabraClave){  
        console.log("clave ingresada con exito");
            
    }else{
        console.log("se acabaron sus intentos, espere 1 minuto y vuelva a ingresar su calve");
}
/*
while(contador<3){
    clave= readlineSync.question('ingrese una clave ');

    if(clave==palabraClave){
        contador=3;
        console.log("ingreso con exito ");
    }
    contador++;
}
*/


