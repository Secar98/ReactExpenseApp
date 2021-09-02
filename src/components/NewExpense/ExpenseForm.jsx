import React, { useState } from "react";

import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const currentYear = new Date().getFullYear();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.new_expense__controls}>
        <div className={styles.new_expense__control}>
          <label>Titel</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.new_expense__control}>
          <label>Pris</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.new_expense__control}>
          <label>Datum</label>
          <input
            type="date"
            min={`${currentYear - 3}-01-01`}
            max={`${currentYear + 1}-12-31`}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.new_expense__actions}>
        <button type="submit">Lägg till utgift</button>
        <button type="button" onClick={props.onCancel}>
          Stäng
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
