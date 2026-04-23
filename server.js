import "dotenv/config";
import app from "./app.js";
import { connectMongo } from "./src/config/mongo.config.js";

const PORT = process.env.PORT || 3000;

await connectMongo();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
