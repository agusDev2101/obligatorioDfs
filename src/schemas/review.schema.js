import Joi from "joi";

export const createReviewSchema = Joi.object({
    movieTitle: Joi.string().min(3).required(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().max(200),
    categoryId: Joi.string().hex().length(24),
    imageUrl: Joi.string().uri()
});

export const putReviewSchema = Joi.object({
  movieTitle: Joi.string().min(3).required(),
  rating: Joi.number().min(1).max(5).required(),
  comment: Joi.string().max(200).optional(),
  categoryId: Joi.string().hex().length(24).optional(),
  imageUrl: Joi.string().uri().optional(),
});

export const patchReviewSchema = Joi.object({
  movieTitle: Joi.string().min(3),
  rating: Joi.number().min(1).max(5),
  comment: Joi.string().max(200),
  categoryId: Joi.string().hex().length(24),
  imageUrl: Joi.string().uri(),
}).min(1);