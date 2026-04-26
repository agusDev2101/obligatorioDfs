import categoryRepository from "../server/v1/repositories/category.repository.js";

const validateAdmin = (user) => {
  if (user.role !== "admin") {
    const error = new Error(
      "Solo los administradores pueden realizar esta acción",
    );
    error.status = 403;
    throw error;
  }
};

export const createCategory = async (data, user) => {
  validateAdmin(user);

  const existingCategory = await categoryRepository.findByName(data.name);

  if (existingCategory) {
    const error = new Error("Ya existe una categoría con ese nombre");
    error.status = 400;
    throw error;
  }

  return await categoryRepository.create(data);
};

export const getAllCategories = async () => {
  return await categoryRepository.getAll();
};

export const findCategoryById = async (id) => {
  const category = await categoryRepository.findById(id);

  if (!category || category.active === false) {
    const error = new Error("Categoría no encontrada");
    error.status = 404;
    throw error;
  }

  return category;
};

export const putCategory = async (id, data, user) => {
  validateAdmin(user);

  await findCategoryById(id);

  const updatedCategory = await categoryRepository.put(id, {
    ...data,
    active: true,
  });

  return updatedCategory;
};

export const patchCategory = async (id, data, user) => {
  validateAdmin(user);

  await findCategoryById(id);

  return await categoryRepository.patch(id, data);
};

export const deleteCategory = async (id, user) => {
  validateAdmin(user);

  await findCategoryById(id);

  return await categoryRepository.delete(id);
};
