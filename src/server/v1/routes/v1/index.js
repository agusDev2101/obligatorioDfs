import { Router } from "express";
import usersRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import v1ReviewsRoutes from "./v1.review.routes.js";
import iaRoutes from "./ia.routes.js";
import { limiter } from "../../middleware/rateLimiter.middleware.js";
import movieRoutes from "./movie.routes.js";

const v1Routes = Router();
v1Routes.use(limiter);

v1Routes.use("/users", usersRoutes);
v1Routes.use("/auth", authRoutes);
v1Routes.use("/reviews", v1ReviewsRoutes);
v1Routes.use("/ia", iaRoutes);
v1Routes.use("/movies", movieRoutes);

export default v1Routes;
