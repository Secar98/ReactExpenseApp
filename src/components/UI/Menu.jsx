import React from "react";

import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <div>
      <ul className={styles.ul__menu}>
        <li className={styles.li__item}>
          <Link to="/Home">Home</Link>
        </li>
        <li className={styles.li__item}>
          <Link to="/Login">Login</Link>
        </li>
        <li className={styles.li__item}>
          <Link to="/Signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};
