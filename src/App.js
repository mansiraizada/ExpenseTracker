import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2020, 1, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 98,
    date: new Date(2020, 8, 14),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2023, 2, 14),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 14),
  },
];

function App() {
  const [data, setData] = useState(Dummy_Expense);

  const addNewExpense = (newExpense) => {
    setData((prevState) => {
      return [newExpense, ...prevState];
    });
  };

  return (
    <>
      <NewExpense onAddNewExpense={addNewExpense} />
      <Expenses expenses={data} />;
    </>
  );
}

export default App;
