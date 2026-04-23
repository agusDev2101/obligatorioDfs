import { createReview, getAllReviews, findReviewById, deleteReview } from "../services/review.service.js";


export const getAllReviewsController = async (req, res, next) => {
    try {
        const reviews = await getAllReviews();
        res.status(200).json({ reviews })
    } catch (error) {
        next(error)
    }
}

export const createReviewController = async (req, res, next) => {
    try {
        //al tener que estar logueado tenemos el token y tenemos el usuario entonces podesmos acceder a la info del usuario desde el req.user
        const { body, user } = req;
        const userId = user.userId; //esto es lo que me da el token, el id del usuario logueado
        const data = { ...body, userId } //esto es lo que le voy a pasar al servicio para crear el review, el body con la info del review y el userId para relacionarlo con el usuario logueado
        const review = await createReview(data);
        res.status(201).json({ review })
    } catch (error) {
        next(error)
    }
}

export const findReviewByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await findReviewById(id);
        if (!review) {
            return res.status(404).json({ message: "Review no encontrado"  })
        }
        res.status(200).json({ review });
    } catch (error) {
        next(error);
    }
} 

export const deleteReviewByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await findReviewById(id);
        if (!review) {
            return res.status(404).json({ message: "Review no encontrado" })
        }
        await deleteReview(id);
        res.status(200).json({ message: "Review eliminado correctamente" })
    } catch (error) {
        next(error);
    }
} 
