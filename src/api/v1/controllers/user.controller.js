//se puede importar cada metodo del servicio o importar todos y ponerle un alias
// import { getAll } from "../services/user.service.js";
// getAll();

import * as userService from "../services/user.service.js";



export const getAllController = async (req, res, next) => {
    try {
        const usuarios = await userService.getAllUser();
        console.log('usuarios', usuarios)
        res.status(200).json({ usuarios })
    } catch (error) {
        next(error)
    }
}




export const createController = async (req, res, next) => {
    try {
        const { body } = req;
        const usuario = await userService.createUser(body);
        res.status(200).json({ usuario })
    } catch (error) {
        next(error)
    }
}


