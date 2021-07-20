import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const App = () => {
  const currentYear = new Date().getFullYear();
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Playstation',
      amount: 5990,
      date: new Date(currentYear , 7, 14),
    },
    { id: 'e2', title: 'Ny säng', amount: 3995, date: new Date(currentYear, 2, 12) },
    {
      id: 'e3',
      title: 'Bil försäkring',
      amount: 567.96,
      date: new Date(currentYear, 0, 28),
    },
    {
      id: 'e4',
      title: 'Nytt bord (trä)',
      amount: 999.99,
      date: new Date(currentYear, 5, 12),
    },
    {
      id: 'e5',
      title: 'Drönare',
      amount: 9999.99,
      date: new Date(currentYear, 6, 12),
    },
  ]);
  
  const addExpenseHandler = (expense) => {
    // Good way of updating older state snapshot
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }

  return (
    <div>
      <Expenses onDelete={removeExpenseHandler} items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
