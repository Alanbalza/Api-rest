import { ProductRepository } from "../dominio/ProductRepository"

export class CreateProduct {
    constructor (readonly productRepository: ProductRepository ){}
    async createProduct(
        id: number,
        nombre: string,
        price: number
    )
    {
        return this.productRepository
        .create(id, nombre, price)
        .then((createProduct)=> {
            console.log((createProduct));
            return createProduct;
        })
        .catch((error)=>{
            console.log(error)
        });
    }
}