import reviewRepository from "../repositories/review.repository.js";

export const createReview = async (data) => {
    const review = await reviewRepository.create(data);
    return review;
}

export const getAllReviews = async () => {
    const reviews = await reviewRepository.getAll();
    return reviews;
}

export const findReviewById = async (id) => {
    const review = await reviewRepository.findById(id);
    return review;
}   

export const deleteReview = async (id) => {
    const review = await reviewRepository.delete(id);
    return review;
}