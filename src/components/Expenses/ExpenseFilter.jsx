import React from "react";

import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  const filterYears = [
    currentYear,
    currentYear - 1,
    currentYear - 2,
    currentYear - 3,
  ];

  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter__control}>
        <label>Filtrera år</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {filterYears.map((year, index) => {
            return (
              <option key={index} value={year.toString()}>
                {year.toString()}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
