import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { getAllUserController, createUserController } from "../controllers/user.controller.js";
const v1UserRoutes = Router();


v1UserRoutes.use(authMiddleware);

//aca valido que la persona este con token valido con las credenciales necesarias
v1UserRoutes.get("/", getAllUserController); //esto es publico
// v1UserRoutes.post("/register", createUser); //esto es publico
export default v1UserRoutes;






