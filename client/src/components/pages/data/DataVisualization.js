import React, { useState, useEffect } from "react";
// import PieRechartComponent from "../../data/PieChart"
import BarRechartComponent from "../../data/BarChart"
import authHeader from '../../../services/auth-header';

function Data() {
  const [data, setData] = useState([]);
  const [sales, setSales] = useState([]);
  const [interactions, setInteractions] = useState([]);
  const [overall, setOverall] = useState([]);

  const reportData = [
        {
            "id": 1,
            "sales": 15,
            "interactions": 65,
            "overall": 4,
            "comments": "This was a great event"
        },
        {
            "id": 2,
            "sales": 14,
            "interactions": 68,
            "overall": 4,
            "comments": "This was a great event"
        },
        {
            "id": 3,
            "sales": 25,
            "interactions": 80,
            "overall": 5,
            "comments": "This was a great event"
        },
        {
            "id": 4,
            "sales": 23,
            "interactions": 46,
            "overall": 5,
            "comments": "This was a great event"
        },
        {
            "id": 5,
            "sales": 13,
            "interactions": 50,
            "overall": 3,
            "comments": "This was a great event"
        },
        {
            "id": 6,
            "sales": 18,
            "interactions": 40,
            "overall": 4,
            "comments": "This was a great event"
        },
    ];
  
  // const myRequest = new Request('/api/data', {
  //   method: 'GET',
  //   headers: authHeader(),
  //   mode: 'cors',
  //   cache: 'default',
  // });

  useEffect(() => {
    setData(reportData);
    // fetch(myRequest)
    //   .then((res) => res.json())
    //   .then((response) => setData(response.map((res) => res)))
    //   .catch((err) => console.log(err));
    setSales(data.map((item) => { 
    return {
      id: item.id,
      value: item.sales
    };
   }));
    setInteractions(data.map((item) => { 
    return {
      id: item.id,
      value: item.interactions
    };
   }));
    setOverall(data.map((item) => { 
    return {
      id: item.id,
      value: item.overall
    };
   }));
  }, []);

  console.log(sales);
  console.log(interactions);
  console.log(overall);

  return (
    <div>
        <h1>Data Dashboard</h1>
          <div className="d-flex flex-column align-items-center">
            {/* <div className="d-flex mt-5">
              <PieRechartComponent data={salesData} />
              <PieRechartComponent data={interactionsData} />
            </div> */}
            <div className="d-flex mt-5">
              <BarRechartComponent data={sales} />
              <BarRechartComponent data={interactions} />
              <BarRechartComponent data={overall} />
            </div>
          </div>
    </div>
  );
}

export default Data;
