import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://prathamesh910:3zstjmzJZyLN7M9a@cluster0.ulbb0rk.mongodb.net/mealdash",
    )
    .then(() => console.log("DB Connected..."));
};
