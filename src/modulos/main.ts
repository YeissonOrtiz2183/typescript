import { productos, addProducto, calcularStock } from "./product.service";

addProducto({
    nombre:'Camisa',
    fechaCreacion: new Date('2022/05/11'),
    stock:100,
    talla: 'XL'
})

addProducto({
    nombre:'Camisa',
    fechaCreacion: new Date('2022/04/25'),
    stock:50,
    talla: 'S'
})


addProducto({
    nombre:'Camisa',
    fechaCreacion: new Date('2022/03/31'),
    stock:10,
    talla: 'M'
})

console.log(productos);
const calcularTotal=calcularStock();
console.log(calcularTotal)
