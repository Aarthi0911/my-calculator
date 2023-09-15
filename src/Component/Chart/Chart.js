import React from "react";
import ChartBar from "./ChartBar";
import "../Chart/Chart.css";
const Chart = (props) => {
    const maxDataPoints = props.dataPoints.map(ele=> ele.value)
    const totalMax = Math.max(...maxDataPoints)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints) => {
        return (
          <ChartBar
            key={dataPoints.label}
            value={dataPoints.value}
            label={dataPoints.label}
            maxValue={totalMax}
          />
        );
      })}
    </div>
  );
};

export default Chart;
