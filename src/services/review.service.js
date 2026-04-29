import reviewRepository from "../server/v1/repositories/review.repository.js";
import userRepository from "../server/v1/repositories/user.repository.js";
import categoryRepository from "../server/v1/repositories/category.repository.js";

export const createReview = async (data, userFromToken) => {
  const user = await userRepository.findById(userFromToken.id);

  if (!user) {
    const error = new Error("Usuario no encontrado");
    error.status = 404;
    throw error;
  }

  if (user.role !== "reviewer") {
    const error = new Error("Solo los reviewers pueden crear reseñas");
    error.status = 403;
    throw error;
  }

  if (user.plan === "plus") {
    const reviewsCount = await reviewRepository.countByUser(user.id);

    if (reviewsCount >= 4) {
      const error = new Error("Límite de reseñas alcanzado para el plan plus");
      error.status = 403;
      throw error;
    }
  }

  if (data.categoryId) {
    const category = await categoryRepository.findById(data.categoryId);

    if (!category || category.active === false) {
      const error = new Error("Categoría inválida");
      error.status = 400;
      throw error;
    }
  }
  const review = await reviewRepository.create({
    ...data,
    userId: user.id,
  });

  return review;
};

export const getAllReviews = async () => {
  const reviews = await reviewRepository.getAll();
  return reviews;
};

export const findReviewById = async (id) => {
  const review = await reviewRepository.findById(id);
  return review;
};

const validateReviewPermission = async (reviewId, userFromToken) => {
  const review = await reviewRepository.findById(reviewId);

  if (!review) {
    const error = new Error("Review no encontrada");
    error.status = 404;
    throw error;
  }

  const user = await userRepository.findById(userFromToken.id);

  if (!user) {
    const error = new Error("Usuario no encontrado");
    error.status = 404;
    throw error;
  }

  const isOwner = review.userId.toString() === user.id;
  const isAdmin = user.role === "admin";

  if (!isOwner && !isAdmin) {
    const error = new Error("No tenés permiso para modificar esta review");
    error.status = 403;
    throw error;
  }

  return review;
};

export const putReview = async (id, data, userFromToken) => {
  const review = await validateReviewPermission(id, userFromToken);
  if (data.categoryId) {
    const category = await categoryRepository.findById(data.categoryId);

    if (!category || category.active === false) {
      const error = new Error("Categoría inválida");
      error.status = 400;
      throw error;
    }
  }

  const updatedReview = await reviewRepository.put(id, {
    ...data,
    userId: review.userId,
  });

  return updatedReview;
};

export const patchReview = async (id, data, userFromToken) => {
  await validateReviewPermission(id, userFromToken);
  if (data.categoryId) {
    const category = await categoryRepository.findById(data.categoryId);

    if (!category || category.active === false) {
      const error = new Error("Categoría inválida");
      error.status = 400;
      throw error;
    }
  }

  const updatedReview = await reviewRepository.patch(id, data);

  return updatedReview;
};

export const deleteReview = async (id, userFromToken) => {
  await validateReviewPermission(id, userFromToken);

  return await reviewRepository.delete(id);
};
