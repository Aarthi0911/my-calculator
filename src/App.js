import { useState } from "react";
import "./App.css";
import Expenses from "./ExpenseTracker/Expenses";
import NewExpense from "./NewExpense/NewExpense";
import ExpenseChart from "./ExpenseTracker/ExpenseChart";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
function App() {
  const [initialExpense,setExpense] = useState(expenses)
  const addExpense = (data) =>{
    setExpense((prevState)=>{
      return [data,...prevState]
    })
    console.log(initialExpense)
  }
  return (
    <div>
      <NewExpense onSaveExpenseItem={addExpense}/>
      <Expenses expenses={initialExpense } />
    </div>
  );
}

export default App;
