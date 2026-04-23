import { createReviewSchema } from "../schemas/review.schema.js";
import { validate } from "./validate.middleware.js";



export const validateCreateReview = validate(createReviewSchema, "body");

