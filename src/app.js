import express from "express"
import rutasGenerales from "./server/v1/routes/index.js"

// import dotenv from "dotenv";
// dotenv.config();

import { connectMongo } from "./server/v1/config/mongo.config.js";
import { errorMiddleware } from "./server/v1/middleware/error.middleware.js";
import { connectRedis } from "./server/v1/config/redis.config.js";
import { rutaNoEncontradaMiddleware } from "./server/v1/middleware/ruta-no-encontrada.Middleware.js";



// connectMongo
connectMongo();
connectRedis();


const app = express();
//middleware para manejar el body de las peticiones
app.use(express.json());

app.use(rutasGenerales)

//rutas por defecto error 404 ruta no encontrada
app.use(rutaNoEncontradaMiddleware);



//middleware de validacion de errores
app.use(errorMiddleware);


export default app


