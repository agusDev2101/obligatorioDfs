import { User } from "../models/mongo/user.mongo.model.js";

const userRepository = {
    getAll: async () => {
        const usuarios = await User.find();
        return usuarios;
    },
    //en data suponemos viene el email
    findByEmail: async (data) => {
        const usuario = await User.findOne({ email: data });
        return usuario;
    },
    //se supone que el data trae todos los campos del usuario
    create: async (data) => {
        const usuario = await User.create(data);
        return usuario;
    },
    findByEmailOrUsername: async (field) => {
        const usuario = await User.findOne({
            $or: [
                { email: field },
                { username: field }
            ]
        }
        )
        return usuario;
    },
    findByFilter: async (filter) => {
        const usuario = await User.findOne(filter);
        return usuario;
    },
}

export default userRepository



