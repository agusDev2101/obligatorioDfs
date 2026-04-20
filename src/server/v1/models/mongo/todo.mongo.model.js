import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    completed: { type: Boolean, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    imageUrl: { type: String, required: false }
}, { timestamps: true })



todoSchema.set('toJSON', {
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



export const Todo = mongoose.model("Todo", todoSchema);