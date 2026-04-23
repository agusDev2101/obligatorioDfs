import { Router } from "express";
import v1UserRoutes from "./v1.user.routes.js";
import v1AuthRoutes from "./v1.auth.routes.js";
import v1ReviewRoutes from "./v1.review.routes.js";
const v1Routes = Router();



v1Routes.use("/auth", v1AuthRoutes);
v1Routes.use("/users", v1UserRoutes);
v1Routes.use("/reviews", v1ReviewRoutes);

export default v1Routes;