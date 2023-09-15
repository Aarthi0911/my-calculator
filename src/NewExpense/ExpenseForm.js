import React, { useState } from "react";
import "../NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputValue, setInputValue] = useState({
    titleChange: "",
    amountChange: "",
    dateChange: "",
  });
  
  const [onClick, setOnClick] = useState(0);
  const handleClick = (event) => {
    setOnClick(1);
    event.preventDefault();
  };
  const handleCancel = (event) =>{
    setOnClick(0);
  }
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const submitHandler = (event) => {
    const data = {
      title: inputValue.titleChange,
      amount: inputValue.amountChange,
      date: new Date(inputValue.dateChange),
    };
    props.onSaveExpensedata(data);
    setInputValue((prevState) => {
      return {
        ...prevState,
        titleChange: "",
        amountChange: "",
        dateChange: "",
      };
    });
    setOnClick(0);
    event.preventDefault();
  };
  return (
    <form>
      {onClick === 0 && (
        <div>
          <div className="new-add-expense__actions">
            <button type="submit" onClick={handleClick}>
              Add New Expense
            </button>
          </div>
        </div>
      )}
      {onClick === 1 && (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                name="titleChange"
                value={inputValue.titleChange}
                onChange={handleInput}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                name="amountChange"
                min="0.01"
                step="0.01"
                value={inputValue.amountChange}
                onChange={handleInput}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                name="dateChange"
                min="2023-01-01"
                max="2025-12-31"
                value={inputValue.dateChange}
                onChange={handleInput}
              />
            </div>
          </div>
          <div>
            <div className="new-expense__actions">
              <button type="submit" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" onClick={submitHandler}>
                Add Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
