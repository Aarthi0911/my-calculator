import React from "react";
import Chart from "../Component/Chart/Chart";

const chartDataPoint = [
    { value: 0, label: "Jan" },
    { value: 0, label: "Feb" },
    { value: 0, label: "Mar" },
    { value: 0, label: "Apr" },
    { value: 0, label: "May" },
    { value: 0, label: "Jun" },
    { value: 0, label: "Jul" },
    { value: 0, label: "Aug" },
    { value: 0, label: "Sep" },
    { value: 0, label: "Oct" },
    { value: 0, label: "Nov" },
    { value: 0, label: "Dec" },
  ];

const ExpenseChart = (props) => {
    props.expenses.forEach(element => {
        chartDataPoint.forEach(ele=>{
            if(ele.label === element.date.toLocaleString("en-US", { month: "long" }).substring(0, 3)){
                ele.value += element.amount
            }
        })
    });
  return (
    <div>
      <Chart dataPoints={chartDataPoint} />
    </div>
  );
};

export default ExpenseChart;
