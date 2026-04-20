import { createTodoSchema } from "../schemas/todo.schema.js";
import { validate } from "./validate.middleware.js";



export const validateCreateTodo = validate(createTodoSchema, "body");

