import Productos from "./Productos";

export default class ProductosStock implements Productos{
    private nombre:string;
    private precio:number;
    private cantidad:number;
    private descripcion:string

    public constructor(cantidad:number,nombre:string,precio:number, descripcion:string){
        this.cantidad=cantidad;
        this.nombre=nombre;
        this.precio=precio;
        this.descripcion=descripcion;
    }

    public getPrecio():number{
        return this.precio;
    }

    public getCantidad():number{
        return this.cantidad;
    }

    public getNombre():string{
        return this.nombre;
    }
    public getDescripcion():string{
        return this.descripcion;
    }
}