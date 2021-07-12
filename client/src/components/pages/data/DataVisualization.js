import React, { useState, useEffect } from "react";
import PieRechartComponent from "../../data/PieChart"
import BarRechartComponent from "../../data/BarChart"
import authHeader from '../../../services/auth-header';

function Data() {
  const [data, setData] = useState([]);

  const salesData = [
        {
            "name": 1,
            "value": 15
        },
        {
            "name": 2,
            "value": 14
        },
        {
            "name": 3,
            "value": 25
        },
        {
            "name": 4,
            "value": 23
        },
        {
            "name": 5,
            "value": 13
        },
        {
            "name": 6,
            "value": 18
        },
    ]

  const interactionsData = [
        {
            "name": 1,
            "value": 60
        },
        {
            "name": 2,
            "value": 65
        },
        {
            "name": 3,
            "value": 80
        },
        {
            "name": 4,
            "value": 45
        },
        {
            "name": 5,
            "value": 50
        },
        {
            "name": 6,
            "value": 40
        },
    ]
  
  const myRequest = 'hello';
  // new Request('/api/demos', {
  //   method: 'GET',
  //   headers: authHeader(),
  //   mode: 'cors',
  //   cache: 'default',
  // });

    useEffect(() => {
      setData('hello');
    // fetch(myRequest)
    //   .then((res) => res.json())
    //   .then((response) => setData(response.map((res) => res)))
    //   .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div>
        <h1>Data Dashboard</h1>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex mt-5">
              <PieRechartComponent data={salesData} />
              <PieRechartComponent data={interactionsData} />
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
