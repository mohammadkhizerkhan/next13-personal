import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";
import { prisma } from "../db";

export async function submitTodo(data: FormData) {
  "use server";
  const name = data.get("todoInput")?.valueOf();
  if (!!name && typeof name === "string") {
    await prisma.todo.create({ data: { name: name, complete: false } });
  }
  redirect("/");
}

const Home = () => {
  return (
    <>
      <form action={submitTodo}>
        <input placeholder="enter todo here" type="text" name="todoInput" />
        <div>
          <Link href="/">go to home</Link>
          <button type="submit" className="btn">
            submit todo
          </button>
        </div>
      </form>
    </>
  );
};

export default Home;
