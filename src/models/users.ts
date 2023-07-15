import mongoose from "mongoose";

const { Schema } = mongoose;

const userShema = new Schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const user = mongoose.models?.User || mongoose.model("User", userShema);

export default user;

