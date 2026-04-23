import Joi from "joi";

export const createReviewSchema = Joi.object({
    movieTitle: Joi.string().min(3).required(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().max(200),
    categoryId: Joi.string().hex().length(24),
    imageUrl: Joi.string().uri()
});