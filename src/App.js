import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const currentYear = new Date().getFullYear();
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 1.99,
    date: new Date(currentYear + 1 , 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799, date: new Date(currentYear - 1, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(currentYear, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(currentYear, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    // Good way of updating older state snapshot
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
