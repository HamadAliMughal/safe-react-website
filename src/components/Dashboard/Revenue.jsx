import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Yearly Revenue"
      },
      axisX: {
        title: "Profit in USD",
        reversed: true,
      },
      axisY: {
        title: "Months",
        includeZero: true,
        labelFormatter: this.addSymbols
      },
      data: [{
        type: "bar",
        dataPoints: [
          { y:  2200000000, label: "Januaray" },
          { y:  1800000000, label: "Fabuary" },
          { y:  800000000, label: "March" },
          { y:  563000000, label: "April" },
          { y:  376000000, label: "May" },
          { y:  336000000, label: "June" },
          { y:  330000000, label: "July" },
          { y:  800000000, label: "August" },
          { y:  563000000, label: "September" },
          { y:  376000000, label: "October" },
          { y:  336000000, label: "November" },
          { y:  330000000, label: "December" }
        ]
      }]
    };

    return (
      <div>
        <CanvasJSChart options={options} />
        {/* You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods */}
      </div>
    );
  }

  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    if(order > suffixes.length - 1)
      order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
}

export default App;
