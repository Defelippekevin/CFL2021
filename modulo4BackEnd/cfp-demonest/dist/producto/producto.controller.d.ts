import { ProductoService } from './producto.service';
export declare class ProductoController {
    private productoService;
    constructor(productoService: ProductoService);
    getProductos(): any;
}
