import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import Producto from './Producto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private productoService:ProductoService){}

    @Get()
    public getProductos():any{
        return this.productoService.getProductos()
    }

    @Get(':id')
    public getProducto(@Param('id') id): Producto {
        return this.productoService.getProducto(parseInt(id));
    }

    @Post()
    create(@Body() producto:any):string{
        return this.productoService.create(producto);
    }





    @Put(':id')
        public updateProducto(@Body() prod: any, @Param('id') id): boolean{
            return this.productoService.updateProducto(parseInt(id),prod)

        }
}
