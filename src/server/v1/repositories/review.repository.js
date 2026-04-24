import { Review } from "../models/mongo/review.mongo.model.js";



const reviewRepository = {
    getAll: async () => {
        const reviews = await Review.find().populate("userId", "firstName lastName email");
        return reviews;
    },
    create: async (data) => {
        const review = await Review.create(data);
        return review;
    },
    //data es el id del review a buscar
    findById: async (data) => {
        const review = await Review.findById(data);
        return review;
    },
    delete: async (data) => {
        const review = await Review.findByIdAndDelete(data);
        return review;
    },
    put: async (id, data) => {
        const review = await Review.findOneAndReplace({ _id: id }, data, { new: true, runValidators: true });
        return review;
    },
    patch: async (id, data) => {
        const review = await Review.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        return review;
    }
}

export default reviewRepository
