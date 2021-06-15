import React from "react";
import API from "../../utils/API";
import Table from "react-bootstrap/Table";
import DemoFilter from "./DemoFilter";
import DemoSort from "./DemoSort";

class ScheduleTable extends React.Component {
    state = {
      error: "",
      demos: []
    };

    componentDidMount() {
        API.getDemos()
        // .then(res => console.log(res.data.results))
        .then(res => {
            console.log( res.data );
            this.setState({ demos: res.data });
        })
        .catch(err => console.log(err)); 
    }

    filterDemos = brand => {
        const demos = this.state.demos.filter( demo => demo.campaign.brand.name === brand);
        this.setState({ demos });
    };

    filterRegions = region => {
        const demos = this.state.demos.filter( demo => demo.venue.region.name === region);
        this.setState({ demos });
    };

    // resetFilter = () => {
    //     this.setState({ demos })
    // }

    sortDemosByBrand = () => {
        const demos = this.state.demos.sort((a,b)=>(a.campaign.brand.name > b.campaign.brand.name) ? 1 : ((b.campaign.brand.name > a.campaign.brand.name) ? -1 : 0));
        this.setState({ demos });
    };

    sortDemosByRegion = () => {
        const demos = this.state.demos.sort((a,b)=>(a.venue.region.name > b.venue.region.name) ? 1 : ((b.venue.region.name > a.venue.region.name) ? -1 : 0));
        this.setState({ demos });
    };

render() {
  return (
      <div>
        <div className="d-flex justify-content-end mt-3">
            <DemoFilter 
                filterDemos={this.filterDemos }
                filterRegions={this.filterRegions }
                // resetFilter={this.resetFilter}
            />
            <DemoSort
                sortDemosByBrand={this.sortDemosByBrand}
                sortDemosByRegion={this.sortDemosByRegion}
            />
        </div>
        <Table responsive striped bordered hover className="mt-1">
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Campaign</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th>Venue</th>
                    <th>Rep</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                {this.state.demos.map( demo => (
                <tr key={demo.id}>
                    <th>{demo.campaign.brand.name}</th>
                    <th>{demo.campaign.name}</th>
                    <th>{demo.date}</th>
                    <th>{demo.start_time}</th>
                    <th>{demo.duration}</th>
                    <th>{demo.venue.name}</th>
                    <th>{demo.user.first_name} {demo.user.last_name}</th>
                    <th>{demo.venue.region.name}</th>
                </tr>
                ))}
            </tbody>
        </Table>
      </div>
    );
  }
}

export default ScheduleTable;