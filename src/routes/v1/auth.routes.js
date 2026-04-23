import { Router } from "express";
import { registerController } from "../../controllers/v1/auth.controller.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { registerBodySchema } from "../../validations/auth.validation.js";

const authRoutes = Router();

authRoutes.post(
  "/register",
  validate(registerBodySchema, "body"),
  registerController,
);
// Por ahora no implementamos login pero la ruta quedaria asi
// authRoutes.post(
//   "/login",
//   validate(loginBodySchema, "body"),
//   loginController
// );

export default authRoutes;
