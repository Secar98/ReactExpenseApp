import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const onClickHandler = (event) => {
    const id = event.target.value;
    props.onDelete(id);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} Kr</div>
        <button
          onClick={onClickHandler}
          value={props.id}
          className="expense-item__button"
        >
          Ta bort
        </button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
