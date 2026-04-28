import userRepository from "../server/v1/repositories/user.repository.js";

export const getUsers = async () => {
  return await userRepository.findAll();
};

export const getUserById = async (id) => {
  const user = await userRepository.findById(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};

export const createUser = async (data) => {
  if (!data.nombre || !data.email) {
    throw new Error("Nombre y email son obligatorios");
  }
  const exists = await userRepository.existsByEmail(data.email);
  if (exists) {
    throw new Error("El email ya existe");
  }
  return await userRepository.create(data);
};

export const updateUser = async (id, data) => {
  const user = await userRepository.updateById(id, data);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};

export const deleteUser = async (id) => {
  const user = await userRepository.deleteById(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};

export const changeUserPlan = async (userFromToken, newPlan) => {
  const user = await userRepository.findById(userFromToken.id);

  if (!user) {
    const error = new Error("Usuario no encontrado");
    error.status = 404;
    throw error;
  }

  if (user.role !== "reviewer") {
    const error = new Error("Solo los reviewers pueden cambiar de plan");
    error.status = 403;
    throw error;
  }

  if (!["plus", "premium"].includes(newPlan)) {
    const error = new Error("Plan inválido");
    error.status = 400;
    throw error;
  }

  const updatedUser = await userRepository.updateById(user.id, {
    plan: newPlan,
  });

  return updatedUser;
};
