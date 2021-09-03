import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LogginEmail } from "../../API/Auth";
import { JwtContext } from "../../context/JwtContext";

import styles from "./GuestForm.module.css";

const GuestForm = () => {
  const { setToken } = useContext(JwtContext);

  const history = useHistory();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    const credentials = {
      email: email,
      password: password,
    };
    const data = await LogginEmail(credentials);
    if (data.token) {
      setToken(data.token);
      history.push("/Home");
    }
  };
  return (
    <>
      <form className={styles.form_control} onSubmit={onSubmitHandler}>
        <input type="hidden" name="email" value="guest@gmail.com" />
        <input type="hidden" name="password" value="123456" />
        <input
          className={styles.form_control__submit}
          type="submit"
          value="Fortsätt som gäst"
        />
      </form>
    </>
  );
};

export default GuestForm;
