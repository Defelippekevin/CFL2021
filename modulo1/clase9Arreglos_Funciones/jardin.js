/*
•El jardín infantil necesita un programa para poder asignar cursos a las aulas
Se cuentan con tres aulas: Azul, Verde y Amarilla
Cada aula cuenta con una capacidad diferente (es decir, un número de bancos)
La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
Dado un número de infantes ingresado por el usuario, 
el programa deberá determinar el aula que minimice la cantidad de bancos vacíos
La salida del algoritmo es el color que identifica al aula asignada
*/

let readlineSync = require("readline-sync");

let cantidadDeInfantes=readlineSync.questionInt("ingrese cantidad de Infantes ");

let salaAzul = 40;
let salaVerde = 35;
let salaAmarilla =30;


if(cantidadDeInfantes < salaAmarilla){

console.log("sala amarilla");
}

else{

    if(cantidadDeInfantes<salaVerde){
        console.log("sala verde");
    }

    else{

        if(cantidadDeInfantes<salaAzul){
            console.log("sala azul");
        }
    }
}