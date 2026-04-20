import { createTodo, getAllTodos } from "../services/todo.service.js";







export const getAllTodosController = async (req, res, next) => {
    try {
        const todos = await getAllTodos();
        res.status(200).json({ todos })
    } catch (error) {
        next(error)
    }
}



export const createTodoController = async (req, res, next) => {
    try {
        //al tener que estar logueado tenemos el token y tenemos el usuario entonces podesmos acceder a la info del usuario desde el req.user
        const { body, user } = req;
        const userId = user.userId; //esto es lo que me da el token, el id del usuario logueado
        const data = { ...body, userId } //esto es lo que le voy a pasar al servicio para crear el todo, el body con la info del todo y el userId para relacionarlo con el usuario logueado
        const todo = await createTodo(data);
        res.status(201).json({ todo })
    } catch (error) {
        next(error)
    }
}
