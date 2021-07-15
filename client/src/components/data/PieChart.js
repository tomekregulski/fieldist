import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

class PieRechartComponent extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      pieData: [],
    };
  }

    COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    componentDidMount() {
        console.log(this.props);
        let map = [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
        ];
        this.props.data.map((item) => {
            if (item.value === map[0].id) {
                map[0].value++;
            }
            if (item.value === map[1].id) {
                map[1].value++;
            }
            if (item.value === map[2].id) {
                map[2].value++;
            }
            if (item.value === map[3].id) {
                map[3].value++;
            }
            if (item.value === map[4].id) {
                map[4].value++;
            }
        })
        console.log(map);
        console.log(this.props);
        this.setState({
            pieData: map,
        })
    }

 

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
            <PieChart width={365} height={300} classNmae="col-4">
                <Pie data={this.state.pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
                    {
                        this.state.pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
        )
    };
}

export default PieRechartComponent;