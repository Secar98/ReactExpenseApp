import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import styles from "./Expenses.module.css";

const Expenses = (props) => {
  const year = new Date().getFullYear().toString();
  const [filteredYear, setFilteredYear] = useState(year);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    const expenseDate = new Date(expense.date).getFullYear().toString();
    return expenseDate === filteredYear;
  });

  const onDeleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div>
      <Card className={styles.expenses}>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList onDelete={onDeleteHandler} items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
