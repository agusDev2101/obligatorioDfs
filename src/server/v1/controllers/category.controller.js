import {
  createCategory,
  getAllCategories,
  findCategoryById,
  putCategory,
  patchCategory,
  deleteCategory,
} from "../../../services/category.service.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const category = await createCategory(req.body, req.user);
    res.status(201).json({ category });
  } catch (error) {
    next(error);
  }
};

export const getAllCategoriesController = async (req, res, next) => {
  try {
    const categories = await getAllCategories();
    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

export const findCategoryByIdController = async (req, res, next) => {
  try {
    const category = await findCategoryById(req.params.id);
    res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
};

export const putCategoryController = async (req, res, next) => {
  try {
    const category = await putCategory(req.params.id, req.body, req.user);
    res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
};

export const patchCategoryController = async (req, res, next) => {
  try {
    const category = await patchCategory(req.params.id, req.body, req.user);
    res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
};

export const deleteCategoryController = async (req, res, next) => {
  try {
    await deleteCategory(req.params.id, req.user);
    res.status(200).json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    next(error);
  }
};
