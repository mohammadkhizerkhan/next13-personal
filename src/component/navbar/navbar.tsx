import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { ThemeButton } from "..";

const Navbar = () => {
  const navLinks = ["HOME", "MENU", "ABOUT US", "CONTACT"];

  return (
    <nav className={`flex-row space-between ${styles.navbar}`}>
      <ul className={`flex-row space-between ${styles.navbar_lists}`}>
        <li>
          <Link href="/">LOGO</Link>
        </li>
        {navLinks.map((link, index) => {
          const navigate = `/${link.replace(/\s/g, "").toLowerCase()}`;
          return (
            <Link key={index} href={navigate} className={styles.navLink}>
              {link}
            </Link>
          );
        })}
        <ThemeButton />
        <input className="search_input" />
      </ul>
    </nav>
  );
};

export default Navbar;
