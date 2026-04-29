import "dotenv/config";
import express from "express";
import routes from "./src/routes/index.js";
import { connectMongo } from "./src/config/mongo.config.js";

const app = express();

await connectMongo();

app.use(express.json());
app.use("/api", routes);

export default app;
