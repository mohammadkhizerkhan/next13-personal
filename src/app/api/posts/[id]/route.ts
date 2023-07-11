import Post from "@/models/posts";
import { connectMongoose } from "@/utils/mongo";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connectMongoose();
    const post = await Post.findById(params.id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    console.log("=======>posts", error);
    return new NextResponse("get is working", { status: 500 });
  }
};
