import React, { useState } from "react";

import styles from "./SignupForm.module.css";

function SignupForm() {
  return (
    <div className={styles.container}>
      <form className={styles.form_control}>
        <label for="name">Name:</label>
        <input type="text" name="name" />
        <label for="email">Email:</label>
        <input type="email" name="email" />
        <label for="password">Password:</label>
        <input type="password" name="password" />
        <label for="password_confirm">Confirm Password:</label>
        <input type="password" name="password_confirm" />
        <button>Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
