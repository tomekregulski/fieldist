import React, { useState, useEffect } from "react";
// import PieRechartComponent from "../../data/PieChart"
import BarRechartComponent from "../../data/BarChart"
import authHeader from '../../../services/auth-header';

function Data() {
  const [data, setData] = useState([]);
  const [sales, setSales] = useState([]);
  const [interactions, setInteractions] = useState([]);
  const [overall, setOverall] = useState([]);
  
  const myRequest = new Request('/api/reports', {
    method: 'GET',
    headers: authHeader(),
    mode: 'cors',
    cache: 'default',
  });

  useEffect(() => {
    fetch(myRequest)
      .then((res) => res.json())
      .then((response) => {
        setData(response)
        setSales(response.map((item) => { 
        return {
          id: item.id,
          value: item.sales
          }
        }))
        setInteractions(response.map((item) => { 
        return {
          id: item.id,
          value: item.interactions
          }
        }));
        setOverall(response.map((item) => { 
        return {
          id: item.id,
          value: item.overall
          }
        }));
      })
      .catch((err) => console.log(err));
  }, []);

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
