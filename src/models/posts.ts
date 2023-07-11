import mongoose from "mongoose";

const { Schema } = mongoose;

const postShema = new Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const post = mongoose.models?.Post || mongoose.model("Post", postShema);

export default post;
