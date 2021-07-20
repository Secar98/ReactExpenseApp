import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Inga utgifter hittade</h2>;
  }

  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
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
