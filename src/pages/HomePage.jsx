import React, { useState, useContext, useEffect } from "react";
import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import { JwtContext } from "../context/JwtContext";
import { RemoveExpense, AddExpense } from "../API/ExpenseFetches";

export const HomePage = () => {
  const [expenses, setExpenses] = useState([]);
  const { token } = useContext(JwtContext);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = () => {
    fetch("https://sebastian-expenses-backend.herokuapp.com/api/expense/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setExpenses(Object.values(data)[0]));
  };

  const addExpenseHandler = (body) => {
    AddExpense(body, token);
  };

  const removeExpenseHandler = (id) => {
    const body = { id: id };
    RemoveExpense(body, token);
  };

  fetchExpenses();

  return (
    <>
      {expenses && (
        <Expenses onDelete={removeExpenseHandler} items={expenses} />
      )}
      {expenses && <NewExpense onAddExpense={addExpenseHandler} />}
    </>
  );
};
