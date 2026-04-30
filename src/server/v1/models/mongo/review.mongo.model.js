import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    movieTitle: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    comment: { type: String, required: false, trim: true },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    imageUrl: { type: String, required: false }
}, { timestamps: true })



reviewSchema.set('toJSON', {
    //doc es el documento de mongoose y ret el elemento a devolver
    transform: (doc, ret) => {
        // renombrar _id → id
        ret.id = ret._id;

        // eliminar campos que no querés exponer
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
    }
});



export const Review = mongoose.model("Review", reviewSchema);