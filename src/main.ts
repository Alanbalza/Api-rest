import "./load-env-vars"
import bodyParser from "body-parser";
import  express  from "express";
import { routes } from "./infraestructura/RouteProduct";
import { config } from "./config"


const app = express();

app.use(bodyParser.json());
app.use("/product", routes);

const{port} = config.server;
app.listen(port, ()=> {
  console.log(`[APP]-Corriendo puerto ${port}`);
});



// import { config as dotEnvConfig } from "dotenv";
// dotEnvConfig();

// import bodyParser from "body-parser";
// import express from "express";

// import { config } from "./config";
// import { healthRouter } from "./health/health-router";

// function boostrap() {
//   const app = express();

//   app.use(bodyParser.json());
//   app.use("/health", healthRouter);

//   const { port } = config.server;

//   app.listen(port, () => {
//     console.log(`[APP] - Starting application on port ${port}`);
//   });
// }

// boostrap();
