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

// --- INICIO BLOQUE TUYO ---
usersRoutes.use(authMiddleware)
// --- FIN BLOQUE TUYO ---

// --- INICIO BLOQUE REMOTO ---
usersRoutes.use(authMiddleware);
// --- FIN BLOQUE REMOTO ---
// GET /api/v1/users
usersRoutes.get("/", getUsersController);

// GET /api/v1/users/:id
usersRoutes.get("/:id", getUserByIdController);

// POST /api/v1/users
usersRoutes.post("/", createUserController);

// PUT /api/v1/users/:id
usersRoutes.put("/:id", updateUserController);

// DELETE /api/v1/users/:id
usersRoutes.delete("/:id", deleteUserController);


// --- INICIO BLOQUE REMOTO ---
usersRoutes.patch("/plan", changePlanController);
// --- FIN BLOQUE REMOTO ---

export default usersRoutes;
