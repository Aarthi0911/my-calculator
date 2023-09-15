import "../ExpenseTracker/ExpenseDate.css";

function ExpenseDate(props) {
  const months = props.expenseDate.toLocaleString("en-US", { month: "long" });
  const year = props.expenseDate.getFullYear();
  const date = props.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{months}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{date}</div>
    </div>
  );
}
export default ExpenseDate;
