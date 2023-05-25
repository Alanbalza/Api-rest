import { CreateProduct } from "../aplicacion/CreateProduct";
import { Productcontrollers } from "./Productcontrollers";
import { productRepository } from "./productRepository";
import { GetProduct } from "../aplicacion/GetProduct";


const productRe = new productRepository();
const createProduct = new CreateProduct(productRe)
const getById = new GetProduct(productRe)


export const productcontrollers = new Productcontrollers( getById ,createProduct)