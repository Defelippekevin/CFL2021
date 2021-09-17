export default class Producto{
    private idProducto:number;
    private nombreProducto:string;
    private precio:number;

    public constructor(idProd:number,nombre:string,precio:number){
        this.idProducto=idProd;
        this.nombreProducto=nombre;
        this.precio=precio;
    }

    public getIdProducto():number{
        return this.idProducto;
    }

    public getNombre():string{
        return this.nombreProducto;
    }

    public getPrecio():number{
        return this.precio;
        
    }


}