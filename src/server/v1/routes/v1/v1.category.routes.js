import { Router } from "express";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { validate } from "../../middleware/validate.middleware.js";
import {
  createCategorySchema,
  putCategorySchema,
  patchCategorySchema,
} from "../../../../schemas/category.schema.js";

import {
  createCategoryController,
  getAllCategoriesController,
  findCategoryByIdController,
  putCategoryController,
  patchCategoryController,
  deleteCategoryController,
} from "../../controllers/category.controller.js";

const v1CategoryRoutes = Router();

v1CategoryRoutes.use(authMiddleware);

v1CategoryRoutes.post(
  "/",
  validate(createCategorySchema, "body"),
  createCategoryController,
);
v1CategoryRoutes.get("/", getAllCategoriesController);
v1CategoryRoutes.get("/:id", findCategoryByIdController);
v1CategoryRoutes.put(
  "/:id",
  validate(putCategorySchema, "body"),
  putCategoryController,
);
v1CategoryRoutes.patch(
  "/:id",
  validate(patchCategorySchema, "body"),
  patchCategoryController,
);
v1CategoryRoutes.delete("/:id", deleteCategoryController);

export default v1CategoryRoutes;
