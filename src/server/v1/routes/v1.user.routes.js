import { Router } from "express";
import { getAllController } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const v1UserRoutes = Router();


v1UserRoutes.use(authMiddleware);

//aca valido que la persona este con token valido con las credenciales necesarias
v1UserRoutes.get("/", getAllController); //esto es publico
// v1UserRoutes.post("/register", createUser); //esto es publico
export default v1UserRoutes;






