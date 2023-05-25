 import { ProductRepository } from "../dominio/ProductRepository";

export class GetProduct{
    constructor(readonly getRepository: ProductRepository){}
    async getById(){
        return this.getRepository.getById()
        .then((getRepository)=>{
            console.log(getRepository);
            return getRepository;
        }).catch((error)=>{
            console.log(error);
        })
    }
}




/* import express, { Request, Response } from 'express';

// Crear la aplicación Express
const app = express();

// Ruta GET
app.get('/productos', (req: Request, res: Response) => {
  // Obtener los productos desde la base de datos o cualquier otra fuente de datos
  const productos = [
    { id: 1, nombre: 'Laptop', precio: 1500 },
    { id: 2, nombre: 'Monitor', precio: 300 },
    { id: 3, nombre: 'Teclado', precio: 100 }
  ];

  // Enviar la respuesta con los productos
  res.json(productos);
}); */