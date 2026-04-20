import { User } from "../models/mongo/user.mongo.model.js";

const userRepository = {
    getAll: async () => {
        const usuarios = await User.find();
        return usuarios;
    },


    getAllPaginated: async (page, limit) => {
        const skip = (page - 1) * limit;
        const usuarios = await User.find().skip(skip).limit(limit);
        return usuarios;
    },

    // user?page=2&limit=10

    // const  {page, limit} = req.query 




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



