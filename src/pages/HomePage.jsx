import React, { useState, useContext, useEffect } from "react";
import NewExpense from "../components/NewExpense/NewExpense";
import Expenses from "../components/Expenses/Expenses";
import { JwtContext } from "../context/JwtContext";
import {
  AddExpense,
  FetchExpenses,
  RemoveExpense,
} from "../API/ExpenseFetches";

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
    const getExpenses = async () => {
      const fetchedExpenses = await FetchExpenses(token);
      setExpenses(fetchedExpenses);
    };
    getExpenses();
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
