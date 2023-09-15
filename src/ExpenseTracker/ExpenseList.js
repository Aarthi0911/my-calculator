import "../ExpenseTracker/ExpenseList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div>
      {props.filteredArray.length === 0 ? (
        <p className="expenseTitle">No data Found</p>
      ) : (
        props.filteredArray.map((value, i) => {
          return (
            <ExpenseItem
              key={value.id}
              expenseDate={value.date}
              expenseTitle={value.title}
              expensePrice={value.amount}
            />
          );
        })
      )}
    </div>
  );
};

export default ExpenseList
