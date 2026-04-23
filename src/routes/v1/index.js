import { Router } from "express";
import usersRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";

const v1Routes = Router();

v1Routes.use("/users", usersRoutes);
v1Routes.use("/auth", authRoutes);

export default v1Routes;
