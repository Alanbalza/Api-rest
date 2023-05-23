import { Request, Response } from "express";
import { CreateProduct } from "../aplicacion/CreateProduct";


export class Productcontrollers{
    constructor(readonly createProduct: CreateProduct) {}
    create = async (req: Request, res:Response)=>{
        try{
            const{id, nombre, price}= req.body;
            const dataProdcuto = await this.createProduct.createProduct(
                id,
                nombre,
                price
            );
            res.status(200).json(dataProdcuto);
        }catch (error){
            res.status(500).json({error: "Error en el servidor"});
        }
    };

    get = async (req:Request, res:Response) =>{
        try{
            res.status(200).json({message:"Hecho"});
        }catch(error){
            res.status(500).json({error: "Error en el servidor"});
        }
    };
    
}