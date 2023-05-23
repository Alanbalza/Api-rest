import {database} from "./DataBase";
import { Producto } from "../dominio/ProductComputer";
import { ProductRepository } from "../dominio/ProductRepository";
import { QueryError } from "mysql2";

export class productRepository implements ProductRepository {
    getById(id: number): Promise <Producto | null> {
        throw new Error('Method not implementd.');
    }

    async create(id: number, nombre: string, price: number): Promise<Producto> {
        const mysql = new database();
        return await new Promise((resolve,rejec)=> {
            const sql = `INSERT INTO Product.Computer(id, nombre,price) VALUES ('${id}','${nombre}','${price}')`;
            mysql.connection.query(sql,(error: QueryError, results: Producto)=>{
                if (error){
                    rejec(error)
                }else{
                    resolve(results);
                }
            });
            
        })
    }
} 