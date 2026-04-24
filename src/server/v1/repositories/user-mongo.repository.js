import { UsuarioModel } from "../models/mongo/users.model.mongo.js";

const mapToDomain = (user) => {
  if (!user) return null;

  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    role: user.role,
    plan: user.plan,
    active: user.active,
  };
};

const userMongoRepository = {
  findAll: async () => {
    const users = await UsuarioModel.find().lean();
    return users.map(mapToDomain);
  },

  findById: async (id) => {
    const user = await UsuarioModel.findById(id).lean();
    return mapToDomain(user);
  },

  findByEmail: async (email) => {
    const user = await UsuarioModel.findOne({ email }).lean();
    return mapToDomain(user);
  },

  findByUsername: async (username) => {
    const user = await UsuarioModel.findOne({ username }).lean();
    return mapToDomain(user);
  },

  ///Metodo específico para autenticación, devuelve también el password
  findAuthUserByEmail: async (email) => {
    const user = await UsuarioModel.findOne({ email }).lean();

    if (!user) return null;

    return {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
      plan: user.plan,
      active: user.active,
    };
  },

  create: async (data) => {
    const user = await UsuarioModel.create(data);
    return mapToDomain(user.toObject());
  },

  updateById: async (id, data) => {
    const user = await UsuarioModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, lean: true },
    );

    return mapToDomain(user);
  },

  deleteById: async (id) => {
    const user = await UsuarioModel.findByIdAndDelete(id).lean();
    return mapToDomain(user);
  },

  existsByEmail: async (email) => {
    const exists = await UsuarioModel.exists({ email });
    return Boolean(exists);
  },

  existsByUsername: async (username) => {
    const exists = await UsuarioModel.exists({ username });
    return Boolean(exists);
  },
};

export default userMongoRepository;
