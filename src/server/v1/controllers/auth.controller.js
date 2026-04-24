import { registerUser } from "../../../services/auth.service.js";
import { loginUser } from "../../../services/auth.service.js";

export const registerController = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      ok: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const data = await loginUser(req.body);
    res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};
