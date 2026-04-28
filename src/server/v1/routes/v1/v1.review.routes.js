import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { createReviewController, deleteReviewByIdController, findReviewByIdController, getAllReviewsController, putReviewByIdController, patchReviewByIdController } from "../../controllers/review.controller.js";
import { validateCreateReview, validatePutReview} from "../../middleware/review.validate.middleware.js";
import { upload } from "../../middleware/upload.middleware.js";
import { limiter } from "../../middleware/rateLimiter.middleware.js";

const v1ReviewsRoutes = Router();

v1ReviewsRoutes.use(authMiddleware);

v1ReviewsRoutes.post("/", upload.single("image"), validateCreateReview, createReviewController);
v1ReviewsRoutes.get("/", getAllReviewsController);
v1ReviewsRoutes.get("/:id", findReviewByIdController)
v1ReviewsRoutes.delete("/:id", deleteReviewByIdController)
v1ReviewsRoutes.put("/:id", upload.single("image"), validatePutReview, putReviewByIdController)
v1ReviewsRoutes.patch("/:id", upload.single("image"), patchReviewByIdController)




export default v1ReviewsRoutes;






