import { CreateProduct } from "../aplicacion/CreateProduct";
import { Productcontrollers } from "./Productcontrollers";
import { productRepository } from "./productRepository";

const productRe = new productRepository();
const createProduct = new CreateProduct(productRe)

export const productcontrollers = new Productcontrollers(
    createProduct,
)