import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { User } from "../../../interfaces/main";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Menu = async () => {
  const data = await getData();
  return (
    <div>
      <h2>Menu page</h2>
      <ul className="flex-column">
        {data.map((user: User) => {
          return (
            <li key={user.id} className={styles.item}>
              <Link href={`/menu/${user.id}`} className={styles.userTitle}>
                {user.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
