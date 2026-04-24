import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/user.services.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();

    res.status(200).json({
      ok: true,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
    });
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await getUserById(id);

    res.status(200).json({
      ok: true,
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      ok: false,
      message: error.message,
    });
  }
};

export const createUserController = async (req, res) => {
  try {
    const newUser = await createUser(req.body);

    res.status(201).json({
      ok: true,
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error.message,
    });
  }
};

export const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await updateUser(id, req.body);

    res.status(200).json({
      ok: true,
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error.message,
    });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUser(id);

    res.status(200).json({
      ok: true,
      data: deletedUser,
    });
  } catch (error) {
    res.status(404).json({
      ok: false,
      message: error.message,
    });
  }
};
