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
    }
}

export default reviewRepository
