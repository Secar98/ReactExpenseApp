import React, { useState, useContext, useEffect } from "react";
import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import { JwtContext } from "../context/JwtContext";
import { AddExpense, RemoveExpense } from "../API/ExpenseFetches";

export const HomePage = () => {
  const [expenses, setExpenses] = useState([]);
  const { token } = useContext(JwtContext);

  const addExpenseHandler = async (body) => {
    const newId = await AddExpense(body, token);
    body._id = newId;
    setExpenses((prevExpenses) => {
      return [body, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (id) => {
    const body = { id: id };
    RemoveExpense(body, token);
    const newExpenses = expenses.filter((expense) => expense._id !== id);
    setExpenses(newExpenses);
  };
  useEffect(() => {
    fetch("https://sebastian-expenses-backend.herokuapp.com/api/expense/get", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setExpenses(Object.values(data)[0]));
  }, [setExpenses, token]);

  return (
    <>
      {expenses && (
        <Expenses onDelete={removeExpenseHandler} items={expenses} />
      )}
      {expenses && <NewExpense onAddExpense={addExpenseHandler} />}
    </>
  );
};
