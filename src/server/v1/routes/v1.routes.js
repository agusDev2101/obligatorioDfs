import { Router } from "express";
import v1UserRoutes from "./v1.user.routes.js";
import v1AuthRoutes from "./v1.auth.routes.js";
import v1TodoRoutes from "./v1.todo.routes.js";
const v1Routes = Router();



v1Routes.use("/auth", v1AuthRoutes);
v1Routes.use("/users", v1UserRoutes);
v1Routes.use("/todos", v1TodoRoutes);

export default v1Routes;