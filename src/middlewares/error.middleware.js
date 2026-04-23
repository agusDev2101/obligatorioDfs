export const errorMiddleware = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(err.status || 400).json({
      ok: false,
      message: err.publicMessage || "Datos inválidos",
      errors:
        err.errors ||
        err.details?.map((detail) => ({
          field: detail.path.join("."),
          message: detail.message,
        })) ||
        [],
    });
  }

  return res.status(err.status || 500).json({
    ok: false,
    message: err.message || "Error interno del servidor",
  });
};
