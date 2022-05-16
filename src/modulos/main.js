"use strict";
exports.__esModule = true;
var product_service_1 = require("./product.service");
(0, product_service_1.addProducto)({
    nombre: 'Camisa',
    fechaCreacion: new Date('2022/05/11'),
    stock: 100,
    talla: 'XL'
});
(0, product_service_1.addProducto)({
    nombre: 'Camisa',
    fechaCreacion: new Date('2022/04/25'),
    stock: 50,
    talla: 'S'
});
(0, product_service_1.addProducto)({
    nombre: 'Camisa',
    fechaCreacion: new Date('2022/03/31'),
    stock: 10,
    talla: 'M'
});
console.log(product_service_1.productos);
var calcularTotal = (0, product_service_1.calcularStock)();
console.log(calcularTotal);
