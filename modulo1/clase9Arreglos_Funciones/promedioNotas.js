/*
•Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres•
Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
•Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información
*/

let readlineSync = require("readline-sync");
let dimension;

dimension=readlineSync.questionInt("ingrese el tamanio del arreglo ");
let arregloNombresAlumnos = new Array(dimension);
let arreglo1raNota = new Array(dimension);
let arreglo2daNota = new Array(dimension);
let arreglo3raNota = new Array(dimension);
let arregloPromedioNotas= new Array(dimension);


function cargarNombresAlumnos(array){
    let readlineSync = require("readline-sync");
        for(let i=0; i<array.length; i++){ //voy recorriendo el arreglo y llenadolo con los nombres ingresados por usuario
             array[i]=readlineSync.question("ingrese el nombre del alumno  para la posicion " + i + " : ");   
    }
}

function LlenarArregloNotas(array1, array2){
    let readlineSync = require("readline-sync");
        for(let i=0; i<array1.length; i++){ //voy recorriendo el arreglo y llenadolo con los numeros ingreasados por usuario
             array1[i]=readlineSync.questionInt("ingrese nota para el alumno "+array2[i]+": ");    
    }
}

function calcularPromedio(array1, array2,array3,arrayResultado){
    
    let i=0;
        for(i;i<dimension;i++){
            arrayResultado[i]=((array1[i]+array2[i]+array3[i])/3);
        }
        return arrayResultado;
}

function mostrarArreglo(array1,array2){
    for(let i=0; i<array1.length; i++){ // recorro el arreglo y voy mostrando los numeros
    
        console.log(" la nota del alumno "+array1[i]+" es "+array2[i]);
    }
}

console.log("ingrese los nombres de los alumnos");
cargarNombresAlumnos(arregloNombresAlumnos);
console.log("ingrese la nota del primer trimestre");
LlenarArregloNotas(arreglo1raNota,arregloNombresAlumnos);
console.log("ingrese la nota del 2do trimestre");
LlenarArregloNotas(arreglo2daNota,arregloNombresAlumnos);
console.log("ingrese la nota del 3er trimestre");
LlenarArregloNotas(arreglo3raNota,arregloNombresAlumnos);

 arregloPromedioNotas= calcularPromedio(arreglo1raNota,arreglo2daNota,arreglo3raNota,arregloPromedioNotas);
mostrarArreglo(arregloNombresAlumnos,arregloPromedioNotas);