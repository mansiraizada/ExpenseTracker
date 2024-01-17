import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const saveNewExpense = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onAddNewExpense(expenseData);
    setIsClicked(false);
  };

  const addExpenseHandler = () => {
    setIsClicked(true);
  };

  const cancelHandler = () => {
    setIsClicked(false);
  };

  return (
    <div className="new-expense">
      {isClicked === true ? (
        <ExpenseForm
          onSaveNewExpense={saveNewExpense}
          onCancel={cancelHandler}
        />
      ) : (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
