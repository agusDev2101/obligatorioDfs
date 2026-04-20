import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createTodoController, getAllTodosController } from "../controllers/todo.controller.js";
import { validateCreateTodo } from "../middleware/todo.validate.middleware.js";

const v1TodoRoutes = Router();
v1TodoRoutes.use(authMiddleware);

v1TodoRoutes.post("/", validateCreateTodo, createTodoController);
v1TodoRoutes.get("/", getAllTodosController);



export default v1TodoRoutes;






