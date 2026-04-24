import { Router } from "express";
import { registerController } from "../../controllers/auth.controller.js";
import { validate } from "../../middleware/validate.middleware.js";
import { registerBodySchema, loginBodySchema } from "../../../../schemas/auth.schema.js";
import { loginController } from "../../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post(
  "/register",
  validate(registerBodySchema, "body"),
  registerController,
);

authRoutes.post("/login", validate(loginBodySchema, "body"), loginController);

export default authRoutes;
