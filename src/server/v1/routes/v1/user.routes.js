import { Router } from "express";
import {
    getUsersController,
    getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController
} from "../../controllers/user.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { limiter } from "../../middleware/rateLimiter.middleware.js";

const usersRoutes = Router();


usersRoutes.use(authMiddleware)
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

export default usersRoutes;