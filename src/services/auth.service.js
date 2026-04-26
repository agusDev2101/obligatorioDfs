import bcrypt from "bcrypt";
import userRepository from "../server/v1/repositories/user.repository.js";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      plan: user.plan,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
};

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

  const createdUser = await userRepository.create(userToCreate);

  const token = generateToken(createdUser);

  return {
    token,
    user: createdUser,
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await userRepository.findAuthUserByEmail(email);

  if (!user) {
    const error = new Error("Credenciales inválidas");
    error.status = 401;
    throw error;
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    const error = new Error("Credenciales inválidas");
    error.status = 401;
    throw error;
  }

  const { password: _, ...safeUser } = user;

  const token = generateToken(safeUser);

  return {
    token,
    user: safeUser,
  };
};
