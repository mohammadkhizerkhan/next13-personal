import mongoose from "mongoose";

const connectMongoose = async () => {
  try {
    await mongoose.connect(process?.env?.MONGO);
  } catch (error) {
    console.log("=========>mongoose", error);
  }
};

export { connectMongoose };
