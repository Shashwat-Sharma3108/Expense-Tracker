import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    // console.log(...props.dataPoints.value);
    const maxValueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...maxValueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return(<ChartBar 
            key = {dataPoint.label}
            value = {dataPoint.value}
            maxValue = {totalMax}
            label = {dataPoint.label}
        />)
      })}
    </div>
  );
};

export default Chart;
