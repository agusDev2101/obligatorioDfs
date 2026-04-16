const validateRol = (...roles) => {


    return (req, res, next) => {
        const { user } = req;
        const rolesUsuario = user.roles;

        if (rolesUsuario) {
            const tieneRoles = roles.includes(rolesUsuario);
            if (tieneRoles) {
                return next();
            }
        }
        const error = new Error("No tiene roles suficientes");
        error.status = 400;
        return next(error);
    }
}


validateRol("admin", "user");