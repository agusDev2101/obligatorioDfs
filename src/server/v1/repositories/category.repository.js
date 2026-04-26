import { Category } from "../models/mongo/category.mongo.model.js";

const categoryRepository = {
  create: async (data) => {
    return await Category.create(data);
  },

  getAll: async () => {
    return await Category.find({ active: true });
  },

  findById: async (id) => {
    return await Category.findById(id);
  },

  findByName: async (name) => {
    return await Category.findOne({ name });
  },

  put: async (id, data) => {
    return await Category.findOneAndReplace({ _id: id }, data, {
      new: true,
      runValidators: true,
    });
  },

  patch: async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  },

  delete: async (id) => {
    return await Category.findByIdAndUpdate(
      id,
      { active: false },
      { new: true },
    );
  },
};

export default categoryRepository;
