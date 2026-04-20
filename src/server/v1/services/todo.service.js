import todoRepository from "../repositories/todo.repository.js";




export const createTodo = async (data) => {
    const todo = await todoRepository.create(data);
    return todo;
}

export const getAllTodos = async () => {
    const todos = await todoRepository.getAll();
    return todos;
}

export const findTodoById = async (id) => {
    const todo = await todoRepository.findById(id);
    return todo;
}   