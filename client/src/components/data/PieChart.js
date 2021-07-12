import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

class PieRechartComponent extends React.Component {

    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

     CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${this.props.data.name} : ${this.props.data.value}`}</label>
                </div>
            );
        }

        return null;
    };

    render() {
        return (
            // <PieChart width={365} height={300} classNmae="col-4">
            //     <Pie data={this.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
            //         {
            //             this.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
            //         }
            //     </Pie>
            //     <Tooltip content={<this.CustomTooltip />} />
            //     <Legend />
            // </PieChart>
            <PieChart width={365} height={300} classNmae="col-4">
                <Pie data={this.props.data} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        )
    };
}

export default PieRechartComponent;