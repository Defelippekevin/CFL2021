import Stock from "./Stock";
import ProductosStock from "./ProductosStock";
import * as RLS from "readline-sync";
import * as fs from 'fs';



function llenarStock(stock:string[]):Stock{
    let primerStock:Stock = new Stock("1er Stock");
    for(let i=0; i<stock.length;i++){
        let prod: string[] = stock[i].split(';');
        console.log(prod);
        let producto = new ProductosStock((parseInt(prod[0])), prod[1],(parseInt(prod[2])), prod[3]);
        primerStock.agregarProducto(producto);
    }
    return primerStock;
}

function cargaProductosVendidos(listaProductosVendidos: Stock): void {
    let txtFile: string = '';
    for (let i: number = 0; i < listaProductosVendidos.getProductos().length; i++) {

        //obtengo  los productos del registro de vendidos
        let prod: ProductosStock = listaProductosVendidos.getProductos()[i];

        //los valores de cada prod los voy almacenando en esta variable de tipo string
        txtFile = txtFile + prod.getCantidad().toString()+',' + prod.getNombre() + ',' + prod.getPrecio().toString() + ',' + prod.getDescripcion()+';';
    }
   
    //actualizo el txt
    fs.appendFile('articulosVendidos.txt', txtFile, function (err) {
        if (err) throw err;
        
    });
}

try{
let opcion: number = RLS.questionInt("Ingrese 1 para cargar los productos desde un archivo txt, 2 para cargarlos de fomra secuencial ");

    if(opcion != 1 && opcion != 2){
        throw new Error("ingreso un numero que no responde a un comando")
    }
//stock comestible
let stockComestible: Stock = new Stock("stock comestible");

let prod1: ProductosStock = new ProductosStock(20, 'carameloSugus', 1, 'caramelo masticable');
let prod2: ProductosStock = new ProductosStock(14, "Chocolate milka", 60, 'chocolate');
let prod3: ProductosStock = new ProductosStock(50, 'muniecos', 100, 'dragon ball z');
let prod4: ProductosStock = new ProductosStock(89, 'autitos', 284, "chocadores");
let prod5: ProductosStock = new ProductosStock(20, 'mentas', 12, 'refrescantes');
let prod6: ProductosStock = new ProductosStock(20, 'carameloBilliken', 14, 'multifruta');
let prod7: ProductosStock = new ProductosStock(20, 'drf', 22, 'sabor naranja');
let prod8: ProductosStock = new ProductosStock(20, 'figuritas', 34, 'Naruto');
let prod9: ProductosStock = new ProductosStock(20, 'yoyo', 50, 'yoyo magico');
let prod10: ProductosStock = new ProductosStock(20, 'pelota', 100, 'pelota del barcelona');



if(opcion==1){
    let listadoDeProductos:string = fs.readFileSync('ProductosEnStock.txt', 'utf8');
    let productosTxt:string[] =[];
    productosTxt=listadoDeProductos.split('\n');
    stockComestible= llenarStock(productosTxt);

    console.log(stockComestible);

}else if(opcion==2){
    stockComestible.agregarProducto(prod1);
    stockComestible.agregarProducto(prod2);
    stockComestible.agregarProducto(prod5);
    stockComestible.agregarProducto(prod6);
    stockComestible.agregarProducto(prod7);
}
/*
console.log(stockComestible);
stockComestible.eliminar(3);
console.log(" //////////// BORRE EL PRODUCTO EN LA POSICION 3 /////////////// ");

console.log(stockComestible);
*/

console.log('cantidad de unidades en stock comestible es ' + stockComestible.getCantidad());
console.log('valor total del stock comestible es ' + stockComestible.getPrecio());
console.log('esta vacio? ' + stockComestible.checkVacio());


let stock1:Stock = new Stock("stock1");
stock1.agregarProducto(prod1);
stock1.agregarProducto(prod2);
stock1.agregarProducto(prod3);
stock1.agregarProducto(prod4);
stock1.agregarProducto(prod5);
stock1.agregarProducto(prod6);
stock1.agregarProducto(prod7);
stock1.agregarProducto(prod8);
stock1.agregarProducto(prod9);
stock1.agregarProducto(prod10);

/*
console.log('cantidad de unidades en stock ' + stock1.getCantidad());
console.log('valor total del stock ' + stock1.getPrecio());
console.log('esta vacio? ' + stock1.checkVacio());
*/

let arregloProdVendidos:Stock = new Stock("productos vendidos");
let ingresoProdVendidos:number = RLS.questionInt("ingrese 1 para ingresar productos vendidos, ingrese otra tecla para salir ");

while(ingresoProdVendidos==1){
    let nombreVendido:string=RLS.question("ingrese el  nombre del producto vendido ");    
    let cantVendido:number=RLS.questionInt("ingrese la cantidad de unidades del producto que vendio ");
    let precioVenta:number=RLS.questionInt("Ingrese el  precio al que vendio ");
    let descripcion:string=RLS.question("Ingrese una descripcion del producto ");
    let productoVendido : ProductosStock = new ProductosStock(cantVendido,nombreVendido,precioVenta,descripcion);
    arregloProdVendidos.agregarProducto(productoVendido);
    ingresoProdVendidos = RLS.questionInt("ingrese 1 para ingresar productos vendidos, ingrese otra tecla para salir ");
}

console.log(arregloProdVendidos);
cargaProductosVendidos(arregloProdVendidos);

}catch(error){
    console.log(error.message);
    

}

