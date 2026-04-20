import { Todo } from "../models/mongo/todo.mongo.model.js";



const todoRepository = {
    getAll: async () => {
        const tareas = await Todo.find().populate("userId", "name email");
        return tareas;
    },
    create: async (data) => {
        const todo = await Todo.create(data);
        return todo;
    },
    //data es el id del todo a buscar
    findById: async (data) => {
        const todo = await Todo.findById(data);
        return todo;
    },
}

export default todoRepository
