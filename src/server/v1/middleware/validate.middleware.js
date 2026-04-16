export const validate = (schema, campoAValidar) => {
    const salida = (req, res, next) => {
        const { error, value } = schema.validate(req[campoAValidar], { abortEarly: false });
        if (error) {
            console.log('error', error);
            const mensaje = error.details.map(e => e.message).join(", ");
            const miError = new Error(mensaje);
            return next(miError)
        }
        req[campoAValidar] = value;
        return next();
    }
    return salida;
}


