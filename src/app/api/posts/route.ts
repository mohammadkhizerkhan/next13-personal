import Post from "@/models/posts";
import { connectMongoose } from "@/utils/mongo";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectMongoose();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.log("=======>posts", error);
    return new NextResponse("get is working", { status: 500 });
  }
};
