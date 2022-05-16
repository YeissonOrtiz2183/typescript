import { Producto } from "./productosModel";

const productos: Producto[] = [];

const addProducto = (producto: Producto): void => {
    productos.push(producto);
}

const calcularStock = ():number => {
    let total:number = 0;
    productos.forEach((producto) => {
        total += producto.stock;
    });
    return total;
}

export { productos, addProducto, calcularStock }
