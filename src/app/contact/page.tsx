"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('api/auth/register',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
      console.log("------------>account has been created", response);
    } catch (error) {
      console.log("error while creating user", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.login_title}>Log in</h2>
      <button
        className={`${styles.btn} ${styles.btn__form}`}
        value="Log in"
        onClick={() => signIn("github")}
      >
        github Log in
      </button>
      <form className={styles.login_title}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            onChange={(e) => handleInputChange(e)}
            id="name"
            type="text"
            placeholder="Eren Buruk"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            type="email"
            placeholder="me@example.com"
            name="email"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            id="password"
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>

        <button
          className={`${styles.btn} ${styles.btn__form}`}
          value="Log in"
          onClick={(e) => handleRegister(e)}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
