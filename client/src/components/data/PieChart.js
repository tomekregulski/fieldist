import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

class PieRechartComponent extends React.Component {

    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    reportData = [
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
    ]

    pieData = [
        {
            "name": "Chrome",
            "value": 68.85
        },
        {
            "name": "Firefox",
            "value": 7.91
        },
        {
            "name": "Edge",
            "value": 6.85
        },
        {
            "name": "Internet Explorer",
            "value": 6.14
        },
        {
            "name": "Others",
            "value": 10.25
        }
    ];

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
                </div>
            );
        }
        return null;
    };

     SalesTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].id} : ${payload[0].sales}`}</label>
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