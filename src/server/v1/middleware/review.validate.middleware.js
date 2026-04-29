import { createReviewSchema, patchReviewSchema, putReviewSchema } from "../../../schemas/review.schema.js";
import { validate } from "./validate.middleware.js";



export const validateCreateReview = validate(createReviewSchema, "body");
export const validatePutReview = validate(putReviewSchema, "body");
export const validatePatchReview = validate(patchReviewSchema, "body");

