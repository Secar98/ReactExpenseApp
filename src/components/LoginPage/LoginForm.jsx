import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LogginEmail } from "../../API/Auth";
import { JwtContext } from "../../context/JwtContext";

import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errors, setErrors] = useState("");

  const history = useHistory();
  const { setToken } = useContext(JwtContext);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
    };
    const data = await LogginEmail(credentials);
    if (!data.token) {
      setErrors(data.msg);
    }
    if (data.token) {
      setToken(data.token);
      history.push("/Home");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form_control} onSubmit={submitHandler}>
        {errors && <h1>{errors}</h1>}
        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={passwordChangeHandler}
        />
        <h2>
          Don't have an account <Link to="/Signup">Signup Here</Link>
        </h2>
        <input
          className={styles.form_control__submit}
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
