"use strict";
exports.__esModule = true;
exports.calcularStock = exports.addProducto = exports.productos = void 0;
var productos = [];
exports.productos = productos;
var addProducto = function (producto) {
    productos.push(producto);
};
exports.addProducto = addProducto;
var calcularStock = function () {
    var total = 0;
    productos.forEach(function (producto) {
        total += producto.stock;
    });
    return total;
};
exports.calcularStock = calcularStock;
