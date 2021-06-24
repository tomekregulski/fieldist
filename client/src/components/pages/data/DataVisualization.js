import React from "react";
import PieRechartComponent from "../../data/PieChart"
import BarRechartComponent from "../../data/BarChart"

function Data() {

  return (
    <div>
        <h1>Data Dashboard</h1>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex mt-5">
              <PieRechartComponent />
              <PieRechartComponent />
            </div>
            <div className="d-flex mt-5">
              <BarRechartComponent />
              <BarRechartComponent />
            </div>
          </div>
    </div>
  );
}

export default Data;
