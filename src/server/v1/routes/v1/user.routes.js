import { Router } from "express";
import {
  getUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteUserController,
} from "../../controllers/user.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

// --- INICIO BLOQUE TUYO ---
import { limiter } from "../../middleware/rateLimiter.middleware.js";
// --- FIN BLOQUE TUYO ---

// --- INICIO BLOQUE REMOTO ---
import { changePlanController } from "../../controllers/user.controller.js";
// --- FIN BLOQUE REMOTO ---

const usersRoutes = Router();


// Proteger el resto de los endpoints
usersRoutes.use(authMiddleware);

// GET /api/v1/users
usersRoutes.get("/", getUsersController);

// GET /api/v1/users/:id
usersRoutes.get("/:id", getUserByIdController);

// PUT /api/v1/users/:id
usersRoutes.put("/:id", updateUserController);

// DELETE /api/v1/users/:id
usersRoutes.delete("/:id", deleteUserController);

// PATCH /api/v1/users/plan
usersRoutes.patch("/plan", changePlanController);

export default usersRoutes;
