import { Producto } from "./ProductComputer"

export interface ProductRepository{
    create(id: number, nombre: string, price: number): Promise <Producto>;
    getById(id: number): Promise <Producto | null>;
}