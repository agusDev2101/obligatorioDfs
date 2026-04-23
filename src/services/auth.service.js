import bcrypt from "bcrypt";
import userRepository from "../repository/users/user.repository.js";

export const registerUser = async (user) => {
  const { email, username, password, role } = user;

  const emailExists = await userRepository.existsByEmail(email);
  if (emailExists) {
    const error = new Error("Ya existe un usuario con ese email");
    error.status = 400;
    throw error;
  }

  const usernameExists = await userRepository.existsByUsername(username);
  if (usernameExists) {
    const error = new Error("Ya existe un usuario con ese username");
    error.status = 400;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userToCreate = {
    username,
    email,
    password: hashedPassword,
    role,
    ...(role === "reviewer" ? { plan: "plus" } : { plan: null }),
  };

  return await userRepository.create(userToCreate);
};
