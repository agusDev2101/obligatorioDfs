import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "reviewer"],
      required: true,
    },
    plan: {
      type: String,
      enum: ["plus", "premium"],
      default: function () {
        return this.role === "reviewer" ? "plus" : null;
      },
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.createdAt;
  delete obj.updatedAt;
  return obj;
};

export const UsuarioModel =
  mongoose.models.User || mongoose.model("User", userSchema);
