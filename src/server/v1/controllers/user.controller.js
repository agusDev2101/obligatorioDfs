//se puede importar cada metodo del servicio o importar todos y ponerle un alias
// import { getAll } from "../services/user.service.js";
// getAll();

import * as userService from "../services/user.service.js";



export const getAllUserController = async (req, res, next) => {
    try {

        const { page, limit } = req.query;
        const paginas = page || 1;
        const limite = limit || 10;
        const usuarios = await userService.getAllUserPagined(paginas, limite);
        console.log('usuarios', usuarios)
        res.status(200).json({ usuarios })
    } catch (error) {
        next(error)
    }
}




export const createUserController = async (req, res, next) => {
    try {
        const { body } = req;
        const usuario = await userService.createUser(body);
        res.status(200).json({ usuario })
    } catch (error) {
        next(error)
    }
}


