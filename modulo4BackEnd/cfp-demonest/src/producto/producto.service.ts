import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Producto from './Producto';

@Injectable()
export class ProductoService {
    private listaProductos:Producto[]=[];

    public constructor(){
        this.loadProductos()
    }
    
    public getProductos(): Producto[]{
        return this.listaProductos;
    }

    public getProducto(id:number):Producto{
        let producto = null;
// Más adelante agregar manejo de status code
        for (let i=0; i<this.listaProductos.length; i++) {
            if (this.listaProductos[i].getIdProducto()==id) {
            return this.listaProductos[i];
        }
    }
        return null;
   }

   public create(prod:any){
       const producto= new Producto(prod['idProducto'],prod['nombreProducto'],prod['precio'])

        if(producto.getNombre() && producto.getPrecio()){
            this.listaProductos.push(producto);

            fs.appendFileSync('productos.csv',
            '\n'+producto.getIdProducto() + ',' + producto.getNombre() + ',' 
            + producto.getPrecio()
            );
            return "ok";
        }

        return "parametros invalidos"

   }

   public updateProducto(id:number,prod:any):boolean{
       let posicion = this.listaProductos.findIndex(p => p.getIdProducto() === id);

       if(posicion >-1) {
          const producto = new Producto(prod.idProducto, prod.nombreProducto, prod.precio);
          this.listaProductos[posicion]= producto;
          this.guardarDatos();
          return true;
       }

       return false;
   }

    private loadProductos(): void {
        let archivo = fs.readFileSync('productos.csv', 'utf8');
        const elementos = archivo
        .split('\n')
        .map(p => p.replace('\r', ''))
        .map(p => p.split(','));
       // this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            console.log(elementos[i]);
            
        let producto = new Producto(parseInt(elementos[i][0]),
        elementos[i][1], parseFloat(elementos[i][2]));
        this.listaProductos.push(producto);
        }
    }

    
    private guardarDatos(){
            let datos:string= '';
            for(let productos of this.listaProductos){
                datos+= `\r\n${productos.getIdProducto()},${productos.getNombre()},${productos.getPrecio()}`
            }
            fs.writeFileSync('productos.csv',datos.substr(2));
        }
    
}
