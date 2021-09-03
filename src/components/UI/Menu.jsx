import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { JwtContext } from "../../context/JwtContext";
import styles from "./Menu.module.css";

export const Menu = () => {
  const { token, setToken } = useContext(JwtContext);

  const onClickHandler = () => {
    setToken(null);
  };
  return (
    <div>
      <ul className={styles.ul__menu}>
        {token ? (
          <li className={styles.li__item}>
            <Link to="/Home">Hem</Link>
          </li>
        ) : (
          <></>
        )}
        {token ? (
          <li className={styles.li__item}>
            <Link onClick={onClickHandler} to="/Login">
              Logga ut
            </Link>
          </li>
        ) : (
          <></>
        )}
        {!token ? (
          <li className={styles.li__item}>
            <Link to="/Login">Logga in</Link>
          </li>
        ) : (
          <></>
        )}
        {!token ? (
          <li className={styles.li__item}>
            <Link to="/Signup">Skapa konto</Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};
