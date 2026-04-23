import express from "express";
import routes from "./src/routes/index.js";
import { errorMiddleware } from "./src/middlewares/error.middleware.js";
import { rutaNoEncontradaMiddleware } from "./src/middlewares/not-found.middleware.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

// 404
app.use(rutaNoEncontradaMiddleware);

// errores
app.use(errorMiddleware);

export default app;
