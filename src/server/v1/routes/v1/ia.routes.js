import { Router } from "express";
import { handleTransfrom } from "../../controllers/text.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { limiter } from "../../middleware/rateLimiter.middleware.js";

const iaRoutes = Router();

iaRoutes.use(authMiddleware);


iaRoutes.get("/transform", handleTransfrom);

iaRoutes.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido a la API de IA" });
});

export default iaRoutes;