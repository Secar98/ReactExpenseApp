import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { JwtContext } from "../../context/JwtContext";

import styles from "./SignupForm.module.css";

function SignupForm() {
  const [errors, setErrors] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordConfirm, setEnteredPasswordConfirmed] = useState("");

  const history = useHistory();
  const { setToken } = useContext(JwtContext);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const passwordConfirmChangeHandler = (event) => {
    setEnteredPasswordConfirmed(event.target.value);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    const credentials = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      password_confirm: enteredPasswordConfirm,
    };

    fetch("https://sebastian-expenses-backend.herokuapp.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
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
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={nameChangeHandler} />
        <label html="email">Email:</label>
        <input
          type="email"
          name="email"
          autoComplete="email"
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={passwordChangeHandler}
        />
        <label htmlFor="password_confirm">Confirm Password:</label>
        <input
          type="password"
          name="password_confirm"
          autoComplete="new-password"
          onChange={passwordConfirmChangeHandler}
        />
        <h2>
          Already have an account<Link to="/Login"> Login Here</Link>
        </h2>
        <button onClick={onClickHandler}>Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
