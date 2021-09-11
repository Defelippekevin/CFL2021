"use strict";
exports.__esModule = true;
var Stock = /** @class */ (function () {
    function Stock(nombre) {
        this.nombre = nombre;
        this.productos = [];
    }
    Stock.prototype.getCantidad = function () {
        var cantidadProd = 0;
        for (var i = 0; i < this.productos.length; i++) {
            cantidadProd += this.productos[i].getCantidad();
        }
        return cantidadProd;
    };
    Stock.prototype.getPrecio = function () {
        var precioProd = 0;
        for (var i = 0; i < this.productos.length; i++) {
            precioProd += this.productos[i].getPrecio();
        }
        return precioProd;
    };
    Stock.prototype.agregarProducto = function (productoNuevo) {
        this.productos.push(productoNuevo);
    };
    Stock.prototype.eliminar = function (posicion) {
        if (posicion > 0 && posicion < this.productos.length) {
            this.productos.splice(posicion, 1);
        }
    };
    Stock.prototype.getProductos = function () {
        return this.productos;
    };
    Stock.prototype.checkVacio = function () {
        if (this.productos.length == 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Stock;
}());
exports["default"] = Stock;
