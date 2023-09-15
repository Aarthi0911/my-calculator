import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../ExpenseTracker/Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  const [filterValue, setFilterValue] = useState("All");
  const getFilteredValue = (value) => {
    setFilterValue(value);
  };
  const filteredArray =
    filterValue === "All"
      ? props.expenses
      : props.expenses.filter((value) => {
          return value.date.getFullYear().toString() === filterValue;
        });

  return (
    <Card className="expenses">
      <ExpenseChart expenses = {props.expenses}/>
      <ExpensesFilter
        selected={filterValue}
        onSendFilteredValue={getFilteredValue}
      />
      {filteredArray.length === 0
        ? <p className="expenseTitle">No data Found</p>
        : filteredArray.map((value, i) => {
            return (
              <ExpenseItem
                key={value.id}
                expenseDate={value.date}
                expenseTitle={value.title}
                expensePrice={value.amount}
              />
            );
          })}
    </Card>
  );
}
export default Expenses;
