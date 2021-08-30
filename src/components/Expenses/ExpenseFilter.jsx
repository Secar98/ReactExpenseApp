import React from "react";

import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  const year = [currentYear + 1, currentYear, currentYear - 1];

  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter__control}>
        <label>Filtrera år</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value={year[0].toString()}>{year[0].toString()}</option>
          <option value={year[1].toString()}>{year[1].toString()}</option>
          <option value={year[2].toString()}>{year[2].toString()}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
