import { redirect } from "next/navigation";
import Link from "next/link";
import { TodoItem } from "../component";
import { prisma } from "./db";
import styles from "./page.module.css";

export async function getTodos() {
  return prisma.todo.findMany();
}

export async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({
    where: { id: id },
    data: { complete },
  });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Main Page</h1>
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              name={todo.name}
              id={todo.id}
              checkCallback={toggleTodo}
              completed={todo.complete}
            />
          ))}
          <Link href="/home" className="btn__form">
            create todo
          </Link>
        </div>
      </div>
    </main>
  );
}
