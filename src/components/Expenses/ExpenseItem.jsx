import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import styles from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const onClickHandler = (event) => {
    const id = event.target.value;
    props.onDelete(id);
  };

  return (
    <Card className={styles.expense_item}>
      <ExpenseDate date={props.date} />
      <div className={styles.expense_item__description}>
        <h2>{props.title}</h2>
        <div className={styles.expense_item__price}>{props.amount} Kr</div>
        <button
          onClick={onClickHandler}
          value={`${props.id}`}
          className={styles.expense_item__button}
        >
          Ta bort
        </button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
