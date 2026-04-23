export const rutaNoEncontradaMiddleware = (req, res) => {
  res.status(404).json({
    ok: false,
    message: "Ruta no encontrada",
  });
};
