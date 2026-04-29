import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const error = new Error("Error al autenticar");
    error.status = 401;

    const auth = req.headers.authorization;

    if (!auth) {
      return next(error);
    }

    const elementos = auth.split(" ");

    const vieneBearer = elementos[0] === "Bearer";
    if (!vieneBearer) {
      return next(error);
    }

    const token = elementos[1];

    if (!token) {
      return next(error);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    error.status = 401;
    error.message = "Token inválido o expirado";
    next(error);
  }
};
