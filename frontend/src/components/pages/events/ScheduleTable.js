import React from "react";
import API from "../../utils/API";
import Table from "react-bootstrap/Table";
import DemoFilter from "./DemoFilter";
import DemoSort from "./DemoSort";

class ScheduleTable extends React.Component {
    state = {
      error: "",
      events: [],
      filteredEvents: []
    };

    componentDidMount() {
        API.getDemos()
        // .then(res => console.log(res.data.results))
        .then(res => {
            console.log( res.data );
            this.setState({ 
                events: res.data,
                filteredEvents: res.data
            });
        })
        .catch(err => console.log(err)); 
    }

    filterDemos = brand => {
        const filterList = this.state.events.filter( event => event.campaign.brand.name === brand);
        this.setState({ filteredEvents: filterList });
    };

    filterRegions = region => {
        const filterList = this.state.events.filter( event => event.venue.region.name === region);
        this.setState({ filteredEvents: filterList });
    };

    resetFilter = () => {
        this.setState({ filteredEvents: this.state.events })
    }

    sortDemosByBrand = () => {
        const events = this.state.filteredEvents.sort((a,b)=>(a.campaign.brand.name > b.campaign.brand.name) ? 1 : ((b.campaign.brand.name > a.campaign.brand.name) ? -1 : 0));
        this.setState({ filteredEvents: events });
    };

    sortDemosByRegion = () => {
        const demos = this.state.filteredEvents.sort((a,b)=>(a.venue.region.name > b.venue.region.name) ? 1 : ((b.venue.region.name > a.venue.region.name) ? -1 : 0));
        this.setState({ filteredEvents: demos });
    };

    mapEvents = () => this.state.filteredEvents.length
        ? this.state.filteredEvents.map ( event => (
            <tr key={event.id}>
                    <th>{event.campaign.brand.name}</th>
                    <th>{event.campaign.name}</th>
                    <th>{event.date}</th>
                    <th>{event.start_time}</th>
                    <th>{event.duration}</th>
                    <th>{event.venue.name}</th>
                    <th>{event.user.first_name} {event.user.last_name}</th>
                    <th>{event.venue.region.name}</th>
                </tr>
        ))
        : null

render() {
  return (
      <div>
        <div className="d-flex justify-content-end mt-3">
            <DemoFilter 
                filterDemos={this.filterDemos }
                filterRegions={this.filterRegions }
                resetFilter={this.resetFilter}
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
                { this.mapEvents() }
            </tbody>
        </Table>
      </div>
    );
  }
}

export default ScheduleTable;