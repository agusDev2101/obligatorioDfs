import { Router } from "express";
import { validateBodyCreate, validateBodyLogin } from "../middleware/user.validate.middleware.js";
import { loginController, registerController } from "../controllers/auth.controller.js";
const v1AuthRoutes = Router();






v1AuthRoutes.post("/register", validateBodyCreate, registerController); //esto es publico

v1AuthRoutes.post("/login", loginController); //esto es publico

export default v1AuthRoutes;




