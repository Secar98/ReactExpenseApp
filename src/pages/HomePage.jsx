import React, { useState } from "react";
import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";

export const HomePage = () => {
  const currentYear = new Date().getFullYear();
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Playstation",
      amount: 5990,
      date: new Date(currentYear, 7, 14),
    },
  ]);
  const addExpenseHandler = (expense) => {
    // Good way of updating older state snapshot
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
  };
  return (
    <div>
      <Expenses onDelete={removeExpenseHandler} items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
};
