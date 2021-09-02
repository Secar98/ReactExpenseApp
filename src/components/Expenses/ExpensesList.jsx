import React from "react";

import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className={styles.expenses_list__fallback}>Inga utgifter hittade</h2>
    );
  }

  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <ul className={styles.expenses_list}>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense._id}
          id={expense._id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDelete={onDeleteHandler}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
