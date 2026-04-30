import { Router } from "express";
import usersRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import v1ReviewsRoutes from "./v1.review.routes.js";

// --- INICIO BLOQUE TUYO ---
import iaRoutes from "./ia.routes.js";
import { limiter } from "../../middleware/rateLimiter.middleware.js";
import movieRoutes from "./movie.routes.js";
// --- FIN BLOQUE TUYO ---

// --- INICIO BLOQUE REMOTO ---
import v1CategoryRoutes from "./v1.category.routes.js";
// --- FIN BLOQUE REMOTO ---

const v1Routes = Router();

// --- INICIO BLOQUE TUYO ---
v1Routes.use(limiter);
// --- FIN BLOQUE TUYO ---

v1Routes.use("/users", usersRoutes);
v1Routes.use("/auth", authRoutes);
v1Routes.use("/reviews", v1ReviewsRoutes);

// --- INICIO BLOQUE TUYO ---
v1Routes.use("/ia", iaRoutes);
v1Routes.use("/movies", movieRoutes);
// --- FIN BLOQUE TUYO ---

// --- INICIO BLOQUE REMOTO ---
v1Routes.use("/categories", v1CategoryRoutes);
// --- FIN BLOQUE REMOTO ---
export default v1Routes;
