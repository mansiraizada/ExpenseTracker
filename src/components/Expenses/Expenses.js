import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");

  const filterOptionHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredYearExpense = props.expenses.filter((filterYear) => {
    return filterYear.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        filteredYear={selectedYear}
        onFilter={filterOptionHandler}
      />
      <ExpensesChart expenses={filteredYearExpense} />
      <ExpenseList items={filteredYearExpense} />
    </Card>
  );
};

export default Expenses;
