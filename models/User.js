// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    role: {
      type: String,

      default: "user",
    },
    image: {
      type: String, // Assuming you store the image URL as a string
    },
  },
  { timestamps: true }
);

export default mongoose.model.User || mongoose.model("User", userSchema);
