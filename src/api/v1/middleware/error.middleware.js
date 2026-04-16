export const errorMiddleware = (err, req, res, next) => {
    if (err) {
        const status = err.status ?? 500;
        const message = err.message ?? "Error sin mensaje";
        return res.status(status).json({ message });
    }
    return res.status(500).json("Error desconocido");

}
