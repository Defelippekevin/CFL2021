"use strict";
exports.__esModule = true;
var Libro = /** @class */ (function () {
    function Libro(titulo, editorial, anioEdicion, genero, idioma, autor, precio) {
        this.titulo = titulo;
        this.editorial = editorial;
        this.anioEdicion = anioEdicion;
        this.genero = genero;
        this.idioma = idioma;
        this.autor = autor;
        this.precio = precio;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getAnioEdicion = function () {
        return this.anioEdicion;
    };
    Libro.prototype.getGenero = function () {
        return this.genero;
    };
    Libro.prototype.getIdioma = function () {
        return this.idioma;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getPrecio = function () {
        return this.precio;
    };
    return Libro;
}());
exports["default"] = Libro;
