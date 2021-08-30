import React, { useState } from "react";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form_control}>
        <label for="email">Email:</label>
        <input type="email" name="email" />
        <label for="password">Password:</label>
        <input type="password" name="password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
