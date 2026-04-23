import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createReviewController, deleteReviewByIdController, findReviewByIdController, getAllReviewsController } from "../controllers/review.controller.js";
import { validateCreateReview } from "../middleware/review.validate.middleware.js";

const v1ReviewsRoutes = Router();
v1ReviewsRoutes.use(authMiddleware);

v1ReviewsRoutes.post("/", validateCreateReview, createReviewController);
v1ReviewsRoutes.get("/", getAllReviewsController);
v1ReviewsRoutes.get("/:id", findReviewByIdController)
v1ReviewsRoutes.delete("/:id", deleteReviewByIdController)



export default v1ReviewsRoutes;






