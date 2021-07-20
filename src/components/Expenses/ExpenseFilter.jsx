import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const currentYear = new Date().getFullYear();
  const year = [currentYear + 1, currentYear, currentYear - 1];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
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
