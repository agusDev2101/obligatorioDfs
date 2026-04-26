import {
  createReview,
  getAllReviews,
  findReviewById,
  deleteReview,
  patchReview,
  putReview,
} from "../../../services/review.service.js";
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
    const imageUrl = req.file ? await uploadImage(req.file) : null;

    const data = {
      ...body,
      ...(imageUrl ? { imageUrl } : {}),
    };

    const review = await createReview(data, user);
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
    const { user } = req;

    await deleteReview(id, user);

    res.status(200).json({ message: "Review eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};

export const putReviewByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req;

    const imageUrl = req.file ? await uploadImage(req.file) : null;

    const data = {
      ...req.body,
      ...(imageUrl ? { imageUrl } : {}),
    };

    const updatedReview = await putReview(id, data, user);

    res.status(200).json({ review: updatedReview });
  } catch (error) {
    next(error);
  }
};

export const patchReviewByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { user } = req;

    const imageUrl = req.file ? await uploadImage(req.file) : null;

    const data = {
      ...req.body,
      ...(imageUrl ? { imageUrl } : {}),
    };

    const updatedReview = await patchReview(id, data, user);

    res.status(200).json({ review: updatedReview });
  } catch (error) {
    next(error);
  }
};
