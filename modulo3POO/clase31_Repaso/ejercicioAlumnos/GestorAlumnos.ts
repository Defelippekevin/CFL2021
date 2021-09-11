import Alumnos from "./Alumnos";
import * as RLS from "readline-sync";
import Validar from "./Validar";
import GestorArchivos from "./GestorArchivos";

export default class GestorAlumnos{

    arrAlumnos: Alumnos []=[];
    private txtFile: GestorArchivos;

    public constructor(){
        this.arrAlumnos= [];
        this.txtFile= new GestorArchivos();
    }


    public getCantidadArrAlumnos(): number{
     return this.arrAlumnos.length;
    }

    public mostrarArreglo():void{
        console.log(this.arrAlumnos);
        
    }

    public getPromedioAlumno(id:number):number{
        for(let i=0;i<this.arrAlumnos.length;i++){
            if(this.arrAlumnos[i].getId()==id){
                return this.arrAlumnos[i].getPromedio();
            }      
         }
         console.log("el alumno buscado por ese id no se encuentra");
         return 0;
    }
    

    public getTodosLosPromedios():number{
        let sumatotal:number=0;
        for(let i=0;i<this.arrAlumnos.length;i++){
            if(this.arrAlumnos[i].tengoNotas())
            sumatotal+= this.arrAlumnos[i].getPromedio();
        }
        return sumatotal;
    }

    public cargarAlumno():void{
            let i:number=0;
            let alum:Alumnos;
            let nombre:string= RLS.question("ingrese el nombre del alumno ");
            let id:number= Validar.checkNumero( RLS.question('Ingrese el id: '));
            let cantNotas:number = RLS.questionInt(" ingrese la cantidad de  notas a cargar");
            alum = new Alumnos(id,nombre);

            while(i<cantNotas){
                let nota:number = RLS.questionInt(" ingrese una nota ");
                alum.addNota(nota);
                i++
            }

            this.arrAlumnos.push(alum);
    }

    public cargarAlumnoTxt (rutaArchivo:string, separador:string):void {
        let alumno:string[] = this.txtFile.LeerArchivo(rutaArchivo, separador);
        let propiedadesAlumno:string[] = [];
        let notasAlumnos:number[]= [];
        let alum: Alumnos;
        alumno.forEach(AlumnoString => {
            propiedadesAlumno = AlumnoString.split(";");
            alum = new Alumnos(parseInt(propiedadesAlumno[0]),(propiedadesAlumno[1]))
            if(propiedadesAlumno[2]){
                notasAlumnos= propiedadesAlumno[2].split(",").map(nota=>parseInt(nota));
                alum.setNotas(notasAlumnos)
            }
            this.arrAlumnos.push(alum)

        });
    }

    public cargarAlumnoSecuencial(alumno1:Alumnos):void{
        this.arrAlumnos.push(alumno1);
    }


}
