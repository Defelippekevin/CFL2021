"use strict";
exports.__esModule = true;
var Stock_1 = require("./Stock");
var ProductosStock_1 = require("./ProductosStock");
var RLS = require("readline-sync");
var fs = require("fs");
function llenarStock(stock) {
    var primerStock = new Stock_1["default"]("1er Stock");
    for (var i = 0; i < stock.length; i++) {
        var prod = stock[i].split(';');
        console.log(prod);
        var producto = new ProductosStock_1["default"]((parseInt(prod[0])), prod[1], (parseInt(prod[2])), prod[3]);
        primerStock.agregarProducto(producto);
    }
    return primerStock;
}
function cargaProductosVendidos(listaProductosVendidos) {
    var txtFile = '';
    for (var i = 0; i < listaProductosVendidos.getProductos().length; i++) {
        //obtengo  los productos del registro de vendidos
        var prod = listaProductosVendidos.getProductos()[i];
        //los valores de cada prod los voy almacenando en esta variable de tipo string
        txtFile = txtFile + prod.getCantidad().toString() + ',' + prod.getNombre() + ',' + prod.getPrecio().toString() + ',' + prod.getDescripcion() + ';';
    }
    //actualizo el txt
    fs.appendFile('articulosVendidos.txt', txtFile, function (err) {
        if (err)
            throw err;
    });
}
try {
    var opcion = RLS.questionInt("Ingrese 1 para cargar los productos desde un archivo txt, 2 para cargarlos de fomra secuencial ");
    if (opcion != 1 && opcion != 2) {
        throw new Error("ingreso un numero que no responde a un comando");
    }
    //stock comestible
    var stockComestible = new Stock_1["default"]("stock comestible");
    var prod1 = new ProductosStock_1["default"](20, 'carameloSugus', 1, 'caramelo masticable');
    var prod2 = new ProductosStock_1["default"](14, "Chocolate milka", 60, 'chocolate');
    var prod3 = new ProductosStock_1["default"](50, 'muniecos', 100, 'dragon ball z');
    var prod4 = new ProductosStock_1["default"](89, 'autitos', 284, "chocadores");
    var prod5 = new ProductosStock_1["default"](20, 'mentas', 12, 'refrescantes');
    var prod6 = new ProductosStock_1["default"](20, 'carameloBilliken', 14, 'multifruta');
    var prod7 = new ProductosStock_1["default"](20, 'drf', 22, 'sabor naranja');
    var prod8 = new ProductosStock_1["default"](20, 'figuritas', 34, 'Naruto');
    var prod9 = new ProductosStock_1["default"](20, 'yoyo', 50, 'yoyo magico');
    var prod10 = new ProductosStock_1["default"](20, 'pelota', 100, 'pelota del barcelona');
    if (opcion == 1) {
        var listadoDeProductos = fs.readFileSync('ProductosEnStock.txt', 'utf8');
        var productosTxt = [];
        productosTxt = listadoDeProductos.split('\n');
        stockComestible = llenarStock(productosTxt);
        console.log(stockComestible);
    }
    else if (opcion == 2) {
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
    var stock1 = new Stock_1["default"]("stock1");
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
    var arregloProdVendidos = new Stock_1["default"]("productos vendidos");
    var ingresoProdVendidos = RLS.questionInt("ingrese 1 para ingresar productos vendidos, ingrese otra tecla para salir ");
    while (ingresoProdVendidos == 1) {
        var nombreVendido = RLS.question("ingrese el  nombre del producto vendido ");
        var cantVendido = RLS.questionInt("ingrese la cantidad de unidades del producto que vendio ");
        var precioVenta = RLS.questionInt("Ingrese el  precio al que vendio ");
        var descripcion = RLS.question("Ingrese una descripcion del producto ");
        var productoVendido = new ProductosStock_1["default"](cantVendido, nombreVendido, precioVenta, descripcion);
        arregloProdVendidos.agregarProducto(productoVendido);
        ingresoProdVendidos = RLS.questionInt("ingrese 1 para ingresar productos vendidos, ingrese otra tecla para salir ");
    }
    console.log(arregloProdVendidos);
    cargaProductosVendidos(arregloProdVendidos);
}
catch (error) {
    console.log(error.message);
}
