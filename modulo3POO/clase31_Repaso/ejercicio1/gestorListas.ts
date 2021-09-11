import listaReproduccion from "./listaReproduccion";
import * as RLS from "readline-sync"

export default class gestorListas {
    private arreglolistas:listaReproduccion[];
    
    public constructor(){
        this.arreglolistas = [];
    }

    public buscarLista (nombre:string): number {
        for (let i=0;  i<this.arreglolistas.length; i++){
            if (nombre == this.arreglolistas[i].getNombre()){
                return i;
            }
        }
        return -1  
    }

    private mostrarListas (): void {
        console.log (this.arreglolistas);
    }
    
    
    public crearLista ():void {
        let nombre = RLS.question("Ingrese nombre de la nueva lista: ")
        this.arreglolistas.push (new listaReproduccion (nombre));
    }

    public borrarLista (): void {
        this.mostrarListas();
        let listaABorrar: string = RLS.question("Ingrese el nombre de la lista a borrar: ")
        let posicion = this.buscarLista (listaABorrar);
        if (posicion!=-1){
            this.arreglolistas.splice (posicion,1)
        } else {
            console.log ("La lista no existe");
        }
    }

    public AgregarPistaALista (): void {
        let lista: string = RLS.question("Ingrese el nombre de la lista: ")
        let posicion = this.buscarLista (lista);
        
        if (posicion!=-1){
            let nombre: string = RLS.question("Ingrese el nombre del tema: ")
            let duracion: number = RLS.questionInt("Ingrese la duracion en segundos: ")
            let interprete: string = RLS.question("Ingrese el interprete: ")
            this.arreglolistas[posicion].agregarPista(nombre,duracion,interprete)
        } else {
            console.log ("La lista no existe");
        }
    }

    public BorrarPistaEnLista(): void {
        let lista: string = RLS.question("Ingrese el nombre de la lista: ")
        let posicion = this.buscarLista (lista);
        
        if (posicion!=-1){
            this.arreglolistas.splice(posicion,1)
        } else {
            console.log ("La lista no existe");
        }
    }

    public duracionLista(): void {
        let lista: string = RLS.question("Ingrese el nombre de la lista: ")
        let posicion = this.buscarLista(lista);
        if (posicion!=-1){
            this.arreglolistas[posicion].getDuracionTotal();
        } else {
            console.log ("La lista no existe");
        }
    }

    public cantidadDeTemasDeLista():void {
        let lista: string = RLS.question("Ingrese el nombre de la lista: ")
        let posicion = this.buscarLista(lista);
        if (posicion!=-1){
            this.arreglolistas[posicion].cantidadDeTemas();
        } else {
            console.log ("La lista no existe");
        }
    }

    
}