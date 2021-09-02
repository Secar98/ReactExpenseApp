import React, { useState, useContext, useEffect } from "react";
import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import { JwtContext } from "../context/JwtContext";

export const HomePage = () => {
  const [expenses, setExpenses] = useState([]);
  const { token } = useContext(JwtContext);

  useEffect(() => {
    fetchExpenses(token);
  }, [token]);

  const fetchExpenses = (token) => {
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

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (id) => {
    fetch(
      "https://sebastian-expenses-backend.herokuapp.com/api/expense/delete",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: id,
      }
    );
  };
  return (
    <div>
      {expenses && (
        <Expenses onDelete={removeExpenseHandler} items={expenses} />
      )}
      {expenses && <NewExpense onAddExpense={addExpenseHandler} />}
    </div>
  );
};
