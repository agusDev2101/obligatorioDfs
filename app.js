import express from "express";
import cors from "cors";

import routes from "./src/server/v1/routes/index.js";
import { errorMiddleware } from "./src/server/v1/middleware/error.middleware.js";
import { rutaNoEncontradaMiddleware } from "./src/server/v1/middleware/not-found.middleware.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://obligatorio-parte2-dfs.vercel.app",
    ],
  }),
);

app.use(express.json());
app.use(routes);

app.use(rutaNoEncontradaMiddleware);
app.use(errorMiddleware);

export default app;
