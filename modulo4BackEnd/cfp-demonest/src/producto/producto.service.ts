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
            producto = this.listaProductos[i];
        }
    }
        return producto;
   }

    private loadProductos(): void {
        let archivo = fs.readFileSync('productos.csv', 'utf8');
        const elementos = archivo
        .split('\n')
        .map(p => p.replace('\r', ''))
        .map(p => p.split(','));
        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
        let producto = new Producto(parseInt(elementos[i][0]),
        elementos[i][1], parseFloat(elementos[i][2]));
        this.listaProductos.push(producto);
        }
    }
}
