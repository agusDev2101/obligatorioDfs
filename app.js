import express from "express";
import routes from "./src/server/v1/routes/index.js";
import { errorMiddleware } from "./src/server/v1/middleware/error.middleware.js";
import { rutaNoEncontradaMiddleware } from "./src/server/v1/middleware/not-found.middleware.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use(rutaNoEncontradaMiddleware);
app.use(errorMiddleware);

export default app;
