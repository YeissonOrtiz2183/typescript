export type Tallas = 'S' | 'M' |'L' | 'XL'

export type Producto={
    nombre:string,
    fechaCreacion:Date,
    stock:number,
    talla:Tallas
}
