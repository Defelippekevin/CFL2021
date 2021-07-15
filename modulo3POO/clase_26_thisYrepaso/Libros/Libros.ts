export default class Libro {
    private titulo:string;
    private editorial:string;
    private anioEdicion:string;
    private genero:string;
    private idioma:string;
    private autor:string;
    private precio:number;

public constructor(titulo:string,editorial:string,anioEdicion:string,genero:string,idioma:string,autor:string,precio:number) {

    this.titulo= titulo;
    this.editorial= editorial;
    this.anioEdicion= anioEdicion;
    this.genero= genero;
    this.idioma= idioma;
    this.autor= autor;
    this.precio= precio;
}

      public getTitulo():string { 
         return this.titulo;
    }

    public getEditorial():string{
         return this.editorial;
    }

    public getAnioEdicion():string{
         return this.anioEdicion;
    }

    public getGenero():string{
         return this.genero;
    }

    public getIdioma():string{
         return this.idioma;
    }
    public getAutor():string{
         return this.autor;
    }
    public getPrecio():number{
         return this.precio;
    }

} 