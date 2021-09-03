import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Signup } from "../../API/Auth";
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

  const onClickHandler = async (event) => {
    event.preventDefault();
    const credentials = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      password_confirm: enteredPasswordConfirm,
    };

    const data = await Signup(credentials);
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
      <form className={styles.form_control} onSubmit={onClickHandler}>
        {errors && <h1>{errors}</h1>}
        <label htmlFor="name">Namn:</label>
        <input required type="text" name="name" onChange={nameChangeHandler} />
        <label html="email">Email:</label>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          onChange={emailChangeHandler}
        />
        <label htmlFor="password">Lösenord:</label>
        <input
          required
          type="password"
          name="password"
          autoComplete="new-password"
          onChange={passwordChangeHandler}
        />
        <label htmlFor="password_confirm">Bekräfta Lösenord:</label>
        <input
          required
          type="password"
          name="password_confirm"
          autoComplete="new-password"
          onChange={passwordConfirmChangeHandler}
        />
        <h2>
          Har du redan ett konto <Link to="/Login">Logga in här!</Link>
        </h2>
        <input
          className={styles.form_control__submit}
          type="submit"
          value="Skapa konto"
        />
      </form>
    </div>
  );
}

export default SignupForm;
