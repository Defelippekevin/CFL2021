/*
Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)

*/

let readlineSync = require('readline-sync');

let nombre= readlineSync.question("ingrese el nombre del alumno ");;
let notaTeorica;
let notaPractica;
let notaProblemas;
let resultado;
let porcentajeNotaTeorica= 0.4;
let porcentajeNotaPractica= 0.1;
let porcentajeNotaProblemas= 0.5;

while(nombre!=''){
    
    notaTeorica=readlineSync.questionFloat("ingrese la nota teorica del alumno: ");
    notaPractica=readlineSync.questionFloat("ingrese la nota practica del alumno: ");
    notaProblemas=readlineSync.questionFloat("ingrese la nota de problemas del alumno: ");

/*
 if ((notaPractica >= 0 && notaPractica <= 10) && (notaProblemas >= 0 && notaProblemas <= 10)
  && (notaTeoria >= 0 && notaTeoria <= 10)) 
*/

    if((notaPractica>=0 && notaPractica<=10) && (notaTeorica>=0 && notaTeorica<=10) &&
        (notaProblemas>=0 && notaProblemas<=10)){
            console.log("error al ingresar una nota");
    }else{
        resultado= notaProblemas*porcentajeNotaProblemas + notaTeorica*porcentajeNotaTeorica 
        + notaPractica*porcentajeNotaPractica;
        
        console.log("el resultado de la calificacion es "+ resultado);
    }

    nombre= readlineSync.question("ingrese el nombre del alumno ");

}