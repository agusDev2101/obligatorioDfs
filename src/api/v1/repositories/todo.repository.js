import { Todo } from "../models/mongo/todo.mongo.model.js";



const userRepository = {
    getAll: async () => {
        const tareas = await Todo.find();
        return tareas;
    }
}

export default todoRepository
