import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 14,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        ok: false,
        message: "Demasiadas solicitudes, por favor intenta nuevamente más tarde."
    }
});