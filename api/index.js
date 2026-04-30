import "dotenv/config";
import app from "../app.js";
import { connectMongo } from "../src/config/mongo.config.js";

await connectMongo();

export default app;
