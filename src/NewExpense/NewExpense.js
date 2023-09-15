import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDataHandller = (expenseData) =>{
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onSaveExpenseItem(expense)
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensedata={saveExpenseDataHandller}/>
    </div>
  );
};
export default NewExpense;
