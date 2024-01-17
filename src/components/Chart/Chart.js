import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxValueData = props.dataValue.map((dataValue) => dataValue.value);
  const maxBar = Math.max(...maxValueData);
  return (
    <div className="chart">
      {props.dataValue.map((dataValue) => (
        <ChartBar
          key={dataValue.label}
          value={dataValue.value}
          label={dataValue.label}
          maxValue={maxBar}
        />
      ))}
    </div>
  );
};

export default Chart;
