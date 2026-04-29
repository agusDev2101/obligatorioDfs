
import cloudinary from "../../../config/cloudinary.config.js";

export const uploadImage = async (file) => {
  if (!file) return null;

  const dataUri = `data:${file.mimetype};base64,${file.buffer.toString("base64")}`;
  const result = await cloudinary.uploader.upload(dataUri, {
    folder: "reviews",
  });

  return result.secure_url;
};