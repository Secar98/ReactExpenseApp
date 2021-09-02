import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
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

  const submitHandler = (event) => {
    event.preventDefault();
    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
    };

    fetch("https://sebastian-expenses-backend.herokuapp.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.msg);
        if (!data.token) {
          setErrors(data.msg);
        }
        if (data.token) {
          setToken(data.token);
          history.push("/Home");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form_control}>
        {errors && <h1>{errors}</h1>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          id="email"
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          id="current-password"
          onChange={passwordChangeHandler}
        />
        <h2>
          Don't have an account<Link to="/Signup"> Signup Here</Link>
        </h2>
        <button onClick={submitHandler}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
