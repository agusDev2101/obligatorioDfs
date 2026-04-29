import { Review } from "../models/mongo/review.mongo.model.js";

const reviewRepository = {
  getAll: async () => {
    const reviews = await Review.find().populate(
      "userId",
      "username email role plan",
    );

    return reviews;
  },

  create: async (data) => {
    const review = await Review.create(data);
    return review;
  },

  findById: async (id) => {
    const review = await Review.findById(id);
    return review;
  },

  delete: async (id) => {
    const review = await Review.findByIdAndDelete(id);
    return review;
  },

  put: async (id, data) => {
    const review = await Review.findOneAndReplace({ _id: id }, data, {
      new: true,
      runValidators: true,
    });

    return review;
  },

  patch: async (id, data) => {
    const review = await Review.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    return review;
  },

  countByUser: async (userId) => {
    return await Review.countDocuments({ userId });
  },
};

export default reviewRepository;
