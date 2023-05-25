import { Request, Response } from "express";
import { CreateProduct } from "../aplicacion/CreateProduct";
import { GetProduct } from "../aplicacion/GetProduct";


export class Productcontrollers{
    constructor(readonly  GetProduct: GetProduct ,readonly createProduct: CreateProduct) {}

    getById = async (req:Request, res:Response) =>{
        try{
            const data = await this.GetProduct.getById();
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({error: "Error en el servidor"});
        }
    };


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

   
    
}