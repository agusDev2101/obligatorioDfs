import { Router } from "express";
import v1Routes from "./v1.routes.js";

const rutasGenerales = Router();

// rutasGenerales.get("/", (req, res) => {
//     res.json({ message: "Bienvenido a la API de mi aplicación" });
// }

rutasGenerales.get("/", (req, res, next) => {
    res.json({ message: "Bienvenido a la API de mi aplicación" });
})


rutasGenerales.use("/api/v1", v1Routes);


export default rutasGenerales;
