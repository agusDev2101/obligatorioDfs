import { Router } from "express";
import usersRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import v1ReviewsRoutes from "./v1.review.routes.js";
import v1CategoryRoutes from "./v1.category.routes.js";

const v1Routes = Router();

v1Routes.use("/users", usersRoutes);
v1Routes.use("/auth", authRoutes);
v1Routes.use("/reviews", v1ReviewsRoutes);
v1Routes.use("/categories", v1CategoryRoutes);
export default v1Routes;
