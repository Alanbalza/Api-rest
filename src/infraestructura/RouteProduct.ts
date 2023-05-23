import  express  from "express";
import { productcontrollers } from "./Dependencias";

export const routes = express.Router();
routes.post('/',productcontrollers.create.bind(productcontrollers));
routes.get('/', productcontrollers.get.bind(productcontrollers));