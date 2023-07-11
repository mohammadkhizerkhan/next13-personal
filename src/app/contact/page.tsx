import React from "react";
import styles from "./page.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.login_title}>Log in</h2>

      <form className={styles.login_title}>
        <div>
          <label htmlFor="name">Name </label>
          <input
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
            required
          />
        </div>

        <button className={`${styles.btn} ${styles.btn__form}`} value="Log in">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
