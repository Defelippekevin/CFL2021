import Alumno from "./Alumnos";
import GestorAlumnos from "./GestorAlumnos";
import LectorArchivos from "./GestorArchivos";
import * as RLS from "readline-sync";

let gestorDeAlumnos: GestorAlumnos = new GestorAlumnos();


let alumno1: Alumno = new Alumno(10,"kevin");
let alumno2: Alumno = new Alumno(11,"susana");
let alumno3: Alumno = new Alumno(12,"normita");
let alumno4: Alumno = new Alumno(5,"pedro");
let alumno5: Alumno = new Alumno(6,"sonia");

gestorDeAlumnos.cargarAlumnoSecuencial(alumno1);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno2);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno3);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno4);
gestorDeAlumnos.cargarAlumnoSecuencial(alumno5);


alumno1.addNota(10);
alumno1.addNota(10);

alumno1.addNota(10)
alumno1.addNota(10)
alumno1.addNota(10)
alumno1.addNota(5)

alumno2.addNota(8);
alumno2.addNota(8);

alumno3.addNota(9);
alumno3.addNota(6);

alumno4.addNota(3);
alumno4.addNota(6);

alumno5.addNota(7);
alumno5.addNota(6);




//gestorDeAlumnos.getPromedioAlumno(1);


gestorDeAlumnos.cargarAlumnoTxt('Alumnos.txt','\r\n');
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
