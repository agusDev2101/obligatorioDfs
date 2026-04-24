export const validate = (schema, field) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[field], {
      abortEarly: false,
    });

    if (error) {
      error.status = 400;
      error.publicMessage = "Datos inválidos";
      error.errors = error.details.map((e) => ({
        field: e.path.join("."),
        message: e.message,
      }));
      return next(error);
    }

    req[field] = value;
    next();
  };
};
