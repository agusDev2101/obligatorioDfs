import redisClient from "../config/redis.config.js";
import { keyAllUser } from "../config/redis.const.js";
import userRepository from "../repositories/user.repository.js";



export const getAllUser = async () => {

    let usuarios;
    try {
        const resultadoRedis = await redisClient.get(keyAllUser);
        console.log('resultadoRedis', resultadoRedis);

        usuarios = JSON.parse(resultadoRedis);
    } catch (error) {
        console.error('Hubo un error en redis', error)
    }
    if (usuarios) {
        console.log('Encontro en redis')
        //se pregunta si se tiene en redis la lista en caso afirmativo se la devuelve 
        return usuarios;
    } else {
        //en caso de que no este la lista en redis se la busca a la base y se la guarda en redis
        const usuariosDeBase = await userRepository.getAll();
        try {
            if (usuariosDeBase) {
                await redisClient.set(keyAllUser, JSON.stringify(usuariosDeBase));
            }
        } catch (error) {
            console.error('Hubo un error en redis', error)
        }
        console.log('Lo busco en la base de datos');
        return usuariosDeBase;
    }
}


export const createUser = async (data) => {

    const { email } = data;
    //buscamos el usuario por email y si ya existe podriamos lanzar un error
    const usuarioExiste = await userRepository.findByEmail(email);
    if (usuarioExiste) {
        throw new Error("Existe otro usuario con el mismo email");
    }
    await redisClient.del(keyAllUser);
    return await userRepository.create(data);
}




