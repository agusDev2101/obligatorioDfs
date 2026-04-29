import Joi from "joi";

export const registerBodySchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(30).required(),
  role: Joi.string().valid("admin", "reviewer").required(),
});

export const loginBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
