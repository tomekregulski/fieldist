import React from 'react';
import API from '../../utils/API';
import Table from 'react-bootstrap/Table';
import DemoFilter from './DemoFilter';
import DemoSort from './DemoSort';
import './table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class ScheduleTable extends React.Component {
  state = {
    error: '',
    events: [],
    filteredEvents: [],
    audits: [],
    filteredAudits: [],
  };

  componentDidMount() {
    API.getDemos()
      // .then(res => console.log(res.data.results))
      .then((res) => {
        console.log(res.data);
        this.setState({
          events: res.data,
          filteredEvents: res.data,
        });
      })
      .catch((err) => console.log(err));
    API.getAudits()
      // .then(res => console.log(res.data.results))
      .then((res) => {
        console.log(res.data);
        this.setState({
          audits: res.data,
          filteredAudits: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  filterDemos = (brand) => {
    const filterList = this.state.events.filter(
      (event) => event.campaign.brand.name === brand
    );
    this.setState({ filteredEvents: filterList });
  };

  filterRegions = (region) => {
    const filterList = this.state.events.filter(
      (event) => event.venue.region.name === region
    );
    this.setState({ filteredEvents: filterList });
  };

  resetFilter = () => {
    this.setState({ filteredEvents: this.state.events });
  };

  sortDemosByBrandAz = () => {
    const events = this.state.filteredEvents.sort((a, b) =>
      a.campaign.brand.name > b.campaign.brand.name
        ? 1
        : b.campaign.brand.name > a.campaign.brand.name
          ? -1
          : 0
    );
    this.setState({ filteredEvents: events });
  };

  sortDemosByBrandZa = () => {
    const events = this.state.filteredEvents.sort((a, b) =>
      a.campaign.brand.name > b.campaign.brand.name
        ? 1
        : b.campaign.brand.name > a.campaign.brand.name
          ? -1
          : 0
    );
    this.setState({ filteredEvents: events });
  };

  sortDemosByRegion = () => {
    const demos = this.state.filteredEvents.sort((a, b) =>
      a.venue.region.name > b.venue.region.name
        ? 1
        : b.venue.region.name > a.venue.region.name
          ? -1
          : 0
    );
    this.setState({ filteredEvents: demos });
  };

  sortNameAz = () => {
    const type = 'campaign.brand.name';
    const events = this.state.filteredEvents.sort((a, b) =>
      a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0
    );
    this.setState({ filteredEvents: events });
  };

  sortNameZa = () => {
    const events = this.state.filteredEvents.sort((a, b) =>
      a.campaign.brand.name > b.campaign.brand.name
        ? 1
        : b.campaign.brand.name > a.campaign.brand.name
          ? -1
          : 0
    );
    this.setState({ filteredEvents: events });
  };

  dynamicSortAz = (propName) => {
    // const propName = event.target.name
    console.log(propName);
    // const events = this.state.filteredEvents.sort((a,b)=>(a[propName] > b[propName]) ? 1 : ((b[propName] > a[propName]) ? -1 : 0));
    const events = this.state.filteredEvents.sort((a, b) =>
      a.campaign.brand.name > b.campaign.brand.name
        ? -1
        : b.campaign.brand.name > a.campaign.brand.name
          ? 1
          : 0
    );
    this.setState({ filteredEvents: events });
  };

  f_sort(dataArg, colName) {
    dataArg.sort(function (res01, res02) {
      var arg01 = res01[colName].toLowerCase();
      var arg02 = res02[colName].toLowerCase();
      if (arg01 < arg02) {
        return -1;
      }
      if (arg01 > arg02) {
        return 1;
      }
      return 0;
    });
    return dataArg;
  }

  mapEvents = () =>
    this.state.filteredEvents.length
      ? this.state.filteredEvents.map((event) => (
        <tr key={event.id}>
          <th
            key={event.campaign.brand.name}
            name={event.campaign.brand.name}
          >
            {event.campaign.brand.name}
          </th>
          <th
            key={event.campaign.name}
            value={event.campaign.name}
            name={event.campaign.name}
          >
            {event.campaign.name}
          </th>
          <th key={event.date} value={event.date} name={event.date}>
            {event.date}
          </th>
          <th
            key={event.start_time}
            value={event.start_time}
            name={event.start_time}
          >
            {event.start_time}
          </th>
          <th
            key={event.duration}
            value={event.duration}
            name={event.duration}
          >
            {event.duration}
          </th>
          <th
            key={event.venue.name}
            value={event.venue.name}
            name={event.venue.name}
          >
            {event.venue.name}
          </th>
          <th
            key={event.user.first_name}
            value={event.user.first_name}
            name={event.user.first_name}
          >
            {event.user.first_name} {event.user.last_name}
          </th>
          <th
            key={event.venue.region.name}
            value={event.venue.region.name}
            name={event.venue.region.name}
          >
            {event.venue.region.name}
          </th>
        </tr>
      ))
      : null;

  mapAudits = () =>
    this.state.filteredAudits.length
      ? this.state.filteredAudits.map((audit) => (
        <tr key={audit.id}>
          <th
            value={audit.campaign.brand.name}
            name={audit.campaign.brand.name}
          >
            {audit.campaign.brand.name}
          </th>
          <th value={audit.campaign.name} name={audit.campaign.name}>
            {audit.campaign.name}
          </th>
          <th value={audit.date} name={audit.date}>
            {audit.date}
          </th>
          <th value='-' name='-' style={{ textAlign: 'center' }}>
            -
          </th>
          <th value='-' name='-' style={{ textAlign: 'center' }}>
            -
          </th>
          <th value={audit.venue.name} name={audit.venue.name}>
            {audit.venue.name}
          </th>
          <th value={audit.user.first_name} name={audit.user.first_name}>
            {audit.user.first_name} {audit.user.last_name}
          </th>
          <th value={audit.venue.region.name} name={audit.venue.region.name}>
            {audit.venue.region.name}
          </th>
        </tr>
      ))
      : null;

  render() {
    return (
      <div>
        <div className='d-flex justify-content-end mt-3'></div>
        <Table responsive striped bordered hover className='mt-1'>
          <thead>
            <tr>
              <th key='brand'>
                Brand
                <span className='table-sort'>
                  <FontAwesomeIcon
                    value='campaign.brand.name'
                    onClick={() => this.sortNameAz()}
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
              <th key='campaign'>
                Campaign
                <span className='table-sort'>
                  <FontAwesomeIcon
                    onClick={() => this.sortNameAz()}
                    name='brand'
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
              <th key='date'>
                Date
                <span className='table-sort'>
                  <FontAwesomeIcon
                    onClick={() => this.sortNameAz()}
                    name='brand'
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
              <th key='start_time'>
                Start Time
                <span className='table-sort'>
                  <FontAwesomeIcon
                    onClick={() => this.sortNameAz()}
                    name='brand'
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
              <th key='duration'>
                Duration
                <span className='table-sort'>
                  <FontAwesomeIcon
                    onClick={() => this.sortNameAz()}
                    name='brand'
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
              <th key='venue'>
                Venue
                <span className='table-sort'>
                  <FontAwesomeIcon
                    onClick={() => this.sortNameAz()}
                    name='brand'
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
              <th key='rep'>
                Rep
                <span className='table-sort'>
                  <FontAwesomeIcon
                    onClick={() => this.sortNameAz()}
                    name='brand'
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
              <th key='region'>
                Region
                <span className='table-sort'>
                  <FontAwesomeIcon
                    onClick={() => this.sortNameAz()}
                    name='brand'
                    icon={faChevronUp}
                  />
                  <FontAwesomeIcon
                    onClick={() => this.sortNameZa()}
                    name='brand'
                    icon={faChevronDown}
                  />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.mapEvents()}
            {/* {this.mapAudits()} */}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ScheduleTable;
