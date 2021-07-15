import * as RLS from 'readline-sync';
import * as FS from 'fs';
import Libro from "./Libros";

export default class GestorLibro {
    private libros: Libro[];

    public constructor (){
        this.libros = [];
    }

    public addLibro():void{
        let titulo:string = RLS.question('Ingrese el titulo: ');
        let editorial:string = RLS.question('Ingrese la editorial: ');
        let anioEdicion:string = RLS.question('Ingrese el año: ');
        let genero:string = RLS.question('Ingrese el genero: ');
        let idioma:string = RLS.question('Ingrese el idioma: ');
        let autor:string = RLS.question('Ingrese el autor: ');
        let precio: number = RLS.questionInt('Ingrese el precio: ');
        this.libros.push(new Libro(titulo,editorial,anioEdicion,genero,idioma,autor,precio));
    }

    public findLibro(titulo:string):number{
        for (let i = 0; i < this.libros.length; i++) {
            if(titulo == this.libros[i].getTitulo()){
                return i;
            }  
        }
                return -1;
    }

    public deleteLibro(titulo:string): void{
        let posicion:number = this.findLibro(titulo);
        if (posicion != -1) {
            this.libros.splice(posicion,1);
        }
    }

    public updateLibro(libroViejo: string): void{
        let titulo:string = RLS.question('Ingrese el titulo: ');
        let editorial:string = RLS.question('Ingrese la editorial: ');
        let anioEdicion:string = RLS.question('Ingrese el año: ');
        let genero:string = RLS.question('Ingrese el genero: ');
        let idioma:string = RLS.question('Ingrese el idioma: ');
        let autor:string = RLS.question('Ingrese el autor: ');
        let precio: number = RLS.questionInt('Ingrese el precio: ');

        let posicion= this.findLibro(libroViejo);
        if (posicion != -1) {
            this.libros[posicion] = new Libro(titulo,editorial,anioEdicion,genero,idioma,autor,precio);
        }
        else{
            console.log("el libro no existe");
        }
    }

    mostrarLibros(): void{
        console.log(this.libros);
    }

    cargarLibros():void{
        let libros:string[] = (FS.readFileSync('libro.txt','utf8')).split('\n');
        let propiedadesLibro:string[] = [];
        libros.forEach(libroString => {
            propiedadesLibro = libroString.split(";")
            this.libros.push(new Libro(propiedadesLibro[0],propiedadesLibro[1],propiedadesLibro[2],propiedadesLibro[3],propiedadesLibro[4],propiedadesLibro[5],parseInt(propiedadesLibro[6])))
        });
    }
} 