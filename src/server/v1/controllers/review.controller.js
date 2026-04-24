import { createReview, getAllReviews, findReviewById, deleteReview, patchReview, putReview } from "../../../services/review.service.js";
import { uploadImage } from "../utils/upload-image.js";

export const getAllReviewsController = async (req, res, next) => {
    try {
        const reviews = await getAllReviews();
        res.status(200).json({ reviews });
    } catch (error) {
        next(error);
    }
};

export const createReviewController = async (req, res, next) => {
    try {
        const { body, user } = req;
        const imageUrl = await uploadImage(req.file);
        const userId = user.id;

        const data = {
            ...body,
            userId,
            ...(imageUrl ? { imageUrl } : {}),
        };

        const review = await createReview(data);
        res.status(201).json({ review });
    } catch (error) {
        next(error);
    }
};

export const findReviewByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await findReviewById(id);

        if (!review) {
            return res.status(404).json({ message: "Review no encontrado" });
        }

        res.status(200).json({ review });
    } catch (error) {
        next(error);
    }
};

export const deleteReviewByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await findReviewById(id);

        if (!review) {
            return res.status(404).json({ message: "Review no encontrado" });
        }

        await deleteReview(id);
        res.status(200).json({ message: "Review eliminado correctamente" });
    } catch (error) {
        next(error);
    }
};

export const putReviewByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await findReviewById(id);

        if (!review) {
            return res.status(404).json({ message: "Review no encontrada" });
        }

        const imageUrl = await uploadImage(req.file);

        const data = {
            ...req.body,
            userId: review.userId,
            ...(imageUrl ? { imageUrl } : {}),
        };

        const updatedReview = await putReview(id, data);
        res.status(200).json({ review: updatedReview });
    } catch (error) {
        next(error);
    }
};

export const patchReviewByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await findReviewById(id);

        const imageUrl = req.file ? await uploadImage(req.file) : null;
        const data = {
            ...req.body,
            ...(imageUrl ? { imageUrl } : {}),
        };

        const updatedReview = await patchReview(id, data);
        res.status(200).json({ review: updatedReview });
    } catch (error) {
        next(error);
    }
};
