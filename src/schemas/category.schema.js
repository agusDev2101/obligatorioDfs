import Joi from "joi";

export const createCategorySchema = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  description: Joi.string().max(200).optional(),
});

export const putCategorySchema = Joi.object({
  name: Joi.string().min(2).max(40).required(),
  description: Joi.string().max(200).optional(),
});

export const patchCategorySchema = Joi.object({
  name: Joi.string().min(2).max(40).optional(),
  description: Joi.string().max(200).optional(),
}).min(1);
