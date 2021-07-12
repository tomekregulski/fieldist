import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const reportData = [
        {
            "id": 1,
            "sales": 15,
            "interactions": 60,
            "overall": 4,
            "comments": "This was a great event"
        },
        {
            "id": 2,
            "sales": 14,
            "interactions": 60,
            "overall": 4,
            "comments": "This was a great event"
        },
        {
            "id": 3,
            "sales": 25,
            "interactions": 60,
            "overall": 5,
            "comments": "This was a great event"
        },
        {
            "id": 4,
            "sales": 23,
            "interactions": 60,
            "overall": 5,
            "comments": "This was a great event"
        },
        {
            "id": 5,
            "sales": 13,
            "interactions": 60,
            "overall": 3,
            "comments": "This was a great event"
        },
        {
            "id": 6,
            "sales": 18,
            "interactions": 60,
            "overall": 4,
            "comments": "This was a great event"
        },
    ];

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
    ];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class BarRechartComponent extends React.Component {

    render() {
    return (
        <ResponsiveContainer width={365} height={300}>
        <BarChart
          width={500}
          height={300}
          data={salesData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default BarRechartComponent;