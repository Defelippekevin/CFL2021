"use strict";
exports.__esModule = true;
var ProductosStock = /** @class */ (function () {
    function ProductosStock(cantidad, nombre, precio, descripcion) {
        this.cantidad = cantidad;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    ProductosStock.prototype.getPrecio = function () {
        return this.precio;
    };
    ProductosStock.prototype.getCantidad = function () {
        return this.cantidad;
    };
    ProductosStock.prototype.getNombre = function () {
        return this.nombre;
    };
    ProductosStock.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    return ProductosStock;
}());
exports["default"] = ProductosStock;
