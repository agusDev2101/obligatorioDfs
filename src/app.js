import express from "express"
import rutasGenerales from "./api/v1/routes/index.js"
import dotenv from "dotenv";
import { connectMongo } from "./api/v1/config/mongo.config.js";
import { errorMiddleware } from "./api/v1/middleware/error.middleware.js";
import { connectRedis } from "./api/v1/config/redis.config.js";
dotenv.config();


// connectMongo
connectMongo();
connectRedis();


const app = express();
//middleware para manejar el body de las peticiones
app.use(express.json());

app.use(rutasGenerales)

//rutas por defecto error 404 ruta no encontrada
console.log("paso las rutas");
//middleware de validacion de errores
app.use(errorMiddleware);


const puerto = process.env.PORT || 3001;
app.listen(puerto, () => console.log('Escuchando en puerto:', puerto)); 