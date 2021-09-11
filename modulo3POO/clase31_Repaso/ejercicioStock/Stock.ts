import ProductosStock from "./ProductosStock";

export default class Stock{

    private nombre:string;
    private productos:ProductosStock[];


   public constructor(nombre:string){
       this.nombre=nombre;
       this.productos=[];
    }


    public getCantidad():number{

        let cantidadProd:number=0;

        for(let i=0;i<this.productos.length;i++){
            cantidadProd+= this.productos[i].getCantidad();
        }
        return cantidadProd;
    }


    public getPrecio():number{
        let precioProd:number=0;

        for(let i=0;i<this.productos.length;i++){
            precioProd+= this.productos[i].getPrecio();
        }
        return precioProd;
    }

    public agregarProducto(productoNuevo:ProductosStock):void{
        this.productos.push(productoNuevo);
    }

    public eliminar(posicion:number):void{
        if(posicion>0 && posicion<this.productos.length){
            this.productos.splice(posicion,1);
        }
    }

    public getProductos():ProductosStock[]{
        return this.productos;
    }

    public checkVacio():boolean{
        if(this.productos.length==0){
            return true;
        }else{
            return false;
        }
    }
}