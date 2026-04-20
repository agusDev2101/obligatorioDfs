import Joi from "joi";




export const createTodoSchema = Joi.object({
    title: Joi.string().min(3).required(),
    imageUrl: Joi.string().uri(),
    completed: Joi.boolean().default(false)
});