import { connectMongoose } from "@/utils/mongo";
import User from "@/models/users";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const { name, email, password } = await request.json();
  await connectMongoose();
  const hasherPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hasherPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("new user created", { status: 201 });
  } catch (error) {
    console.log("==============----------->", error);
    return new NextResponse("error in creating user", {
      status: 500,
      error: error.message,
    });
  }
}
