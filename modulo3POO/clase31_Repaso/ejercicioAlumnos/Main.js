"use strict";
exports.__esModule = true;
var Alumnos_1 = require("./Alumnos");
var GestorAlumnos_1 = require("./GestorAlumnos");
var gestorDeAlumnos = new GestorAlumnos_1["default"]();
var alumno1 = new Alumnos_1["default"](10, "kevin");
var alumno2 = new Alumnos_1["default"](11, "susana");
var alumno3 = new Alumnos_1["default"](12, "normita");
var alumno4 = new Alumnos_1["default"](5, "pedro");
var alumno5 = new Alumnos_1["default"](6, "sonia");
gestorDeAlumnos.cargarAlumnoSecuencial(alumno1);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno2);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno3);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno4);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno5);
alumno1.addNota(10);
alumno1.addNota(10);
alumno1.addNota(10);
alumno1.addNota(10);
alumno1.addNota(10);
alumno1.addNota(5);
alumno2.addNota(8);
alumno2.addNota(8);
alumno3.addNota(9);
alumno3.addNota(6);
alumno4.addNota(3);
alumno4.addNota(6);
alumno5.addNota(7);
alumno5.addNota(6);
//gestorDeAlumnos.getPromedioAlumno(1);
gestorDeAlumnos.cargarAlumnoTxt('Alumnos.txt', '\r\n');
gestorDeAlumnos.mostrarArreglo();
gestorDeAlumnos.getPromedioAlumno(21);
gestorDeAlumnos.cargarAlumno();
gestorDeAlumnos.mostrarArreglo();
console.log(gestorDeAlumnos.getTodosLosPromedios());
/*

let opcionAlumno: number;

opcionAlumno = RLS.questionInt(" como desea cargar al alumno? ingrese 1 si desea cargarlo a manopla, 2 si quiere cargarlo de un txt o 3 si desea cargarlo de un archivo txt ");

try{
    if(opcionAlumno !=1 && opcionAlumno !=2 && opcionAlumno !=3){
        throw new Error(" el numero ingresado no corresponde a un comando");
    }

    switch(opcionAlumno){
        case 1: gestorDeAlumnos.cargarAlumno();
        break;
        case 2: gestorDeAlumnos.cargarAlumnoTxt('Alumnos.txt','\n');
        break;
        case 3: let alumno1: Alumno = new Alumno(10,"flavio");
                gestorDeAlumnos.cargarAlumnoSecuencial(alumno1);
            }
        }catch(error){
        console.log(error.message);
    }


let opcionPromedio:number;

opcionPromedio = RLS.questionInt("ingrese 1 si desea saber el promedio de un alumno en especial, 2 si desea saber el de todos")

    switch(opcionPromedio){

        case 1:
        gestorDeAlumnos.mostrarArreglo();
        let id:number = RLS.questionInt("ingrese el id del alumno que desea buscar");
        gestorDeAlumnos.getPromedioAlumno(id);
    }
    */
