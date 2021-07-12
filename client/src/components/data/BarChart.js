import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
class BarRechartComponent extends React.Component {

    render() {
    return (
        <ResponsiveContainer width={365} height={300}>
        <BarChart
          width={500}
          height={300}
          data={this.props.data}
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
          <Bar dataKey='value' fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default BarRechartComponent;