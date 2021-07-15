import React, { useState, useEffect } from 'react';
import PieRechartComponent from '../../data/PieChart';
import BarRechartComponent from '../../data/BarChart';
import authHeader from '../../../services/auth-header';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

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
        setData(response);
        setSales(
          response.map((item) => {
            return {
              id: item.id,
              value: item.sales,
            };
          })
        );
        setInteractions(
          response.map((item) => {
            return {
              id: item.id,
              value: item.interactions,
            };
          })
        );
        setOverall(
          response.map((item) => {
            return {
              id: item.id,
              value: item.overall,
            };
          })
        );
        console.log(overall);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container-fluid'>
      <div className='table-header card'>
        <h1 id='data-title'>
          <span className='title-pipe'>|</span>Reports - Numerical Response
          Charts
        </h1>
      </div>
      <div className='charts-container p-3'>
        <div className='row d-flex justify-content-around m-5'>
          <BarRechartComponent className='chart bar-chart' data={sales} />
          <BarRechartComponent
            className='chart bar-chart'
            data={interactions}
          />
          <PieRechartComponent className='chart pie-chart' data={overall} />
        </div>
      </div>
    </div>
  );
}

export default Data;
